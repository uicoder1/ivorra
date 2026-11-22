import { motion } from 'framer-motion'

interface CategoryItem {
  id: string
  name: string
  description: string
  image: string
  tag: string
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'korean',
    name: 'Korean Minimalist & Floral Edit',
    description: 'Dainty pastel petals, cherry blossoms, gold bows, enamel tulips, and pearl drop studs.',
    image: '/images/korean_design_floral.webp',
    tag: 'Trending Korean Design'
  },
  {
    id: 'jhumkis',
    name: 'Oxidised Silver & Tribal Jhumkis',
    description: 'Handcrafted oxidised chandbalis, dome jhumkas, and geometric stone dangles in multi-pair sets.',
    image: '/images/oxidised_jhumki_set.webp',
    tag: 'Artisan Heritage'
  },
  {
    id: 'folding-boxes',
    name: 'Folding Velvet Box Curations',
    description: 'Signature 4-tier red velvet folding travel cases packed with curated daily-wear earring sets.',
    image: '/images/velvet_box_display.webp',
    tag: 'Signature Travel Set'
  },
  {
    id: 'necklaces',
    name: 'Necklaces & Pearl Suites',
    description: 'Luminous mother-of-pearl chokers, layered pendants, and celebration festive suites.',
    image: '/images/cat_necklaces.webp',
    tag: 'Occasion Wear'
  },
  {
    id: 'mangalsutra',
    name: 'Modern Sacred Mangalsutras',
    description: 'Lightweight sacred black beads and contemporary gold-toned pendants for daily grace.',
    image: '/images/cat_mangalsutra.webp',
    tag: 'Modern Ritual'
  },
  {
    id: 'anklets',
    name: 'Anklets & Silver Nazar Payals',
    description: 'Silver-plated evil eye nazar payals and delicate charms capturing subtle movement.',
    image: '/images/cat_anklets.webp',
    tag: 'Everyday Talisman'
  }
]

export default function Collections() {
  return (
    <section id="collections" className="py-20 sm:py-28 bg-[#FAFAFA] border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B89758]" />
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#B89758] font-bold">
              Product Architecture
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight">
            Explore the World of <span className="text-[#B89758]">IVORRA</span>
          </h2>
        </div>

        {/* 6-Category Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {CATEGORIES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group flex flex-col"
            >
              {/* Large Image with Consistent Proportion */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-200 aspect-[4/5] shadow-xs group-hover:shadow-md transition-shadow mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-xs text-[10px] uppercase tracking-wider font-bold text-gray-900 rounded-full border border-gray-200 shadow-2xs">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Simple Category Name & One Short Description */}
              <h3 className="text-lg sm:text-xl font-bold text-black mb-1.5 group-hover:text-[#B89758] transition-colors">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
