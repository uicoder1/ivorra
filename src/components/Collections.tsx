import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Volume2, VolumeX, Sparkles } from 'lucide-react'

interface CategoryItem {
  id: string
  name: string
  description: string
  image: string
  tag: string
}

interface VideoCardProps {
  src: string
  poster: string
  title: string
  subtitle: string
  tag: string
}

function VideoCard({ src, poster, title, subtitle, tag }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    const nextMuted = !isMuted
    videoRef.current.muted = nextMuted
    setIsMuted(nextMuted)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onClick={togglePlay}
      className="group relative rounded-3xl overflow-hidden bg-black border border-gray-800 shadow-xl cursor-pointer aspect-[9/16] select-none"
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full h-full object-cover object-center"
      />

      {/* Top Floating Badges */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-wider font-bold text-white rounded-full border border-white/10 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#B89758] animate-pulse" />
          <span>{tag}</span>
        </span>

        {/* Audio Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white border border-white/15 transition-all shadow-sm cursor-pointer"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          title={isMuted ? 'Tap to unmute' : 'Muted'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-white/80" />
          ) : (
            <Volume2 className="w-4 h-4 text-[#B89758]" />
          )}
        </button>
      </div>

      {/* Center Play Indicator (when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[2px] transition-all z-10">
          <div className="w-14 h-14 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Play className="w-6 h-6 fill-black ml-1 text-black" />
          </div>
        </div>
      )}

      {/* Bottom Gradient Overlay & Title */}
      <div className="absolute inset-x-0 bottom-0 pt-16 pb-5 px-5 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-10 text-white flex flex-col justify-end">
        <p className="text-[10px] uppercase tracking-widest text-[#B89758] font-bold mb-1">
          IVORRA In Motion
        </p>
        <h4 className="text-base sm:text-lg font-bold text-white leading-snug mb-1">
          {title}
        </h4>
        <p className="text-xs text-gray-300 font-normal leading-relaxed line-clamp-2">
          {subtitle}
        </p>
      </div>
    </motion.div>
  )
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
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B89758]" />
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#B89758] font-bold">
              Product Architecture &amp; Motion
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight mb-4">
            Explore the World of <span className="text-[#B89758]">IVORRA</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed">
            Experience our signature handcrafted jewellery in live motion — from multi-tier velvet display suites to fine artisanal stone settings.
          </p>
        </div>

        {/* Dual Live Video Showcase */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between max-w-3xl mx-auto mb-5 px-1 gap-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#B89758]" />
              <span className="text-xs uppercase tracking-wider font-bold text-gray-900">
                Live Jewellery Showcase
              </span>
            </div>
            <span className="text-[11px] text-gray-500 font-medium">
              Tap video to play/pause • Tap speaker for sound
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-xs sm:max-w-3xl mx-auto">
            <VideoCard
              src="/videos/ivorra_showcase_1.mp4"
              poster="/images/video_poster_1.webp"
              tag="Live Unboxing"
              title="12-Pair Velvet Showcase Suite"
              subtitle="Signature folding velvet travel box displaying curated traditional oxidised jhumkis and vibrant studs."
            />
            <VideoCard
              src="/videos/ivorra_showcase_2.mp4"
              poster="/images/video_poster_2.webp"
              tag="Craftsmanship"
              title="Artisan Sparkle & Detailing"
              subtitle="Close-up detail showcasing fine stone settings, intricate silver filigree, and enduring polish."
            />
          </div>
        </div>

        {/* 6-Category Editorial Grid */}
        <div className="pt-10 border-t border-gray-200">
          <div className="text-center max-w-xl mx-auto mb-10">
            <p className="text-[11px] uppercase tracking-widest text-[#B89758] font-bold mb-1">
              Curated Lines
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
              Six Distinct Aesthetic Categories
            </h3>
          </div>

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

      </div>
    </section>
  )
}
