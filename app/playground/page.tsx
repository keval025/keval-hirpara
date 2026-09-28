import type { Metadata } from 'next'
import { PlaygroundGrid } from '@/components/playground'

export const metadata: Metadata = {
  title: 'Playground',
  description: 'Interactive experiments: canvas physics, sorting and pathfinding visualizers, and kinetic type.',
}

export default function PlaygroundPage() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 pb-24 pt-12 sm:px-8 md:pt-20">
      <p className="pf-mono pf-muted mb-6">(04) Playground</p>
      <h1 className="pf-display max-w-5xl text-[clamp(3rem,9vw,8.5rem)]">
        Things I make <em className="pf-serif">when nobody asked.</em>
      </h1>
      <p className="pf-muted mb-14 mt-8 max-w-xl text-lg md:mb-20">
        A sandbox for ideas that don’t need a client or a deadline — physics, algorithms, and type. Everything
        here is interactive, so poke at it.
      </p>
      <PlaygroundGrid size="large" />
    </section>
  )
}
