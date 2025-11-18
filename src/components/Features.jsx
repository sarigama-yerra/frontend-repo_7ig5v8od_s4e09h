import { motion } from 'framer-motion'
import { LightningBolt, Shield, Rocket, Box, Braces, Workflow } from 'lucide-react'

const items = [
  { icon: <LightningBolt />, title: 'Fast by default', desc: 'Instant feedback, blazing hot reloads, and minimal latency.' },
  { icon: <Shield />, title: 'Secure', desc: 'Private workspaces with end-to-end encryption options.' },
  { icon: <Rocket />, title: 'Deploy anywhere', desc: 'Export, deploy, or connect your own pipeline with ease.' },
  { icon: <Braces />, title: 'Smart code', desc: 'Context-aware suggestions trained on your codebase.' },
  { icon: <Workflow />, title: 'Automations', desc: 'From tests to docs, schedule repetitive tasks.' },
  { icon: <Box />, title: 'Integrations', desc: 'Connect GitHub, Vercel, AWS, Slack, and more.' }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_10%_10%,rgba(99,102,241,0.10),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Built for modern teams</h2>
          <p className="mt-4 text-slate-300">A minimal, elegant interface with powerful AI under the hood.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur p-6 hover:border-white/20 transition"
            >
              <div className="h-10 w-10 rounded-lg bg-white/10 grid place-items-center text-white mb-4">
                {it.icon}
              </div>
              <h3 className="text-white font-semibold">{it.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
