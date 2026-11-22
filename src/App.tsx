import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Collections from './components/Collections'
import Marketplaces from './components/Marketplaces'
import CustomerReviews from './components/CustomerReviews'
import Founder from './components/Founder'
import WhyIvorra from './components/WhyIvorra'
import Footer from './components/Footer'
import InquiryModal from './components/InquiryModal'
import Toast from './components/Toast'

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111827] selection:bg-[#B89758]/20 selection:text-[#111827]">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Exactly 6 Main Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About IVORRA */}
        <About />

        {/* Section 3: Our Collections */}
        <Collections />

        {/* Section 4: Marketplace Presence */}
        <Marketplaces />

        {/* Customer Reviews & Marketplace Validation */}
        <CustomerReviews />

        {/* Executive Leadership & Founder's Desk */}
        <Founder onOpenInquiry={() => setIsInquiryOpen(true)} />

        {/* Why IVORRA (Designed for Every Occasion: 4 Highlights + Editorial Gallery) */}
        <WhyIvorra />
      </main>

      {/* Section 6: Contact and Footer */}
      <Footer onOpenInquiry={() => setIsInquiryOpen(true)} />

      {/* Brand Enquiry Drawer/Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        onSuccess={(msg) => setToastMessage(msg)}
      />

      {/* Toast Feedback */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  )
}
