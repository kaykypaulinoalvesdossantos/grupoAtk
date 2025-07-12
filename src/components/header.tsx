"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511959432229", "_blank")
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-around">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image src="/images/logo.png" alt="Grupo ATK" fill className="object-contain" priority />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-[#00C4CC]">
            Home
          </Link>
          <Link href="/sobre" className="text-sm font-medium transition-colors hover:text-[#00C4CC]">
            Sobre
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 h-auto p-1">
                <span className="text-sm font-medium">Produtos</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/produtos/internet-fibra" className="cursor-pointer">
                  Internet Fibra Óptica
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/produtos/internet-movel" className="cursor-pointer">
                  Internet Móvel
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/produtos/link-dedicado" className="cursor-pointer">
                  Link Dedicado
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/produtos/pabx-nuvem" className="cursor-pointer">
                  PABX em Nuvem
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/produtos/cloud" className="cursor-pointer">
                  Cloud
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/parceiros" className="text-sm font-medium transition-colors hover:text-[#00C4CC]">
            Parceiros
          </Link>
          <Link href="/contato" className="text-sm font-medium transition-colors hover:text-[#00C4CC]">
            Contato
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button className="bg-[#00C4CC] hover:bg-[#00a3aa]" onClick={handleWhatsAppClick}>
            Fale Conosco
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image src="/images/logo.png" alt="Grupo ATK" fill className="object-contain" priority />
              </div>
              <span className="text-xl font-bold text-[#0A2342]">Grupo ATK</span>
            </div>
            <Link href="/" className="block py-2 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/sobre" className="block py-2 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Sobre
            </Link>

            <div className="py-2">
              <div className="text-sm font-medium mb-2">Produtos</div>
              <div className="pl-4 space-y-2">
                <Link
                  href="/produtos/internet-fibra"
                  className="block py-1 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Internet Fibra Óptica
                </Link>
                <Link
                  href="/produtos/internet-movel"
                  className="block py-1 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Internet Móvel
                </Link>
                <Link
                  href="/produtos/link-dedicado"
                  className="block py-1 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Link Dedicado
                </Link>
                <Link href="/produtos/pabx-nuvem" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                  PABX em Nuvem
                </Link>
                <Link href="/produtos/cloud" className="block py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                  Cloud
                </Link>
              </div>
            </div>

            <Link href="/parceiros" className="block py-2 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Parceiros
            </Link>
            <Link href="/contato" className="block py-2 text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Contato
            </Link>

            <div className="pt-2">
              <Button className="w-full bg-[#00C4CC] hover:bg-[#00a3aa]" onClick={handleWhatsAppClick}>
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
