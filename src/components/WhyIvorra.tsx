import { useState, useEffect, useRef } from 'react'
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
    title: 'Korean Pastel & Floral Edit',
    subtitle: 'Signature 4-Tier Velvet Folding Suite',
    image: '/images/gallery_korean_pastels.webp'
  },
  {
    title: 'Tribal Jhumki & Chandbali Suite',
    subtitle: 'Hand-Curated Oxidised Silver Collection',
    image: '/images/gallery_tribal_jhumkis.webp'
  },
  {
    title: 'Quad Curation Travel Showcase',
    subtitle: '4-in-1 Compact Velvet Folding Trays',
    image: '/images/gallery_curation_quad.webp'
  },
  {
    title: 'Heritage Gemstone & Jhumki Box',
    subtitle: 'Royal Emerald, Sapphire & Silver Drops',
    image: '/images/gallery_gemstone_heritage.webp'
  }
]

// Duplicate gallery items for a seamless, continuous infinite loop
const SLIDES = [...EDITORIAL_GALLERY, ...EDITORIAL_GALLERY]

export default function WhyIvorra() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [cardStep, setCardStep] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  // Measure card width + gap dynamically
  useEffect(() => {
    const measureWidth = () => {
      if (cardRef.current) {
        setCardStep(cardRef.current.offsetWidth + 24) // 24px = gap-6
      }
    }
    measureWidth()
    window.addEventListener('resize', measureWidth)
    return () => window.removeEventListener('resize', measureWidth)
  }, [])

  // Automatically move from right to left every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setCurrentIndex((prev) => prev + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Seamless snap back to index 0 when reaching the end of the original list
  useEffect(() => {
    if (currentIndex === EDITORIAL_GALLERY.length) {
      const snapTimer = setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(0)
      }, 700) // matches 700ms transition duration
      return () => clearTimeout(snapTimer)
    }
  }, [currentIndex])

  const activeDot = currentIndex % EDITORIAL_GALLERY.length

  const handleDotClick = (i: number) => {
    setIsTransitioning(true)
    setCurrentIndex(i)
  }

  return (
    <section id="why-ivorra" className="py-20 sm:py-28 bg-[#FAFAFA] border-t border-gray-200 overflow-hidden">
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

        {/* Editorial Auto-Scrolling Image Gallery (Single line, right-to-left every 3s) */}
        <div className="overflow-hidden py-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div
            style={{
              transform: cardStep > 0 ? `translateX(-${currentIndex * cardStep}px)` : 'none',
              transition: isTransitioning ? 'transform 700ms cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
            }}
            className="flex gap-6 will-change-transform"
          >
            {SLIDES.map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
                ref={idx === 0 ? cardRef : undefined}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-gray-200 w-[78vw] sm:w-[300px] lg:w-[330px] shrink-0 aspect-[2/3] shadow-xs"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                  loading={idx < 4 ? "eager" : "lazy"}
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-5 pointer-events-none">
                  <span className="text-[10px] uppercase tracking-widest text-[#B89758] font-bold mb-1">
                    {item.subtitle}
                  </span>
                  <h4 className="text-base sm:text-lg text-white font-bold tracking-tight leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {EDITORIAL_GALLERY.map((item, i) => (
            <button
              key={item.title}
              onClick={() => handleDotClick(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeDot ? 'w-8 bg-[#B89758]' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Jump to image ${i + 1}`}
              title={item.title}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
