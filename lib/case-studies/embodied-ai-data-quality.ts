/**
 * Content for "Reducing Unusable Recordings in Embodied AI Data Collection".
 * Source of truth: Keval's Notion write-up (linked from the page).
 * Program figures (hours, costs, failure shares) are illustrative assumptions.
 */

export const notionUrl =
  'https://app.notion.com/p/Case-Study-Reducing-Unusable-Recordings-in-Embodied-AI-Data-Collection-3e6aed45470881909155c902b754360d'

export const disclaimer =
  'All figures are illustrative assumptions for a mid-sized wearable-kit program unless marked otherwise.'

export const headline =
  'Moving quality checks from the data center to the collection site can lift usable yield from 68% to 85% and save roughly $8,000 a month in wasted collection cost.'

export const summary = [
  { label: 'Problem', body: 'About 1 in 3 recorded hours is unusable, and failures surface ~18 days after recording.' },
  { label: 'North star', body: 'Usable yield = usable hours ÷ recorded hours.' },
  { label: 'Key insight', body: 'The cost of a failure depends on how late it is detected, not just on how often it happens.' },
  { label: 'Solution (MVP)', body: 'Automated pre-session check + on-site exit validation + offload integrity gate.' },
  { label: 'Target', body: 'Usable yield 68% → 85% in one quarter, with setup time up by no more than 3 minutes.' },
  { label: 'Role shown', body: 'Problem framing, metric design, root cause analysis, prioritization, experiment design.' },
]

export const context = [
  {
    title: 'Physical AI runs on real-world data',
    body: 'BCG defines physical AI as AI that perceives, reasons and acts in the real world through robots, machines and vehicles — embodied AI is the narrower idea of an agent with a body.',
  },
  {
    title: 'The market is moving fast',
    body: 'Cisco cites growth from $1.5B in 2024 to over $15B by 2032, and lists data collection and training as the first stage of the sense-plan-act loop.',
  },
  {
    title: 'Simulation alone isn’t enough',
    body: 'The sim-to-real gap — real friction, lighting and sensor noise — is why companies still pay humans to record real tasks.',
  },
  {
    title: 'Quality is the bottleneck, not volume',
    body: 'EY tells leaders to treat data as the fuel for autonomy: structured, synchronized and high quality.',
  },
]

export const collectionMethods = {
  columns: ['Collection method', 'Well-known example', 'Typical failure'],
  rows: [
    ['Egocentric video', 'Ego4D, Ego-Exo4D', 'Hands out of frame, motion blur'],
    ['Wearable multimodal kit', 'This case study’s setting', 'Camera–IMU sync drift, dead sensors'],
    ['Teleoperation', 'ALOHA, DROID', 'Failed or jerky demonstrations'],
    ['Handheld gripper', 'UMI', 'Camera tracking loss, lens calibration'],
    ['Pooled robot data', 'Open X-Embodiment', 'Inconsistent formats, missing metadata'],
  ],
}

export const pipeline = [
  'Collector records (wearable kit)',
  'Drive staging at site',
  'Ship drives to data center',
  'Upload to S3',
  'QA review',
]

export const setting =
  'A program of 40 collectors records household and workplace tasks with a head camera, wrist cameras and IMUs — about 1,200 hours a month.'

export const problemStatement =
  '32% of recorded hours are discarded at QA. By then the collector has left the site, the task setup is gone, and the only fix is a full re-record.'

export const costPerHour = [
  { item: 'Collector pay and travel', usd: 18 },
  { item: 'Kit wear and amortization', usd: 6 },
  { item: 'Drives and shipping', usd: 5 },
  { item: 'Upload and storage', usd: 3 },
  { item: 'QA review time', usd: 8 },
]

export const stakeholders = [
  {
    who: 'Field collector',
    primary: true,
    wants: 'Finish sessions quickly, get paid',
    pain: 'No idea a session failed until told weeks later',
    tension: 'Any added check slows them down',
  },
  {
    who: 'Field ops lead',
    wants: 'High throughput, low re-records',
    pain: 'Can’t see quality per collector in real time',
    tension: 'Pushes volume over quality',
  },
  {
    who: 'Offload / data ops manager',
    wants: 'Clean, complete drives moving on schedule',
    pain: 'Corrupt or incomplete copies found only after upload',
    tension: 'Wants gates, which add steps',
  },
  {
    who: 'QA and annotation team',
    wants: 'Footage worth labeling',
    pain: 'Hours spent reviewing footage that gets discarded',
    tension: 'Wants stricter rules',
  },
  {
    who: 'ML researchers (customer)',
    wants: 'Synchronized, consistent, diverse data',
    pain: 'Delivery delays and hidden sync errors in training data',
    tension: 'Wants quality and speed',
  },
]

export const designGoal = 'Catch failures early without making the collector’s day slower.'

export const northStarWhy = [
  { q: 'Why not total hours collected?', a: 'It rewards volume, including broken footage.' },
  { q: 'Why not QA pass rate alone?', a: 'It ignores partial loss inside sessions that pass.' },
]

export const metricTree = {
  root: 'Usable yield',
  branches: [
    {
      label: 'Whole-session failures',
      leaves: ['Hardware — dead sensor, battery', 'Sync — camera–IMU drift', 'Data integrity — corrupt or incomplete copy'],
    },
    {
      label: 'Partial loss in passing sessions',
      leaves: ['Capture quality — framing, blur, occlusion', 'Protocol — wrong task, missing metadata'],
    },
  ],
}

export const metrics = {
  columns: ['Metric', 'Type', 'Baseline', 'Target'],
  rows: [
    ['Usable yield', 'North star', '68%', '85%'],
    ['Detection latency (record → verdict)', 'Driver', '~18 days', 'Under 15 min for most failures'],
    ['Re-records completed on site', 'Driver', '~0%', '60% of detected failures'],
    ['Session setup time', 'Guardrail', '8 min', 'No more than +3 min'],
    ['Sessions per collector per day', 'Guardrail', '5', 'No drop'],
    ['False block rate (good session flagged)', 'Guardrail', 'n/a (new)', 'Under 5%'],
  ],
}

export const rcaMethod =
  'Audit 200 discarded sessions from the last quarter, tag each with one primary cause, and weight by hours lost. Then interview 8 collectors and 3 QA reviewers to learn why each cause happens.'

export const rootCauses = [
  { cause: 'Camera–IMU sync drift', share: 28, example: 'Clocks drift apart after a warm restart', onSite: 'Yes, in seconds' },
  { cause: 'Hardware faults', share: 24, example: 'Wrist camera cable loose, battery dies mid-task', onSite: 'Yes, in seconds' },
  { cause: 'Framing & capture quality', share: 18, example: 'Hands leave frame, camera tilted, low light', onSite: 'Partly, with a preview' },
  { cause: 'Protocol errors', share: 12, example: 'Wrong task recorded, metadata missing', onSite: 'Partly, with a checklist' },
  { cause: 'Data integrity', share: 10, example: 'Incomplete copy to drive, corrupt file', onSite: 'Yes, at offload' },
  { cause: 'Other', share: 8, example: 'Privacy blur needed, subject withdrew', onSite: 'No' },
]

export const interviewInsight =
  'Collectors skip manual checks when rushed, and nobody tells them which of their sessions failed. The problem is partly tooling and partly a missing feedback loop.'

export const latency = [
  { when: 'Before recording starts', cost: '~1 minute of setup', fix: 'Yes — fix and start', level: 1 },
  { when: 'During the session', cost: 'A few minutes of footage', fix: 'Yes — pause and fix', level: 2 },
  { when: 'Right after, on site', cost: 'One re-take while setup is still in place', fix: 'Yes — re-record now', level: 3 },
  { when: 'At offload', cost: 'Drive and shipping cost', fix: 'Only the copy, not the recording', level: 4 },
  { when: 'At QA, ~18 days later', cost: 'The full $40/hour plus a new site visit', fix: 'Only by re-collecting from scratch', level: 5 },
]

export const latencyNote =
  'This is also why adding more QA reviewers wouldn’t help: it improves detection at the most expensive point in the pipeline.'

export const solutions = [
  { name: 'Offload integrity gate', does: 'Checksums, file counts and duration vs. session manifest before a drive ships', targets: 'Data integrity', impact: 1, confidence: 90, effort: 2, rice: 1980, mvp: true },
  { name: 'Automated pre-session check', does: 'App verifies every sensor is live, clocks synced, battery and storage sufficient', targets: 'Hardware, sync', impact: 2, confidence: 80, effort: 4, rice: 1760, mvp: true },
  { name: 'On-site exit validation', does: '60-second scan: frame drops, timestamp alignment, IMU gaps, hands-in-frame sample', targets: 'Sync, hardware, framing', impact: 3, confidence: 70, effort: 6, rice: 1540, mvp: true },
  { name: 'Collector quality scorecard', does: 'Weekly yield per collector with the top failure reason', targets: 'Protocol, habits', impact: 1, confidence: 50, effort: 3, rice: 733, mvp: false },
  { name: 'Live in-session alerts', does: 'Real-time buzz on sensor dropout or framing drift', targets: 'Hardware, framing', impact: 2, confidence: 60, effort: 8, rice: 660, mvp: false },
  { name: 'Cloud ML quality scoring', does: 'Model scores every clip after upload', targets: 'Framing, protocol', impact: 1, confidence: 40, effort: 12, rice: 147, mvp: false },
]

export const riceNote = 'Reach is 4,400 sessions/month for every option (40 collectors × 5 sessions × 22 days).'

export const whyNot = [
  {
    q: 'Why not build live alerts first?',
    a: 'They’re the most impressive feature, but need real-time processing on limited wearable hardware. The exit scan catches most of the same failures in 60 seconds at a fraction of the effort.',
  },
  {
    q: 'Why not cloud ML scoring?',
    a: 'It still detects failures after the collector has left — the exact problem this case is solving.',
  },
]

export const mvpFlow: { kind: 'step' | 'gate'; text: string; fail?: string }[] = [
  { kind: 'step', text: 'Open session in app' },
  { kind: 'gate', text: 'Pre-session check (~60 s)', fail: 'Show fix: reseat cable, swap battery, resync — then re-check' },
  { kind: 'step', text: 'Record task' },
  { kind: 'gate', text: 'Exit validation (~60 s)', fail: 'Re-record now, while the setup is still in place' },
  { kind: 'step', text: 'Stage to drive' },
  { kind: 'gate', text: 'Offload gate: checksum + manifest', fail: 'Re-copy before shipping' },
  { kind: 'step', text: 'Ship to data center' },
]

export const inScope = [
  'Pre-session check: all sensors streaming, clock offset under threshold, battery and free storage above the session’s needs, one framing preview photo',
  'Exit validation: frame-drop count, camera–IMU timestamp alignment, IMU gap detection, 5 sampled frames checked for hands in view',
  'Offload gate: checksum and file-count match against the session manifest before a drive leaves the site',
  'Every check shows a plain-language fix, not an error code',
  'A collector can override a failed check with a reason, which is logged',
]

export const outOfScope = ['Live in-session alerts', 'Cloud ML quality scoring', 'Collector scorecards and incentives', 'Changes to the kit hardware']

export const experiment = [
  ['Treatment group', '10 collectors using the new checks'],
  ['Control group', '10 collectors matched on tenure, site type and past yield'],
  ['Duration', '4 weeks (about 1,000 sessions per group)'],
  ['Primary metric', 'Usable yield, measured at QA as today'],
  ['Secondary metrics', 'Detection latency, share of failures fixed on site'],
  ['Guardrails', 'Setup time, sessions per day, false block rate, override rate'],
  ['Qualitative input', 'Weekly 15-minute check-in with pilot collectors'],
]

export const successCriteria = [
  'Usable yield in the treatment group at least 10 points above control',
  'Setup time up by no more than 3 minutes per session',
  'False block rate under 5%, and override rate under 10%',
]

export const rolloutPlan =
  'If the pilot passes, roll out in two waves of 15 collectors, tuning check thresholds between waves using override logs. If it fails a guardrail, fix that check and re-run a 2-week pilot rather than shipping.'

export const risks = [
  { risk: 'False positives block good sessions', why: 'Collectors lose trust and start overriding', mitigation: 'Start with loose thresholds, tighten using pilot data; log every override' },
  { risk: 'Added setup time', why: 'Lower throughput, collector frustration', mitigation: 'Hard cap of 60 s per check; run checks in the background while the collector gears up' },
  { risk: 'Limited compute on the wearable', why: 'Heavy checks drain battery or lag', mitigation: 'Lightweight rule-based checks on device; no ML on the edge in MVP' },
  { risk: 'Gaming the metric', why: 'Collectors avoid hard tasks to protect their yield', mitigation: 'Track task mix per collector; never tie pay to yield alone' },
  { risk: 'Thresholds differ by site', why: 'Lighting and layouts vary between homes and factories', mitigation: 'Per-site-type thresholds tuned during rollout' },
  { risk: 'Checks miss subtle failures', why: 'Some framing and protocol errors need human judgment', mitigation: 'Keep QA review; checks reduce its load, they don’t replace it' },
]

export const coreTradeoff =
  'A stricter check catches more failures but blocks more good sessions. The pilot’s override log is how the team finds the right balance, instead of guessing.'

export const impact = {
  columns: ['Measure (per month)', 'Before', 'After MVP', 'Change'],
  rows: [
    ['Usable yield', '68%', '85%', '+17 points'],
    ['Usable hours delivered', '816', '1,020', '+204 hours (+25%)'],
    ['Hours wasted', '384', '180', '−204 hours'],
    ['Wasted spend', '$15,360', '$7,200', '−$8,160'],
    ['Cost per usable hour', '$58.80', '$47.10', '−20%'],
    ['Typical detection latency', '~18 days', 'Minutes for most failures', 'Fixable on site'],
  ],
}

export const payback =
  'The MVP needs about 12 person-weeks. At an assumed $2,000 per person-week that’s $24,000 — recovered in roughly 3 months of savings.'

export const learnings = [
  'Frame quality as a pipeline problem, not a QA problem. The cheapest fix sits at the point of recording.',
  'Pick a north star the customer feels. Usable yield ties collector effort directly to what the ML team receives.',
  'Design for the collector’s day. A check that adds minutes will be skipped, however accurate it is.',
  'Closing the feedback loop is half the solution. Collectors improve fastest when they see their own failures.',
]

export const differently =
  'Run the failure audit with QA before designing any solution. Early assumptions over-weighted framing and under-weighted sync drift.'

export const nextSteps = [
  'Collector quality scorecard to build the feedback loop',
  'Live in-session alerts once on-device performance is proven',
  'Cloud ML quality scoring to reduce manual QA load',
  'Feed failure data back into kit design — locking connectors, better clock-sync hardware',
]

export const references = [
  { label: 'BCG — What is Physical AI?', href: 'https://www.bcg.com/capabilities/artificial-intelligence/what-is-physical-ai' },
  { label: 'Cisco — What Is Physical AI?', href: 'https://www.cisco.com/site/us/en/learn/topics/artificial-intelligence/what-is-physical-ai.html' },
  { label: 'EY — What is Physical AI and why it matters now', href: 'https://www.ey.com/en_gl/simply-explained/what-is-physical-ai' },
  { label: 'Ego4D — large-scale egocentric video', href: 'https://ego4d-data.org/' },
  { label: 'Ego-Exo4D — paired first- and third-person video', href: 'https://ego-exo4d-data.org/' },
  { label: 'ALOHA — low-cost bimanual teleoperation', href: 'https://tonyzhaozh.github.io/aloha/' },
  { label: 'DROID — large-scale robot manipulation demonstrations', href: 'https://droid-dataset.github.io/' },
  { label: 'UMI — Universal Manipulation Interface', href: 'https://umi-gripper.github.io/' },
  { label: 'Open X-Embodiment — pooled data across robot types', href: 'https://robotics-transformer-x.github.io/' },
]
