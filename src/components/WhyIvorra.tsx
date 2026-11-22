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
    title: 'Oxidised Jhumki Curation',
    image: '/images/gallery_jhumki.webp'
  },
  {
    title: 'Luminous Pearl Drop Suite',
    image: '/images/gallery_pearl_choker.webp'
  },
  {
    title: 'Silver Plated Nazar Payal',
    image: '/images/gallery_silver_payal.webp'
  },
  {
    title: 'Modern Gold Heart Pendant',
    image: '/images/gallery_heart_pendant.webp'
  }
]

export default function WhyIvorra() {
  return (
    <section id="why-ivorra" className="py-20 sm:py-28 bg-[#FAFAFA] border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#9B783E]" />
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#9B783E] font-bold">
              The IVORRA Standard
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-950 tracking-tight">
            Designed for <span className="italic text-[#9B783E]">Every Occasion.</span>
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
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-[#9B783E] mb-5">
                    <Icon className="w-4 h-4 text-[#9B783E]" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-gray-950 font-medium mb-2">
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
