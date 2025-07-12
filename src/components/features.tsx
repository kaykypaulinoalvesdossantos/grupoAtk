"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Wifi,
  Smartphone,
  Network,
  Cloud,
  Phone,
  Shield,
  Zap,
  Users,
  ArrowRight,
  TrendingUp,
  Globe,
  Headphones,
  Award,
} from "lucide-react"

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)

  const mainFeatures = [
    {
      icon: Wifi,
      title: "Internet Fibra Óptica",
      description: "Velocidade ultrarrápida com tecnologia de ponta",
      details: "Conexão de até 1Gbps com 99.9% de uptime garantido e suporte técnico especializado 24/7",
      color: "from-blue-500 to-cyan-500",
      stats: "Até 1Gbps",
      benefits: ["Velocidade ultrarrápida", "Estabilidade superior", "Baixa latência", "Suporte dedicado"],
      link: "/produtos/internet-fibra",
    },
    {
      icon: Smartphone,
      title: "Internet Móvel",
      description: "Conectividade em qualquer lugar do Brasil",
      details: "Cobertura 4G/5G com planos corporativos flexíveis e gestão centralizada de todas as linhas",
      color: "from-green-500 to-emerald-500",
      stats: "Cobertura 5G",
      benefits: ["Mobilidade total", "Tecnologia 5G", "Planos flexíveis", "Gestão centralizada"],
      link: "/produtos/internet-movel",
    },
    {
      icon: Network,
      title: "Link Dedicado",
      description: "Banda exclusiva para operações críticas",
      details: "SLA de 99.9% com IP fixo, suporte prioritário e monitoramento proativo 24/7",
      color: "from-purple-500 to-violet-500",
      stats: "SLA 99.9%",
      benefits: ["Banda exclusiva", "IP fixo", "SLA garantido", "Monitoramento 24/7"],
      link: "/produtos/link-dedicado",
    },
    {
      icon: Cloud,
      title: "Soluções Cloud",
      description: "Infraestrutura escalável e segura",
      details: "Backup automático, disaster recovery, alta disponibilidade e segurança avançada",
      color: "from-orange-500 to-red-500",
      stats: "99.9% Uptime",
      benefits: ["Backup automático", "Disaster recovery", "Alta disponibilidade", "Segurança avançada"],
      link: "/produtos/cloud",
    },
  ]

  const benefits = [
    { icon: Shield, title: "Segurança Avançada", desc: "Proteção multicamadas e monitoramento 24/7" },
    { icon: Zap, title: "Instalação Rápida", desc: "Ativação em até 24 horas úteis" },
    { icon: Users, title: "Suporte Especializado", desc: "Equipe técnica dedicada ao seu sucesso" },
    { icon: TrendingUp, title: "Escalabilidade", desc: "Cresça sem limites com nossas soluções" },
    { icon: Globe, title: "Cobertura Nacional", desc: "Atendemos todo o território brasileiro" },
    { icon: Headphones, title: "Suporte 24/7", desc: "Atendimento ininterrupto quando precisar" },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#00C4CC]/10 border border-[#00C4CC]/20 rounded-full text-[#00C4CC] text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Soluções Inovadoras
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#0A2342] mb-6">
            Tecnologia que
            <span className="bg-gradient-to-r from-[#00C4CC] to-[#1E598F] bg-clip-text text-transparent">
              {" "}
              Transforma
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos um ecossistema completo de soluções em telecomunicações, projetado para impulsionar o crescimento
            e a eficiência da sua empresa.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            {mainFeatures.map((feature, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                  activeFeature === index
                    ? "border-[#00C4CC] shadow-lg shadow-[#00C4CC]/20"
                    : "border-gray-200 hover:border-[#00C4CC]/50"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-[#0A2342]">{feature.title}</h3>
                        <span className="text-sm font-semibold text-[#00C4CC] bg-[#00C4CC]/10 px-3 py-1 rounded-full">
                          {feature.stats}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{feature.description}</p>
                      <p className="text-sm text-gray-500">{feature.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feature Showcase */}
          <div className="relative">
            <div className="sticky top-8">
              <Card className="overflow-hidden border-0 shadow-2xl">
                <div className={`h-64 bg-gradient-to-br ${mainFeatures[activeFeature].color} relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {(() => {
                      const Icon = mainFeatures[activeFeature].icon
                      return <Icon className="h-24 w-24 text-white" />
                    })()}
                  </div>
                  <div className="absolute bottom-4 left-6 text-white">
                    <h3 className="text-2xl font-bold">{mainFeatures[activeFeature].title}</h3>
                    <p className="opacity-90">{mainFeatures[activeFeature].description}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{mainFeatures[activeFeature].details}</p>

                  {/* Benefits List */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#0A2342] mb-3">Principais Benefícios:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {mainFeatures[activeFeature].benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-[#00C4CC] rounded-full mr-2"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={mainFeatures[activeFeature].link}>
                    <Button className="w-full bg-[#00C4CC] hover:bg-[#00a3aa] group">
                      Saiba Mais
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-[#0A2342] mb-12">Por Que Escolher o Grupo ATK?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00C4CC] to-[#1E598F] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0A2342] mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden">
          <div className="text-center bg-gradient-to-r from-[#0A2342] to-[#1E598F] rounded-2xl p-12 text-white relative">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 bg-[#00C4CC]/20 border border-[#00C4CC]/30 rounded-full text-[#00C4CC] text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Transforme Sua Empresa
              </div>

              <h3 className="text-3xl font-bold mb-4">Pronto para Transformar Sua Conectividade?</h3>
              <p className="text-xl mb-8 opacity-90">
                Fale com nossos especialistas e descubra a solução perfeita para sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://wa.me/5511959432229" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#00C4CC] hover:bg-[#00a3aa] px-8 py-6 text-lg w-full sm:w-auto">
                    <Phone className="mr-2 h-5 w-5" />
                    Falar com Especialista
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#0A2342] px-8 py-6 text-lg bg-transparent w-full sm:w-auto"
                  >
                    Solicitar Orçamento
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
