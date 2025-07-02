"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, Cloud, Users, Settings, ArrowRight, Headphones } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PabxNuvemPage() {
  const [isVisible, setIsVisible] = useState(false)

  const benefits = [
    {
      icon: Cloud,
      title: "Tecnologia em Nuvem",
      desc: "Sistema hospedado na nuvem, sem necessidade de equipamentos físicos em sua empresa.",
    },
    {
      icon: Settings,
      title: "Configuração Flexível",
      desc: "Personalize ramais, filas, URAs e recursos conforme as necessidades do seu negócio.",
    },
    {
      icon: Users,
      title: "Escalabilidade Total",
      desc: "Adicione ou remova ramais instantaneamente, pagando apenas pelo que usar.",
    },
    {
      icon: Headphones,
      title: "Recursos Avançados",
      desc: "URA, gravação de chamadas, relatórios detalhados e integração com CRM.",
    },
  ]

  const features = [
    "Ramais virtuais ilimitados",
    "URA (Unidade de Resposta Audível)",
    "Gravação automática de chamadas",
    "Relatórios detalhados de uso",
    "Integração com CRM",
    "Conferência de até 100 participantes",
    "Aplicativo móvel incluído",
    "Backup automático de configurações",
    "Suporte técnico especializado",
    "Portabilidade de números",
  ]

  const plans = [
    {
      name: "Planos PABX em Nuvem",
      ramais: "",
      price: "",
      features: [
        "Temos planos com aparelho incluso. Consulte nossos valores pelo WhatsApp!",
      ],
      popular: true,
    },
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
                <Phone className="w-4 h-4 mr-2" />
                Comunicação Moderna
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                PABX em
                <span className="bg-gradient-to-r from-[#00C4CC] to-white bg-clip-text text-transparent"> Nuvem</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Revolucione a comunicação da sua empresa com nosso sistema de PABX em nuvem. Recursos profissionais,
                escalabilidade total e economia garantida, tudo sem investimento em equipamentos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contato">
                  <Button className="bg-[#00C4CC] hover:bg-[#00a3aa] px-8 py-6 text-lg group w-full sm:w-auto">
                    Teste Grátis por 30 Dias
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#0A2342] px-8 py-6 text-lg bg-transparent w-full sm:w-auto"
                  >
                    Ver Demonstração
                  </Button>
                </Link>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="relative">
                <Image
                  src="/images/pabx.png"
                  alt="PABX em Nuvem"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342]/30 to-transparent rounded-2xl"></div>

                <div className="absolute -top-4 -right-4 bg-[#00C4CC] text-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-90">Na Nuvem</div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md text-white rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Sem Equipamentos</span>
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
            <h2 className="text-4xl font-bold text-[#0A2342] mb-6">Vantagens do PABX em Nuvem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modernize sua comunicação empresarial com tecnologia de ponta e recursos profissionais.
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

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0A2342] mb-6">Recursos Inclusos</h2>
              <p className="text-xl text-gray-600">
                Todos os recursos que sua empresa precisa para uma comunicação profissional.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle className="h-6 w-6 text-[#00C4CC] flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-6">Planos Disponíveis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o plano ideal para o porte da sua empresa e pague apenas pelo que usar.
            </p>
          </div>

          <div className="flex justify-center items-center w-full">
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
                      {plan.ramais} <span className="text-lg">ramais</span>
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
                    className="w-full py-6 text-lg bg-[#00C4CC] hover:bg-[#00a3aa]"
                    onClick={() => window.open("https://wa.me/5511959432229", "_blank")}
                  >
                    Falar no WhatsApp
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#0A2342] to-[#1E598F]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Modernize Sua Comunicação Hoje!</h2>
            <p className="text-xl mb-8 opacity-90">
              Teste nosso PABX em nuvem gratuitamente por 30 dias e descubra como pode revolucionar a comunicação da sua
              empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button className="bg-[#00C4CC] hover:bg-[#00a3aa] px-8 py-6 text-lg">Iniciar Teste Grátis</Button>
              </Link>
              <Link href="/contato">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#0A2342] px-8 py-6 text-lg bg-transparent"
                >
                  Agendar Demonstração
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
