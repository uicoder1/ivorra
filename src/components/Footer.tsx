import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { BRAND_INFO, MARKETPLACES } from '../data/brandData'

interface FooterProps {
  onOpenInquiry: () => void
}

export default function Footer({ onOpenInquiry }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const verifiedStores = MARKETPLACES.filter(m => m.verified)

  return (
    <footer id="contact" className="bg-[#211D1A] text-[#F8F5EF] pt-20 pb-12 border-t border-[#36302B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Final CTA Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-[0.24em] text-[#C6A675] font-semibold mb-3">
            Begin Your Journey
          </p>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4 leading-tight">
            Discover Your Style. <br />
            <span className="italic text-[#C6A675]">Discover IVORRA.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#DFD8CA] font-light max-w-md mx-auto mb-8">
            Explore our latest collections online or connect with our team for brand, retail, and investor enquiries.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={BRAND_INFO.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#C6A675] hover:bg-[#DFC8A7] text-[#211D1A] text-xs uppercase tracking-[0.18em] font-semibold rounded-full transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>Explore IVORRA</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenInquiry}
              className="w-full sm:w-auto px-8 py-3.5 border border-[#534D47] hover:border-[#C6A675] hover:bg-white/5 text-[#F8F5EF] text-xs uppercase tracking-[0.18em] font-medium rounded-full transition-colors cursor-pointer"
            >
              Corporate Enquiry
            </button>
          </div>
        </div>

        {/* Clean Corporate Footer Details */}
        <div className="pt-12 border-t border-[#36302B] grid grid-cols-1 md:grid-cols-12 gap-10 text-xs text-[#DFD8CA]">
          
          {/* Brand & Address Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={BRAND_INFO.logoWhiteUrl}
                alt="IVORRA"
                className="h-8 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-[#C6A675] uppercase tracking-wider text-[11px] mb-3 font-semibold">
              India's Leading Fashion Jewellery Brand
            </p>
            <p className="text-[#A5844E]/80 font-light leading-relaxed max-w-sm mb-4">
              Modern and contemporary fashion jewellery designed for everyday grace, festive celebrations, and personal self-expression.
            </p>
            <p className="text-[#7A726A] text-[11px]">
              Registered Base: South Delhi – 110014, India • Active since 2020
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-widest font-semibold text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#hero" className="hover:text-[#C6A675] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#C6A675] transition-colors">About IVORRA</a></li>
              <li><a href="#collections" className="hover:text-[#C6A675] transition-colors">Our Collections</a></li>
              <li><a href="#marketplaces" className="hover:text-[#C6A675] transition-colors">Marketplaces</a></li>
              <li><a href="#why-ivorra" className="hover:text-[#C6A675] transition-colors">Why IVORRA</a></li>
            </ul>
          </div>

          {/* Marketplaces & Social Links */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-widest font-semibold text-white mb-4">
              Official Presence
            </h4>
            <ul className="space-y-2.5 mb-6">
              {verifiedStores.map((store) => (
                <li key={store.id}>
                  <a
                    href={store.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C6A675] transition-colors flex items-center justify-between group"
                  >
                    <span>{store.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#7A726A] group-hover:text-[#C6A675] transition-colors" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C6A675] transition-colors flex items-center gap-1.5"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href={BRAND_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C6A675] transition-colors flex items-center gap-1.5"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-[#36302B] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7A726A]">
          <p>&copy; 2026 IVORRA. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-[#F8F5EF] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3 text-[#C6A675]" />
          </button>
        </div>

      </div>
    </footer>
  )
}
