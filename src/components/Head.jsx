export default function Head({ n, label, children }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs tracking-[0.25em] text-accent">{n} — {label.toUpperCase()}</p>
      <h2 className="mt-3 max-w-2xl text-4xl font-extrabold leading-tight md:text-5xl">{children}</h2>
    </div>
  )
}
