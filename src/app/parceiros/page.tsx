"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Handshake, Star, Award, Shield, Zap, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ParceirosPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentPartner, setCurrentPartner] = useState(0)

  const partners = [
    {
      name: "Vivo Empresas",
      logo: "/empresas/vivo-empresa.webp",
      description: "Líder em conectividade corporativa no Brasil, oferecendo soluções completas de telecomunicações.",
      specialties: ["Fibra Óptica", "5G", "IoT", "Cloud"],
      rating: 5,
      highlight: "Maior cobertura 5G do país",
      details:
        "Nossa parceria garante a robustez da infraestrutura que disponibilizamos aos nossos clientes, com tecnologia de ponta e cobertura nacional.",
      services:
        "Internet fibra óptica de alta velocidade, links dedicados, telefonia móvel empresarial e soluções integradas de comunicação.",
    },
    {
      name: "Claro Empresas",
      logo: "/empresas/claro-empresas.png",
      description: "Referência em soluções convergentes de telecomunicações com tecnologia de ponta.",
      specialties: ["Internet", "Telefonia", "TV", "Dados"],
      rating: 5,
      highlight: "Tecnologia convergente",
      details:
        "Com esta parceria, ampliamos nosso portfólio de serviços, oferecendo opções diversificadas que se adaptam às necessidades específicas de cada cliente.",
      services:
        "Internet de alta velocidade, telefonia fixa e móvel, TV por assinatura corporativa e soluções de conectividade avançadas.",
    },
    {
      name: "Net2Phone",
      logo: "/empresas/net2phone-logo.jpeg",
      description: "Especialista global em comunicação unificada e soluções VoIP de última geração.",
      specialties: ["VoIP", "PABX Nuvem", "UCaaS", "Contact Center"],
      rating: 5,
      highlight: "Comunicação unificada",
      details:
        "Nos permite oferecer sistemas de PABX em nuvem de última geração, transformando a comunicação empresarial dos nossos clientes.",
      services:
        "URA, gravação de chamadas, conferência, integração com CRM e muito mais, tudo com a flexibilidade da tecnologia em nuvem.",
    },
    {
      name: "Hostfiber",
      logo: "/empresas/hostifaiber-logo.png",
      description: "Referência em soluções de hospedagem e infraestrutura em nuvem robusta e segura.",
      specialties: ["Cloud", "Backup", "Disaster Recovery", "Hosting"],
      rating: 5,
      highlight: "Infraestrutura robusta",
      details:
        "Esta parceria nos permite oferecer serviços de cloud computing robustos e seguros para nossos clientes.",
      services:
        "Armazenamento em nuvem, servidores virtuais, backup online e soluções de disaster recovery com alta disponibilidade.",
    },
    {
      name: "TIM Empresas",
      logo: "/empresas/tim-logo.png",
      description: "Conectividade inteligente para empresas",
      specialties: ["5G", "IoT", "Cloud", "Segurança"],
      rating: 5,
      highlight: "Pioneira em 5G",
      details:
        "Soluções inovadoras para empresas que buscam mobilidade, segurança e alta performance.",
      services:
        "Internet móvel, soluções IoT, cloud corporativo e segurança de rede.",
    },
    {
      name: "Algar Telecom",
      logo: "/empresas/Algar_Telecom_logo.png",
      description: "Inovação e qualidade em telecomunicações",
      specialties: ["Links Dedicados", "MPLS", "Data Center"],
      rating: 5,
      highlight: "Excelência em atendimento",
      details:
        "Atendimento diferenciado e soluções sob medida para empresas de todos os portes.",
      services:
        "Links dedicados, MPLS, data center e soluções de conectividade empresarial.",
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Tecnologia de Ponta",
      desc: "Acesso às mais avançadas soluções de telecomunicações do mercado através de parcerias estratégicas.",
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      desc: "Parceiros certificados e reconhecidos pela excelência em seus segmentos de atuação.",
    },
    {
      icon: Users,
      title: "Suporte Especializado",
      desc: "Equipes técnicas especializadas de nossos parceiros para suporte avançado.",
    },
    {
      icon: Zap,
      title: "Inovação Constante",
      desc: "Acesso antecipado às mais recentes inovações e tecnologias do setor.",
    },
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % partners.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [partners.length])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0A2342] via-[#1E598F] to-[#0A2342]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="absolute top-20 left-10 w-20 h-20 bg-[#00C4CC] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-[#00C4CC] rounded-full opacity-30 animate-bounce"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center text-white transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#00C4CC]/20 border border-[#00C4CC]/30 rounded-full text-[#00C4CC] text-sm font-medium mb-6">
              <Handshake className="w-4 h-4 mr-2" />
              Parcerias Estratégicas
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Nossos
              <span className="bg-gradient-to-r from-[#00C4CC] to-white bg-clip-text text-transparent"> Parceiros</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trabalhamos com as principais empresas de telecomunicações do Brasil. Essas alianças nos permitem oferecer
              um portfólio completo de soluções, combinando o melhor da tecnologia com atendimento personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Partner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-white to-gray-50">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center mb-6">
                      <div className="relative w-32 h-20 mr-6">
                        <Image
                          src={partners[currentPartner].logo || "/placeholder.svg"}
                          alt={partners[currentPartner].name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0A2342] mb-2">{partners[currentPartner].name}</h3>
                        <div className="flex items-center">
                          {[...Array(partners[currentPartner].rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">Parceiro Premium</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 text-lg">{partners[currentPartner].description}</p>
                    <p className="text-gray-600 mb-6">{partners[currentPartner].details}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-[#0A2342] mb-3">Especialidades:</h4>
                      <div className="flex flex-wrap gap-2">
                        {partners[currentPartner].specialties.map((specialty, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-[#00C4CC]/10 text-[#00C4CC] hover:bg-[#00C4CC]/20"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center text-[#00C4CC] font-semibold">
                      <Shield className="h-5 w-5 mr-2" />
                      {partners[currentPartner].highlight}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#0A2342] to-[#1E598F] p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />
                    <div className="text-center text-white relative z-10">
                      <Zap className="h-16 w-16 mx-auto mb-4 text-[#00C4CC]" />
                      <h4 className="text-2xl font-bold mb-2">Soluções Disponíveis</h4>
                      <p className="opacity-90">{partners[currentPartner].services}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Partners Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
                  currentPartner === index
                    ? "border-[#00C4CC] shadow-lg shadow-[#00C4CC]/20"
                    : "border-gray-200 hover:border-[#00C4CC]/50"
                }`}
                onClick={() => setCurrentPartner(index)}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative w-full h-16 mb-4">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-[#0A2342] mb-2">{partner.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{partner.description}</p>
                  <div className="flex justify-center">
                    {[...Array(partner.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-6">Vantagens das Nossas Parcerias</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Benefícios exclusivos que só conseguimos oferecer através de nossas parcerias estratégicas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00C4CC] to-[#1E598F] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2342] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-[#00C4CC] mb-2">7+</div>
              <div className="text-gray-600">Parceiros Premium</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#00C4CC] mb-2">99.9%</div>
              <div className="text-gray-600">SLA Garantido</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#00C4CC] mb-2">24/7</div>
              <div className="text-gray-600">Suporte Técnico</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#00C4CC] mb-2">500+</div>
              <div className="text-gray-600">Clientes Ativos</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#0A2342] to-[#1E598F]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Conheça a Força das Nossas Parcerias!</h2>
            <p className="text-xl mb-8 opacity-90">
              Descubra como nossas parcerias estratégicas podem oferecer as melhores soluções para sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#00C4CC] hover:bg-[#00a3aa] px-8 py-6 text-lg" onClick={() => window.open("https://wa.me/5511959432229", "_blank")}>Converse pelo WhatsApp</Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0A2342] px-8 py-6 text-lg bg-transparent"
              >
                <Link href="/contato">Solicitar Orçamento</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
