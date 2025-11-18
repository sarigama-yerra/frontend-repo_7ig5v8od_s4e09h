import { useState } from 'react'
import { Menu, X, Cpu, Sparkles } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-slate-200/90 hover:text-white transition-colors px-3 py-2 rounded-md"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-md px-3 sm:px-4 mt-4">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-[0_0_32px_rgba(168,85,247,0.4)]">
              <Cpu size={18} />
            </div>
            <span className="font-semibold text-white tracking-tight">Aether IDE</span>
            <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-0.5 text-xs text-slate-300">
              <Sparkles size={14} className="text-amber-300" /> AI
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <a href="#" className="ml-2 inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-4 py-2 font-medium shadow-sm hover:shadow-md transition-shadow">Sign in</a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10"
            aria-label="Toggle Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur-md p-3 flex flex-col gap-1">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <a href="#" className="text-slate-900 bg-white px-3 py-2 rounded-md text-center font-medium">Sign in</a>
          </div>
        </div>
      )}
    </header>
  )
}
