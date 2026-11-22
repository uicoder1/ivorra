import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { BRAND_INFO } from '../data/brandData'

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const tractionStats = [
    { label: 'Founded', value: '2020' },
    { label: 'Headquarters', value: 'South Delhi, India' },
    { label: 'Distribution', value: 'Omnichannel & D2C' },
    { label: 'Core Assortment', value: '6 Curated Lines' },
  ]

  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Campaign Typography */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gray-200 shadow-2xs mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#9B783E]" />
            <span className="text-[11px] uppercase tracking-[0.22em] font-bold text-gray-700">
              Contemporary Fashion Jewellery
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-gray-950 tracking-tight leading-[1.08] mb-5"
          >
            Jewellery That <br />
            <span className="italic text-[#9B783E]">Defines Your</span> Elegance.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-700 font-normal leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Discover contemporary Indian fashion jewellery designed to complement every moment, mood, and personal expression.
          </motion.p>

          {/* Two Direct CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              onClick={() => scrollTo('#about')}
              className="w-full sm:w-auto px-8 py-3.5 bg-gray-950 text-white text-xs uppercase tracking-[0.18em] font-semibold rounded-full hover:bg-[#9B783E] transition-colors duration-200 shadow-sm cursor-pointer"
            >
              About IVORRA
            </button>

            <button
              onClick={() => scrollTo('#collections')}
              className="w-full sm:w-auto px-8 py-3.5 bg-white border border-gray-300 text-gray-900 text-xs uppercase tracking-[0.18em] font-semibold rounded-full hover:border-gray-950 hover:bg-gray-50 transition-all duration-200 shadow-2xs cursor-pointer"
            >
              Explore Collections
            </button>
          </motion.div>
        </div>

        {/* Large Premium Jewellery Lifestyle Photograph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative max-w-5xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-gray-200 bg-white aspect-[16/9] sm:aspect-[21/9]"
        >
          <img
            src={BRAND_INFO.heroBanner}
            alt="IVORRA Fashion Jewellery Lifestyle Campaign"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>

        {/* Investor Traction Strip (High-Contrast Executive Card) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-4xl mx-auto mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center"
        >
          {tractionStats.map((stat, i) => (
            <div key={i} className="px-2">
              <p className="text-[11px] uppercase tracking-wider text-gray-500 font-bold mb-1">
                {stat.label}
              </p>
              <p className="text-sm sm:text-base font-bold text-gray-900 font-sans">
                {stat.value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll Pill Indicator (Clearly Visible) */}
        <div className="flex justify-center mt-7">
          <button
            onClick={() => scrollTo('#about')}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs uppercase tracking-widest font-bold text-gray-700 hover:text-gray-950 hover:border-gray-400 shadow-2xs transition-all cursor-pointer"
          >
            <span>Scroll</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#9B783E]" />
          </button>
        </div>

      </div>
    </section>
  )
}
