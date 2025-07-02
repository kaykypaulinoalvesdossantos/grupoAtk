"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Wifi, Zap, Shield, Users, TrendingUp, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function InternetFibraPage() {
  const [isVisible, setIsVisible] = useState(false)

  const benefits = [
    {
      icon: Zap,
      title: "Velocidade Ultrarrápida",
      desc: "Conexão de alta velocidade para download e upload, ideal para videoconferências e transferência de arquivos pesados.",
    },
    {
      icon: Shield,
      title: "Estabilidade Superior",
      desc: "Conexão estável e consistente, sem quedas ou oscilações, mesmo em horários de pico.",
    },
    {
      icon: TrendingUp,
      title: "Baixa Latência",
      desc: "Tempo de resposta mínimo, essencial para aplicações em tempo real e serviços na nuvem.",
    },
    {
      icon: Users,
      title: "Suporte Dedicado",
      desc: "Equipe técnica especializada disponível para resolver qualquer problema rapidamente.",
    },
  ]

  const plans = [
    {
      name: "400 Mega",
      speed: "400",
      price: "R$ 79,99",
      features: [
        "Ideal para pequenas empresas",
        "Dispositivos ilimitados",
        "Suporte técnico 24/7",
        "Instalação gratuita",
      ],
      popular: false,
    },
    {
      name: "500 Mega",
      speed: "500",
      price: "R$ 89,99",
      features: [
        "Ideal para médias empresas",
        "Dispositivos ilimitados",
        "Suporte técnico 24/7",
        "Instalação gratuita",
      ],
      popular: true,
    },
    {
      name: "700 Mega",
      speed: "700",
      price: "R$ 99,99",
      features: [
        "Ideal para grandes empresas",
        "Dispositivos ilimitados",
        "Suporte técnico 24/7",
        "Instalação gratuita",
      ],
      popular: false,
    },
  ]

  const useCases = [
    "Empresas de todos os portes que necessitam de conexão confiável",
    "Escritórios com múltiplos usuários e dispositivos conectados",
    "Data centers e ambientes de TI críticos",
    "Empresas que utilizam serviços em nuvem intensivamente",
    "Negócios que dependem de videoconferência e colaboração remota",
    "Organizações com transferência frequente de arquivos grandes",
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`text-white transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="inline-flex items-center px-4 py-2 bg-[#00C4CC]/20 border border-[#00C4CC]/30 rounded-full text-[#00C4CC] text-sm font-medium mb-6">
                <Wifi className="w-4 h-4 mr-2" />
                Internet Corporativa
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Internet
                <span className="bg-gradient-to-r from-[#00C4CC] to-white bg-clip-text text-transparent">
                  {" "}
                  Fibra Óptica
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Conecte sua empresa com a mais avançada tecnologia em internet de alta velocidade. Nossa solução de
                Fibra Óptica garante estabilidade, segurança e performance incomparável para todas as operações do seu
                negócio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#00C4CC] hover:bg-[#00a3aa] px-8 py-6 text-lg group">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#0A2342] px-8 py-6 text-lg bg-transparent"
                >
                  Falar com Especialista
                </Button>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="relative">
                <Image
                  src="/images/futuro.jpg"
                  alt="Internet Fibra Óptica"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342]/30 to-transparent rounded-2xl"></div>

                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-[#00C4CC] text-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold">1Gbps</div>
                  <div className="text-sm opacity-90">Velocidade Máxima</div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md text-white rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">99.9% Uptime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-6">Benefícios Exclusivos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra por que nossa Internet Fibra Óptica é a escolha ideal para empresas que buscam performance e
              confiabilidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#00C4CC]"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-[#00C4CC] to-[#1E598F] text-white group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0A2342] mb-3">{benefit.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-6">Planos Disponíveis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o plano ideal para o porte e necessidades da sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  plan.popular
                    ? "border-2 border-[#00C4CC] shadow-lg scale-105"
                    : "border border-gray-200 hover:border-[#00C4CC]/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-[#00C4CC] text-white px-4 py-2 text-sm font-medium rounded-bl-lg">
                    Mais Popular
                  </div>
                )}

                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-[#0A2342] mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-[#1E598F] mb-2">
                      {plan.speed} <span className="text-lg">Mbps</span>
                    </div>
                    <div className="text-gray-600">{plan.price}</div>
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#00C4CC] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-6 text-lg ${
                      plan.popular ? "bg-[#00C4CC] hover:bg-[#00a3aa]" : "bg-[#1E598F] hover:bg-[#0A2342]"
                    }`}
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0A2342] mb-6">Para Quem é Ideal</h2>
              <p className="text-xl text-gray-600">
                Nossa Internet Fibra Óptica atende empresas de diversos segmentos e portes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <CheckCircle className="h-6 w-6 text-[#00C4CC] mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#0A2342] to-[#1E598F]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Garanta a Melhor Conexão para Sua Empresa!</h2>
            <p className="text-xl mb-8 opacity-90">
              Não perca tempo com conexões instáveis. Fale com nossos especialistas e descubra como nossa Internet Fibra
              Óptica pode transformar sua produtividade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#00C4CC] hover:bg-[#00a3aa] px-8 py-6 text-lg" onClick={() => window.open("https://wa.me/5511959432229", "_blank")}>Falar pelo WhatsApp</Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0A2342] px-8 py-6 text-lg bg-transparent"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
