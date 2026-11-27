import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Sparkles, X, ZoomIn } from 'lucide-react'

interface EventItem {
  id: string
  tag: string
  title: string
  subtitle: string
  image: string
  objectPos?: string
}

const EVENTS_AND_COLLABS: EventItem[] = [
  {
    id: 'amazon-summit-booth',
    tag: 'Amazon Ads • Global Selling',
    title: 'Global Peak Season Ads Summit 2026',
    subtitle: 'IVORRA leadership representing the brand at Amazon’s flagship Global Peak Season Ads Summit.',
    image: '/images/event_amazon_summit.webp',
    objectPos: 'object-top',
  },
  {
    id: 'amazon-delegate-badge',
    tag: 'Official Delegate',
    title: 'Director — IVORRA Pass',
    subtitle: 'Official Director delegate accreditation at the Amazon Ads & Global Selling Summit 2026.',
    image: '/images/event_amazon_badge.webp',
    objectPos: 'object-center',
  },
  {
    id: 'business-growth-seminar',
    tag: 'Quantum Leap Forum',
    title: 'Business Growth Seminar',
    subtitle: 'Strategic leadership participation at the Business Growth & Inner Circle Seminar.',
    image: '/images/event_growth_seminar.webp',
    objectPos: 'object-[62%_center]',
  },
  {
    id: 'amazon-summit-kit',
    tag: 'Summit Highlights',
    title: 'Amazon Peak Season Edition',
    subtitle: 'Curated executive workbook and strategy sessions from the 2026 Ads Summit.',
    image: '/images/event_amazon_kit.webp',
    objectPos: 'object-center',
  },
]

export default function EventsAndCollabs() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null)

  return (
    <section id="events" className="py-20 sm:py-24 bg-[#FAFAFA] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B89758]" />
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#B89758] font-bold">
              Events &amp; Collaborations
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-[1.14] mb-4">
            Industry Presence &amp; <span className="text-[#B89758]">Milestones.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed">
            Highlights from national e-commerce summits, brand growth forums, and strategic marketplace collaborations led by the IVORRA team.
          </p>
        </div>

        {/* 4-Card Event & Collab Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {EVENTS_AND_COLLABS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              onClick={() => setSelectedEvent(item)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover ${item.objectPos || 'object-center'} group-hover:scale-104 transition-transform duration-500`}
                  loading="lazy"
                  decoding="async"
                />

                {/* Subtle top-right zoom badge */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/55 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Gradient & Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-5">
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#B89758] font-bold mb-1">
                    <Sparkles className="w-3 h-3" />
                    {item.tag}
                  </span>
                  <h3 className="text-sm sm:text-base text-white font-bold tracking-tight leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 bg-white border-t border-gray-100 flex-1 flex items-center">
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Full Photo View */}
      <AnimatePresence>
        {selectedEvent && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-gray-200 overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#B89758]" />
                  <span className="text-xs uppercase tracking-wider font-bold text-gray-900">
                    {selectedEvent.tag}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="p-1.5 rounded-full text-gray-500 hover:text-gray-950 hover:bg-gray-100 transition-colors cursor-pointer"
                  aria-label="Close event photo"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="rounded-xl overflow-hidden bg-gray-950 max-h-[70vh] flex items-center justify-center">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="pt-3">
                <h4 className="text-sm sm:text-base font-bold text-black">{selectedEvent.title}</h4>
                <p className="text-xs text-gray-600 mt-0.5">{selectedEvent.subtitle}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
