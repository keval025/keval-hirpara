'use client'

import { useId, useState } from 'react'
import { unitEconomics } from '@/lib/case-studies/ola-parivaar'

/**
 * Per-pod daily economics from the Ola Parivaar case study.
 * Revenue = trips × fare; break-even trips = daily cost ÷ fare.
 */

const inr = (n: number) => `₹${Math.round(n).toLocaleString('en-IN')}`

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

export function PodEconomics() {
  const [trips, setTrips] = useState(unitEconomics.tripsPerDay)
  const [fare, setFare] = useState(unitEconomics.avgFare)
  const [cost, setCost] = useState(unitEconomics.dailyCost)

  const revenue = trips * fare
  const margin = revenue - cost
  const breakEvenExact = cost / fare
  const breakEven = Math.round(breakEvenExact)
  const headroom = trips / breakEvenExact

  const reset = () => {
    setTrips(unitEconomics.tripsPerDay)
    setFare(unitEconomics.avgFare)
    setCost(unitEconomics.dailyCost)
  }

  const tiles = [
    { label: 'Daily margin per pod', value: `${margin < 0 ? '−' : ''}${inr(Math.abs(margin))}` },
    { label: 'Revenue per pod / day', value: inr(revenue) },
    { label: 'Break-even trips / day', value: `≈ ${breakEven}` },
    { label: 'Target vs break-even', value: `${headroom.toFixed(1)}×` },
  ]

  // Share of the target trips needed to break even, capped for the bar.
  const breakEvenPct = Math.min(100, (breakEvenExact / Math.max(trips, 1)) * 100)

  return (
    <div className="grid gap-8 rounded-lg border border-[var(--pf-line)] p-5 sm:p-6 lg:grid-cols-2">
      <div className="space-y-6">
        <Slider label="Rider-trips per pod per day" value={trips} min={20} max={200} step={5} display={String(trips)} onChange={setTrips} />
        <Slider label="Average fare" value={fare} min={15} max={120} step={1} display={inr(fare)} onChange={setFare} />
        <Slider
          label="Daily cost per pod"
          value={cost}
          min={1000}
          max={6000}
          step={20}
          display={inr(cost)}
          onChange={setCost}
        />
        <button type="button" onClick={reset} className="pf-chip hover:border-[var(--pf-fg)]">
          Reset to case-study values
        </button>
      </div>

      <div className="content-start space-y-4" aria-live="polite">
        <div className="grid gap-3 sm:grid-cols-2">
          {tiles.map((t, i) => (
            <div
              key={t.label}
              className={`rounded-lg p-4 ${i === 0 ? 'bg-[var(--pf-fg)] text-[var(--pf-bg)]' : 'bg-[var(--pf-surface)]'}`}
            >
              <p className={`pf-mono mb-2 ${i === 0 ? 'opacity-70' : 'pf-muted'}`}>{t.label}</p>
              <p className="text-2xl font-medium tabular-nums tracking-tight">{t.value}</p>
            </div>
          ))}
        </div>
        <div>
          <div className="pf-muted mb-1.5 flex justify-between text-xs">
            <span>Break-even at ≈ {breakEven} trips</span>
            <span>{trips} trips planned</span>
          </div>
          <div className="relative h-3 rounded-full bg-[var(--pf-line)]" role="img" aria-label={`Break-even needs ${breakEven} of ${trips} planned trips`}>
            <div className="h-3 rounded-full bg-[var(--pf-chart)]" style={{ width: `${breakEvenPct}%` }} />
          </div>
          <p className="pf-muted mt-3 text-xs leading-relaxed">
            {margin >= 0
              ? `Every trip past ${breakEven} is margin. Case-study plan: 120 trips at ₹45 against about ₹2,940 of daily cost.`
              : `Below break-even: the pod needs about ${Math.ceil(breakEvenExact) - trips} more trips a day at this fare and cost.`}
          </p>
        </div>
      </div>
    </div>
  )
}
