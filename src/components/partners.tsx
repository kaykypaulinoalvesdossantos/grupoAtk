"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Award, Shield, Zap, ArrowRight, Handshake } from "lucide-react"

export default function Partners() {
  const [currentPartner, setCurrentPartner] = useState(0)

  const partners = [
    {
      name: "Vivo Empresas",
      logo: "/empresas/vivo-empresa.webp",
      description: "Líder em conectividade corporativa no Brasil",
      specialties: ["Fibra Óptica", "5G", "IoT", "Cloud"],
      rating: 5,
      highlight: "Maior cobertura 5G do país",
      color: "from-purple-500 to-violet-500",
    },
    {
      name: "Claro Empresas",
      logo: "/empresas/claro-empresas.png",
      description: "Soluções convergentes de telecomunicações",
      specialties: ["Internet", "Telefonia", "TV", "Dados"],
      rating: 5,
      highlight: "Tecnologia de ponta",
      color: "from-red-500 to-pink-500",
    },
    {
      name: "Net2Phone",
      logo: "/empresas/net2phone-logo.jpeg",
      description: "Líder global em comunicação unificada",
      specialties: ["VoIP", "PABX Nuvem", "UCaaS", "Contact Center"],
      rating: 5,
      highlight: "Comunicação unificada",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Hostfiber",
      logo: "/empresas/hostifaiber-logo.png",
      description: "Soluções avançadas de hospedagem e cloud",
      specialties: ["Cloud", "Backup", "Disaster Recovery", "Hosting"],
      rating: 5,
      highlight: "Infraestrutura robusta",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "TIM Empresas",
      logo: "/empresas/tim-logo.png",
      description: "Conectividade inteligente para empresas",
      specialties: ["5G", "IoT", "Cloud", "Segurança"],
      rating: 5,
      highlight: "Pioneira em 5G",
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "Algar Telecom",
      logo: "/empresas/Algar_Telecom_logo.png",
      description: "Inovação e qualidade em telecomunicações",
      specialties: ["Links Dedicados", "MPLS", "Data Center"],
      rating: 5,
      highlight: "Excelência em atendimento",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % partners.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [partners.length])

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#00C4CC]/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#1E598F]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#00C4CC]/5 rounded-full blur-xl animate-bounce delay-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#00C4CC]/10 border border-[#00C4CC]/20 rounded-full text-[#00C4CC] text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Parcerias Estratégicas
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#0A2342] mb-6">
            Conectados com os
            <span className="bg-gradient-to-r from-[#00C4CC] to-[#1E598F] bg-clip-text text-transparent">
              {" "}
              Melhores
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabalhamos com as principais empresas de telecomunicações do Brasil para oferecer soluções de classe
            mundial aos nossos clientes.
          </p>
        </div>

        {/* Featured Partner */}
        <div className="mb-16">
          <Card className="overflow-hidden border-0 shadow-2xl bg-white hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-6">
                    <div className="relative w-24 h-16 lg:w-32 lg:h-20 mr-4 lg:mr-6 bg-white rounded-lg p-2 shadow-md">
                      <Image
                        src={partners[currentPartner].logo || "/placeholder.svg"}
                        alt={partners[currentPartner].name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-[#0A2342] mb-2">
                        {partners[currentPartner].name}
                      </h3>
                      <div className="flex items-center">
                        {[...Array(partners[currentPartner].rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="ml-2 text-sm font-medium text-[#00C4CC]">Parceiro Premium</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 mb-6">{partners[currentPartner].description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-[#0A2342] mb-3">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partners[currentPartner].specialties.map((specialty, index) => (
                        <Badge
                          key={index}
                          className="bg-gradient-to-r from-[#00C4CC] to-[#1E598F] text-white hover:shadow-lg transition-all duration-300"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-[#00C4CC] font-semibold mb-6">
                    <Shield className="h-5 w-5 mr-2" />
                    {partners[currentPartner].highlight}
                  </div>

                  <Button className="bg-gradient-to-r from-[#00C4CC] to-[#1E598F] hover:from-[#00a3aa] hover:to-[#0A2342] text-white group w-fit">
                    Conhecer Parceria
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div
                  className={`bg-gradient-to-br ${partners[currentPartner].color} p-8 lg:p-12 flex items-center justify-center relative overflow-hidden`}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                  <div className="text-center text-white relative z-10">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <Handshake className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Parceria Estratégica</h4>
                    <p className="opacity-90 text-lg">Tecnologia de ponta e suporte especializado para sua empresa</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-16">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 group ${
                currentPartner === index
                  ? "border-[#00C4CC] shadow-lg shadow-[#00C4CC]/20 scale-105"
                  : "border-gray-200 hover:border-[#00C4CC]/50"
              }`}
              onClick={() => setCurrentPartner(index)}
            >
              <CardContent className="p-4 lg:p-6 text-center">
                <div className="relative w-full h-12 lg:h-16 mb-3 lg:mb-4 bg-white rounded-lg p-2 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    fill
                    className="object-contain transition-all duration-300"
                  />
                </div>
                <h3 className="font-bold text-[#0A2342] mb-1 lg:mb-2 text-sm lg:text-base">{partner.name}</h3>
                <div className="flex justify-center mb-2">
                  {[...Array(partner.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xs lg:text-sm text-gray-600 line-clamp-2">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#00C4CC] to-[#1E598F] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-[#0A2342] mb-2">7+</div>
            <div className="text-gray-600 font-medium">Parceiros Premium</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#1E598F] to-[#00C4CC] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-[#0A2342] mb-2">99.9%</div>
            <div className="text-gray-600 font-medium">SLA Garantido</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#00C4CC] to-[#1E598F] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-[#0A2342] mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Suporte Técnico</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-r from-[#1E598F] to-[#00C4CC] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Handshake className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-[#0A2342] mb-2">500+</div>
            <div className="text-gray-600 font-medium">Clientes Ativos</div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPartner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPartner
                  ? "bg-gradient-to-r from-[#00C4CC] to-[#1E598F] scale-125 shadow-lg"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
