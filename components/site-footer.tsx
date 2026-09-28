import Link from 'next/link'
import { navItems, profile } from '@/lib/portfolio'

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--pf-line)]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-12 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="pf-mono pf-muted mb-4">Say hello</p>
          <a
            href={`mailto:${profile.email}`}
            className="pf-link break-all text-2xl font-medium tracking-tight sm:text-3xl"
          >
            {profile.email}
          </a>
        </div>
        <div className="md:col-span-3">
          <p className="pf-mono pf-muted mb-4">Index</p>
          <ul className="space-y-1.5 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="pf-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="pf-mono pf-muted mb-4">Elsewhere</p>
          <ul className="space-y-1.5 text-sm">
            {profile.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer" className="pf-link">
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-2 px-4 pb-8 sm:px-8">
        <p className="pf-mono pf-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="pf-mono pf-muted">Designed & built in {profile.location.split(',')[0]}</p>
      </div>
    </footer>
  )
}
