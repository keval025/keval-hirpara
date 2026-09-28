import type { ReactNode } from 'react'

export function SectionHeading({
  index,
  label,
  title,
  aside,
}: {
  index: string
  label: string
  title: ReactNode
  aside?: ReactNode
}) {
  return (
    <div className="mb-10 grid gap-6 border-t border-[var(--pf-line)] pt-5 md:mb-14 md:grid-cols-12">
      <p className="pf-mono pf-muted md:col-span-3">
        ({index}) {label}
      </p>
      <h2 className="pf-display text-[clamp(2.4rem,6vw,5.5rem)] md:col-span-6">{title}</h2>
      {aside && <div className="pf-muted self-end text-sm md:col-span-3 md:text-right">{aside}</div>}
    </div>
  )
}
