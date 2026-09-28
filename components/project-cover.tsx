import type { Project } from '@/lib/portfolio'

/**
 * Generated cover art so projects don't need screenshots: the project's two
 * palette colors, a fine grid, and the title set large.
 */
export function ProjectCover({
  project,
  className = '',
}: {
  project: Pick<Project, 'title' | 'palette' | 'kind'>
  className?: string
}) {
  const [base, ink] = project.palette
  return (
    <div
      aria-hidden
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 110%, ${ink} 0%, transparent 55%), ${base}`,
        color: ink,
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `linear-gradient(${ink} 1px, transparent 1px), linear-gradient(90deg, ${ink} 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute inset-x-5 top-4 flex justify-between font-mono text-[10px] uppercase tracking-wider opacity-80 mix-blend-difference text-white">
        <span>{project.kind}</span>
        <span>●</span>
      </div>
      <p
        className="absolute bottom-3 left-5 right-5 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[0.9] tracking-[-0.05em] mix-blend-difference text-white"
      >
        {project.title}
      </p>
    </div>
  )
}
