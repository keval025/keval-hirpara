'use client'

import { useId, useState } from 'react'
import { model } from '@/lib/case-studies/embodied-ai-data-quality'

/**
 * Lets a reader plug in their own program numbers and see the waste,
 * savings, and payback from the case study's model.
 * Waste = hours × (1 − yield) × cost/hour. Build cost defaults to 12 pw × $2,000.
 */

const usd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`
const usdCents = (n: number) => `$${n.toFixed(2)}`

function Slider({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  display: string
  onChange: (v: number) => void
}) {
  const id = useId()
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between gap-4 text-sm">
        <span className="pf-muted">{label}</span>
        <span className="font-medium tabular-nums">{display}</span>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--pf-accent)]"
      />
    </div>
  )
}

export function YieldCalculator() {
  const [hours, setHours] = useState(model.hoursPerMonth)
  const [before, setBefore] = useState(model.yieldBefore)
  const [after, setAfter] = useState(model.yieldAfter)
  const [cost, setCost] = useState(model.costPerHour)
  const buildCost = model.buildCost

  const target = Math.max(after, before)
  const wasteBefore = hours * (1 - before / 100) * cost
  const wasteAfter = hours * (1 - target / 100) * cost
  const savings = wasteBefore - wasteAfter
  const extraHours = hours * ((target - before) / 100)
  const payback = savings > 0 ? buildCost / savings : null
  const cpuBefore = (hours * cost) / (hours * (before / 100))
  const cpuAfter = (hours * cost) / (hours * (target / 100))

  const reset = () => {
    setHours(model.hoursPerMonth)
    setBefore(model.yieldBefore)
    setAfter(model.yieldAfter)
    setCost(model.costPerHour)
  }

  const tiles = [
    { label: 'Monthly savings', value: usd(savings) },
    { label: 'Extra usable hours / month', value: `+${Math.round(extraHours).toLocaleString('en-US')}` },
    { label: 'Cost per usable hour', value: `${usdCents(cpuBefore)} → ${usdCents(cpuAfter)}` },
    { label: 'Payback on a $24k MVP', value: payback === null ? '—' : `${payback.toFixed(1)} months` },
  ]

  return (
    <div className="grid gap-8 rounded-lg border border-[var(--pf-line)] p-5 sm:p-6 lg:grid-cols-2">
      <div className="space-y-6">
        <Slider
          label="Hours recorded per month"
          value={hours}
          min={200}
          max={5000}
          step={100}
          display={hours.toLocaleString('en-US')}
          onChange={setHours}
        />
        <Slider label="Usable yield today" value={before} min={30} max={95} step={1} display={`${before}%`} onChange={setBefore} />
        <Slider
          label="Usable yield with on-site checks"
          value={target}
          min={30}
          max={99}
          step={1}
          display={`${target}%`}
          onChange={(v) => setAfter(Math.max(v, before))}
        />
        <Slider label="Fully loaded cost per hour" value={cost} min={10} max={120} step={1} display={usd(cost)} onChange={setCost} />
        <button type="button" onClick={reset} className="pf-chip hover:border-[var(--pf-fg)]">
          Reset to case-study values
        </button>
      </div>

      <div className="grid content-start gap-3 sm:grid-cols-2" aria-live="polite">
        {tiles.map((t, i) => (
          <div key={t.label} className={`rounded-lg p-4 ${i === 0 ? 'bg-[var(--pf-fg)] text-[var(--pf-bg)]' : 'bg-[var(--pf-surface)]'}`}>
            <p className={`pf-mono mb-2 ${i === 0 ? 'opacity-70' : 'pf-muted'}`}>{t.label}</p>
            <p className="text-2xl font-medium tabular-nums tracking-tight">{t.value}</p>
          </div>
        ))}
        <p className="pf-muted text-xs leading-relaxed sm:col-span-2">
          Wasted spend goes from {usd(wasteBefore)} to {usd(wasteAfter)} a month. Waste = hours × (1 − yield) × cost per
          hour; build cost assumes 12 person-weeks at $2,000.
        </p>
      </div>
    </div>
  )
}
