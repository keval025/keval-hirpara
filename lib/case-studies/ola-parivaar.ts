/**
 * Content for "Ola Parivaar — Mobility for India's Non-Drivers".
 * Source of truth: Keval's Notion write-up (linked from the page).
 * Figures marked illustrative are Keval's own estimates, not sourced data.
 */

export const notionUrl =
  'https://app.notion.com/p/Case-Study-Ola-Parivaar-Mobility-for-India-s-Non-Drivers-3ebaed45470881d68115edb9360b4721'

export const context = {
  what: 'Product assignment for the Associate Product Manager (APM) role at Ola Electric, September–October 2026. Individual work.',
  brief:
    'Imagine it is 2035. Ola wants to build a mobility product that 100 million Indians use for their daily commute. It cannot be a scooter or motorcycle. What do you build?',
  deliverable: 'A 4-page product case study (PDF).',
}

export const oneLiner =
  'Ola Parivaar is door-to-door, step-free, tracked shared electric transport for the Indians who can’t or shouldn’t drive themselves — children, teenagers, older people, women on late shifts and people with disabilities — booked and paid for by their family, and run on purpose-built Ola Pods.'

export const tldr = [
  { label: 'Insight', body: 'In India, the person with the transport problem is often not the person travelling. It’s the family member who has to drive them.' },
  { label: 'Target', body: '100M daily riders by 2035, with school commutes providing most of the scale.' },
  { label: 'North Star', body: 'Daily riders who travelled without a family member having to drive them.' },
  { label: 'Why Ola', body: 'A managed fleet of purpose-built vehicles running 18 hours a day plays to a company that makes vehicles, cells and energy storage — not to a ride-hailing app.' },
]

export const approach = [
  { title: 'Diverge', body: '15+ ideas across urban, rural, specific-user and infrastructure plays — metro feeder pods, e-rickshaw upgrades, e-buses-as-a-service, a commute pass.' },
  { title: 'Scale filter', body: 'An owned vehicle can’t reach 100M daily users by 2035, so focus on shared products where one vehicle serves many people a day.' },
  { title: 'Check competition', body: 'First favourite, Ola Link (ride + metro + ride), was crowded: Uber, Rapido, Namma Yatri and Tummoc already integrate metro — and it served the best-served group.' },
  { title: 'Unusual user', body: '“Who is nobody building for?” led to people who can’t drive themselves — and the insight that the rider and the buyer are different people.' },
]

export const approachTakeaway =
  'The biggest decision was to stop polishing a crowded idea and reframe the user. Uniqueness came from the user and the insight, not from a new vehicle.'

export const story = [
  'Meera, 38, works full time in Pune. Before her 9:30 meeting she must arrange three trips, and none of them are hers: her 11-year-old son to school, her 15-year-old daughter to coaching, and her father-in-law, 74, to a heart check-up across town. He can walk, but he can’t climb into an auto.',
  'So she trusts an overcrowded school van, asks a neighbour for a favour, and leaves work early. Two states away, Ramesh, 72, skips a hospital visit because his son in another city can’t take a day off to drive him.',
]

export const storyQuote =
  'Mobility products are built for independent adults with a smartphone and a licence. Hundreds of millions of daily trips in India are made by people who don’t fit that picture, and their families pay with time.'

export const assumptions = {
  columns: ['Assumption', 'Basis', 'Confidence'],
  rows: [
    ['About 23 crore Indians are aged 60+, roughly 15% of the population', 'UNFPA India Ageing Report 2023 projects 22.7 crore by 2036', 'High'],
    ['School enrolment stays near 24 crore students', 'About 24.7 crore enrolled in 2024-25 (UDISE+)', 'High'],
    ['Fewer family members are free to drive dependants', 'Nuclear families, more working women, adult children in other cities', 'Medium'],
    ['Families pay for safety and peace of mind, not just speed', 'Paid school vans already exist nationwide', 'High'],
    ['States tighten rules on unsafe school vans and unregistered e-rickshaws', 'Registration drives already under way', 'Medium'],
    ['Ola Electric makes low-cost LFP cells at scale', 'Gigafactory ramp-up and LFP cell announcement', 'Medium'],
  ],
}

export const jtbd =
  'When someone in my family needs to go somewhere and I can’t take them, help me arrange a ride I trust and tell me when they arrive, so I don’t have to leave work or worry.'

export const segments = {
  columns: ['Rider segment', 'Daily trips', 'Key need', 'Who pays'],
  rows: [
    ['School children (6–13)', 'School and back, every school day', 'Safety, tracking, a familiar driver', 'Parents, sometimes the school'],
    ['Teenagers (14–18)', 'School, coaching, college, sports', 'Independence with parental visibility', 'Parents'],
    ['Older people (60+)', 'Clinic, market, temple, family visits', 'Step-free boarding, help at both ends', 'Adult children, often in another city'],
    ['Women on late shifts', 'Work to home, often after 10 pm', 'Verified driver, doorstep drop', 'Themselves or their employer'],
    ['People with disabilities', 'Work, education, therapy', 'Wheelchair access, trained help', 'Self, family, or government schemes'],
  ],
}

export const personas = [
  { name: 'Meera', age: 38, role: 'Primary buyer', body: 'The family’s transport manager. Works full time and coordinates school runs, coaching and her father-in-law’s clinic visits every week.' },
  { name: 'Ramesh', age: 72, role: 'Rider', body: 'Lives alone in Surat. Needs the hospital twice a week and the temple most mornings. His son books and pays from Pune.' },
]

export const needs = ['Door to door', 'Trusted', 'Step-free', 'Family tracks'] as const

/** y = yes, p = partly / varies, n = no */
export const options: { name: string; marks: ('y' | 'p' | 'n')[]; breaks: string }[] = [
  { name: 'Family member drives', marks: ['y', 'y', 'p', 'y'], breaks: 'Costs a working adult hours every week' },
  { name: 'School van', marks: ['y', 'p', 'n', 'p'], breaks: 'Overcrowded, unregulated drivers' },
  { name: 'Auto or e-rickshaw', marks: ['y', 'p', 'n', 'n'], breaks: 'Hard to climb into, haggling, no tracking' },
  { name: 'Cab app', marks: ['y', 'p', 'n', 'p'], breaks: 'Too costly daily; not built for kids or frail riders' },
  { name: 'Bus or metro', marks: ['n', 'y', 'p', 'n'], breaks: 'Walking, crowding, transfers' },
  { name: 'Ola Parivaar', marks: ['y', 'y', 'y', 'y'], breaks: 'Built for all four' },
]

export const hiddenCost =
  'The hidden cost is family time. Every trip a child or older person can’t make alone is paid for by a working adult — most often a woman — in lost hours, lost income and sometimes a lost job.'

export const whyNow = [
  { value: '22.7 cr', label: 'Indians aged 60+ by 2036 (from 14.9 cr in 2022)' },
  { value: '24%', label: 'of older Indians face restrictions in daily activities' },
  { value: '24.7 cr', label: 'students enrolled in 2024-25 — India’s largest daily commuters' },
  { value: '+279%', label: 'projected growth of the 80+ group, 2022–2050' },
]

export const market = [
  { level: 'TAM', definition: 'All dependent riders: students, 60+, night-shift women, people with disabilities', size: '~50 crore people' },
  { level: 'SAM', definition: 'Urban and Tier-2 India, with a family or institution able to pay', size: '~20 crore people' },
  { level: 'SOM', definition: 'Daily riders on Ola Parivaar by 2035', size: '10 crore (100M) daily' },
]

export const pillars = [
  {
    title: 'Family app',
    for: 'For the buyer',
    items: ['Family profiles with each rider’s needs', 'Book for someone else, one-off or recurring', 'Live tracking, boarded / arrived alerts', 'Safe zones for teens', 'One family wallet or monthly plan'],
  },
  {
    title: 'Ola Pods',
    for: 'For the rider',
    items: ['Enclosed electric pods', 'Low, step-free floor and wide sliding door', 'Child seats, grab rails', 'Cabin camera and SOS', 'Fold-out ramp on the accessible variant'],
  },
  {
    title: 'Saathi drivers',
    for: 'The trust layer',
    items: ['Police-verified', 'Trained in child safety and first aid', 'Trained to assist older riders', 'Same driver on recurring routes', 'Women drivers on request'],
  },
]

export const journey = [
  { title: 'Book', body: 'Parent sets a recurring trip' },
  { title: 'Doorstep pickup', body: 'Rider card or PIN check' },
  { title: 'Tracked ride', body: 'Live location, camera, SOS' },
  { title: 'Handover', body: 'Driver sees the rider into school' },
  { title: 'Arrival alert', body: 'Family is notified' },
]

export const noSmartphone =
  'Riders don’t need a smartphone: they board with a rider card or PIN, and older riders can book by phone call or WhatsApp voice note.'

export const mvpHypothesis =
  'Parents will trust Ola Parivaar enough to replace their current school-run arrangement within one school term.'

export const moscow = [
  { label: 'Must have', items: ['Recurring school bookings', 'Live tracking and alerts', 'Verified same-driver routes', 'SOS', 'Rider card check-in'] },
  { label: 'Should have', items: ['Remote booking for older parents', 'Clinic handover help', 'Monthly family plan'] },
  { label: 'Could have', items: ['Teen safe zones', 'WhatsApp voice booking', 'Employer night plans'] },
  { label: 'Won’t have (yet)', items: ['Wheelchair pods', 'Autonomous driving', 'Vehicle-to-grid income'] },
]

export const alternatives = {
  columns: ['Alternative considered', 'Why it’s attractive', 'Why I didn’t choose it'],
  rows: [
    ['Ola Link: ride + metro + ride', 'Large urban market; strong guarantee feature', 'Crowded (Uber, Rapido, Namma Yatri already integrate metro); serves adults who are already well served'],
    ['Elderly-only service', 'Strongest emotional story', 'Older riders rarely travel daily; can’t reach 100M daily users alone'],
    ['School transport only', 'Huge, predictable daily volume', 'Pods idle 9 am–2 pm and weekends; weak unit economics'],
    ['Features on a regular cab app', 'Fastest to launch', 'Cars aren’t step-free; gig drivers aren’t trained for kids or frail riders'],
    ['Enclosed 2-seater micro-car', 'Safety and weather protection', 'Owned vehicles can’t reach 100M daily users by 2035'],
  ],
}

/** Illustrative fleet utilisation by time block. */
export const utilisation = [
  { block: '7–9 am', riders: 'School children, some commuters', pct: 95 },
  { block: '9 am–1 pm', riders: 'Older people to clinics, markets, temples', pct: 75 },
  { block: '1–4 pm', riders: 'School return runs, coaching', pct: 90 },
  { block: '4–8 pm', riders: 'Teenagers, older people visiting family', pct: 85 },
  { block: '9 pm–1 am', riders: 'Women on late shifts, hospital staff', pct: 65 },
]

export const tradeoff =
  'A broader product is harder to explain than a single-purpose one. The one-liner solves it: “Ola Parivaar moves the people in your family who can’t move themselves.”'

export const whyOla = [
  { title: 'Purpose-built vehicles', body: 'Ola Electric manufactures EVs at scale and can design a step-free, child-safe pod on one shared platform.' },
  { title: 'Cheap, long-life cells', body: 'Ola makes its own cells at its Krishnagiri gigafactory and has announced a lower-cost LFP cell for three-wheelers.' },
  { title: 'Energy for small hubs', body: 'Ola Shakti storage, on the same cell platform, can power charging hubs at schools and housing societies.' },
  { title: 'A household brand', body: 'One families already associate with getting around.' },
]

export const whyNotUber =
  'Their model is independent drivers with their own vehicles. Ola Parivaar needs purpose-built vehicles and trained, dedicated drivers.'

export const moat =
  'Trust: a driver academy, a public safety record and a vehicle designed for dependent riders. These take years to copy.'

export const caveats =
  'Ola Electric is a separate company from Ola cabs, so it builds its own app and driver network. Its service reputation has been criticised, and a trust product can’t afford failures — so the launch is small, school-first and publicly measured.'

/** Path to 100M daily riders (millions, 2035). */
export const pathTo100M = [
  { group: 'School children', base: '~24.7 crore students', share: '~18%', riders: 45 },
  { group: 'Teenagers to coaching and college', base: 'Tens of millions', share: 'Partial overlap', riders: 15 },
  { group: 'Older people', base: '~22.7 crore aged 60+', share: '~7% on a given day', riders: 15 },
  { group: 'Other riders (mid-day capacity)', base: 'Anyone', share: 'Filler', riders: 12 },
  { group: 'Women & shift workers (employer plans)', base: 'Large urban workforce', share: 'Employer contracts', riders: 10 },
  { group: 'People with disabilities', base: 'Millions', share: 'Small share', riders: 3 },
]

export const mustBeTrue = [
  { title: 'Trust beats school vans', body: 'Parents renew after one term, and serious incidents stay near zero.', riskiest: true },
  { title: 'Price is close to a school van or shared auto', body: 'Through pooled runs and all-day utilisation.' },
  { title: 'The driver academy scales', body: 'To hundreds of thousands of trained, verified drivers on salaries, not gig rates.' },
  { title: 'Schools and employers sign contracts', body: 'Lowering CAC and giving predictable demand.' },
  { title: 'Regulation allows it', body: 'An enclosed accessible pod carrying paying passengers, including children.' },
]

/** Illustrative per-pod daily economics. */
export const unitEconomics = {
  tripsPerDay: 120,
  avgFare: 45,
  dailyCost: 2940,
}

export const gtm = [
  { phase: 'Year 1: beachhead', scope: 'School runs with 20–30 private schools in one metro city', gate: 'Zero serious incidents; 70%+ of families renew after one term' },
  { phase: 'Year 2', scope: 'Add mid-day clinic, market and temple trips for older riders', gate: 'Pods busy in at least 4 of 5 daily time blocks' },
  { phase: 'Years 3–4', scope: 'Employer night plans; teen rules and safe zones', gate: 'Driver academy supply keeps pace with demand' },
  { phase: 'Years 5–10', scope: 'Top 10 cities, accessible pods, then Tier-2 cities and school transport tenders', gate: '100M daily riders by 2035' },
]

export const northStar = {
  metric: 'Daily riders who travelled without a family member having to drive them',
  why: 'It measures the real value — family time freed — rather than trips sold.',
}

export const metrics = {
  columns: ['Type', 'Metric', 'What it tells us', 'Target'],
  rows: [
    ['Input', 'Recurring-booking retention at 3 months (cohort)', 'Do families trust it enough to keep using it?', 'Over 70%'],
    ['Input', 'On-time pickup rate', 'Reliability for school bells and appointments', 'Over 95% within 5 min'],
    ['Input', 'Same-driver rate on recurring routes', 'Familiar faces for children and older riders', 'Over 80%'],
    ['Input', 'Pod utilisation across time blocks', 'Does combining segments work?', 'Busy in 4 of 5 blocks'],
    ['Outcome', 'Family hours saved per month', 'Is the core promise real?', '20+ hours per family'],
    ['Guardrail', 'Serious safety incidents per million trips', 'Is it genuinely safe? (published openly)', 'Near zero'],
    ['Guardrail', 'Price vs school van; driver hours', 'Affordability and driver fatigue', '≤ ~1.2x; capped shifts'],
  ],
}

export const decisions = {
  columns: ['Decision', 'Why I chose it', 'What would change my mind'],
  rows: [
    ['Serve all non-drivers, not only the elderly', 'One segment alone lacks daily scale or leaves pods idle', 'If school runs alone could fill pods all day'],
    ['Launch with school runs', 'Daily, recurring demand; parents already pay for school transport', 'If pilot parents won’t switch from vans at a similar price'],
    ['Family is the buyer, not the rider', 'The decision-maker is usually not the traveller', 'If teens or older riders reject being booked for'],
    ['Managed fleet with trained drivers', 'Trust needs familiar, verified drivers', 'If driver costs make daily rides unaffordable'],
    ['Purpose-built accessible pod', 'Step-free and child safety can’t be added to existing vehicles', 'If a modified existing vehicle meets needs at much lower cost'],
  ],
}

export const risks = [
  { risk: 'A serious incident involving a child or older rider', mitigation: 'Strict vetting, cabin cameras, live monitoring, an incident response team, insurance and a published safety record.' },
  { risk: 'Too expensive for daily use', mitigation: 'Pooled school runs, school and employer contracts, monthly plans.' },
  { risk: 'Driver supply', mitigation: 'A driver academy with steady salaries and a women-driver programme.' },
  { risk: 'Riders without smartphones', mitigation: 'Rider cards, phone-call and WhatsApp booking.' },
  { risk: 'Privacy of family and medical data', mitigation: 'Collect only what’s needed, with clear consent.' },
]

export const learned = [
  { title: 'Uniqueness comes from the user, not the vehicle.', body: 'My first ideas were strong but crowded. Reframing around an overlooked user created a clearer, more defensible answer.' },
  { title: 'The payer and the user can be different people.', body: 'Designing for both sides changed the product: remote booking, arrival alerts and a family wallet became core features.' },
  { title: 'Scale has to be reasoned, not claimed.', body: 'Breaking 100M into segments with explicit assumptions made the target testable.' },
]

export const next = [
  'Interview 10–15 parents and adult children of older parents to test the job to be done and willingness to pay.',
  'Map a real school-van route to measure actual cost per child and trip times.',
  'Check which Indian vehicle category an enclosed 4–6 seat accessible pod would fall into.',
  'Design a one-school pilot with clear success criteria.',
]

export const sources = [
  { label: 'UNFPA India Ageing Report 2023, via Money9', href: 'https://www.money9.com/news/analysis/senior-citizens-to-form-15-of-indias-population-in-13-years-20-by-2050-un-120007.html' },
  { label: 'UDISE+ 2024-25 enrolment, via Education for All in India', href: 'https://educationforallinindia.com/school-education-in-india-where-do-we-stand-analysis-of-udiseplus-2024-25-data/' },
  { label: 'Ola Electric LFP cell — Trade Brains', href: 'https://tradebrains.in/ola-electric-unveils-its-new-lfp-battery-cell-that-could-make-evs-cheaper-for-millions/' },
  { label: 'Ola Shakti energy storage — BioEnergy Times', href: 'https://bioenergytimes.com/ola-electric-rolls-out-first-shakti-from-its-gigafactory-powered-by-indigenous-4680-bharat-cells/' },
  { label: 'E-rickshaw registration drives — JMK Research', href: 'https://jmkresearch.com/mandatory-registration-of-all-electric-rickshaws-across-states-in-india/' },
  { label: 'Uber metro ticketing via ONDC — Tribune', href: 'https://www.tribuneindia.com/news/business/delhi-commuters-can-now-buy-metro-tickets-on-uber-app-powered-by-ondc/amp' },
  { label: 'Bengaluru metro tickets on multiple apps via ONDC — Hans India', href: 'https://www.thehansindia.com/bengaluru/bengaluru-metro-tickets-now-bookable-on-9-popular-apps-via-ondc-integration-986523' },
]
