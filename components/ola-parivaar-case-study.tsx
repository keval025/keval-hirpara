import { Check, Minus, X } from 'lucide-react'
import { BarChart } from '@/components/bar-chart'
import { Section, Table } from '@/components/case-study-kit'
import { PodEconomics } from '@/components/pod-economics'
import * as cs from '@/lib/case-studies/ola-parivaar'

const markLabel = { y: 'Yes', p: 'Partly / varies', n: 'No' } as const

function Mark({ value }: { value: 'y' | 'p' | 'n' }) {
  const Icon = value === 'y' ? Check : value === 'p' ? Minus : X
  return (
    <span className="inline-flex items-center gap-1.5" title={markLabel[value]}>
      <Icon size={15} aria-hidden className={value === 'y' ? '' : 'pf-muted'} strokeWidth={value === 'y' ? 2.5 : 2} />
      <span className="sr-only">{markLabel[value]}</span>
    </span>
  )
}

export function OlaParivaarCaseStudy() {
  const totalRiders = cs.pathTo100M.reduce((sum, g) => sum + g.riders, 0)

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-8 md:py-24">
      <dl className="mb-12 grid gap-px overflow-hidden rounded-lg bg-[var(--pf-line)] md:grid-cols-3">
        {(
          [
            ['Context', cs.context.what],
            ['Brief', cs.context.brief],
            ['Deliverable', cs.context.deliverable],
          ] as const
        ).map(([k, v]) => (
          <div key={k} className="bg-[var(--pf-surface)] p-5">
            <dt className="pf-mono pf-muted mb-2">{k}</dt>
            <dd className="leading-relaxed">{v}</dd>
          </div>
        ))}
      </dl>

      <Section index="00" label="TL;DR" title={cs.oneLiner}>
        <div className="grid gap-4 sm:grid-cols-2">
          {cs.tldr.map((t) => (
            <div key={t.label} className="rounded-lg bg-[var(--pf-surface)] p-5">
              <p className="pf-mono mb-2 text-[var(--pf-accent)]">{t.label}</p>
              <p className="leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section index="01" label="Approach" title="Diverge, filter, check — then find the unusual user">
        <ol className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cs.approach.map((a, i) => (
            <li key={a.title} className="border-t border-[var(--pf-line)] pt-3">
              <p className="pf-mono pf-muted mb-2">{String(i + 1).padStart(2, '0')}</p>
              <p className="mb-1 font-medium">{a.title}</p>
              <p className="pf-muted text-sm leading-relaxed">{a.body}</p>
            </li>
          ))}
        </ol>
        <p className="border-l-2 border-[var(--pf-accent)] pl-4 leading-relaxed">{cs.approachTakeaway}</p>
      </Section>

      <Section index="02" label="The story" title="7:05 am, a Tuesday in 2035">
        <div className="mb-8 max-w-3xl space-y-4 text-lg leading-relaxed">
          {cs.story.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <blockquote className="pf-serif text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[1.15] tracking-tight">
          “{cs.storyQuote}”
        </blockquote>
      </Section>

      <Section index="03" label="Assumptions" title="India in 2035">
        <Table columns={cs.assumptions.columns} rows={cs.assumptions.rows} />
      </Section>

      <Section index="04" label="Users" title="A two-sided product: the rider travels, the family decides and pays">
        <div className="mb-10 rounded-lg bg-[var(--pf-fg)] p-6 text-[var(--pf-bg)]">
          <p className="pf-mono mb-2 opacity-70">Job to be done (buyer)</p>
          <p className="pf-serif text-[clamp(1.3rem,2.4vw,1.9rem)] leading-snug">“{cs.jtbd}”</p>
        </div>
        <Table columns={cs.segments.columns} rows={cs.segments.rows} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {cs.personas.map((p) => (
            <div key={p.name} className="flex gap-4 rounded-lg border border-[var(--pf-line)] p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--pf-fg)] text-lg font-medium text-[var(--pf-bg)]">
                {p.name[0]}
              </span>
              <div>
                <p className="font-medium">
                  {p.name}, {p.age} <span className="pf-muted font-normal">· {p.role}</span>
                </p>
                <p className="pf-muted mt-1 text-sm leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section index="05" label="The problem" title="Every segment needs the same four things. No option today offers all four.">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="pf-mono pf-muted border-b border-[var(--pf-line)] py-3 pr-4 font-normal">Option today</th>
                {cs.needs.map((n) => (
                  <th key={n} className="pf-mono pf-muted border-b border-[var(--pf-line)] px-2 py-3 text-center font-normal">
                    {n}
                  </th>
                ))}
                <th className="pf-mono pf-muted border-b border-[var(--pf-line)] py-3 pl-4 font-normal">Where it breaks</th>
              </tr>
            </thead>
            <tbody>
              {cs.options.map((o) => {
                const ours = o.name === 'Ola Parivaar'
                return (
                  <tr key={o.name} className={ours ? 'bg-[var(--pf-surface)]' : ''}>
                    <td className={`border-b border-[var(--pf-line)] py-3 pr-4 ${ours ? 'pl-3 font-medium' : ''}`}>{o.name}</td>
                    {o.marks.map((m, i) => (
                      <td key={i} className="border-b border-[var(--pf-line)] px-2 py-3 text-center">
                        <Mark value={m} />
                      </td>
                    ))}
                    <td className={`border-b border-[var(--pf-line)] py-3 pl-4 ${ours ? 'font-medium' : 'pf-muted'}`}>{o.breaks}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className="pf-muted mt-3 flex flex-wrap gap-4 text-xs">
          <span className="inline-flex items-center gap-1.5">
            <Check size={13} strokeWidth={2.5} aria-hidden /> Yes
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Minus size={13} aria-hidden /> Partly / varies
          </span>
          <span className="inline-flex items-center gap-1.5">
            <X size={13} aria-hidden /> No
          </span>
        </p>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed">{cs.hiddenCost}</p>
      </Section>

      <Section index="06" label="Why it matters" title="India in 2035 has more people who can’t drive themselves">
        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cs.whyNow.map((s) => (
            <div key={s.label}>
              <p className="pf-display text-[clamp(2.4rem,5vw,3.6rem)]">{s.value}</p>
              <p className="pf-muted mt-1 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="pf-mono pf-muted mb-3">Market sizing (illustrative)</p>
        <ol className="space-y-2">
          {cs.market.map((m, i) => (
            <li
              key={m.level}
              className="grid items-center gap-2 rounded-lg border border-[var(--pf-line)] p-4 md:grid-cols-12 md:gap-4"
              style={{ marginLeft: `${i * 1.25}rem` }}
            >
              <span className="pf-mono text-[var(--pf-accent)] md:col-span-1">{m.level}</span>
              <span className="pf-muted text-sm md:col-span-8">{m.definition}</span>
              <span className="font-medium md:col-span-3 md:text-right">{m.size}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section index="07" label="The product" title="Three pillars, each solving a need existing apps ignore">
        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {cs.pillars.map((p) => (
            <div key={p.title} className="rounded-lg border border-[var(--pf-line)] p-5">
              <p className="text-xl font-medium tracking-tight">{p.title}</p>
              <p className="pf-mono pf-muted mb-4 mt-1">{p.for}</p>
              <ul className="space-y-2">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-3 text-sm leading-relaxed">
                    <span aria-hidden className="text-[var(--pf-accent)]">
                      —
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="pf-mono pf-muted mb-4">Core journey: the school run</p>
        <ol className="mb-4 grid gap-3 sm:grid-cols-5">
          {cs.journey.map((j, i) => (
            <li key={j.title} className="relative rounded-lg bg-[var(--pf-surface)] p-4">
              <p className="pf-mono mb-2 text-[var(--pf-accent)]">{String(i + 1).padStart(2, '0')}</p>
              <p className="font-medium">{j.title}</p>
              <p className="pf-muted text-sm">{j.body}</p>
            </li>
          ))}
        </ol>
        <p className="pf-muted mb-12 text-sm">{cs.noSmartphone}</p>

        <p className="pf-mono pf-muted mb-2">MVP scope (MoSCoW)</p>
        <p className="mb-5 max-w-3xl leading-relaxed">
          <span className="font-medium">Hypothesis to test: </span>
          {cs.mvpHypothesis}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cs.moscow.map((m, i) => (
            <div
              key={m.label}
              className={`rounded-lg p-4 ${i === 0 ? 'bg-[var(--pf-fg)] text-[var(--pf-bg)]' : 'border border-[var(--pf-line)]'}`}
            >
              <p className={`pf-mono mb-3 ${i === 0 ? 'opacity-70' : 'pf-muted'}`}>{m.label}</p>
              <ul className="space-y-1.5 text-sm">
                {m.items.map((it) => (
                  <li key={it} className={i === 3 ? 'pf-muted' : ''}>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section index="08" label="Trade-offs" title="Combining segments is what makes the fleet work">
        <Table columns={cs.alternatives.columns} rows={cs.alternatives.rows} />
        <div className="mt-12">
          <BarChart
            title="Fleet in use by time of day (illustrative)"
            unit="%"
            max={100}
            columns={['Time of day', 'Fleet in use', 'Main riders']}
            bars={cs.utilisation.map((u) => ({
              label: u.block,
              value: u.pct,
              details: [{ label: 'Main riders', value: u.riders }],
            }))}
          />
        </div>
        <p className="mt-8 max-w-3xl leading-relaxed">
          <span className="font-medium">Trade-off accepted: </span>
          {cs.tradeoff}
        </p>
      </Section>

      <Section index="09" label="Why Ola" title="A managed fleet, not a marketplace">
        <div className="mb-8 grid gap-6 sm:grid-cols-2">
          {cs.whyOla.map((w) => (
            <div key={w.title} className="border-t border-[var(--pf-line)] pt-3">
              <p className="mb-1 font-medium">{w.title}</p>
              <p className="pf-muted text-sm leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-[var(--pf-surface)] p-5">
            <p className="pf-mono pf-muted mb-2">Why not Uber or Rapido?</p>
            <p className="leading-relaxed">{cs.whyNotUber}</p>
          </div>
          <div className="rounded-lg bg-[var(--pf-surface)] p-5">
            <p className="pf-mono pf-muted mb-2">The moat</p>
            <p className="leading-relaxed">{cs.moat}</p>
          </div>
        </div>
        <p className="border-l-2 border-[var(--pf-accent)] pl-4 text-sm leading-relaxed">
          <span className="font-medium">Honest caveats: </span>
          {cs.caveats}
        </p>
      </Section>

      <Section index="10" label="Path to 100M" title={`${totalRiders}M daily riders, built segment by segment`}>
        <BarChart
          title="2035 daily riders by group (millions)"
          unit="M"
          columns={['Rider group', 'Daily riders', 'Base population', 'Share served daily']}
          bars={cs.pathTo100M.map((g) => ({
            label: g.group,
            value: g.riders,
            details: [
              { label: 'Base population', value: g.base },
              { label: 'Share served daily', value: g.share },
            ],
          }))}
        />

        <p className="pf-mono pf-muted mb-3 mt-12">What must be true</p>
        <ol className="mb-12 space-y-2">
          {cs.mustBeTrue.map((m, i) => (
            <li key={m.title} className="grid gap-1 rounded-lg border border-[var(--pf-line)] p-4 md:grid-cols-12 md:gap-4">
              <span className="pf-mono text-[var(--pf-accent)] md:col-span-1">{i + 1}</span>
              <span className="font-medium md:col-span-4">
                {m.title}
                {m.riskiest && <span className="pf-chip ml-2 align-middle">Riskiest</span>}
              </span>
              <span className="pf-muted text-sm md:col-span-7">{m.body}</span>
            </li>
          ))}
        </ol>

        <p className="pf-mono pf-muted mb-4">Unit economics per pod (illustrative) — try your own numbers</p>
        <PodEconomics />

        <p className="pf-mono pf-muted mb-3 mt-12">Go-to-market</p>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cs.gtm.map((g, i) => (
            <li key={g.phase} className="rounded-lg bg-[var(--pf-surface)] p-4">
              <p className="pf-mono mb-2 text-[var(--pf-accent)]">{String(i + 1).padStart(2, '0')}</p>
              <p className="mb-1 font-medium">{g.phase}</p>
              <p className="text-sm leading-relaxed">{g.scope}</p>
              <p className="pf-muted mt-3 border-t border-[var(--pf-line)] pt-2 text-xs leading-relaxed">
                <span className="font-medium">Gate: </span>
                {g.gate}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section index="11" label="Metrics">
        <div className="mb-8 rounded-lg bg-[var(--pf-fg)] p-6 text-[var(--pf-bg)]">
          <p className="pf-mono mb-2 opacity-70">North Star</p>
          <p className="text-[clamp(1.4rem,3vw,2.2rem)] font-medium leading-tight tracking-tight">{cs.northStar.metric}</p>
          <p className="mt-3 text-sm opacity-80">{cs.northStar.why}</p>
        </div>
        <Table columns={cs.metrics.columns} rows={cs.metrics.rows} highlight={3} />
      </Section>

      <Section index="12" label="Decisions" title="Key decisions — and what would change my mind">
        <Table columns={cs.decisions.columns} rows={cs.decisions.rows} />
        <p className="pf-mono pf-muted mb-3 mt-12">Risks & mitigations</p>
        <ul>
          {cs.risks.map((r) => (
            <li key={r.risk} className="grid gap-1 border-t border-[var(--pf-line)] py-4 md:grid-cols-12 md:gap-6">
              <p className="font-medium md:col-span-4">{r.risk}</p>
              <p className="pf-muted md:col-span-8">→ {r.mitigation}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section index="13" label="Reflection" title="Uniqueness comes from the user, not the vehicle">
        <ul className="mb-10 space-y-6">
          {cs.learned.map((l) => (
            <li key={l.title} className="border-t border-[var(--pf-line)] pt-4">
              <p className="text-lg font-medium tracking-tight">{l.title}</p>
              <p className="pf-muted mt-1 leading-relaxed">{l.body}</p>
            </li>
          ))}
        </ul>
        <p className="pf-mono pf-muted mb-3">What I would do next</p>
        <ol className="space-y-2">
          {cs.next.map((n, i) => (
            <li key={n} className="flex gap-3 leading-relaxed">
              <span className="pf-mono text-[var(--pf-accent)]">{i + 1}</span>
              {n}
            </li>
          ))}
        </ol>
      </Section>

      <Section index="14" label="Sources">
        <p className="pf-muted mb-4 text-sm">Figures marked illustrative are my own estimates for reasoning, not sourced data.</p>
        <ul className="space-y-2 text-sm">
          {cs.sources.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noreferrer" className="pf-link">
                {s.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  )
}
