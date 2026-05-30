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
  },
  {
    id: 21,
    company: "OpenAI / Oracle / Crusoe",
    project: "Stargate Abilene",
    location: "Abilene, Texas",
    region: "North America",
    provider: "Crusoe, Oracle",
    chip: "NVIDIA Blackwell / H100-equivalent estimate",
    chipFamily: "NVIDIA",
    accelerators: 1000000,
    powerMw: 1200,
    status: "Active",
    confidence: "Medium",
    includeInTotals: false,
    sourceType: "Independent tracker / satellite and permits",
    sourceUrl: "https://epoch.ai/publications/openai-stargate-where-the-us-sites-stand",
    notes: "Epoch AI estimates Abilene at 0.3 GW current capacity and 1.2 GW projected capacity by Q4 2026, equivalent to about 1.0M H100-equivalents at completion."
  },
  {
    id: 22,
    company: "OpenAI / Oracle / Vantage",
    project: "Stargate Shackelford County",
    location: "Shackelford County, Texas",
    region: "North America",
    provider: "Vantage, Oracle",
    chip: "H100-equivalent estimate",
    chipFamily: "NVIDIA",
    accelerators: 4200000,
    powerMw: 2000,
    status: "Construction",
    confidence: "Medium",
    includeInTotals: false,
    sourceType: "Independent tracker / satellite and permits",
    sourceUrl: "https://epoch.ai/publications/openai-stargate-where-the-us-sites-stand",
    notes: "Epoch AI estimates a 2.0 GW projected Stargate site in Shackelford County with about 4.2M H100-equivalents and Q4 2028 projected completion."
  },
  {
    id: 23,
    company: "OpenAI / Oracle / STACK",
    project: "Project Jupiter / Stargate Dona Ana",
    location: "Dona Ana County, New Mexico",
    region: "North America",
    provider: "STACK Infrastructure, Oracle",
    chip: "H100-equivalent estimate",
    chipFamily: "NVIDIA",
    accelerators: 4600000,
    powerMw: 2200,
    status: "Construction",
    confidence: "Medium",
    includeInTotals: false,
    sourceType: "Independent tracker / satellite and permits",
    sourceUrl: "https://epoch.ai/publications/openai-stargate-where-the-us-sites-stand",
    notes: "Epoch AI estimates the Dona Ana County site at 2.2 GW projected capacity and about 4.6M H100-equivalents, with foundation work underway."
  },
  {
    id: 24,
    company: "OpenAI / SoftBank",
    project: "Stargate Milam County",
    location: "Milam County, Texas",
    region: "North America",
    provider: "SB Energy, SoftBank",
    chip: "H100-equivalent estimate",
    chipFamily: "NVIDIA",
    accelerators: 2500000,
    powerMw: 1200,
    status: "Construction",
    confidence: "Medium",
    includeInTotals: false,
    sourceType: "Independent tracker / satellite and permits",
    sourceUrl: "https://epoch.ai/publications/openai-stargate-where-the-us-sites-stand",
    notes: "Epoch AI estimates Milam County at 1.2 GW projected capacity and about 2.5M H100-equivalents, with SoftBank subsidiary SB Energy building and operating the site."
  },
  {
    id: 25,
    company: "OpenAI / Oracle / Vantage",
    project: "Stargate Port Washington",
    location: "Port Washington, Wisconsin",
    region: "North America",
    provider: "Vantage, Oracle",
    chip: "H100-equivalent estimate",
    chipFamily: "NVIDIA",
    accelerators: 2600000,
    powerMw: 1300,
    status: "Construction",
    confidence: "Medium",
    includeInTotals: false,
    sourceType: "Independent tracker / satellite and permits",
    sourceUrl: "https://epoch.ai/publications/openai-stargate-where-the-us-sites-stand",
    notes: "Epoch AI estimates the Port Washington Lighthouse site at 1.3 GW projected capacity and about 2.6M H100-equivalents, with foundation work visible."
  },
  {
    id: 26,
    company: "OpenAI / Related Digital",
    project: "The Barn / Stargate Saline Township",
    location: "Saline Township, Michigan",
    region: "North America",
    provider: "Related Digital",
    chip: "H100-equivalent estimate",
    chipFamily: "NVIDIA",
    accelerators: 2900000,
    powerMw: 1400,
    status: "Construction",
    confidence: "Medium",
    includeInTotals: false,
    sourceType: "Independent tracker / satellite and permits",
    sourceUrl: "https://epoch.ai/publications/openai-stargate-where-the-us-sites-stand",
    notes: "Epoch AI estimates Saline Township at 1.4 GW projected capacity and about 2.9M H100-equivalents, with DTE Energy providing grid power plus battery storage."
  },
  {
    id: 27,
    company: "OpenAI / SoftBank / Foxconn",
    project: "Stargate Lordstown",
    location: "Lordstown, Ohio",
    region: "North America",
    provider: "SoftBank, Foxconn",
    chip: "H100-equivalent estimate",
    chipFamily: "NVIDIA",
    accelerators: 300000,
    powerMw: 300,
    status: "Planned",
    confidence: "Low",
    includeInTotals: false,
    sourceType: "Independent tracker / satellite and permits",
    sourceUrl: "https://epoch.ai/publications/openai-stargate-where-the-us-sites-stand",
    notes: "Epoch AI estimates Lordstown at less than 0.3 GW projected capacity and less than 0.3M H100-equivalents; the site appears mainly focused on AI server and equipment manufacturing."
  },
  {
    id: 28,
    company: "Meta / NVIDIA",
    project: "Meta NVIDIA infrastructure partnership",
    location: "Meta on-prem and cloud AI infrastructure",
    region: "Global",
    provider: "NVIDIA",
    chip: "NVIDIA Blackwell and Rubin GPUs",
    chipFamily: "NVIDIA",
    accelerators: 2000000,
    powerMw: null,
    status: "Planned",
    confidence: "High",
    includeInTotals: false,
    sourceType: "Company announcement",
    sourceUrl: "https://nvidianews.nvidia.com/news/meta-builds-ai-infrastructure-with-nvidia",
    notes: "NVIDIA says Meta will deploy NVIDIA CPUs and millions of Blackwell and Rubin GPUs across hyperscale data centers optimized for training and inference."
  }
];

const financials = [
  {
    id: "MSFT",
    company: "Microsoft",
    ticker: "MSFT",
    type: "Hyperscaler",
    period: "FY2025",
    revenueB: 281.7,
    operatingIncomeB: 128.5,
    capexB: 64.6,
    operatingCashFlowB: 136.2,
    freeCashFlowB: 71.6,
    cashB: 94.6,
    debtB: 39.9,
    aiSignal: "Azure AI capacity, Fairwater buildout, OpenAI infrastructure exposure",
    debtSignal: "Issued debt for general corporate purposes including capex and repayment.",
    sourceUrl: "https://www.microsoft.com/investor/reports/ar25/index.html",
    notes: "Capex is rising with cloud and AI infrastructure. FY2025 cash from operations was $136.2B; capex starter value uses reported FY2025 capital expenditures."
  },
  {
    id: "GOOGL",
    company: "Alphabet",
    ticker: "GOOGL",
    type: "Hyperscaler",
    period: "FY2025 / TTM",
    revenueB: 406.2,
    operatingIncomeB: 134.5,
    capexB: 91.4,
    operatingCashFlowB: 164.7,
    freeCashFlowB: 73.3,
    cashB: 110.0,
    debtB: 22.0,
    aiSignal: "TPU capacity, Google Cloud AI infrastructure, Texas data center campuses",
    debtSignal: "Low leverage relative to cash generation; capex acceleration is the bigger watch item.",
    sourceUrl: "https://abc.xyz/investor/",
    notes: "Starter values track FY2025/TTM cash flow and infrastructure capex signals from Alphabet filings and investor materials."
  },
  {
    id: "AMZN",
    company: "Amazon",
    ticker: "AMZN",
    type: "Hyperscaler",
    period: "FY2025 / TTM",
    revenueB: 737.3,
    operatingIncomeB: 75.0,
    capexB: 131.8,
    operatingCashFlowB: 139.5,
    freeCashFlowB: 7.7,
    cashB: 101.2,
    debtB: 135.6,
    aiSignal: "AWS data centers, Trainium, Project Rainier, Anthropic capacity",
    debtSignal: "High capital intensity; leases and equipment financing matter as much as traditional debt.",
    sourceUrl: "https://ir.aboutamazon.com/annual-reports-proxies-and-shareholder-letters/default.aspx",
    notes: "Amazon is one of the clearest examples of AI infrastructure capex absorbing most operating cash flow."
  },
  {
    id: "META",
    company: "Meta Platforms",
    ticker: "META",
    type: "AI platform",
    period: "FY2025",
    revenueB: 212.0,
    operatingIncomeB: 101.0,
    capexB: 72.2,
    operatingCashFlowB: 115.8,
    freeCashFlowB: 43.6,
    cashB: 112.0,
    debtB: 49.0,
    aiSignal: "Prometheus, Hyperion, MTIA, NVIDIA Blackwell/Rubin partnership",
    debtSignal: "AI capex is increasingly large enough to influence buybacks and financing choices.",
    sourceUrl: "https://www.sec.gov/Archives/edgar/data/0001326801/000162828026003942/meta-20251231.htm",
    notes: "Meta disclosed FY2025 capital expenditures including finance lease principal payments of $72.22B."
  },
  {
    id: "NVDA",
    company: "NVIDIA",
    ticker: "NVDA",
    type: "Chip supplier",
    period: "FY2026",
    revenueB: 215.9,
    operatingIncomeB: 135.0,
    capexB: 6.0,
    operatingCashFlowB: 102.7,
    freeCashFlowB: 96.7,
    cashB: 60.0,
    debtB: 8.5,
    aiSignal: "Blackwell, Rubin, networking, AI factory platform demand",
    debtSignal: "Supplier economics: huge FCF with low capex relative to hyperscalers.",
    sourceUrl: "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Fourth-Quarter-and-Fiscal-2026/",
    notes: "NVIDIA is the supplier-side contrast: massive AI revenue and cash flow without hyperscaler-style data-center capex."
  },
  {
    id: "AVGO",
    company: "Broadcom",
    ticker: "AVGO",
    type: "Chip supplier",
    period: "FY2025",
    revenueB: 63.0,
    operatingIncomeB: 29.0,
    capexB: 0.8,
    operatingCashFlowB: 27.7,
    freeCashFlowB: 26.9,
    cashB: 9.3,
    debtB: 66.0,
    aiSignal: "Custom AI ASICs, TPU networking, Meta MTIA, OpenAI accelerators",
    debtSignal: "Debt reflects VMware acquisition financing; AI cash flow is a deleveraging engine.",
    sourceUrl: "https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-fourth-quarter-and-fiscal-year-2025",
    notes: "Broadcom reported FY2025 free cash flow of $26.9B and strong AI semiconductor growth."
  },
  {
    id: "ORCL",
    company: "Oracle",
    ticker: "ORCL",
    type: "Cloud infrastructure",
    period: "FY2025 / FY2026 run-rate",
    revenueB: 57.4,
    operatingIncomeB: 18.7,
    capexB: 21.2,
    operatingCashFlowB: 21.5,
    freeCashFlowB: 0.3,
    cashB: 11.0,
    debtB: 91.0,
    aiSignal: "OCI, Stargate, OpenAI capacity, very large cloud lease commitments",
    debtSignal: "Watch debt, leases, and long-term cloud capacity commitments together.",
    sourceUrl: "https://investor.oracle.com/financials/default.aspx",
    notes: "Oracle is a key financing-watch company because OCI growth and Stargate exposure rely on very large infrastructure commitments."
  },
  {
    id: "CRWV",
    company: "CoreWeave",
    ticker: "CRWV",
    type: "GPU cloud",
    period: "FY2025",
    revenueB: 5.1,
    operatingIncomeB: -1.0,
    capexB: 10.2,
    operatingCashFlowB: -0.4,
    freeCashFlowB: -10.6,
    cashB: 2.0,
    debtB: 11.2,
    aiSignal: "GPU cloud footprint, Meta agreement, OpenAI/CoreWeave Stargate exposure",
    debtSignal: "Debt-financed AI cloud buildout; backlog and utilization are central.",
    sourceUrl: "https://investors.coreweave.com/news/news-details/2026/CoreWeave-Reports-Strong-Fourth-Quarter-and-Fiscal-Year-2025-Results/default.aspx",
    notes: "CoreWeave is the pure-play capital-intensity case: rapid revenue growth, huge backlog, and debt-heavy GPU/data-center expansion."
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
  financeCount: document.querySelector("#financeCount"),
  financeType: document.querySelector("#financeTypeFilter"),
  financeRows: document.querySelector("#financeRows"),
  financeDetailTitle: document.querySelector("#financeDetailTitle"),
  financeDetailBody: document.querySelector("#financeDetailBody"),
  capexChart: document.querySelector("#capexChart"),
  balanceChart: document.querySelector("#balanceChart"),
  financeMetrics: {
    revenue: document.querySelector("#metricRevenue"),
    capex: document.querySelector("#metricCapex"),
    fcf: document.querySelector("#metricFcf"),
    netCash: document.querySelector("#metricNetCash")
  },
  sourceGrid: document.querySelector("#sourceGrid"),
  sourceCount: document.querySelector("#sourceCount"),
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
let selectedFinancialId = financials[0].id;

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

function formatBillions(value) {
  if (value === null || value === undefined) return "N/A";
  const sign = value < 0 ? "-" : "";
  return `${sign}$${Math.abs(value).toLocaleString("en-US", { maximumFractionDigits: 1 })}B`;
}

function statusClass(status) {
  return status.toLowerCase().replace(/\s+/g, "-");
}

function confidenceClass(confidence) {
  return `confidence-${confidence.toLowerCase()}`;
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
  fillSelect(els.financeType, [...new Set(financials.map((item) => item.type))].sort(), "company types");
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
          <td>
            <span class="badge ${statusClass(asset.status)}">${asset.status}</span>
            ${asset.includeInTotals === false ? '<span class="mini-flag">Reference</span>' : ""}
          </td>
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

function renderSourceRegister(records) {
  const sources = records.reduce((acc, asset) => {
    const key = asset.sourceUrl;
    if (!acc[key]) {
      acc[key] = {
        url: asset.sourceUrl,
        type: asset.sourceType,
        confidence: asset.confidence,
        records: [],
        included: 0,
        reference: 0
      };
    }

    acc[key].records.push(asset);
    if (asset.includeInTotals === false) {
      acc[key].reference += 1;
    } else {
      acc[key].included += 1;
    }

    return acc;
  }, {});

  const sourceList = Object.values(sources).sort((a, b) => b.records.length - a.records.length);
  els.sourceCount.textContent = `${sourceList.length} sources`;
  els.sourceGrid.innerHTML = sourceList
    .map((source) => {
      const title = new URL(source.url).hostname.replace(/^www\./, "");
      const sampleProjects = source.records
        .slice(0, 3)
        .map((asset) => asset.project)
        .join(", ");

      return `
        <article class="source-card">
          <div class="source-card-head">
            <strong>${title}</strong>
            <span class="confidence-pill ${confidenceClass(source.confidence)}">${source.confidence}</span>
          </div>
          <p>${source.type}</p>
          <div class="source-stats">
            <span>${source.records.length} records</span>
            <span>${source.included} included</span>
            <span>${source.reference} reference</span>
          </div>
          <p class="source-projects">${sampleProjects}</p>
          <a href="${source.url}" target="_blank" rel="noreferrer">Open source</a>
        </article>
      `;
    })
    .join("");
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

function filteredFinancials() {
  return financials.filter((item) => !els.financeType.value || item.type === els.financeType.value);
}

function updateFinanceMetrics(records) {
  const revenue = records.reduce((sum, item) => sum + numeric(item.revenueB), 0);
  const capex = records.reduce((sum, item) => sum + numeric(item.capexB), 0);
  const fcf = records.reduce((sum, item) => sum + numeric(item.freeCashFlowB), 0);
  const netCash = records.reduce((sum, item) => sum + numeric(item.cashB) - numeric(item.debtB), 0);

  els.financeCount.textContent = `${records.length} companies`;
  els.financeMetrics.revenue.textContent = formatBillions(revenue);
  els.financeMetrics.capex.textContent = formatBillions(capex);
  els.financeMetrics.fcf.textContent = formatBillions(fcf);
  els.financeMetrics.netCash.textContent = formatBillions(netCash);
}

function updateFinanceSegmentBars(records) {
  const segments = records.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = {
        revenueB: 0,
        capexB: 0,
        freeCashFlowB: 0,
        debtB: 0
      };
    }

    acc[item.type].revenueB += numeric(item.revenueB);
    acc[item.type].capexB += numeric(item.capexB);
    acc[item.type].freeCashFlowB += numeric(item.freeCashFlowB);
    acc[item.type].debtB += numeric(item.debtB);
    return acc;
  }, {});

  const max = Math.max(...Object.values(segments).map((segment) => segment.capexB), 1);
  return Object.entries(segments)
    .sort((a, b) => b[1].capexB - a[1].capexB)
    .map(
      ([type, segment]) => `
        <div class="segment-row">
          <div>
            <strong>${type}</strong>
            <span>${formatBillions(segment.revenueB)} revenue · ${formatBillions(segment.freeCashFlowB)} FCF · ${formatBillions(segment.debtB)} debt</span>
          </div>
          <div class="segment-track" aria-label="${type} capex">
            <span style="width:${Math.max(4, (segment.capexB / max) * 100)}%"></span>
          </div>
          <b>${formatBillions(segment.capexB)}</b>
        </div>
      `
    )
    .join("");
}

function renderFinanceRows(records) {
  els.financeRows.innerHTML = records
    .map(
      (item) => `
        <tr class="${item.id === selectedFinancialId ? "selected" : ""}" data-finance-id="${item.id}">
          <td><strong>${item.company}</strong><span class="row-subtitle">${item.ticker}</span></td>
          <td><span class="type-pill">${item.type}</span></td>
          <td>${item.period}</td>
          <td>${formatBillions(item.revenueB)}</td>
          <td>${item.aiSignal}</td>
          <td>${formatBillions(item.capexB)}</td>
          <td>${formatBillions(item.freeCashFlowB)}</td>
          <td>${formatBillions(item.debtB)}</td>
        </tr>
      `
    )
    .join("");
}

function renderFinanceDetail(records) {
  const selected = records.find((item) => item.id === selectedFinancialId) || records[0];
  if (!selected) {
    els.financeDetailTitle.textContent = "No matching company";
    els.financeDetailBody.innerHTML = "<p>Choose another company type to see financial records.</p>";
    return;
  }

  selectedFinancialId = selected.id;
  els.financeDetailTitle.textContent = selected.company;
  els.financeDetailBody.innerHTML = `
    <div class="detail-kpis">
      <div><span>Revenue</span><strong>${formatBillions(selected.revenueB)}</strong></div>
      <div><span>Operating income</span><strong>${formatBillions(selected.operatingIncomeB)}</strong></div>
      <div><span>Capex</span><strong>${formatBillions(selected.capexB)}</strong></div>
      <div><span>Free cash flow</span><strong>${formatBillions(selected.freeCashFlowB)}</strong></div>
      <div><span>Cash / investments</span><strong>${formatBillions(selected.cashB)}</strong></div>
      <div><span>Debt / finance obligations</span><strong>${formatBillions(selected.debtB)}</strong></div>
    </div>
    <p>${selected.notes}</p>
    <p><strong>Company type:</strong> ${selected.type}</p>
    <p><strong>AI signal:</strong> ${selected.aiSignal}</p>
    <p><strong>Debt signal:</strong> ${selected.debtSignal}</p>
    <p><a href="${selected.sourceUrl}" target="_blank" rel="noreferrer">Open financial source</a></p>
  `;
}

function drawGroupedBarChart(canvas, records, leftKey, rightKey, leftLabel, rightLabel) {
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const left = 58;
  const right = 22;
  const top = 36;
  const bottom = 58;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const maxValue = Math.max(...records.flatMap((item) => [Math.abs(numeric(item[leftKey])), Math.abs(numeric(item[rightKey]))]), 1);
  const groupWidth = plotWidth / records.length;
  const barWidth = Math.max(10, groupWidth * 0.28);

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#d7ded7";
  ctx.beginPath();
  ctx.moveTo(left, top + plotHeight);
  ctx.lineTo(width - right, top + plotHeight);
  ctx.stroke();

  records.forEach((item, index) => {
    const x = left + index * groupWidth + groupWidth / 2;
    const leftHeight = (Math.abs(numeric(item[leftKey])) / maxValue) * plotHeight;
    const rightHeight = (Math.abs(numeric(item[rightKey])) / maxValue) * plotHeight;
    const baseY = top + plotHeight;

    ctx.fillStyle = "#2662a8";
    ctx.fillRect(x - barWidth - 2, baseY - leftHeight, barWidth, leftHeight);
    ctx.fillStyle = numeric(item[rightKey]) < 0 ? "#b84a4a" : "#1e7a5b";
    ctx.fillRect(x + 2, baseY - rightHeight, barWidth, rightHeight);

    ctx.save();
    ctx.translate(x, height - 16);
    ctx.rotate(-Math.PI / 4);
    ctx.fillStyle = "#607069";
    ctx.font = "700 11px system-ui";
    ctx.fillText(item.ticker, 0, 0);
    ctx.restore();
  });

  ctx.fillStyle = "#2662a8";
  ctx.fillRect(left, 12, 10, 10);
  ctx.fillStyle = "#17201b";
  ctx.font = "700 12px system-ui";
  ctx.fillText(leftLabel, left + 15, 22);
  ctx.fillStyle = "#1e7a5b";
  ctx.fillRect(left + 120, 12, 10, 10);
  ctx.fillStyle = "#17201b";
  ctx.fillText(rightLabel, left + 135, 22);
}

function renderFinancials() {
  const records = filteredFinancials();
  updateFinanceMetrics(records);
  renderFinanceRows(records);
  renderFinanceDetail(records);
  drawGroupedBarChart(els.capexChart, records, "capexB", "freeCashFlowB", "Capex", "Free cash flow");
  drawGroupedBarChart(els.balanceChart, records, "cashB", "debtB", "Cash", "Debt");
  document.querySelector("#financeSegments").innerHTML = updateFinanceSegmentBars(records);
}

function render() {
  const records = filteredAssets();
  updateMetrics(records);
  renderRows(records);
  renderDetail(records);
  renderMap(records);
  drawChart(records);
  renderSourceRegister(records);
  renderFinancials();
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

els.financeType.addEventListener("input", renderFinancials);

els.rows.addEventListener("click", (event) => {
  const row = event.target.closest("tr");
  if (!row) return;
  selectedId = Number(row.dataset.id);
  render();
});

els.financeRows.addEventListener("click", (event) => {
  const row = event.target.closest("tr");
  if (!row) return;
  selectedFinancialId = row.dataset.financeId;
  renderFinancials();
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
