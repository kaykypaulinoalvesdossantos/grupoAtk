"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Play, Shield, Zap, Users, Award } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const slides = [
    {
      title: "Conectando Seu Negócio ao Futuro",
      subtitle: "Internet Fibra Óptica de Alta Performance",
      description: "Velocidade ultrarrápida, estabilidade incomparável e suporte 24/7 para impulsionar sua empresa.",
      image: "/images/futuro.jpg",
    },
    {
      title: "Comunicação Sem Limites",
      subtitle: "PABX em Nuvem e Soluções Móveis",
      description: "Modernize sua comunicação com tecnologia de ponta e mobilidade total para sua equipe.",
      image: "/images/pabx.png",
    },
    {
      title: "Infraestrutura de Classe Mundial",
      subtitle: "Links Dedicados e Soluções Cloud",
      description: "Exclusividade, segurança e escalabilidade para empresas que não podem parar.",
      image: "/images/conectaomundo.webp",
    },
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0A2342] via-[#1E598F] to-[#0A2342]">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Elements - Ajustados para não sobrepor */}
      <div className="absolute top-32 left-8 w-16 h-16 bg-[#00C4CC] rounded-full opacity-15 animate-pulse hidden lg:block"></div>
      <div className="absolute top-20 right-12 w-12 h-12 bg-white rounded-full opacity-10 animate-bounce delay-300 hidden lg:block"></div>
      <div className="absolute bottom-32 left-16 w-20 h-20 bg-[#00C4CC] rounded-full opacity-20 animate-ping delay-700 hidden lg:block"></div>
      <div className="absolute bottom-20 right-8 w-14 h-14 bg-white rounded-full opacity-15 animate-pulse delay-1000 hidden lg:block"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-[#00C4CC] rounded-full opacity-25 animate-bounce delay-500 hidden lg:block"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`space-y-8 text-white transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-[#00C4CC]/20 border border-[#00C4CC]/30 rounded-full text-[#00C4CC] text-sm font-medium backdrop-blur-sm">
              <Award className="w-4 h-4 mr-2" />
              Líder em Soluções Corporativas
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </span>
              </h1>
              <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-[#00C4CC]">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#00C4CC] mb-1">500+</div>
                <div className="text-xs lg:text-sm text-gray-400">Empresas Conectadas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#00C4CC] mb-1">99.9%</div>
                <div className="text-xs lg:text-sm text-gray-400">Uptime Garantido</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#00C4CC] mb-1">24/7</div>
                <div className="text-xs lg:text-sm text-gray-400">Suporte Técnico</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#00C4CC] to-[#00a3aa] hover:from-[#00a3aa] hover:to-[#008a91] text-white px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-xl shadow-2xl hover:shadow-[#00C4CC]/25 transition-all duration-300 group"
              >
                Fale Conosco Agora
                <ChevronRight className="ml-2 h-4 lg:h-5 w-4 lg:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-[#0A2342] px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 group bg-transparent"
              >
                <Play className="mr-2 h-4 lg:h-5 w-4 lg:w-5 group-hover:scale-110 transition-transform" />
                Ver Demonstração
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 lg:h-5 w-4 lg:w-5 text-[#00C4CC]" />
                <span className="text-sm text-gray-300">Certificado ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 lg:h-5 w-4 lg:w-5 text-[#00C4CC]" />
                <span className="text-sm text-gray-300">Ativação em 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 lg:h-5 w-4 lg:w-5 text-[#00C4CC]" />
                <span className="text-sm text-gray-300">Suporte Especializado</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              {/* Main Image Container */}
              <div className="relative z-30 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={slides[currentSlide].image || "/placeholder.svg"}
                  alt="Soluções em Telecomunicações"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342]/50 to-transparent"></div>
              </div>

              {/* Floating Cards - Ajustados para não sobrepor */}
              <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 bg-white/10 backdrop-blur-md rounded-xl p-3 lg:p-4 border border-white/20 z-40">
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-xs lg:text-sm font-medium">Sistema Online</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-[#00C4CC]/20 backdrop-blur-md rounded-xl p-3 lg:p-4 border border-[#00C4CC]/30 z-40">
                <div className="text-white">
                  <div className="text-xl lg:text-2xl font-bold">1Gbps</div>
                  <div className="text-xs lg:text-sm opacity-80">Velocidade Máxima</div>
                </div>
              </div>

              {/* Background Glow - Ajustado para ficar atrás */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00C4CC]/30 to-[#1E598F]/30 rounded-2xl blur-2xl z-10 scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-[#1E598F]/20 to-[#00C4CC]/20 rounded-2xl blur-3xl z-0 scale-110"></div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8 lg:mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[#00C4CC] scale-125" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
