import { motion } from 'framer-motion'
import { Sparkles, Layers, HeartHandshake, Calendar } from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: Sparkles,
    title: 'Contemporary Designs',
    description: 'Modern silhouettes blending traditional Indian craftsmanship with clean, trend-forward aesthetics.'
  },
  {
    icon: Layers,
    title: 'Versatile Collections',
    description: 'Designed to transition effortlessly from daytime corporate wear to festive celebrations.'
  },
  {
    icon: HeartHandshake,
    title: 'Accessible Luxury',
    description: 'High aesthetic appeal, quality packaging, and honest accessibility with strong repeat potential.'
  },
  {
    icon: Calendar,
    title: 'Everyday & Festive Appeal',
    description: 'A balanced portfolio catering to continuous daily routines as well as high-volume peak festive seasons.'
  }
]

const EDITORIAL_GALLERY = [
  {
    title: 'Korean Minimalist Stud Edit',
    image: '/images/korean_minimalist_studs.webp'
  },
  {
    title: 'Tribal Jhumki Folding Suite',
    image: '/images/oxidised_jhumki_set.webp'
  },
  {
    title: 'Folding Velvet Box Showcase',
    image: '/images/velvet_box_display.webp'
  },
  {
    title: 'Garden Curation Lifestyle',
    image: '/images/curated_combo_garden.webp'
  }
]

export default function WhyIvorra() {
  return (
    <section id="why-ivorra" className="py-20 sm:py-28 bg-[#FAFAFA] border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B89758]" />
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#B89758] font-bold">
              The IVORRA Standard
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-[1.14]">
            Designed for <span className="text-[#B89758]">Every Occasion.</span>
          </h2>
        </div>

        {/* 4 Clean Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {HIGHLIGHTS.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-[#B89758] mb-5">
                    <Icon className="w-4 h-4 text-[#B89758]" />
                  </div>
                  <h3 className="text-lg sm:text-xl text-black font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Editorial Image Gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {EDITORIAL_GALLERY.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 aspect-[4/5] shadow-xs"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs text-white font-semibold tracking-wide">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
