import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import Head from '../components/Head'
import site from '../config/siteConfig'

const types = ['Reel / Shorts', 'YouTube', 'Advanced Edit', 'Ad / Promo', 'Other']
const budgets = ['Under ₹1,000', '₹1,000 - ₹5,000', '₹5,000 - ₹20,000', '₹20,000+']
const input = 'w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 outline-none focus:border-accent'

export default function Contact() {
  const { register, handleSubmit, getValues, reset, formState: { errors, isSubmitting } } = useForm()
  const [status, setStatus] = useState('')
  const [sendError, setSendError] = useState('')

  const onSubmit = async (d) => {
    if (d.company) return // honeypot
    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env
    if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
      setStatus('config')
      return
    }
    const details = [
      `Name: ${d.name}`,
      `Email: ${d.email}`,
      `Phone / WhatsApp: ${d.phone}`,
      `Project type: ${d.type}`,
      `Budget: ${d.budget || 'Not specified'}`,
      `Deadline: ${d.deadline || 'Not specified'}`,
      `Project details:\n${d.message}`,
    ].join('\n')
    try {
      await emailjs.send(VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, {
        title: `New ${d.type} enquiry from ${d.name}`,
        name: d.name,
        email: d.email,
        phone: d.phone,
        type: d.type,
        budget: d.budget || 'Not specified',
        deadline: d.deadline || 'Not specified',
        message: details,
        project_details: d.message,
        to_email: site.email,
        reply_to: d.email,
      }, VITE_EMAILJS_PUBLIC_KEY)
      setStatus('ok'); reset()
    } catch (error) {
      console.error('EmailJS request failed', { status: error?.status, text: error?.text })
      setSendError(error?.text || 'Check the EmailJS service, template, and recipient settings.')
      setStatus('err')
    }
  }
  const wa = () => {
    const v = getValues()
    const msg = `Hi ${site.name}, I'm ${v.name || ''}. Project: ${v.type || 'video editing'}. Budget: ${v.budget || '-'}. Deadline: ${v.deadline || '-'}. ${v.message || ''}`
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
  }
  const Err = ({ k }) => errors[k] && <p className="mt-1 text-sm text-red-400">{errors[k].message}</p>

  return (
    <section id="contact" className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2">
      <div>
        <Head n="08" label="Contact">Let's cut your next video</Head>
        <p className="mt-4 text-zinc-400">Tell me about your project. I reply within a few hours.</p>
        <ul className="mt-8 space-y-2">
          <li><a href={`mailto:${site.email}`} className="hover:text-accent">{site.email}</a></li>
          <li><a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-accent">{site.phone}</a></li>
          <li className="text-zinc-400">{site.location}</li>
          {site.calendly && <li><a href={site.calendly} target="_blank" rel="noreferrer" className="text-accent">Book a call</a></li>}
        </ul>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register('company')} />
        <div><input className={input} placeholder="Your name" {...register('name', { required: 'Enter your name' })} /><Err k="name" /></div>
        <div><input className={input} placeholder="Email" {...register('email', { required: 'Enter your email', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' } })} /><Err k="email" /></div>
        <div><input className={input} placeholder="Phone / WhatsApp" {...register('phone', { required: 'Enter your phone number' })} /><Err k="phone" /></div>
        <div className="grid gap-4 sm:grid-cols-2">
          <select className={input} defaultValue="" {...register('type', { required: 'Pick a project type' })}><option value="" disabled>Project type</option>{types.map((t) => <option key={t}>{t}</option>)}</select>
          <select className={input} defaultValue="" {...register('budget')}><option value="" disabled>Budget</option>{budgets.map((t) => <option key={t}>{t}</option>)}</select>
        </div>
        <Err k="type" />
        <input type="date" className={input} {...register('deadline')} aria-label="Deadline" />
        <textarea rows={4} className={input} placeholder="Video links and project details" {...register('message', { required: 'Tell me about the project' })} /><Err k="message" />
        <div className="flex flex-wrap gap-3">
          <button disabled={isSubmitting} className="rounded-full bg-accent px-6 py-2.5 font-medium disabled:opacity-60">{isSubmitting ? 'Sending...' : 'Send enquiry'}</button>
          <button type="button" onClick={wa} className="rounded-full border border-accent px-6 py-2.5 text-accent">Chat on WhatsApp</button>
        </div>
        {status === 'ok' && <p className="text-green-400">Sent. I'll get back to you soon.</p>}
        {status === 'config' && <p className="text-red-400">Email settings were not loaded. Restart the dev server after changing `.env`.</p>}
        {status === 'err' && <p className="text-red-400">Could not send: {sendError}</p>}
      </form>
    </section>
  )
}
