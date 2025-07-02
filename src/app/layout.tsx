import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Grupo ATK - Soluções em Telecomunicações",
  description:
    "Soluções completas e personalizadas em Internet Fibra Óptica, Móvel, Link Dedicado, PABX em Nuvem e Cloud, com a segurança e a expertise que sua empresa merece.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}
