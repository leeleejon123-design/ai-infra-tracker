# AI Infrastructure Tracker Source Backlog

This is the starter research list for turning public information into tracker records.

## Parsed Into The Page

| Source | Type | Parsed Fields |
| --- | --- | --- |
| OpenAI - Five new Stargate sites | Company announcement | U.S. Stargate planned capacity, site regions, partner names, status notes |
| OpenAI - Oracle 4.5 GW partnership | Company announcement | 4.5 GW additional capacity, 5+ GW under development, 2M+ chips, GB200 racks |
| OpenAI - Stargate UAE | Company announcement | Abu Dhabi, 1 GW planned, 200 MW expected live in 2026, partners |
| Amazon - Anthropic strategic collaboration | Company announcement | Up to 5 GW Trainium capacity, nearly 500k Trainium2 Project Rainier chips |
| Microsoft - Fairwater | Company announcement | Wisconsin AI datacenter, broader Fairwater network, hundreds of thousands of chips |
| Meta Engineering - AI infrastructure evolution | Company engineering post | Prometheus 1 GW, Hyperion 5 GW beginning in 2028 |
| CoreWeave - Defining year | Company update | 43 active data centers, 850+ MW active power |
| AIT Community - xAI Colossus | Public tracker / permit trail | Memphis location, 250 MW current, 1 GW planned, 100k H100 original cluster |
| OpenAI / NVIDIA systems partnership | Company announcement | 10 GW NVIDIA systems commitment, Vera Rubin timing, reference-only capacity signal |
| OpenAI / Broadcom custom accelerator collaboration | Company announcement | 10 GW custom accelerator program, Ethernet/Broadcom scaling, reference-only capacity signal |
| AMD / OpenAI strategic partnership | Company announcement | 6 GW AMD Instinct GPU commitment, multi-generation deployment |
| Anthropic / Google / Broadcom TPU partnership | Company announcement / SEC filing | Multiple-GW TPU capacity, approximately 3.5 GW from 2027, reference-only capacity signal |
| Anthropic / Fluidstack American AI infrastructure | Company announcement | $50B U.S. infrastructure plan, Texas/New York sites, 2026 online timeline |
| Google Texas data center investment | Government/company announcement | $40B Texas investment, three new data center campuses |
| CoreWeave Lancaster Pennsylvania data center | Company announcement | Up to $6B commitment, Lancaster AI data center, initial power signal |
| CoreWeave / Meta AI infrastructure agreement | Company announcement | $21B expanded AI infrastructure agreement, reference-only commercial capacity signal |
| Broadcom / Meta MTIA partnership | Company announcement | Multi-GW custom silicon support for Meta MTIA over time |
| Epoch AI - OpenAI Stargate site report | Independent tracker / satellite and permits | Abilene, Shackelford, Dona Ana, Milam, Port Washington, Saline Township, and Lordstown site-level current/projected GW and H100-equivalent estimates |
| NVIDIA - Meta AI infrastructure partnership | Company announcement | Multiyear NVIDIA/Meta partnership, millions of Blackwell and Rubin GPUs, on-prem and cloud AI infrastructure |

## Financial Tracker Sources Parsed Into The Page

| Source | Type | Parsed Fields |
| --- | --- | --- |
| Microsoft FY2025 Annual Report | Annual report | Revenue, operating income, capex, operating cash flow, free cash flow, cash, debt, AI/cloud infrastructure notes |
| Alphabet investor materials / filings | Annual/TTM financials | Revenue, operating income, capex, operating cash flow, free cash flow, cash, debt, TPU/cloud infrastructure notes |
| Amazon annual report / investor materials | Annual/TTM financials | Revenue, operating income, capex, operating cash flow, free cash flow, cash, debt, AWS/Trainium infrastructure notes |
| Meta FY2025 Form 10-K | Annual report | Revenue, operating income, capex including finance leases, operating cash flow, free cash flow, cash, debt, AI infrastructure notes |
| NVIDIA FY2026 results | Earnings release / annual financials | Revenue, operating income, capex, operating cash flow, free cash flow, cash, debt, AI platform notes |
| Broadcom FY2025 results | Earnings release / annual financials | Revenue, operating income, capex, operating cash flow, free cash flow, cash, debt, AI semiconductor notes |
| Oracle investor materials | Annual/forward infrastructure watch | Revenue, operating income, capex, operating cash flow, free cash flow, cash, debt, OCI/Stargate infrastructure notes |
| CoreWeave FY2025 results | Earnings release / annual financials | Revenue, operating loss, capex, free cash flow, cash, debt, backlog and GPU cloud notes |

## Next Sources To Parse

### Tier 1: Direct AI Infrastructure Trackers

| Source | URL | Why It Matters | Parse Priority |
| --- | --- | --- | --- |
| Epoch AI GPU Clusters | https://epoch.ai/data/gpu-clusters | Named AI/GPU clusters with owner, location, chip type, performance, operational timing, and methodology notes. | High |
| Epoch AI Frontier Data Centers | https://epoch.ai/data/data-centers | Site-level AI data center timelines, compute, power capacity, capital cost, permits, and public-document evidence. | High |
| PowerTracker | https://powertracker.io/ | U.S. AI and hyperscaler data centers mapped against electricity, utility, county, housing, and public-context data. | High |
| AI Tech Community data centers | https://www.aitcommunity.org/en/investigations/datacenters | Community-driven site profiles with permits, suppliers, utility info, power source, capacity, and source trails. | Medium |
| US Data Center Map | https://usdatamap.com/ | U.S. operating, proposed, and construction-stage data center map compiled from public filings, press releases, news, and scrapes. | Medium |
| DC Atlas | https://dcatlas.io/ | Global commercial data center database with power capacity, square footage, ownership, status, certifications, and operator views. | Medium |

### Tier 2: Official Grid, Power, And Utility Data

| Source | URL | Why It Matters | Parse Priority |
| --- | --- | --- | --- |
| EIA Open Data API | https://www.eia.gov/opendata/documentation.php | Electricity prices, generation, sales, balancing-authority demand, and power-sector context. | High |
| FERC Data Catalog | https://data.ferc.gov/datacatalog/ | Utility filings, transmission planning, rate cases, and energy-regulatory evidence. | High |
| ERCOT Large Load Integration | https://www.ercot.com/services/rq/large-load-integration | Texas large-load interconnection process and related filings; useful for AI/data-center grid constraints. | High |
| PJM planning and load forecast materials | https://www.pjm.com/planning | Large-load forecasts, transmission plans, Dominion-zone growth, and data-center load impacts. | High |
| MISO large-load workshop materials | https://www.misoenergy.org/engage/stakeholder-feedback/2026/large-load-workshop-considerations-and-outcomes-of-large-load-additions-20260130/ | Regional stakeholder documents on data centers, large loads, and queue mechanics. | Medium |
| CommonGrid | https://www.opengrid.info/ | Utilities, ISOs, balancing authorities, rates, generation, transmission, and territory data. | Medium |
| PUDL | https://catalyst.coop/pudl/ | Open-source cleaned EIA, FERC, EPA, SEC, and other public energy datasets. | Medium |

### Tier 3: Company Filings, Investor Pages, And Supplier Signals

| Source | URL | Why It Matters | Parse Priority |
| --- | --- | --- | --- |
| SEC EDGAR APIs | https://www.sec.gov/edgar/sec-api-documentation | Company filings for capex, leases, cloud commitments, risk language, and material agreements. | High |
| NVIDIA investor relations | https://investor.nvidia.com/ | Data-center revenue, platform transitions, hyperscaler demand, export controls, and supply constraints. | High |
| AMD investor relations | https://ir.amd.com/ | AMD Instinct ramp, data-center segment revenue, and hyperscaler accelerator demand. | Medium |
| Broadcom investor relations / SEC filings | https://investors.broadcom.com/ | Custom AI ASIC, TPU, networking, and long-term hyperscaler supply commitments. | Medium |
| Supermicro investor relations | https://ir.supermicro.com/ | AI server shipments, liquid-cooled rack demand, customer concentration, and delivery delays. | Medium |
| Vertiv investor relations | https://investors.vertiv.com/ | Power/cooling backlog and demand from AI data center buildouts. | Medium |
| Eaton investor relations | https://www.eaton.com/us/en-us/company/investor-relations.html | Electrical equipment, switchgear, transformers, and AI data center power infrastructure demand. | Medium |

### Tier 4: Local Permitting And Community Evidence

| Source Type | Search Pattern | Why It Matters | Parse Priority |
| --- | --- | --- | --- |
| County planning agendas | `"data center" "planning commission" "MW"` | Early site detection, zoning votes, special-use permits, opposition, site size. | High |
| Building permits | `"data center" "building permit" "substation"` | Construction status, square footage, contractor, parcel evidence. | High |
| Utility commission dockets | `"data center" "large load" "rate case" utility commission` | Grid-upgrade costs, power contracts, ratepayer risk, interconnection status. | High |
| Tax incentive agreements | `"data center" "tax abatement" "economic development"` | Operator identity, capex, jobs, site size, construction timeline. | Medium |
| Water and environmental permits | `"data center" "water permit" "air permit" "generator"` | Cooling, backup generation, local environmental constraints. | Medium |

### Tier 5: Market Intelligence To Use Carefully

| Source | URL | Why It Matters | Caveat |
| --- | --- | --- | --- |
| Synergy Research Group | https://www.srgresearch.com/ | Hyperscale capacity and operator trend data. | Often summarized publicly but full data may be paid. |
| CBRE data center reports | https://www.cbre.com/insights | Market-level supply, vacancy, absorption, construction pipeline, power availability. | Usually market-level, not always site-level. |
| Uptime Institute Intelligence | https://intelligence.uptimeinstitute.com/ | Data center power/capacity research and giant-campus trend reports. | Some reports may require signup. |
| Wood Mackenzie | https://www.woodmac.com/ | Grid constraints, power markets, and data-center energy demand. | Often paid; use public summaries carefully. |
| Data Center Dynamics | https://www.datacenterdynamics.com/ | Trade-news tracking for site announcements, operators, suppliers, and power constraints. | News source; verify against filings/permits. |
| Data Center Frontier | https://www.datacenterfrontier.com/ | U.S. data center construction and operator coverage. | News source; verify high-impact numbers. |

## Parsing Rule

Only put a number into the app when the source directly states it or we label it clearly as an estimate. Unknown values should stay `null` so the page shows `N/A`.
