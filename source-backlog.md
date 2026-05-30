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

## Next Sources To Parse

| Source | Why It Matters |
| --- | --- |
| Epoch AI Frontier Data Centers | Best candidate for structured AI data center timelines, compute, power, cost, and permit evidence |
| PowerTracker | U.S. AI and hyperscaler data centers mapped against electricity and economic context |
| SEC EDGAR APIs | Public filings for capex, lease obligations, material agreements, and risk language |
| EIA Open Data API | Electricity prices, generation, sales, and balancing-authority demand |
| FERC Data Catalog | Utility filings, grid upgrades, transmission planning, and rate cases |
| CommonGrid | Utility territories, ISOs, balancing authorities, rates, generation, and transmission context |

## Parsing Rule

Only put a number into the app when the source directly states it or we label it clearly as an estimate. Unknown values should stay `null` so the page shows `N/A`.
