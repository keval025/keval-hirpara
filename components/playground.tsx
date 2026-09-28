'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { playground } from '@/lib/portfolio'

type ExperimentId = (typeof playground)[number]['id']

/* ------------------------------------------------------------------ */
/* Dot Field                                                           */
/* ------------------------------------------------------------------ */

function DotField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const SPACING = 22
    const RADIUS = 90
    let dots: { hx: number; hy: number; x: number; y: number; vx: number; vy: number }[] = []
    let width = 0
    let height = 0
    let raf = 0
    let visible = true
    const pointer = { x: -9999, y: -9999 }

    const build = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      dots = []
      const cols = Math.floor(width / SPACING)
      const rows = Math.floor(height / SPACING)
      const ox = (width - (cols - 1) * SPACING) / 2
      const oy = (height - (rows - 1) * SPACING) / 2
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const hx = ox + c * SPACING
          const hy = oy + r * SPACING
          dots.push({ hx, hy, x: hx, y: hy, vx: 0, vy: 0 })
        }
      }
    }

    const draw = () => {
      const style = getComputedStyle(canvas)
      const fg = style.color
      const accent = style.getPropertyValue('--pf-accent').trim() || '#ff4a1c'
      ctx.clearRect(0, 0, width, height)
      for (const d of dots) {
        const dx = d.x - pointer.x
        const dy = d.y - pointer.y
        const dist = Math.hypot(dx, dy)
        if (!reduced && dist < RADIUS && dist > 0.01) {
          const force = (1 - dist / RADIUS) * 2.4
          d.vx += (dx / dist) * force
          d.vy += (dy / dist) * force
        }
        d.vx += (d.hx - d.x) * 0.06
        d.vy += (d.hy - d.y) * 0.06
        d.vx *= 0.82
        d.vy *= 0.82
        d.x += d.vx
        d.y += d.vy
        const offset = Math.hypot(d.x - d.hx, d.y - d.hy)
        ctx.fillStyle = offset > 4 ? accent : fg
        ctx.globalAlpha = offset > 4 ? 1 : 0.55
        ctx.beginPath()
        ctx.arc(d.x, d.y, 1.4 + Math.min(offset / 10, 2), 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    const loop = () => {
      draw()
      if (visible && !reduced) raf = requestAnimationFrame(loop)
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
    }
    const onLeave = () => {
      pointer.x = -9999
      pointer.y = -9999
    }

    build()
    loop()

    const resize = new ResizeObserver(() => {
      build()
      if (reduced) draw()
    })
    resize.observe(canvas)
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      cancelAnimationFrame(raf)
      if (visible) loop()
    })
    io.observe(canvas)
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      resize.disconnect()
      io.disconnect()
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full touch-none text-[var(--pf-fg)]"
      aria-label="Interactive grid of dots that move away from the cursor"
      role="img"
    />
  )
}

/* ------------------------------------------------------------------ */
/* Sort Visualizer                                                     */
/* ------------------------------------------------------------------ */

type SortStep = { arr: number[]; active: [number, number] | null; done: number[] }
type Algorithm = 'bubble' | 'insertion' | 'selection'

function* bubble(input: number[]): Generator<SortStep> {
  const a = [...input]
  const done: number[] = []
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) [a[j], a[j + 1]] = [a[j + 1], a[j]]
      yield { arr: [...a], active: [j, j + 1], done: [...done] }
    }
    done.push(a.length - i - 1)
  }
  yield { arr: a, active: null, done: a.map((_, i) => i) }
}

function* insertion(input: number[]): Generator<SortStep> {
  const a = [...input]
  for (let i = 1; i < a.length; i++) {
    let j = i
    while (j > 0 && a[j - 1] > a[j]) {
      ;[a[j - 1], a[j]] = [a[j], a[j - 1]]
      yield { arr: [...a], active: [j - 1, j], done: [] }
      j--
    }
    yield { arr: [...a], active: [j, i], done: [] }
  }
  yield { arr: a, active: null, done: a.map((_, i) => i) }
}

function* selection(input: number[]): Generator<SortStep> {
  const a = [...input]
  const done: number[] = []
  for (let i = 0; i < a.length; i++) {
    let min = i
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[min]) min = j
      yield { arr: [...a], active: [min, j], done: [...done] }
    }
    ;[a[i], a[min]] = [a[min], a[i]]
    done.push(i)
  }
  yield { arr: a, active: null, done: a.map((_, i) => i) }
}

const algorithms = { bubble, insertion, selection }

const shuffled = (n: number) => {
  const a = Array.from({ length: n }, (_, i) => i + 1)
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function SortVisualizer() {
  const N = 28
  // Deterministic first render so server and client markup match.
  const [step, setStep] = useState<SortStep>(() => ({
    arr: Array.from({ length: N }, (_, i) => ((i * 11) % N) + 1),
    active: null,
    done: [],
  }))
  const [algo, setAlgo] = useState<Algorithm>('bubble')
  const [running, setRunning] = useState(false)
  const gen = useRef<Generator<SortStep> | null>(null)

  useEffect(() => {
    if (!running) return
    const id = window.setInterval(() => {
      const next = gen.current?.next()
      if (!next || next.done) {
        setRunning(false)
        return
      }
      setStep(next.value)
    }, 28)
    return () => window.clearInterval(id)
  }, [running])

  const play = () => {
    if (!gen.current) gen.current = algorithms[algo](step.arr)
    setRunning((r) => !r)
  }
  const reset = () => {
    setRunning(false)
    gen.current = null
    setStep({ arr: shuffled(N), active: null, done: [] })
  }
  const choose = (a: Algorithm) => {
    setAlgo(a)
    setRunning(false)
    gen.current = null
    setStep((s) => ({ ...s, active: null, done: [] }))
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-1 items-end gap-[3px] px-4 pt-4">
        {step.arr.map((v, i) => {
          const isActive = step.active?.includes(i)
          const isDone = step.done.includes(i)
          return (
            <div
              key={i}
              className="flex-1 rounded-t-[2px] transition-[height] duration-75"
              style={{
                height: `${(v / N) * 100}%`,
                background: isActive ? 'var(--pf-accent)' : 'var(--pf-fg)',
                opacity: isActive ? 1 : isDone ? 0.9 : 0.35,
              }}
            />
          )
        })}
      </div>
      <div className="flex flex-wrap items-center gap-2 border-t border-[var(--pf-line)] p-3">
        {(Object.keys(algorithms) as Algorithm[]).map((a) => (
          <button
            key={a}
            type="button"
            onClick={() => choose(a)}
            aria-pressed={algo === a}
            className={`pf-chip capitalize transition-colors ${
              algo === a ? 'bg-[var(--pf-fg)] text-[var(--pf-bg)]' : 'hover:border-[var(--pf-fg)]'
            }`}
          >
            {a}
          </button>
        ))}
        <span className="flex-1" />
        <button type="button" onClick={reset} className="pf-chip hover:border-[var(--pf-fg)]">
          Shuffle
        </button>
        <button type="button" onClick={play} className="pf-chip bg-[var(--pf-accent)] text-[var(--pf-accent-fg)]">
          {running ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* BFS Pathfinder                                                      */
/* ------------------------------------------------------------------ */

const COLS = 22
const ROWS = 13
const START = 6 * COLS + 2 // row 6, col 2
const END = 6 * COLS + 19 // row 6, col 19

function bfs(walls: Set<number>) {
  const prev = new Map<number, number>()
  const order: number[] = []
  const queue = [START]
  const seen = new Set([START])
  while (queue.length) {
    const cell = queue.shift()!
    order.push(cell)
    if (cell === END) break
    const r = Math.floor(cell / COLS)
    const c = cell % COLS
    const neighbours = [
      r > 0 ? cell - COLS : -1,
      c < COLS - 1 ? cell + 1 : -1,
      r < ROWS - 1 ? cell + COLS : -1,
      c > 0 ? cell - 1 : -1,
    ]
    for (const n of neighbours) {
      if (n < 0 || seen.has(n) || walls.has(n)) continue
      seen.add(n)
      prev.set(n, cell)
      queue.push(n)
    }
  }
  const path: number[] = []
  if (seen.has(END)) {
    for (let at: number | undefined = END; at !== undefined; at = prev.get(at)) path.unshift(at)
  }
  return { order, path }
}

function Pathfinder() {
  const [walls, setWalls] = useState<Set<number>>(() => {
    const s = new Set<number>()
    for (let r = 2; r < 11; r++) s.add(r * COLS + 10)
    for (let c = 5; c < 9; c++) s.add(3 * COLS + c)
    for (let c = 13; c < 17; c++) s.add(9 * COLS + c)
    return s
  })
  const [visited, setVisited] = useState<Set<number>>(new Set())
  const [path, setPath] = useState<Set<number>>(new Set())
  const [status, setStatus] = useState('Click or drag to draw walls.')
  const drawing = useRef<null | 'add' | 'remove'>(null)
  const timer = useRef<number | null>(null)

  const clearRun = useCallback(() => {
    if (timer.current !== null) window.clearInterval(timer.current)
    timer.current = null
    setVisited(new Set())
    setPath(new Set())
  }, [])

  useEffect(() => () => clearRun(), [clearRun])

  const paint = (cell: number) => {
    if (cell === START || cell === END || !drawing.current) return
    const mode = drawing.current
    setWalls((w) => {
      const next = new Set(w)
      if (mode === 'add') next.add(cell)
      else next.delete(cell)
      return next
    })
  }

  const run = () => {
    clearRun()
    const { order, path: found } = bfs(walls)
    let i = 0
    setStatus('Searching…')
    timer.current = window.setInterval(() => {
      i += 3
      setVisited(new Set(order.slice(0, i)))
      if (i >= order.length) {
        if (timer.current !== null) window.clearInterval(timer.current)
        timer.current = null
        setPath(new Set(found))
        setStatus(
          found.length
            ? `Shortest path: ${found.length - 1} steps · ${order.length} cells explored`
            : `No path — ${order.length} cells explored`,
        )
      }
    }, 16)
  }

  return (
    <div className="flex h-full flex-col">
      <div
        className="grid flex-1 touch-none select-none gap-px p-4"
        style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gridTemplateRows: `repeat(${ROWS}, 1fr)` }}
        onPointerLeave={() => (drawing.current = null)}
        onPointerUp={() => (drawing.current = null)}
      >
        {Array.from({ length: COLS * ROWS }, (_, cell) => {
          const isWall = walls.has(cell)
          let bg = 'var(--pf-line)'
          if (isWall) bg = 'var(--pf-fg)'
          else if (path.has(cell)) bg = 'var(--pf-accent)'
          else if (visited.has(cell)) bg = 'color-mix(in srgb, var(--pf-accent) 22%, transparent)'
          if (cell === START || cell === END) bg = 'var(--pf-accent)'
          return (
            <div
              key={cell}
              onPointerDown={(e) => {
                ;(e.target as HTMLElement).releasePointerCapture?.(e.pointerId)
                if (cell === START || cell === END) return
                clearRun()
                drawing.current = isWall ? 'remove' : 'add'
                paint(cell)
              }}
              onPointerEnter={() => paint(cell)}
              className="rounded-[2px] transition-colors duration-150"
              style={{ background: bg }}
            >
              {(cell === START || cell === END) && (
                <span className="grid h-full place-items-center font-mono text-[8px] text-[var(--pf-accent-fg)]">
                  {cell === START ? 'A' : 'B'}
                </span>
              )}
            </div>
          )
        })}
      </div>
      <div className="flex flex-wrap items-center gap-2 border-t border-[var(--pf-line)] p-3">
        <span className="pf-mono pf-muted flex-1 normal-case" aria-live="polite">
          {status}
        </span>
        <button
          type="button"
          className="pf-chip hover:border-[var(--pf-fg)]"
          onClick={() => {
            clearRun()
            setWalls(new Set())
            setStatus('Walls cleared.')
          }}
        >
          Clear
        </button>
        <button type="button" onClick={run} className="pf-chip bg-[var(--pf-accent)] text-[var(--pf-accent-fg)]">
          Run BFS
        </button>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Kinetic Type                                                        */
/* ------------------------------------------------------------------ */

function KineticType({ defaultWord = 'KEVAL' }: { defaultWord?: string }) {
  const [name, setName] = useState('')
  const letters = useRef<(HTMLSpanElement | null)[]>([])
  const word = (name.trim() || defaultWord).toUpperCase()
  const chars = word.split('')
  letters.current.length = chars.length

  // Shrink the type as the word gets longer so any name fits on one line.
  const fontSize = `clamp(2rem, ${Math.min(11, 55 / chars.length)}vw, ${Math.min(8, 40 / chars.length)}rem)`

  const onMove = (e: React.PointerEvent) => {
    for (const el of letters.current) {
      if (!el) continue
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const dist = Math.abs(e.clientX - cx)
      const t = Math.max(0, 1 - dist / 220)
      el.style.fontVariationSettings = `'wght' ${Math.round(150 + t * 750)}`
      el.style.fontWeight = String(Math.round(150 + t * 750))
      el.style.transform = `translateY(${-t * 10}%) skewX(${((e.clientX - cx) / 220) * -10 * t}deg)`
      el.style.color = t > 0.75 ? 'var(--pf-accent)' : ''
    }
  }
  const onLeave = () => {
    for (const el of letters.current) {
      if (!el) continue
      el.style.fontVariationSettings = ''
      el.style.fontWeight = ''
      el.style.transform = ''
      el.style.color = ''
    }
  }

  return (
    <div className="flex h-full flex-col">
      <div
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className="flex min-h-0 flex-1 cursor-crosshair select-none items-center justify-center overflow-hidden px-4"
      >
        <p aria-label={word} className="flex whitespace-pre leading-none tracking-[-0.04em]" style={{ fontSize }}>
          {chars.map((ch, i) => (
            <span
              key={`${word}-${i}`}
              aria-hidden
              ref={(el) => {
                letters.current[i] = el
              }}
              className="inline-block font-extralight transition-[font-weight,transform,color] duration-300 ease-out"
            >
              {ch}
            </span>
          ))}
        </p>
      </div>
      <div className="flex items-center gap-2 border-t border-[var(--pf-line)] p-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={14}
          placeholder="Type your name…"
          aria-label="Your name"
          autoComplete="off"
          spellCheck={false}
          className="min-w-0 flex-1 rounded-full border border-[var(--pf-line)] bg-transparent px-4 py-1.5 text-sm outline-none transition-colors focus:border-[var(--pf-fg)]"
        />
        {name && (
          <button type="button" onClick={() => setName('')} className="pf-chip shrink-0 hover:border-[var(--pf-fg)]">
            Reset
          </button>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */

const components: Record<ExperimentId, React.ComponentType> = {
  'dot-field': DotField,
  sorting: SortVisualizer,
  pathfinder: Pathfinder,
  'kinetic-type': KineticType,
}

export function PlaygroundGrid({ size = 'default' }: { size?: 'default' | 'large' }) {
  return (
    <div className={`grid gap-4 ${size === 'large' ? 'lg:grid-cols-2' : 'md:grid-cols-2'}`}>
      {playground.map((exp, i) => {
        const Experiment = components[exp.id]
        return (
          <article
            key={exp.id}
            id={exp.id}
            className="flex scroll-mt-24 flex-col overflow-hidden rounded-lg border border-[var(--pf-line)] bg-[var(--pf-surface)]"
          >
            <header className="flex items-baseline justify-between gap-4 border-b border-[var(--pf-line)] px-4 py-3">
              <h3 className="text-sm font-medium">
                <span className="pf-mono pf-muted mr-2">{String(i + 1).padStart(2, '0')}</span>
                {exp.title}
              </h3>
              <span className="pf-mono pf-muted">{exp.tag}</span>
            </header>
            <div className={size === 'large' ? 'h-[380px] sm:h-[440px]' : 'h-[300px] sm:h-[340px]'}>
              <Experiment />
            </div>
            <p className="pf-muted border-t border-[var(--pf-line)] px-4 py-3 text-sm">{exp.note}</p>
          </article>
        )
      })}
    </div>
  )
}
