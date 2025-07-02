"use client"

import { Button } from "@/components/ui/button"
import { PhoneIcon as WhatsApp } from "lucide-react"

export default function WhatsAppButton() {
  const phoneNumber = "5511959432229" // Número atualizado

  const handleWhatsAppClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}`
    window.open(whatsappURL, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        className="bg-[#25D366] hover:bg-[#20BD5C] text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
        onClick={handleWhatsAppClick}
        aria-label="Fale conosco pelo WhatsApp"
      >
        <WhatsApp className="h-7 w-7" />
        <span className="sr-only">Fale conosco pelo WhatsApp</span>
      </Button>
    </div>
  )
}
