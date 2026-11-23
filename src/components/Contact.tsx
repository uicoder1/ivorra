import { useState } from 'react'
import type { FormEvent, ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Building, Send, CheckCircle2, AlertCircle, Loader2, Clock } from 'lucide-react'

const ENQUIRY_TYPES = [
  'General Enquiry',
  'Business Partnership',
  'Wholesale / Distribution',
  'Marketplace Enquiry',
  'Media & Collaboration',
  'Other'
]

interface FormState {
  name: string
  email: string
  phone: string
  company: string
  enquiry_type: string
  message: string
  botcheck: string
}

interface FormErrors {
  name?: string
  email?: string
  enquiry_type?: string
  message?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    enquiry_type: 'General Enquiry',
    message: '',
    botcheck: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [serverMessage, setServerMessage] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.'
      }
    }

    if (!formData.enquiry_type.trim()) {
      newErrors.enquiry_type = 'Please select an enquiry type.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your enquiry.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Honeypot check for spam bots
    if (formData.botcheck) {
      console.warn('Bot submission prevented via honeypot.')
      return
    }

    // Client-side validation
    if (!validate()) {
      return
    }

    // Read access key from Vite environment variable with safe fallback to active brand key
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '87438b1c-697f-4181-96d0-c57719c564cc'

    if (!accessKey) {
      setSubmitStatus('error')
      setServerMessage('Web3Forms access key is missing. Please set VITE_WEB3FORMS_ACCESS_KEY in your environment variables.')
      return
    }

    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setServerMessage(null)

    try {
      const payload = {
        access_key: accessKey,
        subject: 'New Brand Enquiry | IVORRA Website',
        from_name: 'IVORRA Brand Website',
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || 'Not provided',
        company: formData.company.trim() || 'Not provided',
        enquiry_type: formData.enquiry_type,
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
        setSubmitStatus('success')
        setServerMessage('Thank you for contacting IVORRA! Your enquiry has been received successfully. Our team will get back to you soon.')
        // Clear form fields ONLY on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          enquiry_type: 'General Enquiry',
          message: '',
          botcheck: ''
        })
        setErrors({})
      } else {
        setSubmitStatus('error')
        setServerMessage(data.message || 'Something went wrong while sending your enquiry. Please try again.')
      }
    } catch (err) {
      console.error('Web3Forms submission error:', err)
      setSubmitStatus('error')
      setServerMessage('Something went wrong while sending your enquiry. Please try again.')
      // Form values are preserved
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8F5EF] border-t border-[#DFD8CA] relative overflow-hidden">
      {/* Subtle luxury ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B89758]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B89758]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brand Context & Direct Details */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#B89758]" />
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#B89758] font-bold">
                  Official Brand Enquiry
                </p>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-[1.14] mb-4">
                Let's Connect with <span className="text-[#B89758]">IVORRA</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed mb-8">
                Have a business enquiry, collaboration opportunity or simply want to connect with us? We'd love to hear from you.
              </p>

              {/* Direct Details Box */}
              <div className="space-y-4 pt-6 border-t border-[#DFD8CA]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#DFD8CA] flex items-center justify-center shrink-0 text-[#B89758] shadow-2xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gray-500 font-bold">
                      Corporate Headquarters
                    </p>
                    <p className="text-xs sm:text-sm text-gray-900 font-medium leading-relaxed mt-0.5">
                      10203, 4th Floor, Padam Singh Road, Karol Bagh, New Delhi – 110005
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#DFD8CA] flex items-center justify-center shrink-0 text-[#B89758] shadow-2xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gray-500 font-bold">
                      Direct Line / WhatsApp
                    </p>
                    <a
                      href="tel:8920866006"
                      className="text-xs sm:text-sm text-gray-900 font-medium hover:text-[#B89758] transition-colors block mt-0.5"
                    >
                      +91 89208 66006
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#DFD8CA] flex items-center justify-center shrink-0 text-[#B89758] shadow-2xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gray-500 font-bold">
                      Direct Email Inbox
                    </p>
                    <a
                      href="mailto:ahmed.legacy05@gmail.com"
                      className="text-xs sm:text-sm text-gray-900 font-medium hover:text-[#B89758] transition-colors block mt-0.5"
                    >
                      ahmed.legacy05@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#DFD8CA] flex items-center justify-center shrink-0 text-[#B89758] shadow-2xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gray-500 font-bold">
                      Response Commitment
                    </p>
                    <p className="text-xs sm:text-sm text-gray-900 font-medium mt-0.5">
                      Guaranteed response within 24 business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Note Stamp */}
            <div className="mt-8 p-4 rounded-2xl bg-white/80 border border-[#DFD8CA] text-xs text-gray-600 leading-relaxed shadow-2xs">
              <span className="font-semibold text-black">Mr. Ahmed</span> — Founder &amp; CEO reads all partnership and wholesale enquiries directly.
            </div>
          </motion.div>

          {/* Right Column: Web3Forms Brand Enquiry Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-9 border border-[#DFD8CA] shadow-sm relative">
              
              {/* Status Feedback Banners */}
              {submitStatus === 'success' && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 animate-in fade-in duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm font-medium leading-relaxed">
                    {serverMessage || 'Thank you for contacting IVORRA! Your enquiry has been received successfully. Our team will get back to you soon.'}
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3 animate-in fade-in duration-300"
                >
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm font-medium leading-relaxed">
                    {serverMessage || 'Something went wrong while sending your enquiry. Please try again.'}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                
                {/* Honeypot Spam Protection Field (Hidden from Genuine Visitors) */}
                <input
                  type="text"
                  name="botcheck"
                  value={formData.botcheck}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[11px] uppercase tracking-wider font-semibold text-gray-900 mb-1.5"
                    >
                      Full Name <span className="text-[#B89758]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Priya Sharma"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-xs sm:text-sm text-black placeholder:text-gray-400 focus:outline-none transition-all ${
                        errors.name
                          ? 'border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-gray-200 focus:border-[#B89758] focus:ring-1 focus:ring-[#B89758]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-rose-600 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[11px] uppercase tracking-wider font-semibold text-gray-900 mb-1.5"
                    >
                      Email Address <span className="text-[#B89758]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@domain.com"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-xs sm:text-sm text-black placeholder:text-gray-400 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-gray-200 focus:border-[#B89758] focus:ring-1 focus:ring-[#B89758]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-rose-600 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone Number (Optional) & Company (Optional) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-[11px] uppercase tracking-wider font-semibold text-gray-900 mb-1.5"
                    >
                      Phone Number <span className="text-gray-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-[#B89758] focus:ring-1 focus:ring-[#B89758] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-[11px] uppercase tracking-wider font-semibold text-gray-900 mb-1.5"
                    >
                      Company / Business Name <span className="text-gray-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Retail Studio / Boutique"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-[#B89758] focus:ring-1 focus:ring-[#B89758] transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Enquiry Type Dropdown */}
                <div>
                  <label
                    htmlFor="contact-enquiry-type"
                    className="block text-[11px] uppercase tracking-wider font-semibold text-gray-900 mb-1.5"
                  >
                    Enquiry Type <span className="text-[#B89758]">*</span>
                  </label>
                  <select
                    id="contact-enquiry-type"
                    name="enquiry_type"
                    required
                    value={formData.enquiry_type}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-xs sm:text-sm text-black focus:outline-none transition-all cursor-pointer ${
                      errors.enquiry_type
                        ? 'border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-gray-200 focus:border-[#B89758] focus:ring-1 focus:ring-[#B89758]'
                    }`}
                  >
                    {ENQUIRY_TYPES.map(type => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.enquiry_type && (
                    <p className="mt-1 text-[11px] text-rose-600 font-medium">
                      {errors.enquiry_type}
                    </p>
                  )}
                </div>

                {/* Row 4: Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[11px] uppercase tracking-wider font-semibold text-gray-900 mb-1.5"
                  >
                    Message <span className="text-[#B89758]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your brand interest, wholesale quantities, partnership ideas, or question..."
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-xs sm:text-sm text-black placeholder:text-gray-400 focus:outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-gray-200 focus:border-[#B89758] focus:ring-1 focus:ring-[#B89758]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-rose-600 font-medium">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-8 rounded-full text-xs uppercase tracking-[0.18em] font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-sm ${
                      isSubmitting
                        ? 'bg-gray-400 text-white cursor-not-allowed opacity-80'
                        : 'bg-black hover:bg-[#B89758] text-white hover:shadow-md cursor-pointer'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Enquiry</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-center text-gray-500 pt-1">
                  Submissions are transmitted securely directly to the executive IVORRA inbox.
                </p>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
