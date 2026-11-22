import { useState } from 'react'
import type { FormEvent } from 'react'
import { X, Send, MapPin } from 'lucide-react'

interface InquiryModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: (msg: string) => void
  initialTopic?: string
}

export default function InquiryModal({ isOpen, onClose, onSuccess, initialTopic }: InquiryModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState(initialTopic || 'Brand Collaboration')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      onSuccess(`Thank you, ${name || 'valued visitor'}! Your enquiry regarding "${topic}" has been received. Our team will get back to you shortly.`)
      setName('')
      setEmail('')
      setMessage('')
      onClose()
    }, 500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#211D1A]/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#F8F5EF] rounded-3xl max-w-lg w-full shadow-2xl border border-[#DFD8CA] overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white text-[#211D1A] hover:text-[#A5844E] transition-colors border border-[#DFD8CA] cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-8 sm:p-10">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[#A5844E] font-medium mb-2">
            Official Brand Enquiry
          </p>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#211D1A] font-normal leading-tight mb-2">
            Connect with IVORRA
          </h3>

          <p className="text-xs sm:text-sm text-[#534D47] font-light leading-relaxed mb-6">
            For retail partnerships, corporate gifting, media inquiries, or brand questions.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-medium text-[#211D1A] mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Priya Sharma"
                className="w-full px-4 py-2.5 rounded-xl border border-[#DFD8CA] bg-white text-xs text-[#211D1A] focus:outline-none focus:border-[#C6A675] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-medium text-[#211D1A] mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full px-4 py-2.5 rounded-xl border border-[#DFD8CA] bg-white text-xs text-[#211D1A] focus:outline-none focus:border-[#C6A675] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-medium text-[#211D1A] mb-1.5">
                Enquiry Subject
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#DFD8CA] bg-white text-xs text-[#211D1A] focus:outline-none focus:border-[#C6A675] transition-colors"
              >
                <option value="Investor & Retail Relations">Investor &amp; Retail Relations</option>
                <option value="Brand Collaboration">Brand Collaboration</option>
                <option value="Retail & Distribution">Retail &amp; Distribution</option>
                <option value="Corporate Gifting">Corporate Gifting &amp; Bulk Orders</option>
                <option value="Media & Press">Media &amp; Press</option>
                <option value="General Enquiry">General Brand Enquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-medium text-[#211D1A] mb-1.5">
                Message
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message..."
                className="w-full px-4 py-2.5 rounded-xl border border-[#DFD8CA] bg-white text-xs text-[#211D1A] focus:outline-none focus:border-[#C6A675] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-full bg-[#211D1A] hover:bg-[#A5844E] text-[#F8F5EF] text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer mt-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'Sending...' : 'Submit Enquiry'}</span>
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-[#E8E2D6] flex items-center gap-2 text-[11px] text-[#7A726A]">
            <MapPin className="w-3.5 h-3.5 text-[#C6A675]" />
            <span>South Delhi – 110014, India</span>
          </div>

        </div>

      </div>
    </div>
  )
}
