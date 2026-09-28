'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, Check, Clock, Send, Undo2 } from 'lucide-react'

/**
 * Interactive concept of the proposed "Schedule message" flow:
 * long-press Send → quick picks → scheduled bubble with banner and Undo.
 * A generic chat UI — deliberately no WhatsApp logos or trademarks.
 */

const picks = [
  { id: 'midnight', label: 'Midnight', detail: '12:00 AM', when: 'Tue, 29 Sep · 12:00 AM', remote: '7:30 PM Mon in London' },
  { id: 'morning', label: 'Tomorrow', detail: '9:00 AM', when: 'Tue, 29 Sep · 9:00 AM', remote: '4:30 AM in London' },
  { id: 'hour', label: 'In 1 hour', detail: '11:15 PM', when: 'Mon, 28 Sep · 11:15 PM', remote: '6:45 PM in London' },
] as const

type Stage = 'compose' | 'menu' | 'sheet' | 'scheduled'

const GREEN = '#1f8a5b'

export function ScheduleMockup() {
  const [stage, setStage] = useState<Stage>('compose')
  const [pick, setPick] = useState<(typeof picks)[number]>(picks[0])
  const [toast, setToast] = useState(false)

  useEffect(() => {
    if (!toast) return
    const id = window.setTimeout(() => setToast(false), 3500)
    return () => window.clearTimeout(id)
  }, [toast])

  const message = 'Happy birthday Ananya!! 🎂 Have the best year ever ✨'
  const steps: Record<Stage, string> = {
    compose: 'Press and hold Send (or tap it) to open the send menu.',
    menu: 'Choose “Schedule message”.',
    sheet: 'Pick a quick time, then Schedule.',
    scheduled: 'Scheduled. Try Undo, or reset the demo.',
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div
        className="relative h-[600px] w-[300px] overflow-hidden rounded-[44px] border-[10px] border-[#111] bg-[#efeae2] shadow-2xl"
        style={{ fontFamily: 'Inter, system-ui, sans-serif', colorScheme: 'light' }}
      >
        {/* status bar */}
        <div className="flex items-center justify-between bg-[#0f5c3e] px-5 pb-1 pt-2 text-[10px] font-medium text-white">
          <span>10:15 PM</span>
          <span className="h-4 w-16 rounded-full bg-black" />
          <span>5G ▮▮</span>
        </div>
        {/* chat header */}
        <div className="flex items-center gap-2 bg-[#0f5c3e] px-3 pb-3 pt-1 text-white">
          <ArrowLeft size={16} />
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#f4b183] text-xs font-semibold text-[#5b2c0f]">
            A
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Ananya</p>
            <p className="text-[10px] opacity-80">last seen today at 9:41 PM</p>
          </div>
        </div>

        {stage === 'scheduled' && (
          <div className="flex items-center justify-center gap-1.5 bg-[#fff6d6] px-3 py-1.5 text-[11px] text-[#6b5400]">
            <Clock size={11} /> 1 scheduled message
          </div>
        )}

        {/* messages */}
        <div className="flex flex-col gap-2 px-3 py-4 text-[13px] text-[#111]">
          <p className="mx-auto rounded-md bg-white/80 px-2 py-0.5 text-[10px] text-[#555]">TODAY</p>
          <div className="max-w-[80%] self-start rounded-lg rounded-tl-none bg-white px-2.5 py-1.5 shadow-sm">
            see you at the party tmrw!!
            <span className="ml-2 text-[9px] text-[#888]">9:40 PM</span>
          </div>
          {stage === 'scheduled' && (
            <div className="max-w-[85%] self-end rounded-lg rounded-tr-none border border-dashed border-[#1f8a5b] bg-[#e7f7ee] px-2.5 py-1.5">
              {message}
              <span className="mt-1 flex items-center justify-end gap-1 text-[9px] text-[#1f6b48]">
                <Clock size={9} /> Scheduled · {pick.when}
              </span>
            </div>
          )}
        </div>

        {/* composer */}
        <div className="absolute inset-x-0 bottom-0 flex items-end gap-2 p-2">
          <div className="min-h-[40px] flex-1 rounded-3xl bg-white px-4 py-2.5 text-[13px] text-[#111] shadow-sm">
            {stage === 'scheduled' ? <span className="text-[#999]">Message</span> : message}
          </div>
          <button
            type="button"
            aria-label="Send (press and hold for more options)"
            onClick={() => stage === 'compose' && setStage('menu')}
            onContextMenu={(e) => {
              e.preventDefault()
              if (stage === 'compose') setStage('menu')
            }}
            className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-white transition-transform ${
              stage === 'compose' ? 'animate-pulse' : ''
            }`}
            style={{ background: GREEN }}
          >
            <Send size={16} />
          </button>
        </div>

        {/* long-press menu */}
        {stage === 'menu' && (
          <div className="absolute bottom-14 right-2 w-52 overflow-hidden rounded-xl bg-white text-[13px] text-[#111] shadow-xl">
            <button
              type="button"
              onClick={() => setStage('sheet')}
              className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-[#f2f2f2]"
            >
              <span className="flex items-center gap-2">
                <Clock size={14} /> Schedule message
              </span>
              <span className="rounded bg-[#1f8a5b] px-1.5 py-0.5 text-[9px] font-semibold text-white">NEW</span>
            </button>
            <p className="border-t border-[#eee] px-4 py-3 text-[#999]">Send when online</p>
            <p className="border-t border-[#eee] px-4 py-3 text-[#999]">Send silently</p>
          </div>
        )}

        {/* time sheet */}
        {stage === 'sheet' && (
          <div className="absolute inset-0 flex items-end bg-black/35">
            <div className="w-full rounded-t-2xl bg-white p-4 text-[#111]">
              <div className="mx-auto mb-3 h-1 w-9 rounded-full bg-[#ddd]" />
              <p className="text-sm font-semibold">Schedule message</p>
              <p className="mb-3 text-[11px] text-[#777]">Between 10 minutes and 14 days from now</p>
              <div className="grid grid-cols-2 gap-2">
                {picks.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPick(p)}
                    className="rounded-xl border px-3 py-2 text-left text-[12px] transition-colors"
                    style={{
                      borderColor: pick.id === p.id ? GREEN : '#e3e3e3',
                      background: pick.id === p.id ? '#e7f7ee' : 'white',
                    }}
                  >
                    <span className="block font-semibold">{p.label}</span>
                    <span className="text-[#666]">{p.detail}</span>
                  </button>
                ))}
                <span className="rounded-xl border border-dashed border-[#e3e3e3] px-3 py-2 text-[12px] text-[#999]">
                  <span className="block font-semibold">Custom</span>date & time
                </span>
              </div>
              <p className="mt-3 flex items-center gap-1.5 text-[11px] text-[#555]">
                🌍 Arrives {pick.remote} for Ananya
              </p>
              <p className="mt-1 text-[11px] text-[#555]">🔒 Encrypted now, sends even if your phone is off</p>
              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  onClick={() => setStage('compose')}
                  className="flex-1 rounded-full border border-[#ddd] py-2.5 text-[13px] font-medium"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setStage('scheduled')
                    setToast(true)
                  }}
                  className="flex-1 rounded-full py-2.5 text-[13px] font-semibold text-white"
                  style={{ background: GREEN }}
                >
                  Schedule
                </button>
              </div>
            </div>
          </div>
        )}

        {/* undo toast */}
        {stage === 'scheduled' && toast && (
          <div className="absolute inset-x-3 bottom-16 flex items-center justify-between rounded-lg bg-[#222] px-3 py-2.5 text-[12px] text-white shadow-lg">
            <span className="flex items-center gap-1.5">
              <Check size={13} /> Scheduled for {pick.detail}
            </span>
            <button
              type="button"
              onClick={() => {
                setToast(false)
                setStage('compose')
              }}
              className="flex items-center gap-1 font-semibold text-[#7ee2a8]"
            >
              <Undo2 size={12} /> Undo
            </button>
          </div>
        )}
      </div>

      <div className="flex max-w-[320px] items-center gap-3 text-center">
        <p className="pf-muted flex-1 text-sm" aria-live="polite">
          {steps[stage]}
        </p>
        {stage !== 'compose' && (
          <button type="button" className="pf-chip shrink-0 hover:border-[var(--pf-fg)]" onClick={() => setStage('compose')}>
            Reset
          </button>
        )}
      </div>
    </div>
  )
}
