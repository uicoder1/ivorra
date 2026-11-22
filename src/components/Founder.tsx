import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react'
import { BRAND_INFO } from '../data/brandData'

interface FounderProps {
  onOpenInquiry: () => void
}

export default function Founder({ onOpenInquiry }: FounderProps) {
  return (
    <section id="founder" className="py-20 sm:py-28 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#9B783E]" />
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#9B783E] font-bold">
              Executive Leadership
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-950 tracking-tight mb-4">
            The Vision Behind <span className="italic text-[#9B783E]">IVORRA</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed">
            Leading the transformation of contemporary Indian fashion jewellery through artisan craftsmanship, quality assurance, and nationwide omnichannel accessibility.
          </p>
        </div>

        {/* Two-Column Founder Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Official Executive Card Visual */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-gray-900 bg-[#161413] p-2 sm:p-3 group">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-amber-900/40">
                <img
                  src={BRAND_INFO.founderCard}
                  alt="Mr. Ahmed — Founder & CEO, IVORRA Fashion Jewellery"
                  className="w-full h-auto object-contain group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Verified Executive Credential Badge */}
              <div className="mt-3 px-3 py-2 flex items-center justify-between text-xs text-amber-200/90 bg-black/40 rounded-xl border border-white/5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C6A675]" />
                  <span className="font-semibold tracking-wide text-white">Verified Founder Identity</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#C6A675] font-bold">
                  Karol Bagh, New Delhi
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Founder Profile, Vision & Direct Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Name & Title */}
            <div className="mb-5">
              <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-amber-50 text-[#9B783E] border border-amber-200">
                Founder & Chief Executive Officer
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-gray-950 font-medium tracking-tight mt-3 mb-1">
                {BRAND_INFO.founder}
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#9B783E] font-bold">
                IVORRA Fashion Jewellery • Active since {BRAND_INFO.foundedYear}
              </p>
            </div>

            {/* Founder's Vision Quote */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gray-50 border border-gray-200 mb-6 relative">
              <span className="text-4xl font-serif text-[#C6A675] absolute top-2 left-4 select-none opacity-40">“</span>
              <p className="text-sm text-gray-800 leading-relaxed font-normal pt-2 italic">
                IVORRA was founded with a singular conviction: to bridge timeless Indian craftsmanship with trend-forward contemporary designs. We believe fine fashion jewellery should not remain locked away for rare occasions — it belongs in everyday self-expression, accessible to women across India.
              </p>
            </div>

            {/* Direct Official Corporate Details */}
            <div className="space-y-3 mb-8 text-xs text-gray-700">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-200 shadow-2xs">
                <MapPin className="w-4 h-4 text-[#9B783E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-950 block">Corporate Head Office</span>
                  <span className="text-gray-600 leading-tight block">
                    {BRAND_INFO.address}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200 hover:border-gray-950 hover:shadow-xs transition-all"
                >
                  <Phone className="w-4 h-4 text-[#9B783E] shrink-0" />
                  <div>
                    <span className="font-bold text-gray-950 block">Direct Telephone</span>
                    <span className="text-gray-600">{BRAND_INFO.displayPhone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200 hover:border-gray-950 hover:shadow-xs transition-all"
                >
                  <Mail className="w-4 h-4 text-[#9B783E] shrink-0" />
                  <div>
                    <span className="font-bold text-gray-950 block">Official Email</span>
                    <span className="text-gray-600 truncate block">{BRAND_INFO.email}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto px-7 py-3 bg-gray-950 hover:bg-[#9B783E] text-white text-xs uppercase tracking-widest font-semibold rounded-full transition-colors cursor-pointer shadow-sm text-center"
              >
                Executive & Investor Enquiry
              </button>

              <a
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 border border-gray-300 hover:border-gray-950 text-gray-900 text-xs uppercase tracking-widest font-semibold rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#9B783E]" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Follow @ivorra_official</span>
                <ArrowUpRight className="w-3 h-3 text-gray-400" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}
