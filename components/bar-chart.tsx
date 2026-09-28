'use client'

import { useState } from 'react'

export type Bar = {
  label: string
  value: number
  /** Extra lines shown in the hover tooltip and the table view. */
  details?: { label: string; value: string }[]
  /** Draw this bar at full strength; others recede. Defaults to all emphasized. */
  emphasis?: boolean
}

/**
 * Single-series horizontal bar chart. One hue (--pf-chart), 20px bars with a
 * 4px rounded data end, value at the tip, hover tooltip, and a table view.
 */
export function BarChart({
  title,
  bars,
  unit = '',
  max,
  columns,
}: {
  title: string
  bars: Bar[]
  /** Appended to every value, e.g. "%". */
  unit?: string
  max?: number
  /** Column headers for the table view: [label, value, ...detail labels]. */
  columns: string[]
}) {
  const [hover, setHover] = useState<number | null>(null)
  const [table, setTable] = useState(false)
  const top = max ?? Math.max(...bars.map((b) => b.value))
  const format = (v: number) => `${v.toLocaleString('en-US')}${unit}`

  return (
    <figure>
      <figcaption className="mb-4 flex items-baseline justify-between gap-4">
        <span className="pf-mono pf-muted">{title}</span>
        <button
          type="button"
          onClick={() => setTable((t) => !t)}
          className="pf-mono pf-muted pf-link shrink-0"
          aria-pressed={table}
        >
          {table ? 'Show chart' : 'Show table'}
        </button>
      </figcaption>

      {table ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr>
                {columns.map((c) => (
                  <th key={c} className="pf-mono pf-muted border-b border-[var(--pf-line)] py-2 pr-4 font-normal">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bars.map((b) => (
                <tr key={b.label} className="align-top">
                  <td className="border-b border-[var(--pf-line)] py-2 pr-4 font-medium">{b.label}</td>
                  <td className="border-b border-[var(--pf-line)] py-2 pr-4 tabular-nums">{format(b.value)}</td>
                  {b.details?.map((d) => (
                    <td key={d.label} className="pf-muted border-b border-[var(--pf-line)] py-2 pr-4">
                      {d.value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <ul className="space-y-1" onPointerLeave={() => setHover(null)}>
          {bars.map((b, i) => {
            const pct = (b.value / top) * 100
            const strong = b.emphasis ?? true
            return (
              <li
                key={b.label}
                className="relative grid grid-cols-[minmax(7rem,38%)_1fr] items-center gap-3 rounded-md py-1.5 sm:grid-cols-[14rem_1fr]"
                onPointerEnter={() => setHover(i)}
                onFocus={() => setHover(i)}
                onBlur={() => setHover(null)}
                tabIndex={0}
                aria-label={`${b.label}: ${format(b.value)}`}
              >
                <span className={`text-sm leading-tight ${hover === i ? '' : strong ? '' : 'pf-muted'}`}>{b.label}</span>
                <span className="flex items-center gap-2">
                  <span
                    className="h-5 rounded-r-[4px] transition-opacity duration-200"
                    style={{
                      width: `${Math.max(pct, 1)}%`,
                      background: 'var(--pf-chart)',
                      opacity: hover === null ? (strong ? 1 : 0.35) : hover === i ? 1 : 0.3,
                    }}
                  />
                  <span className="shrink-0 text-sm tabular-nums">{format(b.value)}</span>
                </span>

                {hover === i && b.details && (
                  <span
                    role="tooltip"
                    className="pointer-events-none absolute left-[38%] top-full z-10 mt-1 w-64 rounded-md border border-[var(--pf-line)] bg-[var(--pf-bg)] p-3 text-xs shadow-lg sm:left-[14rem]"
                  >
                    <span className="mb-1.5 block font-medium">{b.label}</span>
                    {b.details.map((d) => (
                      <span key={d.label} className="block">
                        <span className="pf-muted">{d.label}: </span>
                        {d.value}
                      </span>
                    ))}
                  </span>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </figure>
  )
}
