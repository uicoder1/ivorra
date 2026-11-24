import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, CheckCircle2, X, ZoomIn } from 'lucide-react'

interface ReviewItem {
  id: string
  name: string
  location?: string
  platform: 'Amazon India' | 'Flipkart' | 'Meesho'
  rating: number
  title: string
  quote: string
  cropImage: string
  date: string
  tag: string
  platformBadgeColor: string
}

const REVIEWS: ReviewItem[] = [
  {
    id: 'flipkart-rashmi',
    name: 'Rashmi Tamta',
    location: 'New Delhi',
    platform: 'Flipkart',
    rating: 5.0,
    title: 'Amazing quality and every piece is unique',
    quote:
      'Loved all 12 designs! Good build quality, lightweight, and totally worth the price. Every earring piece is unique and durable.',
    cropImage: '/images/reviews/review_flipkart_rashmi.webp',
    date: 'Verified Purchase • 1 month ago',
    tag: 'Flipkart Assured',
    platformBadgeColor: 'bg-blue-50 text-blue-800 border-blue-200'
  },
  {
    id: 'amazon-aditi',
    name: 'Aditi',
    location: 'India',
    platform: 'Amazon India',
    rating: 5.0,
    title: 'Quality & Design Excellence',
    quote:
      'Amazing earrings! The designs are awesome and the quality too! Go for it! The assortment is versatile for all outfits.',
    cropImage: '/images/reviews/review_amazon_aditi.webp',
    date: 'Verified Purchase • October 2026',
    tag: 'Amazon Verified',
    platformBadgeColor: 'bg-amber-50 text-amber-900 border-amber-200'
  },
  {
    id: 'flipkart-terrific',
    name: 'Flipkart Verified Buyer',
    location: 'India',
    platform: 'Flipkart',
    rating: 5.0,
    title: 'Terrific purchase',
    quote:
      'Beautiful jewellery ❤️ the quality is amazing, looks exactly like pictures and comes in very convenient packaging.',
    cropImage: '/images/reviews/review_flipkart_terrific.webp',
    date: 'Verified Buyer • 3 months ago',
    tag: 'Flipkart Assured',
    platformBadgeColor: 'bg-blue-50 text-blue-800 border-blue-200'
  },
  {
    id: 'meesho-abhishek',
    name: 'Abhishek Rajput & Poonam',
    location: 'India',
    platform: 'Meesho',
    rating: 5.0,
    title: 'Pretty gorgeous',
    quote:
      'Very nice looking pretty gorgeous. बहुत-बहुत badhiya 🥀. Product finish and quality exceeded expectations.',
    cropImage: '/images/reviews/review_meesho_abhishek.webp',
    date: 'Verified Orders • Recent',
    tag: 'Meesho Verified',
    platformBadgeColor: 'bg-pink-50 text-pink-800 border-pink-200'
  }
]

// Append clones of the first two cards so the infinite loop is completely seamless on both mobile and desktop
const SLIDES = [...REVIEWS, REVIEWS[0], REVIEWS[1]]

export default function CustomerReviews() {
  const [selectedProof, setSelectedProof] = useState<string | null>(null)
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
    if (selectedProof) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setCurrentIndex((prev) => prev + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [selectedProof])

  // When reaching the cloned card at the end, seamlessly snap back to index 0 without animation
  useEffect(() => {
    if (currentIndex === REVIEWS.length) {
      const snapTimer = setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(0)
      }, 700) // matches 700ms transition duration
      return () => clearTimeout(snapTimer)
    }
  }, [currentIndex])

  const activeDot = currentIndex % REVIEWS.length

  const handleDotClick = (i: number) => {
    setIsTransitioning(true)
    setCurrentIndex(i)
  }

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FAFAFA] border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B89758]" />
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#B89758] font-bold">
              Marketplace Validation
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-[1.14] mb-4">
            Real Reviews From <span className="text-[#B89758]">Real Buyers.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed">
            Verified customer testimonials and ratings across leading Indian shopping platforms confirming IVORRA's craftsmanship and quality.
          </p>
        </div>

        {/* Executive Marketplace Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-12 p-5 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-0.5">
              4.4 <span className="text-amber-500 text-lg">★</span>
            </p>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
              Design &amp; Durability
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-0.5">
              500+
            </p>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
              Verified Ratings
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-0.5">
              100%
            </p>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
              Real Customer Photos
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-0.5">
              Pan-India
            </p>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
              Verified Fulfillment
            </p>
          </div>
        </motion.div>

        {/* Single-Line Seamless Horizontal Carousel Track */}
        <div className="overflow-hidden py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div
            style={{
              transform: cardStep > 0 ? `translateX(-${currentIndex * cardStep}px)` : 'none',
              transition: isTransitioning ? 'transform 700ms cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
            }}
            className="flex gap-6 will-change-transform"
          >
            {SLIDES.map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                ref={idx === 0 ? cardRef : undefined}
                className="w-[86vw] sm:w-[420px] lg:w-[460px] shrink-0 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Header: Platform Badge & Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full border ${review.platformBadgeColor}`}>
                        {review.platform}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>{review.tag}</span>
                      </span>
                    </div>

                    {/* 5 Stars */}
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Review Headline & Text */}
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-2 leading-snug line-clamp-2">
                    "{review.title}"
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-normal mb-5 line-clamp-3">
                    {review.quote}
                  </p>
                </div>

                {/* Bottom: Reviewer Info & Proof Preview */}
                <div>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3 mb-3">
                    <div>
                      <p className="text-xs font-bold text-gray-900">
                        {review.name}
                      </p>
                      <p className="text-[11px] text-gray-500">
                        {review.location ? `${review.location} • ` : ''}{review.date}
                      </p>
                    </div>

                    {/* Clickable Cropped Screenshot Proof Thumbnail */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProof(review.cropImage)
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 text-[11px] font-semibold text-gray-700 transition-colors cursor-pointer"
                      title="Click to view full cropped marketplace review proof"
                    >
                      <ZoomIn className="w-3 h-3 text-[#B89758]" />
                      <span>View Proof</span>
                    </button>
                  </div>

                  {/* In-Card Visual Crop Preview */}
                  <div
                    onClick={() => setSelectedProof(review.cropImage)}
                    className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 cursor-pointer group/img relative"
                  >
                    <img
                      src={review.cropImage}
                      alt={`Marketplace review crop for ${review.name}`}
                      className="w-full h-auto object-cover max-h-32 sm:max-h-36 object-top group-hover/img:opacity-90 transition-opacity"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/img:opacity-100 px-3 py-1 bg-gray-950/80 text-white text-[10px] uppercase tracking-wider font-semibold rounded-full backdrop-blur-xs transition-opacity shadow-sm">
                        Click to enlarge proof
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {REVIEWS.map((review, i) => (
            <button
              key={review.id}
              onClick={() => handleDotClick(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeDot ? 'w-8 bg-[#B89758]' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Jump to review ${i + 1}`}
              title={`Review ${i + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Full Cropped Review Proof */}
      <AnimatePresence>
        {selectedProof && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-lg w-full bg-white rounded-2xl p-4 shadow-2xl border border-gray-200 overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                <span className="text-xs uppercase tracking-wider font-bold text-gray-900">
                  Verified Marketplace Proof Crop
                </span>
                <button
                  onClick={() => setSelectedProof(null)}
                  className="p-1 rounded-full text-gray-500 hover:text-gray-950 hover:bg-gray-100 transition-colors cursor-pointer"
                  aria-label="Close proof preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="rounded-xl overflow-hidden border border-gray-200 bg-white max-h-[75vh] overflow-y-auto">
                <img
                  src={selectedProof}
                  alt="Full cropped marketplace review proof"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="pt-3 text-center">
                <p className="text-[11px] text-gray-500">
                  Clean cropped customer review from live storefront. App chrome and device status bars omitted.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  )
}
