import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'
import { PlaygroundGrid } from '@/components/playground'
import { ProjectCover } from '@/components/project-cover'
import { ProjectIndex } from '@/components/project-index'
import { SectionHeading } from '@/components/section-heading'
import { caseStudies, experience, profile, projects, skills } from '@/lib/portfolio'

const container = 'mx-auto max-w-[1440px] px-4 sm:px-8'

export default function PortfolioHome() {
  const marquee = skills.flatMap((g) => g.items)
  // Product case studies already lead the page; the index lists things built.
  const built = projects.filter((p) => !p.kind.startsWith('Product'))

  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className={`${container} pb-16 pt-10 md:pb-24 md:pt-16`}>
        <div className="pf-mono pf-muted mb-12 grid grid-cols-2 gap-4 md:mb-20 md:grid-cols-4">
          <span>Portfolio ©{new Date().getFullYear()}</span>
          <span className="hidden md:block">{profile.role}</span>
          <span className="hidden md:block">{profile.focus}</span>
          <span className="flex items-start justify-end gap-2 text-right">
            <span className="pf-pulse mt-[0.3em] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pf-accent)]" />
            {profile.status}
          </span>
        </div>

        <h1 className="pf-display text-[clamp(3.6rem,15vw,15rem)]">
          <span className="pf-rise">
            <span>Keval</span>
          </span>
          <span className="pf-rise">
            <span style={{ '--d': '120ms' } as React.CSSProperties} className="md:pl-[12vw]">
              Hirpara<span className="text-[var(--pf-accent)]">.</span>
            </span>
          </span>
        </h1>

        <div className="mt-12 grid gap-10 md:mt-20 md:grid-cols-12">
          <p className="text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.15] tracking-[-0.02em] md:col-span-7">
            AI product manager turning <em className="pf-serif text-[1.1em]">messy</em> AI problems into products
            people <em className="pf-serif text-[1.1em]">trust</em> — from the data models learn on to the features
            people use.
          </p>
          <div className="flex flex-col justify-end gap-6 md:col-span-4 md:col-start-9">
            <p className="pf-muted">
              Previously on embodied-AI and robotics datasets at{' '}
              <span className="text-[var(--pf-fg)]">
                {profile.company.name} ({profile.company.note})
              </span>
              . {profile.education.degree}, {profile.education.school}. Based in {profile.location}.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#case-studies" className="pf-btn">
                <span className="pf-roll">
                  <span>Read the case studies</span>
                  <span>Read the case studies</span>
                </span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--pf-line)] px-5 py-3 text-sm font-medium transition-colors hover:border-[var(--pf-fg)]"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- Marquee */}
      <div className="overflow-hidden border-y border-[var(--pf-line)] py-4" aria-hidden>
        <div className="pf-marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {marquee.map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center gap-8 pr-8 text-2xl tracking-tight">
                  {item}
                  <span className="text-[var(--pf-accent)]">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* --------------------------------------------------------- About */}
      <section id="about" className={`${container} scroll-mt-20 py-20 md:py-32`}>
        <SectionHeading
          index="01"
          label="About"
          title={
            <>
              Product thinking, <em className="pf-serif">with a builder’s hands.</em>
            </>
          }
        />
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="space-y-5 text-lg leading-relaxed md:col-span-5 md:col-start-4">
            {profile.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={120} className="md:col-span-4 md:col-start-9">
            <p className="pf-mono pf-muted mb-4">Experience</p>
            <ul>
              {experience.map((e) => (
                <li key={e.org} className="border-t border-[var(--pf-line)] py-4">
                  <p className="pf-mono pf-muted mb-1">{e.period}</p>
                  <p className="font-medium">{e.title}</p>
                  <p className="text-sm">{e.org}</p>
                  <p className="pf-muted mt-1 text-sm">{e.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal className="mt-16 grid gap-8 sm:grid-cols-2 md:mt-24 md:grid-cols-4">
          {skills.map((group) => (
            <div key={group.group}>
              <p className="pf-mono pf-muted mb-3 border-b border-[var(--pf-line)] pb-3">{group.group}</p>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </section>

      {/* -------------------------------------------------- Case studies */}
      <section id="case-studies" className={`${container} scroll-mt-20 py-20 md:py-32`}>
        <SectionHeading
          index="02"
          label="Case Studies"
          title={
            <>
              Product <em className="pf-serif">case studies</em>
            </>
          }
          aside="Problem framing, metrics, prioritization and rollout — the full reasoning, start to finish."
        />
        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
          {caseStudies.map((study, i) => {
            const project = projects.find((p) => p.slug === study.slug)!
            return (
              <Reveal key={study.slug} delay={(i % 2) * 120} as="article">
                <Link href={`/case-studies/${study.slug}`} className="group block">
                  <div className="overflow-hidden rounded-lg">
                    <ProjectCover
                      project={project}
                      className="aspect-[16/10] w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-6">
                    <div>
                      <p className="pf-mono pf-muted mb-2">
                        {String(i + 1).padStart(2, '0')} — {study.role}
                      </p>
                      <h3 className="text-2xl font-medium tracking-tight">{study.title}</h3>
                      <p className="pf-muted mt-1 max-w-md">{study.tagline}</p>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--pf-line)] transition-all duration-500 group-hover:rotate-45 group-hover:bg-[var(--pf-accent)] group-hover:text-[var(--pf-accent-fg)]">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ------------------------------------------------------ Projects */}
      <section id="projects" className={`${container} scroll-mt-20 py-20 md:py-32`}>
        <SectionHeading
          index="03"
          label="Projects"
          title={
            <>
              Things I’ve <em className="pf-serif">built</em>
            </>
          }
          aside={
            <>
              {built.length} projects · {built[built.length - 1].year}—{built[0].year}
              <br />
              <a href={profile.links[0].href} target="_blank" rel="noreferrer" className="pf-link text-[var(--pf-fg)]">
                All repositories on GitHub ↗
              </a>
            </>
          }
        />
        <ProjectIndex projects={built} />
      </section>

      {/* ---------------------------------------------------- Playground */}
      <section id="playground" className={`${container} scroll-mt-20 py-20 md:py-32`}>
        <SectionHeading
          index="04"
          label="Playground"
          title={
            <>
              Small experiments, <em className="pf-serif">just for fun</em>
            </>
          }
          aside={
            <Link href="/playground" className="pf-link text-[var(--pf-fg)]">
              Open the full playground →
            </Link>
          }
        />
        <PlaygroundGrid />
      </section>

      {/* ------------------------------------------------------- Contact */}
      <section id="contact" className={`${container} scroll-mt-20 py-20 md:py-32`}>
        <SectionHeading
          index="05"
          label="Contact"
          title={
            <>
              Let’s build <em className="pf-serif">something</em> together.
            </>
          }
        />
        <div className="grid gap-14 md:grid-cols-12">
          <div className="space-y-8 md:col-span-3">
            <div>
              <p className="pf-mono pf-muted mb-2">Email</p>
              <a href={`mailto:${profile.email}`} className="pf-link break-all">
                {profile.email}
              </a>
            </div>
            <div>
              <p className="pf-mono pf-muted mb-2">Location</p>
              <p>{profile.location}</p>
            </div>
            <div>
              <p className="pf-mono pf-muted mb-2">Social</p>
              <ul className="space-y-1">
                {profile.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noreferrer" className="pf-link">
                      {link.label} <span className="pf-muted">{link.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ContactForm email={profile.email} />
          </div>
        </div>
      </section>
    </>
  )
}
