const assets = [
  {
    id: 1,
    company: "OpenAI",
    location: "Texas, USA",
    region: "North America",
    provider: "Microsoft Azure",
    chip: "NVIDIA H100",
    chipFamily: "NVIDIA",
    accelerators: 100000,
    powerMw: 300,
    status: "Active",
    confidence: "Medium",
    notes: "Large-scale training and inference capacity modeled as an Azure-backed deployment.",
    source: "Internal sample record"
  },
  {
    id: 2,
    company: "Anthropic",
    location: "US East",
    region: "North America",
    provider: "AWS",
    chip: "Trainium / NVIDIA",
    chipFamily: "Mixed",
    accelerators: 60000,
    powerMw: 190,
    status: "Active",
    confidence: "Low",
    notes: "Represents a mixed cloud training footprint with expansion capacity.",
    source: "Internal sample record"
  },
  {
    id: 3,
    company: "Google DeepMind",
    location: "Ohio, USA",
    region: "North America",
    provider: "Google Cloud",
    chip: "TPU v5",
    chipFamily: "TPU",
    accelerators: 85000,
    powerMw: 240,
    status: "Construction",
    confidence: "Medium",
    notes: "TPU-oriented regional capacity modeled for training and serving workloads.",
    source: "Internal sample record"
  },
  {
    id: 4,
    company: "Meta",
    location: "Iowa, USA",
    region: "North America",
    provider: "Internal",
    chip: "NVIDIA H100",
    chipFamily: "NVIDIA",
    accelerators: 80000,
    powerMw: 250,
    status: "Active",
    confidence: "Medium",
    notes: "Internal cluster footprint for recommender systems, Llama training, and inference.",
    source: "Internal sample record"
  },
  {
    id: 5,
    company: "xAI",
    location: "Tennessee, USA",
    region: "North America",
    provider: "Internal",
    chip: "NVIDIA H100",
    chipFamily: "NVIDIA",
    accelerators: 50000,
    powerMw: 155,
    status: "Watchlist",
    confidence: "Low",
    notes: "Aggressive buildout scenario with uncertain power and expansion assumptions.",
    source: "Internal sample record"
  },
  {
    id: 6,
    company: "Mistral AI",
    location: "France",
    region: "Europe",
    provider: "European cloud partners",
    chip: "NVIDIA H100",
    chipFamily: "NVIDIA",
    accelerators: 18000,
    powerMw: 68,
    status: "Planned",
    confidence: "Low",
    notes: "European sovereign AI capacity scenario for training and private deployments.",
    source: "Internal sample record"
  },
  {
    id: 7,
    company: "CoreWeave",
    location: "Nordics",
    region: "Europe",
    provider: "CoreWeave",
    chip: "NVIDIA H200",
    chipFamily: "NVIDIA",
    accelerators: 45000,
    powerMw: 140,
    status: "Construction",
    confidence: "Medium",
    notes: "Cloud GPU capacity modeled for enterprise AI workloads in lower-carbon grids.",
    source: "Internal sample record"
  },
  {
    id: 8,
    company: "Oracle Cloud",
    location: "UAE",
    region: "Middle East",
    provider: "OCI",
    chip: "NVIDIA H100",
    chipFamily: "NVIDIA",
    accelerators: 30000,
    powerMw: 95,
    status: "Planned",
    confidence: "Low",
    notes: "Regional sovereign AI capacity scenario for public sector and enterprise demand.",
    source: "Internal sample record"
  },
  {
    id: 9,
    company: "Cohere",
    location: "Canada",
    region: "North America",
    provider: "Cloud partners",
    chip: "NVIDIA A100 / H100",
    chipFamily: "Mixed",
    accelerators: 16000,
    powerMw: 54,
    status: "Active",
    confidence: "Low",
    notes: "Enterprise LLM serving and training footprint modeled across partner clouds.",
    source: "Internal sample record"
  },
  {
    id: 10,
    company: "Sovereign AI Cloud",
    location: "Singapore",
    region: "Asia Pacific",
    provider: "Regional operator",
    chip: "AMD MI300X",
    chipFamily: "AMD",
    accelerators: 22000,
    powerMw: 80,
    status: "Planned",
    confidence: "Low",
    notes: "Non-NVIDIA accelerator scenario for regional model hosting and fine-tuning.",
    source: "Internal sample record"
  }
];

const els = {
  search: document.querySelector("#searchInput"),
  company: document.querySelector("#companyFilter"),
  region: document.querySelector("#regionFilter"),
  status: document.querySelector("#statusFilter"),
  chip: document.querySelector("#chipFilter"),
  rows: document.querySelector("#assetRows"),
  resultCount: document.querySelector("#resultCount"),
  metrics: {
    projects: document.querySelector("#metricProjects"),
    gpus: document.querySelector("#metricGpus"),
    power: document.querySelector("#metricPower"),
    regions: document.querySelector("#metricRegions")
  },
  detailTitle: document.querySelector("#detailTitle"),
  detailBody: document.querySelector("#detailBody"),
  map: document.querySelector("#mapStage"),
  regionCount: document.querySelector("#regionCount"),
  chart: document.querySelector("#chipChart"),
  reset: document.querySelector("#resetFilters"),
  exportCsv: document.querySelector("#exportCsv")
};

const regionPositions = {
  "North America": { x: "24%", y: "42%" },
  Europe: { x: "52%", y: "34%" },
  "Middle East": { x: "61%", y: "51%" },
  "Asia Pacific": { x: "78%", y: "58%" }
};

let selectedId = assets[0].id;

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function statusClass(status) {
  return status.toLowerCase().replace(/\s+/g, "-");
}

function fillSelect(select, values, label) {
  select.innerHTML = [`<option value="">All ${label}</option>`]
    .concat(values.map((value) => `<option value="${value}">${value}</option>`))
    .join("");
}

function setupFilters() {
  fillSelect(els.company, [...new Set(assets.map((asset) => asset.company))].sort(), "companies");
  fillSelect(els.region, [...new Set(assets.map((asset) => asset.region))].sort(), "regions");
  fillSelect(els.status, [...new Set(assets.map((asset) => asset.status))].sort(), "statuses");
  fillSelect(els.chip, [...new Set(assets.map((asset) => asset.chipFamily))].sort(), "chip families");
}

function filteredAssets() {
  const query = els.search.value.trim().toLowerCase();
  return assets.filter((asset) => {
    const haystack = [asset.company, asset.location, asset.provider, asset.chip, asset.region, asset.status]
      .join(" ")
      .toLowerCase();

    return (
      (!query || haystack.includes(query)) &&
      (!els.company.value || asset.company === els.company.value) &&
      (!els.region.value || asset.region === els.region.value) &&
      (!els.status.value || asset.status === els.status.value) &&
      (!els.chip.value || asset.chipFamily === els.chip.value)
    );
  });
}

function updateMetrics(records) {
  const totalAccelerators = records.reduce((sum, asset) => sum + asset.accelerators, 0);
  const totalPower = records.reduce((sum, asset) => sum + asset.powerMw, 0);
  const regions = new Set(records.map((asset) => asset.region));

  els.metrics.projects.textContent = formatNumber(records.length);
  els.metrics.gpus.textContent = formatNumber(totalAccelerators);
  els.metrics.power.textContent = `${formatNumber(totalPower)} MW`;
  els.metrics.regions.textContent = formatNumber(regions.size);
}

function renderRows(records) {
  els.resultCount.textContent = `${records.length} records`;
  els.rows.innerHTML = records
    .map(
      (asset) => `
        <tr class="${asset.id === selectedId ? "selected" : ""}" data-id="${asset.id}">
          <td><strong>${asset.company}</strong></td>
          <td>${asset.location}</td>
          <td>${asset.provider}</td>
          <td>${asset.chip}</td>
          <td>${formatNumber(asset.accelerators)}</td>
          <td>${asset.powerMw} MW</td>
          <td><span class="badge ${statusClass(asset.status)}">${asset.status}</span></td>
        </tr>
      `
    )
    .join("");
}

function renderDetail(records) {
  const selected = records.find((asset) => asset.id === selectedId) || records[0];
  if (!selected) {
    els.detailTitle.textContent = "No matching project";
    els.detailBody.innerHTML = "<p>Try clearing filters or searching for another company.</p>";
    return;
  }

  selectedId = selected.id;
  els.detailTitle.textContent = selected.company;
  els.detailBody.innerHTML = `
    <div class="detail-kpis">
      <div><span>Location</span><strong>${selected.location}</strong></div>
      <div><span>Status</span><strong>${selected.status}</strong></div>
      <div><span>Accelerators</span><strong>${formatNumber(selected.accelerators)}</strong></div>
      <div><span>Power</span><strong>${selected.powerMw} MW</strong></div>
    </div>
    <p>${selected.notes}</p>
    <p><strong>Provider:</strong> ${selected.provider}</p>
    <p><strong>Confidence:</strong> ${selected.confidence}</p>
    <p><strong>Source:</strong> ${selected.source}</p>
  `;
}

function renderMap(records) {
  const totals = records.reduce((acc, asset) => {
    acc[asset.region] = (acc[asset.region] || 0) + asset.accelerators;
    return acc;
  }, {});
  const max = Math.max(...Object.values(totals), 1);
  const regions = Object.entries(totals);

  els.regionCount.textContent = `${regions.length} regions`;
  els.map.innerHTML = regions
    .map(([region, total]) => {
      const pos = regionPositions[region] || { x: "50%", y: "50%" };
      const size = 46 + (total / max) * 92;
      return `
        <div class="region-dot" style="--x:${pos.x};--y:${pos.y};--size:${size}px"><span></span></div>
        <div class="region-label" style="--x:${pos.x};--y:${pos.y}">
          ${region}<br>${formatNumber(total)}
        </div>
      `;
    })
    .join("");
}

function drawChart(records) {
  const canvas = els.chart;
  const ctx = canvas.getContext("2d");
  const totals = records.reduce((acc, asset) => {
    acc[asset.chipFamily] = (acc[asset.chipFamily] || 0) + asset.accelerators;
    return acc;
  }, {});
  const entries = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  const colors = ["#1e7a5b", "#2662a8", "#ba7a20", "#6a5aa7", "#b84a4a"];

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (!entries.length) {
    ctx.fillStyle = "#607069";
    ctx.font = "16px system-ui";
    ctx.fillText("No data for selected filters", 24, 48);
    return;
  }

  const max = Math.max(...entries.map((entry) => entry[1]));
  const left = 120;
  const top = 36;
  const barHeight = 32;
  const gap = 18;
  const chartWidth = canvas.width - left - 48;

  entries.forEach(([label, value], index) => {
    const y = top + index * (barHeight + gap);
    const width = (value / max) * chartWidth;

    ctx.fillStyle = "#607069";
    ctx.font = "700 14px system-ui";
    ctx.fillText(label, 20, y + 22);

    ctx.fillStyle = "#e6ece7";
    ctx.fillRect(left, y, chartWidth, barHeight);

    ctx.fillStyle = colors[index % colors.length];
    ctx.fillRect(left, y, width, barHeight);

    ctx.fillStyle = "#17201b";
    ctx.font = "700 13px system-ui";
    ctx.fillText(formatNumber(value), left + width + 10, y + 22);
  });
}

function render() {
  const records = filteredAssets();
  updateMetrics(records);
  renderRows(records);
  renderDetail(records);
  renderMap(records);
  drawChart(records);
}

function exportCsv() {
  const records = filteredAssets();
  const headers = ["company", "location", "region", "provider", "chip", "accelerators", "powerMw", "status", "confidence", "notes", "source"];
  const csv = [
    headers.join(","),
    ...records.map((asset) =>
      headers
        .map((key) => `"${String(asset[key]).replace(/"/g, '""')}"`)
        .join(",")
    )
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "ai-infrastructure-tracker.csv";
  link.click();
  URL.revokeObjectURL(url);
}

setupFilters();
render();

[els.search, els.company, els.region, els.status, els.chip].forEach((control) => {
  control.addEventListener("input", render);
});

els.rows.addEventListener("click", (event) => {
  const row = event.target.closest("tr");
  if (!row) return;
  selectedId = Number(row.dataset.id);
  render();
});

els.reset.addEventListener("click", () => {
  els.search.value = "";
  els.company.value = "";
  els.region.value = "";
  els.status.value = "";
  els.chip.value = "";
  selectedId = assets[0].id;
  render();
});

els.exportCsv.addEventListener("click", exportCsv);
