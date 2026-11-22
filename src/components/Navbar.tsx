import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { BRAND_INFO } from '../data/brandData'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Collections', href: '#collections' },
    { label: 'Marketplaces', href: '#marketplaces' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Leadership', href: '#founder' },
    { label: 'Why IVORRA', href: '#why-ivorra' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/80 py-2.5 sm:py-3 shadow-xs'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 lg:gap-4 xl:gap-8">
          
          {/* IVORRA Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
            className="flex items-center shrink-0 mr-2 sm:mr-4 lg:mr-6 xl:mr-8 group cursor-pointer py-1"
          >
            <img
              src={BRAND_INFO.logoUrl}
              alt="IVORRA Official Logo"
              className="h-[20px] sm:h-[23px] md:h-6 xl:h-7 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
              width={140}
              height={28}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2.5 xl:gap-5 2xl:gap-7 shrink-0">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="whitespace-nowrap text-[10.5px] xl:text-xs uppercase tracking-[0.10em] xl:tracking-[0.14em] font-bold text-gray-700 hover:text-gray-950 transition-colors cursor-pointer py-1 px-1 relative group shrink-0"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B89758] group-hover:w-full transition-all duration-200" />
              </button>
            ))}
          </nav>

          {/* Direct Store Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0 ml-2 sm:ml-4 lg:ml-6 xl:ml-8">
            <a
              href={BRAND_INFO.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 xl:px-4 xl:py-2 text-[11px] xl:text-xs uppercase tracking-wider font-bold text-gray-900 bg-white border border-gray-200 rounded-full hover:border-gray-950 hover:shadow-xs transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>Visit ivorra.in</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B89758]" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-900 hover:text-[#B89758] transition-colors cursor-pointer shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-4 mb-3 border-b border-gray-100">
            <img
              src={BRAND_INFO.logoUrl}
              alt="IVORRA"
              className="h-6 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-xs uppercase tracking-widest font-bold text-gray-900 hover:text-[#B89758] py-2 border-b border-gray-100"
              >
                {item.label}
              </button>
            ))}
            <a
              href={BRAND_INFO.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="pt-3 text-xs uppercase tracking-wider font-bold text-[#B89758] flex items-center justify-between"
            >
              <span>Visit Official Store (ivorra.in)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
