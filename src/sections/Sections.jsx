import { motion } from 'framer-motion'
import { Smartphone, Youtube, Sparkles, Captions, Megaphone, Check } from 'lucide-react'
import Head from '../components/Head'
import site from '../config/siteConfig'

const icons = { Smartphone, Youtube, Sparkles, Captions, Megaphone }
const Wrap = ({ id, children }) => <section id={id} className="mx-auto max-w-6xl px-5 py-20">{children}</section>
const card = 'rounded-2xl border border-white/10 bg-white/[0.03]'

export function Services() {
  return (
    <Wrap id="services"><Head n="02" label="Services">What I can cut for you</Head>
      <div className="grid gap-5 md:grid-cols-3">
        {site.services.map(([ic, t, d, note]) => { const I = icons[ic]; return (
          <div key={t} className={`${card} p-7 transition hover:border-accent/70 ${ic === 'Sparkles' ? 'md:row-span-2' : ''}`}>
            <span className="grid h-14 w-14 place-items-center rounded-xl bg-accent/15 text-accent"><I size={24} /></span>
            <h3 className="mt-6 text-xl font-extrabold">{t}</h3>
            <p className="mt-2 text-zinc-400">{d}</p>
            {note && <p className="mt-4 font-mono text-sm text-accent">{note}</p>}
          </div>) })}
      </div>
    </Wrap>
  )
}

export function Tools() {
  return (
    <Wrap id="tools"><Head n="03" label="Tools">Software I cut with</Head>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 900 }}>
        {site.tools.map((t) => (
          <motion.div key={t.name} whileHover={{ rotateY: 12, scale: 1.04 }} className={`${card} p-5`}>
            <div className="flex items-center gap-4">
              <img src={t.logo} alt={`${t.name} logo`} className="h-14 w-14 shrink-0 rounded-xl object-contain" />
              <div><h3 className="text-base font-extrabold">{t.name}</h3><p className="text-sm text-zinc-400">{t.note}</p></div>
            </div>
            <div className="mt-4 h-1.5 rounded bg-white/10"><motion.div className="h-1.5 rounded bg-accent" initial={{ width: 0 }} whileInView={{ width: `${t.level}%` }} viewport={{ once: true }} transition={{ duration: 1 }} /></div>
          </motion.div>
        ))}
      </div>
    </Wrap>
  )
}

export function Stats() {
  return (
    <Wrap><div className="grid gap-8 text-center sm:grid-cols-3">
      {site.stats.map(([n, l]) => <div key={l}><p className="glow font-display text-6xl font-extrabold text-accent">{n}</p><p className="mt-2 text-sm uppercase tracking-wide text-zinc-400">{l}</p></div>)}
    </div></Wrap>
  )
}

// export function Testimonials() {
//   return (
//     <Wrap id="reviews"><Head n="04" label="Reviews">Kind words from clients</Head>
//       <div className="grid gap-5 md:grid-cols-3">
//         {site.testimonials.map((t, i) => <figure key={i} className={`${card} p-6`}><blockquote>“{t.quote}”</blockquote><figcaption className="mt-4 font-mono text-sm text-accent">{t.who}</figcaption></figure>)}
//       </div>
//     </Wrap>
//   )
// }

export function Process() {
  const steps = [['Brief', 'Share your footage, references and goals.'], ['Edit', 'I cut, pace, grade and add sound.'], ['Review', 'You give feedback; I refine it.'], ['Delivery', 'Final files in the formats you need.']]
  return (
    <Wrap id="process"><Head n="05" label="Process">From footage to final cut</Head>
      <ol className="grid gap-8 md:grid-cols-4">
        {steps.map(([t, d], i) => (
          <li key={t}>
            <div className="flex items-center"><span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-accent font-mono text-accent shadow-[0_0_22px_#ff6a0066]">{i + 1}</span><span className="h-0.5 flex-1 bg-accent" /></div>
            <h3 className="mt-6 text-lg font-extrabold">{t}</h3><p className="mt-1 text-zinc-400">{d}</p>
          </li>
        ))}
      </ol>
    </Wrap>
  )
}

export function Pricing() {
  return (
    <Wrap id="pricing"><Head n="06" label="Pricing">Simple, honest pricing</Head>
      <div className="grid items-center gap-5 md:grid-cols-3">
        {site.tiers.map((t) => (
          <div key={t.name} className={`${card} p-8 ${t.badge ? 'border-accent shadow-[0_0_50px_#ff6a0033] md:py-10' : ''}`}>
            {t.badge && <span className="mb-3 inline-block rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-black">{t.badge}</span>}
            <h3 className="text-xl font-extrabold">{t.name}</h3>
            <p className="mt-1 text-sm text-zinc-400">{t.desc}</p>
            <p className="glow my-5 font-display text-2xl font-extrabold text-accent">{t.price}</p>
            <ul className="space-y-3">{t.points.map((p) => <li key={p} className="flex items-center gap-3"><Check size={16} className="text-accent" />{p}</li>)}</ul>
            <a href="#contact" className={`mt-8 block rounded-full py-3 text-center font-semibold ${t.badge ? 'bg-accent text-black' : 'border border-white/15 hover:border-accent'}`}>{t.cta}</a>
          </div>
        ))}
      </div>
    </Wrap>
  )
}

export function FAQ() {
  return (
    <Wrap id="faq"><Head n="07" label="FAQ">Questions, answered</Head>
      <div className="divide-y divide-white/10 border-y border-white/10">
        {site.faq.map(([q, a]) => <details key={q} className="py-5"><summary className="cursor-pointer text-lg font-semibold">{q}</summary><p className="mt-2 text-zinc-400">{a}</p></details>)}
      </div>
    </Wrap>
  )
}
