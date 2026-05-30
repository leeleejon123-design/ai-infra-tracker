const assets = [
  {
    id: 1,
    company: "OpenAI / Oracle / SoftBank",
    project: "Stargate U.S. platform",
    location: "U.S. multi-site",
    region: "North America",
    provider: "Oracle, SoftBank, CoreWeave",
    chip: "NVIDIA GB200 / mixed",
    chipFamily: "NVIDIA",
    accelerators: 2000000,
    powerMw: 7000,
    status: "Planned",
    confidence: "High",
    sourceType: "Company announcement",
    sourceUrl: "https://openai.com/index/five-new-stargate-sites/",
    notes: "OpenAI says five new U.S. Stargate sites, Abilene, and CoreWeave projects bring Stargate to nearly 7 GW of planned capacity and more than $400B in investment over three years."
  },
  {
    id: 2,
    company: "OpenAI / Oracle",
    project: "Stargate Oracle expansion",
    location: "United States",
    region: "North America",
    provider: "Oracle Cloud Infrastructure",
    chip: "NVIDIA GB200",
    chipFamily: "NVIDIA",
    accelerators: 2000000,
    powerMw: 5000,
    status: "Construction",
    confidence: "High",
    includeInTotals: false,
    sourceType: "Company announcement",
    sourceUrl: "https://openai.com/index/stargate-advances-with-partnership-with-oracle/",
    notes: "OpenAI says the Oracle partnership adds 4.5 GW of Stargate capacity; together with Abilene, Stargate exceeds 5 GW under development and will run over 2 million chips."
  },
  {
    id: 3,
    company: "OpenAI / G42 / Oracle",
    project: "Stargate UAE",
    location: "Abu Dhabi, UAE",
    region: "Middle East",
    provider: "G42, Oracle, NVIDIA, Cisco, SoftBank",
    chip: "NVIDIA / undisclosed",
    chipFamily: "NVIDIA",
    accelerators: null,
    powerMw: 1000,
    status: "Planned",
    confidence: "High",
    sourceType: "Company announcement",
    sourceUrl: "https://openai.com/index/introducing-stargate-uae/",
    notes: "OpenAI announced a 1 GW Stargate UAE cluster in Abu Dhabi, with 200 MW expected to go live in 2026."
  },
  {
    id: 4,
    company: "Anthropic / AWS",
    project: "Project Rainier and Trainium capacity",
    location: "AWS global / U.S. cluster",
    region: "North America",
    provider: "Amazon Web Services",
    chip: "AWS Trainium2-4",
    chipFamily: "Trainium",
    accelerators: 500000,
    powerMw: 5000,
    status: "Active",
    confidence: "High",
    sourceType: "Company announcement",
    sourceUrl: "https://www.aboutamazon.com/news/company-news/amazon-invests-additional-5-billion-anthropic-ai",
    notes: "Amazon says Anthropic will secure up to 5 GW of Trainium capacity; Project Rainier launched with nearly half a million Trainium2 chips."
  },
  {
    id: 5,
    company: "Microsoft",
    project: "Fairwater AI datacenter network",
    location: "Mount Pleasant, Wisconsin",
    region: "North America",
    provider: "Microsoft Azure",
    chip: "Cutting-edge AI chips",
    chipFamily: "Mixed",
    accelerators: null,
    powerMw: null,
    status: "Construction",
    confidence: "High",
    includeInTotals: false,
    sourceType: "Company announcement",
    sourceUrl: "https://blogs.microsoft.com/blog/2025/09/18/inside-the-worlds-most-powerful-ai-datacenter/",
    notes: "Microsoft introduced Fairwater in Wisconsin as its largest AI factory, with additional identical Fairwater datacenters under construction and hundreds of thousands of cutting-edge AI chips across the network."
  },
  {
    id: 6,
    company: "Meta",
    project: "Prometheus",
    location: "United States",
    region: "North America",
    provider: "Internal",
    chip: "Undisclosed",
    chipFamily: "Mixed",
    accelerators: null,
    powerMw: 1000,
    status: "Construction",
    confidence: "High",
    sourceType: "Company engineering post",
    sourceUrl: "https://engineering.fb.com/2025/09/29/data-infrastructure/metas-infrastructure-evolution-and-the-advent-of-ai/",
    notes: "Meta says Prometheus, its 1 GW AI cluster, is underway."
  },
  {
    id: 7,
    company: "Meta",
    project: "Hyperion",
    location: "United States",
    region: "North America",
    provider: "Internal",
    chip: "Undisclosed",
    chipFamily: "Mixed",
    accelerators: null,
    powerMw: 5000,
    status: "Planned",
    confidence: "High",
    sourceType: "Company engineering post",
    sourceUrl: "https://engineering.fb.com/2025/09/29/data-infrastructure/metas-infrastructure-evolution-and-the-advent-of-ai/",
    notes: "Meta says Hyperion is expected to come online beginning in 2028 and can scale to 5 GW once complete."
  },
  {
    id: 8,
    company: "xAI",
    project: "Colossus",
    location: "Memphis, Tennessee",
    region: "North America",
    provider: "Internal",
    chip: "NVIDIA H100 / H200 / GB200",
    chipFamily: "NVIDIA",
    accelerators: 100000,
    powerMw: 250,
    status: "Active",
    confidence: "Medium",
    sourceType: "Public tracker / permit trail",
    sourceUrl: "https://www.aitcommunity.org/en/investigations/datacenters/xai-colossus-memphis",
    notes: "AIT Community lists Colossus as operational at 250 MW current capacity, 1,000 MW planned capacity, originally 100k H100s and expanding toward 1M GPUs."
  },
  {
    id: 9,
    company: "CoreWeave",
    project: "AI-native cloud footprint",
    location: "North America and Europe",
    region: "Europe",
    provider: "CoreWeave",
    chip: "NVIDIA GPUs",
    chipFamily: "NVIDIA",
    accelerators: null,
    powerMw: 850,
    status: "Active",
    confidence: "High",
    sourceType: "Company update",
    sourceUrl: "https://www.coreweave.com/blog/a-defining-year-for-the-essential-cloud-for-ai",
    notes: "CoreWeave says 2025 ended with 43 active data centers and more than 850 MW of active power."
  },
  {
    id: 10,
    company: "OpenAI / SoftBank",
    project: "Lordstown and Milam County Stargate sites",
    location: "Ohio and Texas",
    region: "North America",
    provider: "SoftBank, SB Energy",
    chip: "Undisclosed",
    chipFamily: "Mixed",
    accelerators: null,
    powerMw: 1500,
    status: "Construction",
    confidence: "High",
    sourceType: "Company announcement",
    sourceUrl: "https://openai.com/index/five-new-stargate-sites/",
    notes: "OpenAI says the two SoftBank/OpenAI sites, one in Lordstown, Ohio and one in Milam County, Texas, can scale to 1.5 GW over 18 months."
  },
  {
    id: 11,
    company: "OpenAI / Oracle",
    project: "Shackelford, Dona Ana, Midwest sites",
    location: "Texas, New Mexico, Midwest U.S.",
    region: "North America",
    provider: "Oracle Cloud Infrastructure",
    chip: "Undisclosed",
    chipFamily: "Mixed",
    accelerators: null,
    powerMw: 5500,
    status: "Planned",
    confidence: "High",
    includeInTotals: false,
    sourceType: "Company announcement",
    sourceUrl: "https://openai.com/index/five-new-stargate-sites/",
    notes: "OpenAI says the Oracle-developed sites plus a potential 600 MW expansion near Abilene can deliver over 5.5 GW of capacity."
  },
  {
    id: 12,
    company: "OpenAI / NVIDIA",
    project: "NVIDIA systems partnership",
    location: "OpenAI facilities and partner data centers",
    region: "Global",
    provider: "NVIDIA",
    chip: "NVIDIA Vera Rubin systems",
    chipFamily: "NVIDIA",
    accelerators: null,
    powerMw: 10000,
    status: "Planned",
    confidence: "High",
    includeInTotals: false,
    sourceType: "Company announcement",
    sourceUrl: "https://openai.com/index/openai-nvidia-systems-partnership/",
    notes: "OpenAI and NVIDIA announced a letter of intent to deploy at least 10 GW of NVIDIA systems for OpenAI's next-generation AI infrastructure, with the first GW planned for the second half of 2026 on Vera Rubin."
  },
  {
    id: 13,
    company: "OpenAI / Broadcom",
    project: "OpenAI-designed accelerator program",
    location: "OpenAI facilities and partner data centers",
    region: "Global",
    provider: "Broadcom",
    chip: "OpenAI-designed custom accelerators",
    chipFamily: "Custom ASIC",
    accelerators: null,
    powerMw: 10000,
    status: "Planned",
    confidence: "High",
    includeInTotals: false,
    sourceType: "Company announcement",
    sourceUrl: "https://openai.com/index/openai-and-broadcom-announce-strategic-collaboration/",
    notes: "OpenAI and Broadcom announced a collaboration for 10 GW of custom AI accelerators, scaled with Ethernet and Broadcom connectivity across OpenAI facilities and partner data centers."
  },
  {
    id: 14,
    company: "OpenAI / AMD",
    project: "AMD Instinct GPU deployment",
    location: "OpenAI infrastructure",
    region: "Global",
    provider: "AMD",
    chip: "AMD Instinct GPUs",
    chipFamily: "AMD",
    accelerators: null,
    powerMw: 6000,
    status: "Planned",
    confidence: "High",
    includeInTotals: false,
    sourceType: "Company announcement",
    sourceUrl: "https://ir.amd.com/news-events/press-releases/detail/1260/amd-and-openai-announce-strategic-partnership-to-deploy-6-gigawatts-of-amd-gpus",
    notes: "AMD and OpenAI announced a 6 GW agreement across multiple generations of AMD Instinct GPUs for OpenAI's next-generation AI infrastructure."
  },
  {
    id: 15,
    company: "Anthropic / Google / Broadcom",
    project: "Next-generation TPU capacity",
    location: "Google TPU infrastructure",
    region: "Global",
    provider: "Google, Broadcom",
    chip: "Google TPU",
    chipFamily: "TPU",
    accelerators: null,
    powerMw: 3500,
    status: "Planned",
    confidence: "High",
    includeInTotals: false,
    sourceType: "Company announcement / SEC filing",
    sourceUrl: "https://www.anthropic.com/news/google-broadcom-partnership-compute",
    notes: "Anthropic says it signed a Google/Broadcom agreement for multiple gigawatts of next-generation TPU capacity starting in 2027; Broadcom's filing describes approximately 3.5 GW."
  },
  {
    id: 16,
    company: "Anthropic / Fluidstack",
    project: "American AI infrastructure buildout",
    location: "Texas and New York",
    region: "North America",
    provider: "Fluidstack",
    chip: "Undisclosed",
    chipFamily: "Mixed",
    accelerators: null,
    powerMw: null,
    status: "Construction",
    confidence: "High",
    includeInTotals: false,
    sourceType: "Company announcement",
    sourceUrl: "https://www.anthropic.com/news/anthropic-invests-50-billion-in-american-ai-infrastructure",
    notes: "Anthropic announced a $50B investment in American computing infrastructure with Fluidstack, building data centers in Texas and New York with more sites to come and sites coming online through 2026."
  },
  {
    id: 17,
    company: "Google",
    project: "Texas AI data center campuses",
    location: "Texas",
    region: "North America",
    provider: "Google",
    chip: "TPU / mixed",
    chipFamily: "TPU",
    accelerators: null,
    powerMw: null,
    status: "Planned",
    confidence: "Medium",
    includeInTotals: false,
    sourceType: "Government/company announcement",
    sourceUrl: "https://gov.texas.gov/news/post/governor-abbott-google-announce-40-billion-investment-in-texas",
    notes: "Texas announced Google's $40B investment in Texas, including three new data center campuses intended to power AI innovation."
  },
  {
    id: 18,
    company: "CoreWeave",
    project: "Lancaster AI data center",
    location: "Lancaster, Pennsylvania",
    region: "North America",
    provider: "CoreWeave",
    chip: "NVIDIA GPUs",
    chipFamily: "NVIDIA",
    accelerators: null,
    powerMw: 100,
    status: "Planned",
    confidence: "High",
    sourceType: "Company announcement",
    sourceUrl: "https://investors.coreweave.com/news/news-details/2025/CoreWeave-Announces-Multi-Billion-Dollar-Commitment-to-AI-Infrastructure-in-Pennsylvania/default.aspx",
    notes: "CoreWeave announced intent to commit up to $6B to equip a new AI data center in Lancaster County, Pennsylvania; reporting around the announcement described an initial 100 MW facility with expansion potential."
  },
  {
    id: 19,
    company: "CoreWeave / Meta",
    project: "Expanded AI infrastructure agreement",
    location: "Multiple CoreWeave locations",
    region: "Global",
    provider: "CoreWeave",
    chip: "NVIDIA GPUs",
    chipFamily: "NVIDIA",
    accelerators: null,
    powerMw: null,
    status: "Planned",
    confidence: "High",
    includeInTotals: false,
    sourceType: "Company announcement",
    sourceUrl: "https://investors.coreweave.com/news/news-details/2026/CoreWeave-and-Meta-Announce-21-Billion-Expanded-AI-Infrastructure-Agreement/default.aspx",
    notes: "CoreWeave and Meta announced a $21B expanded AI infrastructure agreement. This is tracked as a commercial capacity signal, not a site-level power record."
  },
  {
    id: 20,
    company: "Broadcom / Meta",
    project: "MTIA custom silicon partnership",
    location: "Meta AI infrastructure",
    region: "Global",
    provider: "Broadcom",
    chip: "Meta MTIA custom silicon",
    chipFamily: "Custom ASIC",
    accelerators: null,
    powerMw: null,
    status: "Planned",
    confidence: "High",
    includeInTotals: false,
    sourceType: "Company announcement",
    sourceUrl: "https://investors.broadcom.com/node/64236/pdf",
    notes: "Broadcom announced an extended partnership with Meta to deploy technology supporting multi-gigawatts of Meta's custom MTIA silicon over time."
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

function numeric(value) {
  return Number.isFinite(value) ? value : 0;
}

function formatNumber(value) {
  if (value === null || value === undefined) return "N/A";
  return new Intl.NumberFormat("en-US").format(value);
}

function formatPower(value) {
  return value === null || value === undefined ? "N/A" : `${formatNumber(value)} MW`;
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
    const haystack = [asset.company, asset.project, asset.location, asset.provider, asset.chip, asset.region, asset.status]
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
  const totalRecords = records.filter((asset) => asset.includeInTotals !== false);
  const totalAccelerators = totalRecords.reduce((sum, asset) => sum + numeric(asset.accelerators), 0);
  const totalPower = totalRecords.reduce((sum, asset) => sum + numeric(asset.powerMw), 0);
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
          <td><strong>${asset.company}</strong><span class="row-subtitle">${asset.project}</span></td>
          <td>${asset.location}</td>
          <td>${asset.provider}</td>
          <td>${asset.chip}</td>
          <td>${formatNumber(asset.accelerators)}</td>
          <td>${formatPower(asset.powerMw)}</td>
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
      <div><span>Project</span><strong>${selected.project}</strong></div>
      <div><span>Status</span><strong>${selected.status}</strong></div>
      <div><span>Accelerators</span><strong>${formatNumber(selected.accelerators)}</strong></div>
      <div><span>Power</span><strong>${formatPower(selected.powerMw)}</strong></div>
    </div>
    <p>${selected.notes}</p>
    <p><strong>Location:</strong> ${selected.location}</p>
    <p><strong>Provider:</strong> ${selected.provider}</p>
    <p><strong>Confidence:</strong> ${selected.confidence}</p>
    <p><strong>Dashboard totals:</strong> ${selected.includeInTotals === false ? "Reference only" : "Included"}</p>
    <p><strong>Source type:</strong> ${selected.sourceType}</p>
    <p><a href="${selected.sourceUrl}" target="_blank" rel="noreferrer">Open source record</a></p>
  `;
}

function renderMap(records) {
  const totals = records.reduce((acc, asset) => {
    if (asset.includeInTotals === false) return acc;
    acc[asset.region] = (acc[asset.region] || 0) + numeric(asset.powerMw);
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
          ${region}<br>${formatNumber(total)} MW
        </div>
      `;
    })
    .join("");
}

function drawChart(records) {
  const canvas = els.chart;
  const ctx = canvas.getContext("2d");
  const totals = records.reduce((acc, asset) => {
    if (asset.includeInTotals === false) return acc;
    acc[asset.chipFamily] = (acc[asset.chipFamily] || 0) + numeric(asset.accelerators);
    return acc;
  }, {});
  const entries = Object.entries(totals)
    .filter((entry) => entry[1] > 0)
    .sort((a, b) => b[1] - a[1]);
  const colors = ["#1e7a5b", "#2662a8", "#ba7a20", "#6a5aa7", "#b84a4a"];

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (!entries.length) {
    ctx.fillStyle = "#607069";
    ctx.font = "16px system-ui";
    ctx.fillText("No accelerator counts for selected filters", 24, 48);
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
  const headers = ["company", "project", "location", "region", "provider", "chip", "accelerators", "powerMw", "status", "confidence", "sourceType", "sourceUrl", "notes"];
  const csv = [
    headers.join(","),
    ...records.map((asset) =>
      headers
        .map((key) => `"${String(asset[key] ?? "").replace(/"/g, '""')}"`)
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
