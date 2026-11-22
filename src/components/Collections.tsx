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
    id: 'earrings',
    name: 'Earrings & Jhumkis',
    description: 'Hand-finished oxidised jhumkas, chandbalis, and Korean minimalist studs.',
    image: 'https://ivorra.in/cdn/shop/files/IMAGE-1_78953e4d-cba5-4551-bb2b-a4cb38b8c8b4.jpg?v=1789473015&width=1000',
    tag: 'Core Assortment'
  },
  {
    id: 'necklaces',
    name: 'Necklaces & Sets',
    description: 'Luminous mother-of-pearl chokers, pendants, and festive celebration suites.',
    image: 'https://ivorra.in/cdn/shop/files/IMAGE-2_61c43590-b8ac-4361-b3e2-2c422025c9b8.png?v=1789415071&width=1000',
    tag: 'Occasion Wear'
  },
  {
    id: 'mangalsutra',
    name: 'Modern Mangalsutras',
    description: 'Lightweight sacred black beads and contemporary gold-toned pendants for daily wear.',
    image: 'https://ivorra.in/cdn/shop/files/IMAGE-1_2bc54689-d51a-4aca-a408-570c1a494eb9.png?v=1789412968&width=1000',
    tag: 'Modern Ritual'
  },
  {
    id: 'anklets',
    name: 'Anklets & Payals',
    description: 'Silver-plated evil eye nazar payals and delicate charms capturing subtle movement.',
    image: 'https://ivorra.in/cdn/shop/files/IMAGE-3_a92c3cc3-a205-4d89-a3c7-883059aa7453.jpg?v=1789474056&width=1000',
    tag: 'Everyday Talisman'
  },
  {
    id: 'chains',
    name: 'Chains & Minimal Accents',
    description: 'Durable stainless steel link chains and minimal pendants for effortless layering.',
    image: 'https://ivorra.in/cdn/shop/files/IMAGE-1_c6357497-a0aa-4700-bd0f-9b3c52c57e71.png?v=1789475451&width=1000',
    tag: 'Essential Minimal'
  },
  {
    id: 'organizers',
    name: 'Jewellery Care & Storage',
    description: 'Plush velvet multi-tier cases and folding travel boxes to protect your keepsakes.',
    image: 'https://ivorra.in/cdn/shop/files/IMAGE-1_106815b7-4976-4b53-997a-71119f9306b3.png?v=1789474385&width=1000',
    tag: 'Gifting & Care'
  }
]

export default function Collections() {
  return (
    <section id="collections" className="py-20 sm:py-28 bg-[#FAFAFA] border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#9B783E]" />
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#9B783E] font-bold">
              Product Architecture
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-950 tracking-tight">
            Explore the World of <span className="italic text-[#9B783E]">IVORRA</span>
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
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-xs text-[10px] uppercase tracking-wider font-bold text-gray-900 rounded-full border border-gray-200 shadow-2xs">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Simple Category Name & One Short Description */}
              <h3 className="font-serif text-xl sm:text-2xl text-gray-950 font-medium mb-1.5 group-hover:text-[#9B783E] transition-colors">
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
