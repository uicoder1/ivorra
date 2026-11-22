import { motion } from 'framer-motion'
import { BRAND_INFO } from '../data/brandData'

export default function About() {
  const brandPillars = [
    { title: 'Est. 2024', desc: 'Proven operating track record' },
    { title: 'Sourced in India', desc: 'Preserving artisan silversmith hubs' },
    { title: 'Omnichannel', desc: 'Multi-marketplace nationwide reach' }
  ]

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: One Large Authentic Campaign Photograph */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-gray-50 aspect-[686/1024] max-h-[700px]">
              <img
                src={BRAND_INFO.editorialModel}
                alt="IVORRA: Signature Jewellery Showcase"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
                width={686}
                height={1024}
              />
            </div>
          </motion.div>

          {/* Right Column: Short, Well-Written Brand Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B89758]" />
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#B89758] font-bold">
                Brand Overview
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-[1.14] mb-6">
              More Than Jewellery. <br />
              <span className="text-[#B89758]">It's an Expression.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-700 font-normal leading-relaxed">
              <p>
                <strong className="font-semibold text-gray-950">IVORRA</strong> is a modern Indian fashion jewellery brand created to celebrate individuality, confidence, and contemporary grace. We believe fine design should not remain locked away for rare occasions — it belongs in daily life.
              </p>

              <p>
                Our collections bridge trending Korean minimalist and floral edits, heritage oxidised jhumkas, radiant pearl chokers, modern mangalsutras, and silver-plated nazar payals. Each piece is designed to transition seamlessly from workdays to festive celebrations.
              </p>

              <p>
                Founded in 2024 by Mr. Ahmed and operating from Karol Bagh, New Delhi, IVORRA partners with skilled artisans across India to deliver accessible luxury, consistent quality, and reliable craftsmanship to customers nationwide.
              </p>
            </div>

            {/* 3 Executive Credential Chips */}
            <div className="grid grid-cols-3 gap-3 my-7 pt-6 border-t border-gray-200">
              {brandPillars.map((pillar, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <p className="text-xs font-bold text-gray-950 mb-0.5">
                    {pillar.title}
                  </p>
                  <p className="text-[11px] text-gray-600 font-normal leading-tight">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* In-page Anchor to Collections */}
            <div>
              <a
                href="#collections"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-gray-950 hover:text-[#B89758] transition-colors"
              >
                <span>Explore the collections</span>
                <span className="text-sm">→</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}
