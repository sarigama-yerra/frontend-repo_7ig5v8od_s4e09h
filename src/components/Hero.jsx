import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32">
      {/* Background gradient aura */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_top,rgba(99,102,241,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_70%_20%,rgba(236,72,153,0.14),transparent)]" />
      </div>

      {/* Spline Canvas */}
      <div className="absolute inset-0 -z-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              The AI IDE for building faster
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-lg sm:text-xl text-slate-300 max-w-2xl"
            >
              Write prompts, not boilerplate. Design, code, and ship with an intelligent workspace that understands your intent.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3"
            >
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-6 py-3 font-semibold shadow-sm hover:shadow transition">Start free</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white px-6 py-3 font-semibold ring-1 ring-white/20 hover:bg-white/15 transition">See features</a>
            </motion.div>

            <div className="mt-8 flex items-center gap-4 text-sm text-slate-300/80">
              <div className="flex -space-x-2">
                <img className="h-8 w-8 rounded-full ring-2 ring-slate-900" src="https://i.pravatar.cc/40?img=1"/>
                <img className="h-8 w-8 rounded-full ring-2 ring-slate-900" src="https://i.pravatar.cc/40?img=2"/>
                <img className="h-8 w-8 rounded-full ring-2 ring-slate-900" src="https://i.pravatar.cc/40?img=3"/>
              </div>
              <p>Trusted by builders and teams worldwide</p>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-amber-400/10 blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <Card title="Auto-complete" desc="Predictive code with context"/>
              <Card title="1-click Deploy" desc="Ship to prod in minutes"/>
              <Card title="Chat to Build" desc="Describe and generate"/>
              <Card title="Realtime Preview" desc="See changes instantly"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Card({ title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur p-5 shadow-[0_10px_40px_rgba(2,6,23,0.6)] hover:shadow-[0_16px_60px_rgba(2,6,23,0.8)] hover:border-white/20 transition"
    >
      <div className="h-10 w-10 rounded-lg bg-white/10 grid place-items-center text-white mb-4">✨</div>
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-slate-300 text-sm mt-1">{desc}</p>
    </motion.div>
  )
}
