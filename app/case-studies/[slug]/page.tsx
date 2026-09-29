import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { EmbodiedDataCaseStudy } from '@/components/embodied-data-case-study'
import { ProjectCover } from '@/components/project-cover'
import { WhatsAppCaseStudy } from '@/components/whatsapp-case-study'
import { caseStudies, projects } from '@/lib/portfolio'

type Props = { params: Promise<{ slug: string }> }

/** Bespoke layouts for `format: 'product'` case studies, keyed by slug. */
const productBodies: Record<string, React.ComponentType> = {
  'whatsapp-scheduled-messages': WhatsAppCaseStudy,
  'embodied-ai-data-quality': EmbodiedDataCaseStudy,
}

export const dynamicParams = false

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)
  if (!study) return {}
  return { title: `${study.title} — Case study`, description: study.tagline }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const index = caseStudies.findIndex((s) => s.slug === slug)
  if (index === -1) notFound()

  const study = caseStudies[index]
  const ProductBody = productBodies[study.slug]
  const project = projects.find((p) => p.slug === study.slug)!
  const next = caseStudies[(index + 1) % caseStudies.length]
  const nextProject = projects.find((p) => p.slug === next.slug)!

  const meta = [
    { label: 'Role', value: study.role },
    { label: 'Timeline', value: study.timeline },
    { label: study.stackLabel ?? 'Stack', value: study.stack.join(', ') },
  ]

  return (
    <article>
      <header className="mx-auto max-w-[1440px] px-4 pt-10 sm:px-8 md:pt-16">
        <Link href="/#case-studies" className="pf-mono pf-muted pf-link mb-10 inline-flex items-center gap-2">
          <ArrowLeft size={12} /> All case studies
        </Link>
        <p className="pf-mono pf-muted mb-4">
          Case study {String(index + 1).padStart(2, '0')} / {String(caseStudies.length).padStart(2, '0')}
        </p>
        <h1
          className={`pf-display ${
            study.title.length > 32 ? 'max-w-6xl text-[clamp(2.4rem,6.5vw,6rem)]' : 'text-[clamp(3.2rem,11vw,10rem)]'
          }`}
        >
          <span className="pf-rise">
            <span>{study.title}</span>
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-[clamp(1.3rem,2.6vw,2rem)] leading-tight tracking-tight">{study.tagline}</p>

        <dl className="mt-12 grid gap-6 border-t border-[var(--pf-line)] pt-6 sm:grid-cols-2 md:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="pf-mono pf-muted mb-2">{m.label}</dt>
              <dd className="text-sm">{m.value}</dd>
            </div>
          ))}
          <div>
            <dt className="pf-mono pf-muted mb-2">Links</dt>
            <dd className="flex flex-col gap-1 text-sm">
              {study.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="pf-link self-start">
                  {l.label} ↗
                </a>
              ))}
            </dd>
          </div>
        </dl>
      </header>

      <div className="mx-auto mt-12 max-w-[1440px] px-4 sm:px-8">
        <ProjectCover project={project} className="aspect-[16/9] w-full rounded-lg md:aspect-[21/9]" />
      </div>

      {study.format === 'product' ? (
        ProductBody && <ProductBody />
      ) : (
        <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-8 md:py-28">
          <CaseSection label="Overview">
            <p className="text-[clamp(1.25rem,2.2vw,1.75rem)] leading-snug tracking-tight">{study.overview}</p>
          </CaseSection>

          <CaseSection label="The problem">
            <p className="text-lg leading-relaxed">{study.problem}</p>
          </CaseSection>

          <CaseSection label="Approach">
            <ol className="grid gap-10 md:grid-cols-3 md:gap-6">
              {study.approach.map((step, i) => (
                <li key={step.title} className="list-none">
                  <Reveal delay={i * 100} className="border-t border-[var(--pf-line)] pt-4">
                    <p className="pf-mono mb-3 text-[var(--pf-accent)]">{String(i + 1).padStart(2, '0')}</p>
                    <h3 className="mb-2 text-xl font-medium tracking-tight">{step.title}</h3>
                    <p className="pf-muted leading-relaxed">{step.body}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </CaseSection>

          <CaseSection label="Key decisions">
            <ul className="space-y-4">
              {study.decisions.map((d) => (
                <li key={d} className="flex gap-4 text-lg leading-relaxed">
                  <span className="text-[var(--pf-accent)]">✳</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection label="Outcome">
            <ul className="space-y-4">
              {study.outcome.map((o) => (
                <li key={o} className="border-b border-[var(--pf-line)] pb-4 text-lg leading-relaxed">
                  {o}
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection label="What I learned">
            <blockquote className="pf-serif text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.1] tracking-tight">
              “{study.learned}”
            </blockquote>
          </CaseSection>
        </div>
      )}

      <Link
        href={`/case-studies/${next.slug}`}
        className="group block border-t border-[var(--pf-line)]"
      >
        <div className="mx-auto grid max-w-[1440px] items-end gap-8 px-4 py-16 sm:px-8 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <p className="pf-mono pf-muted mb-4">Next case study</p>
            <p className="pf-display flex items-center gap-4 text-[clamp(2.6rem,8vw,7rem)]">
              {next.title}
              <ArrowRight className="h-[0.6em] w-[0.6em] shrink-0 transition-transform duration-500 group-hover:translate-x-3" />
            </p>
          </div>
          <div className="overflow-hidden rounded-lg md:col-span-5">
            <ProjectCover
              project={nextProject}
              className="aspect-[16/10] w-full transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </Link>
    </article>
  )
}

function CaseSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="grid gap-6 border-t border-[var(--pf-line)] py-10 md:grid-cols-12 md:py-14">
      <h2 className="pf-mono pf-muted md:col-span-3">{label}</h2>
      <div className="md:col-span-8 md:col-start-5">{children}</div>
    </Reveal>
  )
}
