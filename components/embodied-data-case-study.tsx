import { BarChart } from '@/components/bar-chart'
import { Section, Table } from '@/components/case-study-kit'
import { YieldCalculator } from '@/components/yield-calculator'
import * as cs from '@/lib/case-studies/embodied-ai-data-quality'

export function EmbodiedDataCaseStudy() {
  const totalCost = cs.costPerHour.reduce((sum, c) => sum + c.usd, 0)

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-8 md:py-24">
      <p className="pf-muted mb-12 max-w-2xl border-l-2 border-[var(--pf-accent)] pl-4 text-sm">{cs.disclaimer}</p>

      <Section index="00" label="Summary" title={cs.headline}>
        <dl className="grid gap-px overflow-hidden rounded-lg border border-[var(--pf-line)] bg-[var(--pf-line)] sm:grid-cols-2 lg:grid-cols-3">
          {cs.summary.map((s) => (
            <div key={s.label} className="bg-[var(--pf-bg)] p-5">
              <dt className="pf-mono mb-2 text-[var(--pf-accent)]">{s.label}</dt>
              <dd className="leading-relaxed">{s.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section index="01" label="Context" title="Why real-world data matters">
        <div className="mb-10 grid gap-6 sm:grid-cols-2">
          {cs.context.map((c) => (
            <div key={c.title} className="border-t border-[var(--pf-line)] pt-3">
              <p className="mb-1 font-medium">{c.title}</p>
              <p className="pf-muted text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="pf-mono pf-muted mb-3">How this data is collected at scale</p>
        <Table columns={cs.collectionMethods.columns} rows={cs.collectionMethods.rows} />
      </Section>

      <Section index="02" label="The problem" title="Five hand-offs before anyone checks the data">
        <ol className="mb-3 flex flex-wrap items-stretch gap-2">
          {cs.pipeline.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <span className="rounded-md bg-[var(--pf-surface)] px-3 py-2 text-sm">
                <span className="pf-mono pf-muted mr-2">{i + 1}</span>
                {step}
              </span>
              <span aria-hidden className="pf-muted">
                →
              </span>
            </li>
          ))}
          <li className="rounded-md bg-[var(--pf-fg)] px-3 py-2 text-sm text-[var(--pf-bg)]">Usable or discarded</li>
        </ol>
        <p className="pf-mono mb-10 text-[var(--pf-accent)]">↳ verdict arrives ~15–20 days after recording</p>

        <p className="mb-4 leading-relaxed">{cs.setting}</p>
        <blockquote className="pf-serif mb-10 text-[clamp(1.6rem,3.4vw,2.8rem)] leading-[1.15] tracking-tight">
          “{cs.problemStatement}”
        </blockquote>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="pf-mono pf-muted mb-3">Cost of one failed hour</p>
            <ul>
              {cs.costPerHour.map((c) => (
                <li key={c.item} className="flex justify-between border-t border-[var(--pf-line)] py-2 text-sm">
                  <span>{c.item}</span>
                  <span className="tabular-nums">${c.usd}</span>
                </li>
              ))}
              <li className="flex justify-between border-t-2 border-[var(--pf-fg)] py-2 font-medium">
                <span>Fully loaded</span>
                <span className="tabular-nums">${totalCost}</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center rounded-lg bg-[var(--pf-fg)] p-6 text-[var(--pf-bg)]">
            <p className="pf-mono mb-2 opacity-70">Monthly waste</p>
            <p className="pf-display text-[clamp(3rem,6vw,5rem)]">$15,360</p>
            <p className="mt-2 text-sm opacity-80">1,200 h × 32% × ${totalCost} — before counting the delay to the ML team.</p>
          </div>
        </div>
      </Section>

      <Section index="03" label="Stakeholders" title={cs.designGoal}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cs.stakeholders.map((s) => (
            <div key={s.who} className="rounded-lg border border-[var(--pf-line)] p-5">
              <p className="mb-3 flex items-center justify-between gap-2 font-medium">
                {s.who}
                {s.primary && <span className="pf-chip text-[var(--pf-accent)]">Primary user</span>}
              </p>
              <dl className="space-y-2 text-sm">
                <div>
                  <dt className="pf-muted">Wants</dt>
                  <dd>{s.wants}</dd>
                </div>
                <div>
                  <dt className="pf-muted">Pain today</dt>
                  <dd>{s.pain}</dd>
                </div>
                <div>
                  <dt className="pf-muted">Tension</dt>
                  <dd>{s.tension}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </Section>

      <Section index="04" label="North star" title="Usable yield = usable hours delivered ÷ hours recorded">
        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          {cs.northStarWhy.map((w) => (
            <div key={w.q} className="rounded-lg bg-[var(--pf-surface)] p-4">
              <p className="font-medium">{w.q}</p>
              <p className="pf-muted text-sm">{w.a}</p>
            </div>
          ))}
        </div>

        <p className="pf-mono pf-muted mb-4">Metric tree</p>
        <div className="mb-10">
          <p className="inline-block rounded-md bg-[var(--pf-fg)] px-4 py-2 font-medium text-[var(--pf-bg)]">{cs.metricTree.root}</p>
          <div className="ml-4 grid gap-6 border-l border-[var(--pf-line)] pl-6 pt-4 md:grid-cols-2">
            {cs.metricTree.branches.map((b) => (
              <div key={b.label}>
                <p className="mb-2 inline-block rounded-md border border-[var(--pf-fg)] px-3 py-1.5 text-sm font-medium">{b.label}</p>
                <ul className="ml-3 space-y-1.5 border-l border-[var(--pf-line)] pl-4">
                  {b.leaves.map((l) => (
                    <li key={l} className="pf-muted text-sm">
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="pf-muted mt-4 text-sm">
            Each leaf gets an input metric the team can move directly, such as sensor dropout rate or sync offset per session.
          </p>
        </div>

        <p className="pf-mono pf-muted mb-3">Supporting & guardrail metrics</p>
        <Table columns={cs.metrics.columns} rows={cs.metrics.rows} highlight={3} />
      </Section>

      <Section index="05" label="Root cause analysis" title="70% of lost hours come from three causes — all detectable within minutes">
        <p className="pf-muted mb-8 max-w-2xl leading-relaxed">{cs.rcaMethod}</p>
        <BarChart
          title="Share of lost hours by root cause"
          unit="%"
          max={30}
          columns={['Root cause', 'Share', 'Example', 'Detectable on site?']}
          bars={cs.rootCauses.map((r, i) => ({
            label: r.cause,
            value: r.share,
            emphasis: i < 3,
            details: [
              { label: 'Example', value: r.example },
              { label: 'Detectable on site', value: r.onSite },
            ],
          }))}
        />
        <p className="mt-8 rounded-lg bg-[var(--pf-surface)] p-4 leading-relaxed">
          <span className="font-medium">What interviews add: </span>
          {cs.interviewInsight}
        </p>
      </Section>

      <Section index="06" label="Key insight" title="When a failure is found matters as much as what it is">
        <ol className="space-y-2">
          {cs.latency.map((l) => (
            <li key={l.when} className="grid items-center gap-3 rounded-lg border border-[var(--pf-line)] p-4 md:grid-cols-12">
              <span className="font-medium md:col-span-3">{l.when}</span>
              <span className="flex gap-1 md:col-span-2" aria-label={`Cost level ${l.level} of 5`}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <span
                    key={n}
                    className="h-2 flex-1 rounded-full"
                    style={{ background: n <= l.level ? 'var(--pf-chart)' : 'var(--pf-line)' }}
                  />
                ))}
              </span>
              <span className="text-sm md:col-span-4">{l.cost}</span>
              <span className="pf-muted text-sm md:col-span-3">{l.fix}</span>
            </li>
          ))}
        </ol>
        <p className="pf-muted mt-6 max-w-2xl leading-relaxed">{cs.latencyNote}</p>
      </Section>

      <Section index="07" label="Prioritization" title="Six options, scored with RICE">
        <BarChart
          title="RICE score by solution (MVP picks at full strength)"
          columns={['Solution', 'RICE', 'What it does', 'Targets', 'Impact', 'Confidence', 'Effort']}
          bars={cs.solutions.map((s) => ({
            label: s.name,
            value: s.rice,
            emphasis: s.mvp,
            details: [
              { label: 'What it does', value: s.does },
              { label: 'Targets', value: s.targets },
              { label: 'Impact', value: String(s.impact) },
              { label: 'Confidence', value: `${s.confidence}%` },
              { label: 'Effort', value: `${s.effort} person-weeks` },
            ],
          }))}
        />
        <p className="pf-muted mt-3 text-xs">{cs.riceNote}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {cs.whyNot.map((w) => (
            <div key={w.q} className="border-t border-[var(--pf-line)] pt-3">
              <p className="mb-1 font-medium">{w.q}</p>
              <p className="pf-muted text-sm leading-relaxed">{w.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section index="08" label="MVP" title="Two 60-second screens and one gate — no new hardware">
        <div className="grid gap-10 lg:grid-cols-2">
          <ol className="relative ml-3 border-l border-[var(--pf-line)]">
            {cs.mvpFlow.map((f, i) => (
              <li key={i} className="relative pb-5 pl-8 last:pb-0">
                <span
                  className={`absolute -left-[7px] top-1 h-3.5 w-3.5 border-2 border-[var(--pf-bg)] ${
                    f.kind === 'gate' ? 'rotate-45 bg-[var(--pf-accent)]' : 'rounded-full bg-[var(--pf-fg)]'
                  }`}
                />
                <p className={f.kind === 'gate' ? 'font-medium' : ''}>{f.text}</p>
                {f.fail && <p className="pf-mono pf-muted mt-1 normal-case">✕ Fail → {f.fail}</p>}
              </li>
            ))}
          </ol>
          <div className="space-y-8">
            <div>
              <p className="pf-mono pf-muted mb-3">In scope</p>
              <ul className="space-y-2">
                {cs.inScope.map((s) => (
                  <li key={s} className="flex gap-3 text-sm leading-relaxed">
                    <span className="text-[var(--pf-accent)]">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="pf-mono pf-muted mb-3">Out of scope for MVP</p>
              <ul className="flex flex-wrap gap-2">
                {cs.outOfScope.map((s) => (
                  <li key={s} className="pf-chip pf-muted">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section index="09" label="Experiment" title="A 4-week pilot, 10 vs. 10 collectors">
        <dl className="mb-8 grid gap-x-8 sm:grid-cols-2">
          {cs.experiment.map(([k, v]) => (
            <div key={k} className="border-t border-[var(--pf-line)] py-3">
              <dt className="pf-mono pf-muted mb-1">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <p className="pf-mono pf-muted mb-3">Success criteria — decided before the pilot starts</p>
        <ul className="mb-6 space-y-2">
          {cs.successCriteria.map((s) => (
            <li key={s} className="flex gap-4 rounded-lg bg-[var(--pf-surface)] px-4 py-3">
              <span className="text-[var(--pf-accent)]">✓</span>
              {s}
            </li>
          ))}
        </ul>
        <p className="pf-muted leading-relaxed">{cs.rolloutPlan}</p>
      </Section>

      <Section index="10" label="Risks" title="Every check must be fast, specific and fixable">
        <ul className="mb-8">
          {cs.risks.map((r) => (
            <li key={r.risk} className="grid gap-1 border-t border-[var(--pf-line)] py-4 md:grid-cols-12 md:gap-6">
              <p className="font-medium md:col-span-4">{r.risk}</p>
              <p className="pf-muted text-sm md:col-span-3">{r.why}</p>
              <p className="text-sm md:col-span-5">→ {r.mitigation}</p>
            </li>
          ))}
        </ul>
        <p className="pf-serif text-[clamp(1.4rem,2.6vw,2rem)] leading-snug">{cs.coreTradeoff}</p>
      </Section>

      <Section index="11" label="Expected impact" title="25% more usable data from the same budget">
        <Table columns={cs.impact.columns} rows={cs.impact.rows} highlight={3} />
        <p className="pf-muted mb-10 mt-4">{cs.payback}</p>
        <p className="pf-mono pf-muted mb-4">Try it with your own numbers</p>
        <YieldCalculator />
      </Section>

      <Section index="12" label="Learnings" title="Frame quality as a pipeline problem, not a QA problem">
        <ul className="mb-10 space-y-4">
          {cs.learnings.map((l) => (
            <li key={l} className="border-t border-[var(--pf-line)] pt-4 text-lg leading-snug">
              {l}
            </li>
          ))}
        </ul>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="pf-mono pf-muted mb-2">What I’d do differently</p>
            <p className="leading-relaxed">{cs.differently}</p>
          </div>
          <div>
            <p className="pf-mono pf-muted mb-2">Next steps after the MVP</p>
            <ol className="space-y-1.5">
              {cs.nextSteps.map((n, i) => (
                <li key={n} className="flex gap-3 text-sm leading-relaxed">
                  <span className="pf-mono text-[var(--pf-accent)]">{i + 1}</span>
                  {n}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section index="13" label="References">
        <p className="pf-muted mb-4 text-sm">
          Numbers about the collection program (hours, costs, failure shares) are illustrative assumptions, not sourced figures.
        </p>
        <ul className="space-y-2 text-sm">
          {cs.references.map((r) => (
            <li key={r.href}>
              <a href={r.href} target="_blank" rel="noreferrer" className="pf-link">
                {r.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  )
}
