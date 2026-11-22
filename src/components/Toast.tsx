import { useEffect } from 'react'
import { CheckCircle2, X } from 'lucide-react'

interface ToastProps {
  message: string | null
  onClose: () => void
}

export default function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose()
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [message, onClose])

  if (!message) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-200">
      <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#211D1A] text-[#F8F5EF] shadow-xl border border-[#C6A675]/30 max-w-md">
        <CheckCircle2 className="w-4 h-4 text-[#C6A675] shrink-0" />
        <span className="text-xs sm:text-sm font-light leading-snug">{message}</span>
        <button
          onClick={onClose}
          className="p-1 text-[#DFD8CA] hover:text-white transition-colors ml-2 cursor-pointer"
          aria-label="Dismiss"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
