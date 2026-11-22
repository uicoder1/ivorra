import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface MarketplaceItem {
  name: string
  status: 'available' | 'coming-soon'
  url?: string
  logoType: 'amazon' | 'flipkart' | 'jiomart' | 'meesho' | 'ivorra' | 'myntra'
  categoryNote: string
}

const MARKETPLACE_LIST: MarketplaceItem[] = [
  {
    name: 'Amazon India',
    status: 'available',
    url: 'https://www.amazon.in/stores/IVORRA/page/8C8BB226-D8BE-45FA-9C6A-731113F664B1?lp_asin=B0HGMD9JDD&ref_=ast_bln&store_ref=bl_ast_dp_brandlogo_sto',
    logoType: 'amazon',
    categoryNote: 'Official Brand Storefront'
  },
  {
    name: 'Flipkart',
    status: 'available',
    url: 'https://www.flipkart.com/orriva-12-pairs-artificial-earrings-combo-box-women-girls-alloy-jhumki-set-chandbali-earring-earring/p/itm73ffaa2f741d6?pid=ERGHPVR5G3D2YBSE&lid=LSTERGHPVR5G3D2YBSE9DYQA6&marketplace=FLIPKART&q=orriva+12+pair',
    logoType: 'flipkart',
    categoryNote: 'Verified Brand Listing'
  },
  {
    name: 'JioMart',
    status: 'available',
    url: 'https://www.jiomart.com/products?q=IVORRA',
    logoType: 'jiomart',
    categoryNote: 'Official Retail Partner'
  },
  {
    name: 'Meesho',
    status: 'available',
    url: 'https://www.meesho.com/IVORRA?ms=2',
    logoType: 'meesho',
    categoryNote: 'Official Storefront'
  },
  {
    name: 'IVORRA Online',
    status: 'available',
    url: 'https://ivorra.in/',
    logoType: 'ivorra',
    categoryNote: 'Direct Flagship D2C'
  },
  {
    name: 'Myntra & Ajio',
    status: 'coming-soon',
    logoType: 'myntra',
    categoryNote: 'Expansion Pipeline'
  }
]

export default function Marketplaces() {
  return (
    <section id="marketplaces" className="py-20 sm:py-28 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B89758]" />
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#B89758] font-bold">
              Retail Distribution
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight mb-4">
            IVORRA, Across Your <span className="text-[#B89758]">Favourite Marketplaces.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
            Discover and shop IVORRA collections across leading online shopping platforms.
          </p>
        </div>

        {/* Corporate Brand Distribution Showcase Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {MARKETPLACE_LIST.map((item, index) => {
            const isAvailable = item.status === 'available'

            const content = (
              <div className="p-6 sm:p-7 flex flex-col justify-between h-full">
                {/* Status indicator */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] uppercase tracking-wider text-gray-500 font-bold">
                    {item.categoryNote}
                  </span>
                  {isAvailable ? (
                    <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-gray-900 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Live</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#9B783E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  ) : (
                    <span className="text-[10px] uppercase tracking-wider text-gray-600 bg-gray-100 border border-gray-200 px-2.5 py-0.5 rounded-full font-bold">
                      Coming Soon
                    </span>
                  )}
                </div>

                {/* Platform Identity Representation */}
                <div className="my-auto py-3">
                  {item.logoType === 'amazon' && (
                    <div className="font-sans font-bold text-2xl sm:text-3xl text-gray-950 tracking-tight">
                      amazon<span className="text-sm text-[#9B783E]">.in</span>
                    </div>
                  )}
                  {item.logoType === 'flipkart' && (
                    <div className="font-sans italic font-extrabold text-2xl sm:text-3xl text-[#2874F0] tracking-tight">
                      Flipkart
                    </div>
                  )}
                  {item.logoType === 'jiomart' && (
                    <div className="font-sans font-bold text-2xl sm:text-3xl tracking-tight flex items-center">
                      <span className="text-[#0078AD]">Jio</span>
                      <span className="text-[#0A8020]">Mart</span>
                    </div>
                  )}
                  {item.logoType === 'meesho' && (
                    <div className="font-sans font-extrabold text-2xl sm:text-3xl text-[#9B27B0] tracking-tight">
                      meesho
                    </div>
                  )}
                  {item.logoType === 'ivorra' && (
                    <div className="font-serif font-medium text-2xl sm:text-3xl text-gray-950 tracking-wider">
                      IVORRA<span className="text-xs text-[#9B783E] ml-1 font-sans font-bold">.in</span>
                    </div>
                  )}
                  {item.logoType === 'myntra' && (
                    <div className="font-sans font-bold text-xl sm:text-2xl text-gray-700 tracking-tight">
                      Myntra &amp; Ajio
                    </div>
                  )}
                </div>

                {/* Subtitle / Direct Channel Name */}
                <div className="pt-3.5 mt-2 border-t border-gray-100">
                  <span className="text-xs font-semibold text-gray-700 group-hover:text-gray-950 transition-colors">
                    {item.name}
                  </span>
                </div>
              </div>
            )

            if (isAvailable && item.url) {
              return (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative rounded-2xl bg-white border border-gray-200 hover:border-[#9B783E] hover:shadow-md transition-all duration-200 flex flex-col cursor-pointer"
                >
                  {content}
                </motion.a>
              )
            }

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-2xl bg-gray-50 border border-gray-200 opacity-80 flex flex-col"
              >
                {content}
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
