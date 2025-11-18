import { useState } from 'react'

const faqs = [
  { q: 'How is this different from a normal IDE?', a: 'It understands natural language and can generate, refactor, and organize code based on your prompts. It also comes with built-in deployment and collaboration tools.' },
  { q: 'Can I use my own models?', a: 'Yes. Bring your API keys and select providers in settings. Enterprise plans support on-prem and VPC.' },
  { q: 'Will my code be private?', a: 'Yes, your workspace is isolated. We never train on private code. Optional E2EE is available on paid plans.' },
  { q: 'Do you support extensions?', a: 'You can install official integrations and build your own extensions with our SDK.' }
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-5xl font-bold text-white tracking-tight">FAQs</h2>
        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur">
          {faqs.map((f, i) => (
            <div key={f.q} className="p-6">
              <button
                className="w-full text-left text-white font-medium flex items-center justify-between"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {f.q}
                <span className="ml-4 text-slate-300">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <p className="mt-3 text-slate-300 text-sm">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
