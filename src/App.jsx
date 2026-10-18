import { lazy, Suspense, useEffect, useRef } from 'react'
import { Play, MessageCircle } from 'lucide-react'
import site from './config/siteConfig'
import Work from './sections/Work'
import Contact from './sections/Contact'
import { Services, Tools, Stats, Process, Pricing, FAQ } from './sections/Sections'

const Hero3D = lazy(() => import('./components/Hero3D'))
const show3D = typeof window !== 'undefined' && window.innerWidth > 768 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

function Playhead() {
  const r = useRef()
  useEffect(() => {
    const m = (e) => { if (r.current) r.current.style.transform = `translateX(${e.clientX}px)` }
    window.addEventListener('mousemove', m)
    return () => window.removeEventListener('mousemove', m)
  }, [])
  return (
    <div ref={r} className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-screen md:block" style={{ transform: 'translateX(50vw)' }}>
      <div className="-ml-[6px] h-0 w-0 border-x-[6px] border-t-[9px] border-x-transparent border-t-accent" />
      <div className="h-full w-px bg-gradient-to-b from-accent to-accent/10" />
    </div>
  )
}

function Timeline() {
  return (
    <div className="mx-auto flex max-w-6xl items-end gap-4 px-5 py-10">
      <span className="font-mono text-xs text-zinc-400">00:00:12:04</span>
      <div className="ruler" />
      <span className="mb-1 h-3.5 w-3.5 rotate-45 bg-accent" />
    </div>
  )
}

export default function App() {
  return (
    <div className="grain">
      <Playhead />
      <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#0e0c0a]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="font-display text-sm font-extrabold uppercase"><span className="text-accent">●</span> {site.name}</a>
          <div className="hidden gap-8 text-sm text-zinc-300 md:flex">{['Work', 'Services', 'Pricing', 'Tools', 'FAQ'].map((l) => <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-accent">{l}</a>)}</div>
          <a href="#contact" className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-black">Hire Me</a>
        </div>
      </nav>

      <header className="relative flex min-h-[90vh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,#ff6a0033,transparent_55%)]" />
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2">{show3D && <Suspense fallback={null}><Hero3D /></Suspense>}</div>
        <div className="pointer-events-none relative mx-auto w-full max-w-6xl px-5">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/60 bg-accent/10 px-4 py-1.5 text-sm text-accent"><span className="h-2 w-2 rounded-full bg-accent" />Reel editing starts from {site.currency}{site.reelFrom}</p>
          <p className="mb-4 font-mono text-sm text-zinc-400">{site.name} — Freelance Video Editor</p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.08] md:text-7xl">{site.heroA} <span className="glow text-accent">{site.heroB}</span></h1>
          <p className="mt-6 max-w-lg text-lg text-zinc-400">Reels, YouTube, ads and cinematic edits, paced to keep viewers watching till the last frame.</p>
          <div className="pointer-events-auto mt-10 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold"><Play size={16} />View My Work</a>
            <a href="#contact" className="rounded-full bg-accent px-7 py-3.5 font-semibold text-black">Hire Me</a>
          </div>
        </div>
      </header>

      <Timeline />
      {site.showreel && <section className="mx-auto max-w-5xl px-5"><video src={site.showreel} className="w-full rounded-2xl" autoPlay muted loop playsInline controls /></section>}
      <Work /><Services /><Tools /><Stats /><Process /><Pricing /><FAQ /><Contact />

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-400">
        <div className="mb-2 flex justify-center gap-5">{[['Instagram', site.instagram], ['YouTube', site.youtube], ['LinkedIn', site.linkedin]].filter(([, u]) => u).map(([n, u]) => <a key={n} href={u} target="_blank" rel="noreferrer" className="hover:text-accent">{n}</a>)}</div>
        © {new Date().getFullYear()} {site.name}
      </footer>
      <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-green-500 text-white shadow-lg"><MessageCircle /></a>
    </div>
  )
}
