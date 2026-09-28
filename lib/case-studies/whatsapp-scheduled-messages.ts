/**
 * Content for the "WhatsApp Scheduled Messages" product case study.
 * Source of truth: Keval's Notion write-up (linked from the page).
 */

export const notionUrl =
  'https://app.notion.com/p/WhatsApp-Scheduled-Messages-Product-Case-Study-3e9aed454708812abe89db94cda27bbb'

export const disclaimer =
  'Independent concept work. Not affiliated with or endorsed by WhatsApp or Meta. All mockups and diagrams are my own.'

export const tldr = [
  {
    label: 'Problem',
    body: 'People want to say the right thing at the right time: birthday wishes at midnight, a note to a team in another time zone, a message to a boss that shouldn’t land at 11 PM. Today they stay awake, set an alarm, or install risky third-party apps.',
  },
  {
    label: 'Solution',
    body: 'Native “Schedule message”: long-press Send → pick date & time → the message is delivered automatically, even if the sender’s phone is offline.',
  },
  {
    label: 'Why now',
    body: 'Telegram, iMessage (iOS 18 “Send Later”), Gmail and Slack all have it. It is one of WhatsApp’s most-requested features, and WhatsApp has been testing it in beta through 2026.',
  },
  {
    label: 'North Star',
    body: 'Weekly Active Schedulers — users who schedule ≥1 message a week — with guardrails on spam reports and on-time delivery.',
  },
]

export const process = [
  { title: 'Research', body: 'Market data, competitor teardown (Telegram, iMessage, Gmail) and how people work around the gap today.' },
  { title: 'Define', body: 'Problem statement, jobs to be done, and four India-first personas.' },
  { title: 'Design', body: 'A 6-screen flow benchmarked against Telegram, plus user workflow and journey diagrams.' },
  { title: 'Decide', body: 'Goals, non-goals, success metrics and v1 scope.' },
  { title: 'Ship plan', body: 'A staged rollout timed around Diwali, and a list of risks with mitigations.' },
]

export const stats = [
  { value: '3B+', label: 'monthly active users' },
  { value: '100B+', label: 'messages per day' },
  { value: '500M+', label: 'users in India, the largest market' },
]

export const competitors = [
  { name: 'Telegram', body: 'Long-press Send → Schedule message / “Send when online”; one-off scheduling in chats and groups.' },
  { name: 'iMessage (iOS 18+)', body: '“Send Later” from the + menu, up to 14 days ahead.' },
  { name: 'Gmail / Outlook / Slack', body: 'Schedule send is a standard expectation in work tools.' },
  { name: 'WhatsApp Business', body: 'Only away/greeting messages and paid API broadcasts — no simple one-off scheduling for regular chats.' },
]

export const workarounds =
  'Apple Shortcuts automations (clunky, need confirmation) and Android apps like SKEDit that use Accessibility Services to type and send on your behalf — a real privacy and account-safety risk.'

export const statusNote =
  'As of Sept 2026, WABetaInfo reported WhatsApp building and testing scheduled messages for chats and groups (entry via long-press on Send, a 10 min – 2 week window, and a list to manage scheduled messages). This case study approaches the feature from first principles, as if I were the PM owning it.'

export const problemStatement =
  'Users often compose a message at a moment that isn’t the right moment to deliver it. Because WhatsApp only supports “send now”, users either lose the intent, deliver at a bad time, or hand control of their account to unsafe third-party apps.'

export const jobs = [
  'When it’s my friend’s birthday at midnight, I want my wish to arrive exactly at 12:00 so I’m first — without staying awake.',
  'When I think of something for my team late at night, I want it to arrive in working hours so I don’t look like I expect a reply at 11 PM.',
  'When my family or client is in another time zone, I want the message to arrive at a reasonable local time.',
  'When I run a small shop, I want to remind customers about offers or pickups at a set time without a paid tool.',
]

export const personas = [
  {
    name: 'Priya',
    age: 24,
    role: 'College student / young professional',
    body: 'Celebrates everything at midnight; sends 5–10 birthday and festival wishes a month.',
    pain: 'Staying awake, forgetting.',
    primary: true,
  },
  {
    name: 'Rahul',
    age: 32,
    role: 'Team lead, hybrid company',
    body: 'Runs work through WhatsApp groups.',
    pain: 'Late-night thoughts; wants to respect the team’s off hours.',
    primary: true,
  },
  {
    name: 'Meena',
    age: 45,
    role: 'Parent with kids abroad',
    body: 'Lives across a time-zone gap from her children.',
    pain: 'Doesn’t want to wake them.',
    primary: true,
  },
  {
    name: 'Arjun',
    age: 38,
    role: 'Small business owner (racket & sports shop)',
    body: 'Sends stringing-pickup reminders and weekend offers.',
    pain: 'Forgets; paid broadcast tools are overkill.',
    primary: false,
  },
]

export const primarySegment =
  'Primary segment for v1 is personal users (Priya, Meena, Rahul). Small-business power features are v2, because WhatsApp Business has separate monetization and spam considerations.'

export const research = [
  {
    label: 'Quantitative signals',
    body: 'Messages sent between 23:55–00:05 (the midnight spike), “draft left unsent” rates, support searches for “schedule”, installs of third-party schedulers.',
  },
  {
    label: 'Qualitative',
    body: '15–20 interviews across the four personas; a diary study around a festival such as Diwali to watch real behaviour.',
  },
  {
    label: 'Survey',
    body: '“How often in the last month did you want to send a message later?” plus top reasons.',
  },
]

export const hypotheses = [
  { id: 'H1', body: '≥30% of active users have wanted to send a message later at least once a month.' },
  { id: 'H2', body: 'Occasions (birthdays, festivals) are the #1 use case in India; work etiquette is #1 in Western markets.' },
  { id: 'H3', body: 'Users care more about reliability (“will it really go?”) than advanced options like recurrence.' },
]

export const goals = [
  'Let any user schedule a text message in a 1:1 or group chat in ≤3 taps.',
  'Deliver on time (±1 minute) with ≥99.5% reliability, even if the sender’s phone is off.',
  'Preserve end-to-end encryption and WhatsApp’s privacy promise.',
  'Remove the need for Accessibility-based third-party schedulers.',
]

export const nonGoals = [
  'Recurring messages (daily/weekly reminders) — high spam risk.',
  'Bulk scheduling to many contacts or broadcast lists.',
  'Scheduling Status updates, Channel posts, or calls.',
  'Scheduling from WhatsApp Web/Desktop (fast-follow in v1.1).',
]

export const coreFlow = [
  'Type a message in any chat.',
  'Long-press the Send button → Schedule message · Send when online · Send silently.',
  'Pick a date & time with quick chips — Midnight, Tomorrow 9:00 AM, In 1 hour, Custom. Window: 10 min to 14 days.',
  'Confirm → the message sits in the chat with a clock icon and “Scheduled · Tue, 29 Sep · 12:00 AM”, visible only to the sender.',
  'At the scheduled time it’s delivered as a normal message — the recipient sees no “scheduled” label.',
]

export const managing = [
  'Banner at the top of the chat: “1 scheduled message” → tap to view.',
  'Per-message actions: Send now · Edit · Reschedule · Delete.',
  'Global list in Settings → Chats → Scheduled messages.',
  'A small clock icon in the chat list marks chats with pending messages.',
]

export const edgeCases = [
  { case: 'Sender’s phone offline or dead', outcome: 'Still sends on time.' },
  { case: 'Recipient blocks sender / sender removed from group', outcome: 'Message fails; sender gets “Couldn’t send scheduled message”.' },
  { case: 'Group membership changes', outcome: 'Only members at delivery time receive it, like a normal send.' },
  { case: 'Disappearing messages on', outcome: 'Timer starts at delivery, not at scheduling.' },
  { case: 'Time zones', outcome: 'Picked in sender’s local time; recipient’s local time shown when known.' },
  { case: 'Sender deletes chat or logs out', outcome: 'Pending messages are cancelled, with a warning.' },
  { case: 'Abuse', outcome: 'Max ~20 pending scheduled messages per user.' },
  { case: 'Media', outcome: 'v1: text, emoji, links. v1.1: photos, video, voice notes, documents.' },
]

export const benchmark = {
  columns: ['Step', 'Telegram today', 'Proposed WhatsApp', 'Why the change'],
  rows: [
    ['Entry', 'Long-press Send → Schedule / Send when online / Send without sound', 'Same long-press pattern, “Schedule message” first with a NEW tag', 'Familiar gesture that doesn’t clutter the composer; the tag helps people find it'],
    ['Time picking', 'Date/hour/minute wheel only', 'Quick picks first (Midnight, Tomorrow 9 AM, In 1 hour) + wheel for custom', 'Most Indian use cases are midnight wishes and morning reminders — 1 tap instead of 3 scrolls'],
    ['Time zones', 'Not shown', 'Shows the recipient’s local time', 'Solves the NRI-family and remote-team use case'],
    ['Trust', 'Cloud chats, so the server can send', '“Encrypted now, sends even if your phone is off”', 'WhatsApp’s brand promise is E2E encryption, so it has to be said out loud'],
    ['After scheduling', 'Separate “Scheduled Messages” view', 'In-chat dashed bubble + banner + Undo toast', 'Keeps context and removes the “did it actually schedule?” fear'],
    ['Repeat', 'Repeat option (Premium-locked)', 'Not in v1', 'Spam risk at WhatsApp scale; revisit once abuse controls are proven'],
  ],
}

/** The core scheduling flow, flattened from the Notion flowchart. */
export const workflow: { kind: 'start' | 'decision' | 'step' | 'end'; text: string; branch?: string }[] = [
  { kind: 'start', text: 'User types a message' },
  { kind: 'decision', text: 'Tap or long-press Send?', branch: 'Tap → sent now' },
  { kind: 'step', text: 'Send menu → Schedule message' },
  { kind: 'decision', text: 'Pick time', branch: 'Quick pick or custom date/time wheel' },
  { kind: 'decision', text: 'Valid window? 10 min – 14 days', branch: 'No → back to the wheel' },
  { kind: 'decision', text: 'Under 20 pending?', branch: 'No → show limit, open Scheduled list' },
  { kind: 'step', text: 'Encrypt on device, upload with release time T' },
  { kind: 'step', text: 'Dashed bubble + banner + Undo toast' },
  { kind: 'end', text: 'Delivered at T' },
]

export const journey = {
  title: 'Priya wants to be the first to wish her best friend',
  before: [
    { step: 'Sets an alarm for 11:59 PM', score: 2 },
    { step: 'Fights sleep, scrolls reels', score: 1 },
    { step: 'Misses midnight by 4 minutes', score: 1 },
  ],
  after: [
    { step: 'Types the wish at 10 PM', score: 4 },
    { step: 'Long-press Send, taps Midnight', score: 5 },
    { step: 'Sleeps on time', score: 5 },
    { step: 'Wish lands at midnight sharp', score: 5 },
    { step: 'Friend replies “you’re the first!”', score: 5 },
  ],
}

export const metrics = {
  northStar: 'Weekly Active Schedulers (WAS)',
  groups: [
    {
      label: 'Adoption',
      items: [
        '% of DAU who discover the feature (long-press Send) in the first 30 days',
        '% of discoverers who schedule ≥1 message',
        'Messages scheduled per scheduler per week',
      ],
    },
    {
      label: 'Quality / Reliability',
      items: [
        'On-time delivery rate — target ≥99.5% within ±1 min',
        'Cancel / edit rate before delivery (trust vs. UX confusion)',
        '“Couldn’t send” failure rate',
      ],
    },
    {
      label: 'Engagement impact',
      items: ['Messages sent per user on occasion days', 'Reduction in third-party scheduler usage'],
    },
    {
      label: 'Guardrails',
      items: [
        'Spam/block reports on scheduled vs. normal messages must not be higher',
        'App battery and performance impact',
        'No increase in “unexpected message” complaints',
      ],
    },
  ],
}

export const prioritization = {
  columns: ['Feature', 'Reach', 'Impact', 'Effort', 'Priority'],
  rows: [
    ['Schedule text in 1:1 chats', 'Very high', 'High', 'Medium', 'Must have (v1)'],
    ['Schedule in groups', 'High', 'High', 'Low (extra)', 'Must have (v1.1)'],
    ['Manage: edit / delete / send now', 'High', 'High (trust)', 'Low', 'Must have (v1)'],
    ['Sends even when the phone is off', 'Very high', 'Very high (core promise)', 'High', 'Must have (v1)'],
    ['Media scheduling', 'Medium', 'Medium', 'Medium', 'Should have (v1.1)'],
    ['Web / Desktop', 'Medium', 'Medium', 'Medium', 'Should have (v1.1)'],
    ['AI send-time suggestions', 'High', 'Medium', 'High', 'Could have (v2)'],
    ['Recurring messages', 'Medium', 'Medium', 'Medium', 'Won’t have now (spam risk)'],
  ],
}

export const rollout = [
  { title: 'Internal dogfood', when: '2 weeks', body: 'Reliability and key-change edge cases.' },
  { title: 'Beta', when: '1% → 5%', body: 'Android + iOS beta channels; watch failure rate and spam guardrails.' },
  { title: 'Staged by market', when: 'Pre-Diwali', body: 'India and Brazil first, timed 2–3 weeks before Diwali so people discover it for midnight wishes.' },
  { title: 'Discovery', when: 'Contextual', body: 'One-time tooltip on Send after a message sent 11:50 PM–12:10 AM, or a long draft left unsent.' },
  { title: 'Global launch', when: 'GA', body: 'Worldwide, with a Web/Desktop fast-follow.' },
]

export const risks = [
  { risk: 'Spam / abuse', mitigation: 'Per-user cap on pending messages, no bulk or recurring in v1, spam classifiers applied at delivery.' },
  { risk: 'Reliability failures erode trust', mitigation: 'Server-held delivery, clear failure notifications, “Send now” fallback.' },
  { risk: 'Awkward auto-sends when context changes', mitigation: 'Visible in-chat banner for pending messages; one-tap delete.' },
  { risk: 'Privacy perception', mitigation: 'Clear copy: “Scheduled messages are end-to-end encrypted. WhatsApp can’t read them.”' },
  { risk: 'Low discoverability', mitigation: 'Contextual tooltips on occasion days.' },
]

export const future = [
  { title: 'AI send-time suggestions', body: '“It’s 3 AM for Meena’s son — schedule for 8 AM his time?” Computed on-device to respect privacy.' },
  { title: 'Occasion reminders', body: 'Birthday nudges with a one-tap scheduled wish.' },
  { title: 'Business mode', body: 'Appointment reminders and pickup notifications for small shops, with customer opt-in.' },
  { title: 'Recurring personal reminders', body: '“Pay rent” to self — once abuse controls are proven.' },
]

export const takeaways = [
  'The hard part isn’t the button, it’s trust: the message must go out on time even if the phone dies, without giving up the privacy promise.',
  'Reliability > features. Users forgive missing recurrence, not a birthday wish that never arrived.',
  'Scope is deliberately personal-first to avoid turning WhatsApp into a spam scheduling tool.',
  'Launch timing around cultural moments (Diwali, New Year) is the GTM lever unique to WhatsApp’s markets.',
]

export const sources = [
  { label: 'MacRumors — WhatsApp Working on Scheduled Messages Feature (Feb 2026)', href: 'https://www.macrumors.com/2026/02/24/whatsapp-scheduled-messages-coming/' },
  { label: 'WABetaInfo — WhatsApp is testing scheduled messages for chats and groups (Jun 2026)', href: 'https://wabetainfo.com/whatsapp-is-testing-scheduled-messages-for-chats-and-groups/' },
  { label: 'Sammy Fans — WhatsApp developing scheduling for Channels (Aug 2026)', href: 'https://www.sammyfans.com/2026/08/22/whatsapp-developing-new-scheduling-feature-for-channels/' },
  { label: 'ChatMaxima — WhatsApp Scheduled Messages overview', href: 'https://chatmaxima.com/blog/whatsapp-scheduled-messages-feature-2026/' },
  { label: 'Search Engine Land — WhatsApp user statistics', href: 'https://searchengineland.com/guide/whatsapp-users' },
]
