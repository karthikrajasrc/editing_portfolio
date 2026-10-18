import { useState } from 'react'
import { motion } from 'framer-motion'
import Head from '../components/Head'
import site from '../config/siteConfig'

const cats = ['All', ...new Set(site.projects.map((p) => p.category))]

export default function Work() {
  const [cat, setCat] = useState('All')
  const list = site.projects.filter((p) => cat === 'All' || p.category === cat)
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24">
      <Head n="01" label="Work">Selected cuts</Head>
      <div className="mt-8 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-4 py-1.5 text-sm transition ${cat === c ? 'border-accent bg-accent text-white' : 'border-zinc-700 text-zinc-300 hover:border-accent'}`}>{c}</button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 900 }}>
        {list.map((p) => (
          <motion.article key={p.title} whileHover={{ rotateY: 7, rotateX: -4, scale: 1.03 }} transition={{ type: 'spring', stiffness: 200 }} className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60">
            <div className="relative aspect-[9/16] bg-gradient-to-br from-accent/40 to-zinc-900">
              {p.previewUrl
                ? <video src={p.previewUrl} poster={p.thumbnail || undefined} autoPlay loop muted playsInline preload="metadata" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover" />
                : p.thumbnail && <img src={p.thumbnail} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />}
            </div>
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-zinc-400">{p.client}, {p.role}</p>
              <p className="mt-2 text-xs text-accent">{p.tools.join(', ')}</p>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <a href="https://drive.google.com/drive/folders/1SWyFlx6I_p8vqfUXaFDebmFJMtU3yAlG?usp=sharing" target="_blank" rel="noreferrer" className="rounded-full bg-accent px-6 py-3 font-semibold text-black transition hover:bg-orange-400">
          View more
        </a>
      </div>
    </section>
  )
}
