'use client'

import { useState } from 'react'
import { ArrowRight, Check, Loader2 } from 'lucide-react'

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const topics = ['AI PM role', 'Product collaboration', 'Feedback on a case study', 'Just saying hi']

type Status = 'idle' | 'sending' | 'sent' | 'error'

/**
 * Sends through Web3Forms when NEXT_PUBLIC_WEB3FORMS_KEY is set (same setup
 * as the café forms). Without a key it opens the visitor's mail client with
 * the message pre-filled, so nothing is silently dropped.
 */
export function ContactForm({ email }: { email: string }) {
  const [topic, setTopic] = useState(topics[0])
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const from = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (!name || !message) return setError('Please add your name and a message.')
    if (!EMAIL_PATTERN.test(from)) return setError('That email address doesn’t look right.')
    setError(null)

    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(`[Portfolio] ${topic} — ${name}`)
      const body = encodeURIComponent(`${message}\n\n— ${name} (${from})`)
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `[Portfolio] ${topic} — ${name}`,
          from_name: name,
          name,
          email: from,
          topic,
          message,
        }),
      })
      const result = await response.json().catch(() => null)
      if (!response.ok || !result?.success) throw new Error(result?.message ?? 'Request failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
      setError(`Something went wrong. You can email me directly at ${email}.`)
    }
  }

  if (status === 'sent') {
    return (
      <div className="flex min-h-[320px] flex-col justify-center gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--pf-accent)] text-[var(--pf-accent-fg)]">
          <Check size={20} />
        </span>
        <p className="text-3xl font-medium tracking-tight">Thanks — message received.</p>
        <p className="pf-muted">I usually reply within a day or two.</p>
        <button type="button" className="pf-link self-start text-sm" onClick={() => setStatus('idle')}>
          Send another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <fieldset>
        <legend className="pf-mono pf-muted mb-3">I’m reaching out about</legend>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={topic === t}
              onClick={() => setTopic(t)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                topic === t
                  ? 'border-[var(--pf-fg)] bg-[var(--pf-fg)] text-[var(--pf-bg)]'
                  : 'border-[var(--pf-line)] hover:border-[var(--pf-fg)]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="pf-mono pf-muted">Name</span>
          <input name="name" autoComplete="name" className="pf-field" placeholder="Your name" />
        </label>
        <label className="block">
          <span className="pf-mono pf-muted">Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            className="pf-field"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="block">
        <span className="pf-mono pf-muted">Message</span>
        <textarea
          name="message"
          rows={4}
          className="pf-field resize-none"
          placeholder="Tell me a little about what you have in mind…"
        />
      </label>

      {error && (
        <p role="alert" className="text-sm text-[var(--pf-accent)]">
          {error}
        </p>
      )}

      <button type="submit" className="pf-btn" disabled={status === 'sending'}>
        {status === 'sending' ? <Loader2 size={16} className="animate-spin" /> : null}
        <span className="pf-roll">
          <span>{status === 'sending' ? 'Sending…' : 'Send message'}</span>
          <span>{status === 'sending' ? 'Sending…' : 'Send message'}</span>
        </span>
        <ArrowRight size={16} />
      </button>
    </form>
  )
}
