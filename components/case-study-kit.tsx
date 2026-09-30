import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'

/** Shared building blocks for the long-form product case studies. */

export function Section({ index, label, title, children }: { index: string; label: string; title?: ReactNode; children: ReactNode }) {
  return (
    <Reveal as="section" className="grid grid-cols-1 gap-6 border-t border-[var(--pf-line)] py-12 md:grid-cols-12 md:py-16">
      <h2 className="pf-mono pf-muted md:col-span-3">
        {index} — {label}
      </h2>
      <div className="min-w-0 md:col-span-9">
        {title && <p className="mb-8 text-[clamp(1.5rem,3vw,2.4rem)] font-medium leading-[1.1] tracking-[-0.03em]">{title}</p>}
        {children}
      </div>
    </Reveal>
  )
}

export function Table({ columns, rows, highlight }: { columns: string[]; rows: string[][]; highlight?: number }) {
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
                  <dd className={highlight === i + 1 ? 'font-medium' : ''}>{cell}</dd>
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
                    highlight === i ? 'font-medium' : i > 0 ? 'pf-muted' : ''
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
