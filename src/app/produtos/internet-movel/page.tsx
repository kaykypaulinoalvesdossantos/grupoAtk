"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Smartphone, Zap, Globe, Users, ArrowRight, Signal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function InternetMovelPage() {
  const [isVisible, setIsVisible] = useState(false)

  const benefits = [
    {
      icon: Globe,
      title: "Mobilidade Total",
      desc: "Acesso à internet de qualidade em qualquer lugar, permitindo trabalho remoto eficiente e produtivo.",
    },
    {
      icon: Zap,
      title: "Tecnologia 5G",
      desc: "Acesso às redes 4G e 5G das principais operadoras, garantindo velocidade e baixa latência.",
    },
    {
      icon: Users,
      title: "Gestão Centralizada",
      desc: "Controle de uso, gastos e desempenho de todas as linhas em uma única plataforma intuitiva.",
    },
    {
      icon: Signal,
      title: "Flexibilidade Total",
      desc: "Planos adaptáveis às necessidades específicas da sua empresa e equipe em movimento.",
    },
  ]

  const technologies = [
    {
      name: "4G",
      speed: "Até 150 Mbps",
      coverage: "Cobertura nacional abrangente",
      ideal: "Navegação diária, redes sociais, chamadas de vídeo e apps essenciais",
      color: "from-blue-600 to-cyan-500",
    },
    {
      name: "5G",
      speed: "Até 1 Gbps",
      coverage: "Disponível nas principais cidades e regiões estratégicas",
      ideal: "Streaming em alta definição, games online, soluções em tempo real e aplicações empresariais",
      color: "from-purple-600 to-pink-500",
    },
  ];
  

  const plans = [
    {
      name: "Conecte Simples",
      data: "6 GB",
      price: "R$ 39,99",
      features: [
        "Ideal para navegação, redes sociais e apps do dia a dia",
        "Velocidade 4G com ampla cobertura",
        "Suporte técnico dedicado",
        "Sem cláusula de fidelidade, liberdade total",
      ],
      popular: false,
    },
    {
      name: "Conecte Pro",
      data: "30 GB",
      price: "R$ 69,99",
      features: [
        "Perfeito para quem trabalha conectado ou usa múltiplos dispositivos",
        "Velocidade 4G/5G onde disponível",
        "Plataforma de gestão e monitoramento de consumo",
        "Suporte técnico prioritário",
        "Relatórios detalhados de uso",
        "Acesso ilimitado a apps essenciais",
      ],
      popular: true,
    },
    {
      name: "Conecte Empresarial",
      data: "100 GB",
      price: "R$ 99,99",
      features: [
        "Alta capacidade para equipes, dispositivos e soluções corporativas",
        "Velocidade 5G premium para máxima performance",
        "Gestão inteligente e avançada dos dados",
        "Suporte técnico 24 horas, 7 dias por semana",
        "SLA com garantia de qualidade",
        "Consultoria técnica personalizada inclusa",
      ],
      popular: false,
    },
  ];
  

  const useCases = [
    "Profissionais que viajam frequentemente",
    "Equipes de campo e vendas externas",
    "Pequenos negócios sem ponto fixo",
    "Empresas com funcionários em home office",
    "Backup para conexão principal",
    "Dispositivos IoT e equipamentos conectados",
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
                <Smartphone className="w-4 h-4 mr-2" />
                Conectividade Móvel
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Internet
                <span className="bg-gradient-to-r from-[#00C4CC] to-white bg-clip-text text-transparent"> Móvel</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Mantenha sua equipe conectada em qualquer lugar com nossas soluções de Internet Móvel. Tecnologia 4G/5G,
                gestão centralizada e flexibilidade total para empresas que não param.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contato">
                  <Button className="bg-[#00C4CC] hover:bg-[#00a3aa] px-8 py-6 text-lg group">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button className="border-white text-white hover:bg-white hover:text-[#0A2342] px-8 py-6 text-lg bg-transparent">
                    Testar Cobertura
                  </Button>
                </Link>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="relative">
                <Image
                  src="/images/movel.jpg"
                  alt="Internet Móvel"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342]/30 to-transparent rounded-2xl"></div>

                <div className="absolute -top-4 -right-4 bg-[#00C4CC] text-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold">5G</div>
                  <div className="text-sm opacity-90">Disponível</div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md text-white rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Cobertura Nacional</span>
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
            <h2 className="text-4xl font-bold text-[#0A2342] mb-6">Vantagens da Internet Móvel</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Liberdade total para trabalhar de qualquer lugar com a mesma qualidade e performance.
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

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-6">Tecnologias Disponíveis</h2>
            <p className="text-xl text-gray-600">
              Acesso às mais avançadas redes móveis do país para máxima performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className={`h-32 bg-gradient-to-r ${tech.color} relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">{tech.name}</span>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#0A2342] mb-1">Velocidade Média</h4>
                      <p className="text-gray-600">{tech.speed}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A2342] mb-1">Cobertura</h4>
                      <p className="text-gray-600">{tech.coverage}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A2342] mb-1">Ideal Para</h4>
                      <p className="text-gray-600">{tech.ideal}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-6">Planos Disponíveis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o plano ideal para as necessidades móveis da sua empresa.
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
                      {plan.data} <span className="text-lg">de dados</span>
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

                  <Link href="/contato">
                    <Button
                      className={`w-full py-6 text-lg ${plan.popular ? "bg-[#00C4CC] hover:bg-[#00a3aa]" : "bg-[#1E598F] hover:bg-[#0A2342]"}`}
                    >
                      Solicitar Orçamento
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0A2342] mb-6">Para Quem é Ideal</h2>
              <p className="text-xl text-gray-600">
                Nossa Internet Móvel atende empresas de diversos segmentos que precisam de mobilidade.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
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
            <h2 className="text-4xl font-bold mb-6">Mobilidade sem Limites para Seu Negócio!</h2>
            <p className="text-xl mb-8 opacity-90">
              Não deixe que a falta de conectividade limite suas operações. Fale com nossos especialistas e descubra
              como nossa Internet Móvel pode liberar o potencial da sua equipe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button className="bg-[#00C4CC] hover:bg-[#00a3aa] px-8 py-6 text-lg">Testar Cobertura</Button>
              </Link>
              <Button className="border-white text-white hover:bg-white hover:text-[#0A2342] px-8 py-6 text-lg bg-transparent" onClick={() => window.open("https://wa.me/5511959432229", "_blank")}>Falar pelo WhatsApp</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
