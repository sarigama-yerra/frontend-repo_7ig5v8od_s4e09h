import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    desc: 'For individuals exploring AI-powered building',
    perks: ['3 projects', 'Basic AI suggestions', 'Community support'],
    cta: 'Get started'
  },
  {
    name: 'Pro',
    price: '$19',
    desc: 'For indie devs and startups who ship',
    perks: ['Unlimited projects', 'Advanced AI agents', 'Priority support'],
    cta: 'Start 7-day trial',
    highlighted: true
  },
  {
    name: 'Team',
    price: '$49',
    desc: 'For teams collaborating at scale',
    perks: ['Seats & roles', 'Org-wide context', 'SSO/SAML'],
    cta: 'Contact sales'
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_90%_10%,rgba(236,72,153,0.10),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Simple pricing</h2>
          <p className="mt-4 text-slate-300">Try it free. Upgrade when you&apos;re ready.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`rounded-2xl border bg-slate-900/70 backdrop-blur p-6 text-white ${t.highlighted ? 'border-white/30 shadow-[0_20px_80px_rgba(99,102,241,0.25)]' : 'border-white/10'}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <span className="text-3xl font-bold">{t.price}<span className="text-sm text-slate-300 font-medium">/mo</span></span>
              </div>
              <p className="mt-2 text-slate-300 text-sm">{t.desc}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                {t.perks.map(p => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="text-emerald-300">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-semibold ${t.highlighted ? 'bg-white text-slate-900' : 'bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15'}`}>{t.cta}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
