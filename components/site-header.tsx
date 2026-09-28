'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { navItems, profile } from '@/lib/portfolio'

function useClock(timeZone: string) {
  const [time, setTime] = useState<string | null>(null)
  useEffect(() => {
    const format = new Intl.DateTimeFormat('en-GB', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
    const tick = () => setTime(format.format(new Date()))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [timeZone])
  return time
}

function currentTheme(): 'light' | 'dark' {
  const saved = document.documentElement.getAttribute('data-pf-theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)
  useEffect(() => setTheme(currentTheme()), [])

  const toggle = () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-pf-theme', next)
    try {
      localStorage.setItem('pf-theme', next)
    } catch {}
    setTheme(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid h-8 w-8 place-items-center rounded-full border border-[var(--pf-line)] transition-colors hover:bg-[var(--pf-fg)] hover:text-[var(--pf-bg)]"
    >
      {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  )
}

export function SiteHeader() {
  const time = useClock(profile.timezone)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--pf-line)] bg-[var(--pf-bg)]/80 backdrop-blur-md">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 items-center gap-4 px-4 py-4 sm:px-8 md:grid-cols-3">
        <Link href="/" className="text-sm font-medium tracking-tight">
          <span className="pf-roll">
            <span>{profile.name}</span>
            <span>Full-stack dev ↗</span>
          </span>
        </Link>

        <p className="pf-mono pf-muted hidden items-center gap-2 justify-self-center md:flex">
          <span className="pf-pulse inline-block h-1.5 w-1.5 rounded-full bg-[var(--pf-accent)]" />
          {profile.location.split(',')[0]}
          <span aria-live="off" className="tabular-nums">
            {time ?? '--:--:--'}
          </span>
          IST
        </p>

        <div className="flex items-center justify-self-end gap-5">
          <nav aria-label="Primary" className="hidden items-center gap-6 text-sm lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="pf-link">
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-full border border-[var(--pf-line)] lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-[var(--pf-line)] bg-[var(--pf-bg)] px-4 pb-8 pt-4 sm:px-8 lg:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item, i) => (
              <li key={item.href} className="border-b border-[var(--pf-line)]">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-4 text-3xl font-medium tracking-tight"
                >
                  {item.label}
                  <span className="pf-mono pf-muted">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
