import { useState } from 'react'
import type { FormEvent, ChangeEvent } from 'react'
import { X, Send, MapPin, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react'

interface InquiryModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: (msg: string) => void
  initialTopic?: string
}

const MODAL_TOPICS = [
  'General Enquiry',
  'Business Partnership',
  'Wholesale / Distribution',
  'Marketplace Enquiry',
  'Media & Collaboration',
  'Other'
]

export default function InquiryModal({ isOpen, onClose, onSuccess, initialTopic }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    topic: initialTopic || 'General Enquiry',
    message: '',
    botcheck: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  if (!isOpen) return null

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errorMessage) setErrorMessage(null)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Honeypot check
    if (formData.botcheck) return

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.')
      return
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setErrorMessage('Web3Forms access key is missing. Please set VITE_WEB3FORMS_ACCESS_KEY.')
      return
    }

    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const payload = {
        access_key: accessKey,
        subject: `New Brand Enquiry (${formData.topic}) | IVORRA Website`,
        from_name: 'IVORRA Brand Website',
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || 'Not provided',
        company: formData.company.trim() || 'Not provided',
        enquiry_type: formData.topic,
        message: formData.message.trim(),
        replyto: formData.email.trim(),
        botcheck: ''
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const data = await response.json()

      if (response.ok && data.success) {
        onSuccess(`Thank you for contacting IVORRA! Your enquiry has been received successfully. Our team will get back to you soon.`)
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          topic: 'General Enquiry',
          message: '',
          botcheck: ''
        })
        onClose()
      } else {
        setErrorMessage(data.message || 'Something went wrong while sending your enquiry. Please try again.')
      }
    } catch (err) {
      console.error('Modal Web3Forms submission error:', err)
      setErrorMessage('Something went wrong while sending your enquiry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
          className="absolute top-5 right-5 p-2 rounded-full bg-white text-[#211D1A] hover:text-[#B89758] transition-colors border border-[#DFD8CA] cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-7 sm:p-9">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[#B89758] font-bold mb-2">
            Official Brand Enquiry
          </p>

          <h3 className="text-2xl sm:text-3xl text-black font-bold tracking-tight leading-tight mb-2">
            Let's Connect with IVORRA
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed mb-6">
            Have a business enquiry, collaboration opportunity or simply want to connect with us? We'd love to hear from you.
          </p>

          {errorMessage && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
            <input
              type="text"
              name="botcheck"
              value={formData.botcheck}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-900 mb-1">
                Full Name <span className="text-[#B89758]">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Priya Sharma"
                disabled={isSubmitting}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-xs text-black focus:outline-none focus:border-[#B89758] transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-900 mb-1">
                  Email Address <span className="text-[#B89758]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@domain.com"
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-xs text-black focus:outline-none focus:border-[#B89758] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-900 mb-1">
                  Phone <span className="text-gray-400 font-normal lowercase">(optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-xs text-black focus:outline-none focus:border-[#B89758] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-900 mb-1">
                Company / Business Name <span className="text-gray-400 font-normal lowercase">(optional)</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Retail Studio / Boutique"
                disabled={isSubmitting}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-xs text-black focus:outline-none focus:border-[#B89758] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-900 mb-1">
                Enquiry Type <span className="text-[#B89758]">*</span>
              </label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-xs text-black focus:outline-none focus:border-[#B89758] transition-colors cursor-pointer"
              >
                {MODAL_TOPICS.map(t => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-900 mb-1">
                Message <span className="text-[#B89758]">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                disabled={isSubmitting}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-xs text-black focus:outline-none focus:border-[#B89758] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 px-6 rounded-full text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all cursor-pointer mt-2 ${
                isSubmitting ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-black hover:bg-[#B89758] text-white'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Sending Enquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Enquiry</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-5 pt-3.5 border-t border-gray-200 flex items-center gap-2 text-[11px] text-gray-600">
            <MapPin className="w-3.5 h-3.5 text-[#B89758]" />
            <span>10203, 4th Floor, Padam Singh Road, Karol Bagh, New Delhi – 110005</span>
          </div>

        </div>

      </div>
    </div>
  )
}
