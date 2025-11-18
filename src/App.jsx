import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      {/* Subtle grid / noise overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Aether IDE. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-slate-300 hover:text-white">Privacy</a>
            <a href="#" className="text-slate-300 hover:text-white">Terms</a>
            <a href="#" className="text-slate-300 hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
