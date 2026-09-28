import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'
import { ScheduleMockup } from '@/components/schedule-mockup'
import * as cs from '@/lib/case-studies/whatsapp-scheduled-messages'

function Section({ index, label, title, children }: { index: string; label: string; title?: ReactNode; children: ReactNode }) {
  return (
    <Reveal as="section" className="grid gap-6 border-t border-[var(--pf-line)] py-12 md:grid-cols-12 md:py-16">
      <h2 className="pf-mono pf-muted md:col-span-3">
        {index} — {label}
      </h2>
      <div className="md:col-span-9">
        {title && <p className="mb-8 text-[clamp(1.5rem,3vw,2.4rem)] font-medium leading-[1.1] tracking-[-0.03em]">{title}</p>}
        {children}
      </div>
    </Reveal>
  )
}

function Table({ columns, rows, highlight }: { columns: string[]; rows: string[][]; highlight?: number }) {
  return (
    <>
      {/* Stacked cards on small screens */}
      <div className="space-y-3 md:hidden">
        {rows.map((row) => (
          <div key={row[0]} className="rounded-lg border border-[var(--pf-line)] p-4">
            <p className="mb-2 font-medium">{row[0]}</p>
            <dl className="space-y-1.5 text-sm">
              {row.slice(1).map((cell, i) => (
                <div key={i} className="grid grid-cols-[7.5rem_1fr] gap-2">
                  <dt className="pf-muted">{columns[i + 1]}</dt>
                  <dd className={highlight === i + 1 ? 'text-[var(--pf-accent)]' : ''}>{cell}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
      <table className="hidden w-full border-collapse text-left text-sm md:table">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c} className="pf-mono pf-muted border-b border-[var(--pf-line)] py-3 pr-4 font-normal">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="align-top">
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={`border-b border-[var(--pf-line)] py-3.5 pr-4 ${i === 0 ? 'font-medium' : ''} ${
                    highlight === i ? 'text-[var(--pf-accent)]' : i > 0 ? 'pf-muted' : ''
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

function Score({ value }: { value: number }) {
  return (
    <span className="flex gap-1" aria-label={`${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className="h-2 w-5 rounded-full"
          style={{ background: n <= value ? 'var(--pf-accent)' : 'var(--pf-line)' }}
        />
      ))}
    </span>
  )
}

const priorityTone = (p: string) =>
  p.startsWith('Must') ? 'bg-[var(--pf-fg)] text-[var(--pf-bg)]' : p.startsWith('Won') ? 'pf-muted line-through' : ''

export function ProductCaseStudy() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-8 md:py-24">
      <p className="pf-muted mb-12 max-w-2xl border-l-2 border-[var(--pf-accent)] pl-4 text-sm">{cs.disclaimer}</p>

      <Section index="00" label="TL;DR">
        <div className="grid gap-4 sm:grid-cols-2">
          {cs.tldr.map((t) => (
            <div key={t.label} className="rounded-lg bg-[var(--pf-surface)] p-5">
              <p className="pf-mono mb-2 text-[var(--pf-accent)]">{t.label}</p>
              <p className="leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section index="01" label="Approach" title="How I approached it">
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {cs.process.map((p, i) => (
            <li key={p.title} className="border-t border-[var(--pf-line)] pt-3">
              <p className="pf-mono pf-muted mb-2">{String(i + 1).padStart(2, '0')}</p>
              <p className="mb-1 font-medium">{p.title}</p>
              <p className="pf-muted text-sm leading-relaxed">{p.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section index="02" label="Context" title="A huge surface with a missing basic">
        <div className="mb-10 grid gap-6 sm:grid-cols-3">
          {cs.stats.map((s) => (
            <div key={s.label}>
              <p className="pf-display text-[clamp(2.8rem,6vw,4.5rem)]">{s.value}</p>
              <p className="pf-muted mt-1 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="pf-mono pf-muted mb-3">Competitive landscape</p>
        <ul className="mb-8 grid gap-x-8 sm:grid-cols-2">
          {cs.competitors.map((c) => (
            <li key={c.name} className="border-t border-[var(--pf-line)] py-3">
              <p className="font-medium">{c.name}</p>
              <p className="pf-muted text-sm">{c.body}</p>
            </li>
          ))}
        </ul>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="pf-mono pf-muted mb-2">Today’s workarounds</p>
            <p className="leading-relaxed">{cs.workarounds}</p>
          </div>
          <div>
            <p className="pf-mono pf-muted mb-2">Status</p>
            <p className="leading-relaxed">{cs.statusNote}</p>
          </div>
        </div>
      </Section>

      <Section index="03" label="Problem">
        <blockquote className="pf-serif mb-10 text-[clamp(1.6rem,3.4vw,2.8rem)] leading-[1.15] tracking-tight">
          “{cs.problemStatement}”
        </blockquote>
        <p className="pf-mono pf-muted mb-3">Jobs to be done</p>
        <ol className="space-y-3">
          {cs.jobs.map((j, i) => (
            <li key={j} className="flex gap-4 leading-relaxed">
              <span className="pf-mono text-[var(--pf-accent)]">J{i + 1}</span>
              <span>{j}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section index="04" label="Personas" title="Four India-first personas">
        <div className="grid gap-4 sm:grid-cols-2">
          {cs.personas.map((p) => (
            <div key={p.name} className="rounded-lg border border-[var(--pf-line)] p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--pf-fg)] text-lg font-medium text-[var(--pf-bg)]">
                  {p.name[0]}
                </span>
                <div>
                  <p className="font-medium">
                    {p.name}, {p.age}
                  </p>
                  <p className="pf-muted text-sm">{p.role}</p>
                </div>
                <span className={`pf-chip ml-auto ${p.primary ? 'text-[var(--pf-accent)]' : 'pf-muted'}`}>
                  {p.primary ? 'v1' : 'v2'}
                </span>
              </div>
              <p className="text-sm leading-relaxed">{p.body}</p>
              <p className="pf-muted mt-2 text-sm">
                <span className="text-[var(--pf-fg)]">Pain:</span> {p.pain}
              </p>
            </div>
          ))}
        </div>
        <p className="pf-muted mt-6 text-sm">{cs.primarySegment}</p>
      </Section>

      <Section index="05" label="Research plan" title="How I’d validate it">
        <div className="mb-10 grid gap-6 sm:grid-cols-3">
          {cs.research.map((r) => (
            <div key={r.label}>
              <p className="pf-mono pf-muted mb-2">{r.label}</p>
              <p className="text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
        <p className="pf-mono pf-muted mb-3">Hypotheses</p>
        <ul className="space-y-2">
          {cs.hypotheses.map((h) => (
            <li key={h.id} className="flex gap-4 rounded-lg bg-[var(--pf-surface)] px-4 py-3">
              <span className="pf-mono text-[var(--pf-accent)]">{h.id}</span>
              <span>{h.body}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section index="06" label="Scope">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="mb-4 text-xl font-medium tracking-tight">Goals</p>
            <ul className="space-y-3">
              {cs.goals.map((g) => (
                <li key={g} className="flex gap-3 leading-relaxed">
                  <span className="text-[var(--pf-accent)]">✓</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xl font-medium tracking-tight">Non-goals (v1)</p>
            <ul className="space-y-3">
              {cs.nonGoals.map((g) => (
                <li key={g} className="pf-muted flex gap-3 leading-relaxed">
                  <span>✕</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section index="07" label="Solution" title="Long-press Send → pick a time → done">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_auto]">
          <div className="space-y-10">
            <div>
              <p className="pf-mono pf-muted mb-3">Core flow</p>
              <ol className="space-y-3">
                {cs.coreFlow.map((s, i) => (
                  <li key={s} className="flex gap-4 leading-relaxed">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[var(--pf-line)] font-mono text-[11px]">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <p className="pf-mono pf-muted mb-3">Managing scheduled messages</p>
              <ul className="space-y-2">
                {cs.managing.map((m) => (
                  <li key={m} className="border-t border-[var(--pf-line)] pt-2 text-sm leading-relaxed">
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:sticky lg:top-24">
            <p className="pf-mono pf-muted mb-4 text-center">Try the concept ↓</p>
            <ScheduleMockup />
          </div>
        </div>

        <p className="pf-mono pf-muted mb-3 mt-14">Edge cases</p>
        <div className="grid gap-px overflow-hidden rounded-lg border border-[var(--pf-line)] bg-[var(--pf-line)] sm:grid-cols-2">
          {cs.edgeCases.map((e) => (
            <div key={e.case} className="bg-[var(--pf-bg)] p-4">
              <p className="font-medium">{e.case}</p>
              <p className="pf-muted text-sm">{e.outcome}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section index="08" label="Benchmark" title="Telegram today vs. the proposed flow">
        <Table columns={cs.benchmark.columns} rows={cs.benchmark.rows} highlight={2} />
      </Section>

      <Section index="09" label="Workflow" title="The core scheduling logic">
        <ol className="relative ml-3 border-l border-[var(--pf-line)]">
          {cs.workflow.map((w, i) => (
            <li key={i} className="relative pb-6 pl-8 last:pb-0">
              <span
                className={`absolute -left-[7px] top-1 h-3.5 w-3.5 border-2 border-[var(--pf-bg)] ${
                  w.kind === 'decision' ? 'rotate-45 bg-[var(--pf-accent)]' : 'rounded-full bg-[var(--pf-fg)]'
                } ${w.kind === 'start' || w.kind === 'end' ? 'ring-2 ring-[var(--pf-fg)]' : ''}`}
              />
              <p className={w.kind === 'decision' ? 'font-medium' : ''}>{w.text}</p>
              {w.branch && <p className="pf-mono pf-muted mt-1 normal-case">↳ {w.branch}</p>}
            </li>
          ))}
        </ol>
      </Section>

      <Section index="10" label="Journey" title={cs.journey.title}>
        <div className="grid gap-8 md:grid-cols-2">
          {(
            [
              ['Before — no scheduling', cs.journey.before],
              ['After — with scheduling', cs.journey.after],
            ] as const
          ).map(([label, steps]) => (
            <div key={label}>
              <p className="pf-mono pf-muted mb-3">{label}</p>
              <ul>
                {steps.map((s) => (
                  <li key={s.step} className="flex items-center justify-between gap-4 border-t border-[var(--pf-line)] py-3">
                    <span>{s.step}</span>
                    <Score value={s.score} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section index="11" label="Success metrics">
        <div className="mb-8 rounded-lg bg-[var(--pf-fg)] p-6 text-[var(--pf-bg)]">
          <p className="pf-mono mb-2 opacity-70">North Star</p>
          <p className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-medium tracking-tight">{cs.metrics.northStar}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {cs.metrics.groups.map((g) => (
            <div key={g.label}>
              <p className="pf-mono pf-muted mb-2">{g.label}</p>
              <ul className="space-y-2">
                {g.items.map((m) => (
                  <li key={m} className="border-t border-[var(--pf-line)] pt-2 text-sm leading-relaxed">
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section index="12" label="Prioritization" title="MoSCoW, informed by RICE">
        <div className="space-y-2">
          {cs.prioritization.rows.map(([feature, reach, impact, effort, priority]) => (
            <div
              key={feature}
              className="grid items-center gap-2 rounded-lg border border-[var(--pf-line)] p-4 md:grid-cols-12 md:gap-4"
            >
              <p className="font-medium md:col-span-4">{feature}</p>
              <p className="pf-muted text-sm md:col-span-5">
                Reach {reach} · Impact {impact} · Effort {effort}
              </p>
              <span className={`pf-chip justify-self-start md:col-span-3 md:justify-self-end ${priorityTone(priority)}`}>
                {priority}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section index="13" label="Go-to-market" title="A staged rollout timed for Diwali">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {cs.rollout.map((r, i) => (
            <li key={r.title} className="rounded-lg bg-[var(--pf-surface)] p-4">
              <p className="pf-mono mb-3 flex justify-between text-[var(--pf-accent)]">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <span className="pf-muted">{r.when}</span>
              </p>
              <p className="mb-1 font-medium">{r.title}</p>
              <p className="pf-muted text-sm leading-relaxed">{r.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section index="14" label="Risks">
        <ul>
          {cs.risks.map((r) => (
            <li key={r.risk} className="grid gap-1 border-t border-[var(--pf-line)] py-4 md:grid-cols-12 md:gap-6">
              <p className="font-medium md:col-span-4">{r.risk}</p>
              <p className="pf-muted md:col-span-8">→ {r.mitigation}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section index="15" label="Future (v2+)">
        <div className="grid gap-4 sm:grid-cols-2">
          {cs.future.map((f) => (
            <div key={f.title} className="border-t border-[var(--pf-line)] pt-3">
              <p className="font-medium">{f.title}</p>
              <p className="pf-muted text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section index="16" label="Key takeaways">
        <ul className="space-y-6">
          {cs.takeaways.map((t, i) => (
            <li
              key={t}
              className={`leading-snug tracking-tight ${
                i === 0 ? 'pf-serif text-[clamp(1.8rem,3.6vw,3rem)]' : 'text-[clamp(1.1rem,1.8vw,1.4rem)]'
              }`}
            >
              {t}
            </li>
          ))}
        </ul>
      </Section>

      <Section index="17" label="Sources">
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
