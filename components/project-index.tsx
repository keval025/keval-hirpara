'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/portfolio'
import { ProjectCover } from './project-cover'

/**
 * Indexed project list. On devices with a fine pointer, hovering a row shows a
 * floating cover that trails the cursor.
 */
export function ProjectIndex({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<number | null>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const frame = useRef<number | null>(null)

  const animate = () => {
    const el = previewRef.current
    if (!el) return
    current.current.x += (target.current.x - current.current.x) * 0.18
    current.current.y += (target.current.y - current.current.y) * 0.18
    el.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`
    frame.current = requestAnimationFrame(animate)
  }

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return
    target.current = { x: e.clientX, y: e.clientY }
    if (frame.current === null) {
      current.current = { ...target.current }
      frame.current = requestAnimationFrame(animate)
    }
  }

  const onLeave = () => {
    setActive(null)
    if (frame.current !== null) cancelAnimationFrame(frame.current)
    frame.current = null
  }

  return (
    <div onPointerMove={onMove} onPointerLeave={onLeave} className="relative">
      <div className="pf-mono pf-muted hidden grid-cols-12 gap-4 border-b border-[var(--pf-line)] pb-3 md:grid">
        <span className="col-span-1">No.</span>
        <span className="col-span-4">Project</span>
        <span className="col-span-4">Type</span>
        <span className="col-span-2">Stack</span>
        <span className="col-span-1 text-right">Year</span>
      </div>

      <ul>
        {projects.map((project, i) => {
          const internal = project.caseStudy
          const href = internal ? `/case-studies/${project.slug}` : project.href
          const dimmed = active !== null && active !== i
          const row = (
            <div
              className={`grid grid-cols-12 items-baseline gap-4 border-b border-[var(--pf-line)] py-5 transition-[opacity,padding] duration-500 md:py-7 ${
                dimmed ? 'md:opacity-30' : ''
              } ${active === i ? 'md:pl-3' : ''}`}
            >
              <span className="pf-mono pf-muted col-span-2 md:col-span-1">{String(i + 1).padStart(2, '0')}</span>
              <span className="col-span-10 md:col-span-4">
                <span className="flex items-center gap-2 text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                  {project.title}
                  {internal ? (
                    <span className="pf-chip ml-1 hidden sm:inline-flex">Case study</span>
                  ) : href ? (
                    <ArrowUpRight size={18} className="pf-muted" />
                  ) : (
                    <span className="pf-chip pf-muted ml-1 hidden sm:inline-flex">Internal</span>
                  )}
                </span>
                <span className="pf-muted mt-1 block text-sm md:hidden">{project.summary}</span>
              </span>
              <span className="pf-muted col-span-4 hidden text-sm md:block">{project.summary}</span>
              <span className="pf-mono pf-muted col-span-10 col-start-3 md:col-span-2 md:col-start-auto">
                {project.stack.slice(0, 2).join(' · ')}
              </span>
              <span className="pf-mono pf-muted col-span-1 hidden text-right md:block">{project.year}</span>
            </div>
          )
          return (
            <li key={project.slug} onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(i)}>
              {internal ? (
                <Link href={href!} className="block">
                  {row}
                </Link>
              ) : href ? (
                <a href={href} target="_blank" rel="noreferrer" className="block">
                  {row}
                </a>
              ) : (
                row
              )}
            </li>
          )
        })}
      </ul>

      <div
        ref={previewRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-30 hidden w-[340px] transition-opacity duration-300 md:block ${
          active === null ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {active !== null && (
          <ProjectCover project={projects[active]} className="aspect-[4/3] w-full rounded-md shadow-2xl" />
        )}
      </div>
    </div>
  )
}
