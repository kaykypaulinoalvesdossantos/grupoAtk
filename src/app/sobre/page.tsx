"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, Eye, Heart, Users, TrendingUp, Shield, Zap, Globe } from "lucide-react"

export default function SobrePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeValue, setActiveValue] = useState(0)

  const values = [
    { icon: Shield, title: "Integridade", desc: "Transparência e ética em todas as nossas relações" },
    { icon: Zap, title: "Inovação", desc: "Sempre na vanguarda da tecnologia" },
    { icon: Heart, title: "Compromisso", desc: "Dedicação total ao sucesso dos nossos clientes" },
    { icon: Award, title: "Excelência", desc: "Qualidade superior em todos os serviços" },
    { icon: Globe, title: "Transparência", desc: "Comunicação clara e honesta sempre" },
  ]

  const achievements = [
    { number: "500+", label: "Empresas Conectadas", icon: Users },
    { number: "99.9%", label: "Uptime Garantido", icon: Shield },
    { number: "24/7", label: "Suporte Técnico", icon: Zap },
    { number: "7+", label: "Parceiros Premium", icon: Award },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Experiência e Expertise",
      desc: "Anos de atuação no mercado de telecomunicações, com profundo conhecimento técnico e comercial.",
    },
    {
      icon: Users,
      title: "Parcerias Estratégicas",
      desc: "Acesso às melhores tecnologias e redes através de parcerias com líderes do setor como Vivo, Claro, TIM e outras.",
    },
    {
      icon: Heart,
      title: "Atendimento Personalizado",
      desc: "Soluções sob medida para cada negócio, considerando necessidades específicas e orçamento.",
    },
    {
      icon: Zap,
      title: "Suporte Ágil e Eficaz",
      desc: "Equipe técnica dedicada, pronta para resolver qualquer problema com rapidez e eficiência.",
    },
    {
      icon: Shield,
      title: "Tecnologia de Ponta",
      desc: "Foco em inovação e soluções futuras, mantendo nossos clientes sempre à frente no mercado.",
    },
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [values.length])

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

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#00C4CC] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-[#00C4CC] rounded-full opacity-30 animate-bounce"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center text-white transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#00C4CC]/20 border border-[#00C4CC]/30 rounded-full text-[#00C4CC] text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Nossa História
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Sobre o
              <span className="bg-gradient-to-r from-[#00C4CC] to-white bg-clip-text text-transparent"> Grupo ATK</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conectando empresas ao futuro das telecomunicações com inovação, qualidade e compromisso há mais de uma
              década.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-[#0A2342] mb-6">Nossa Jornada</h2>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  O Grupo ATK nasceu com a missão de revolucionar o mercado de telecomunicações, oferecendo soluções
                  personalizadas e de alta qualidade para empresas de todos os portes. Com anos de experiência no setor,
                  construímos uma reputação sólida baseada em confiança, inovação e excelência no atendimento ao
                  cliente.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Nossa trajetória é marcada por parcerias estratégicas com as maiores operadoras do país, permitindo
                  que ofereçamos um portfólio completo de soluções em telecomunicações, sempre com o compromisso de
                  entregar a melhor tecnologia e o melhor suporte aos nossos clientes.
                </p>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-[#0A2342] to-[#1E598F] rounded-2xl p-8 text-white">
                  <div className="grid grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="text-center">
                        <achievement.icon className="h-8 w-8 text-[#00C4CC] mx-auto mb-2" />
                        <div className="text-2xl font-bold mb-1">{achievement.number}</div>
                        <div className="text-sm opacity-90">{achievement.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00C4CC]/20 to-[#1E598F]/20 rounded-2xl blur-xl -z-10 scale-110"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-6">Nossos Pilares</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os valores que nos guiam e definem nossa identidade como empresa líder em telecomunicações.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-t-4 border-t-[#00C4CC] hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <Target className="h-12 w-12 text-[#00C4CC] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0A2342] mb-4">Missão</h3>
                <p className="text-gray-700 leading-relaxed">
                  Conectar empresas e pessoas com as melhores soluções de telecomunicações, impulsionando a
                  produtividade e a inovação através de tecnologia de ponta e atendimento excepcional.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-[#00C4CC] hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <Eye className="h-12 w-12 text-[#00C4CC] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0A2342] mb-4">Visão</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ser referência nacional em revenda de telecomunicações, reconhecida pela excelência, inovação e
                  satisfação do cliente, expandindo horizontes e conectando o futuro.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-[#00C4CC] hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <Heart className="h-12 w-12 text-[#00C4CC] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0A2342] mb-4">Valores</h3>
                <div className="space-y-2 text-gray-700">
                  <div>• Integridade e Transparência</div>
                  <div>• Inovação Constante</div>
                  <div>• Compromisso com o Cliente</div>
                  <div>• Excelência Operacional</div>
                  <div>• Responsabilidade Social</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Values */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 border-2 ${
                    activeValue === index
                      ? "border-[#00C4CC] shadow-lg shadow-[#00C4CC]/20"
                      : "border-gray-200 hover:border-[#00C4CC]/50"
                  }`}
                  onClick={() => setActiveValue(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      {(() => {
                        const Icon = value.icon
                        return (
                          <div className="p-3 rounded-xl bg-gradient-to-r from-[#00C4CC] to-[#1E598F] text-white">
                            <Icon className="h-6 w-6" />
                          </div>
                        )
                      })()}
                      <div>
                        <h4 className="text-lg font-bold text-[#0A2342]">{value.title}</h4>
                        <p className="text-gray-600 text-sm">{value.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="relative">
              <Card className="overflow-hidden border-0 shadow-2xl">
                <div className="h-64 bg-gradient-to-br from-[#0A2342] to-[#1E598F] relative">
                  {(() => {
                    const ActiveIcon = values[activeValue].icon
                    return (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ActiveIcon className="h-24 w-24 text-white" />
                      </div>
                    )
                  })()}
                  <div className="absolute bottom-4 left-6 text-white">
                    <h3 className="text-2xl font-bold">{values[activeValue].title}</h3>
                    <p className="opacity-90">{values[activeValue].desc}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Por Que Escolher */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-6">Por Que Escolher o Grupo ATK?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diferenciais que nos tornam a escolha ideal para sua empresa.
            </p>
          </div>

          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#00C4CC]"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-[#00C4CC] to-[#1E598F] text-white group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon && <benefit.icon className="h-8 w-8" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0A2342] mb-3">{benefit.title}</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
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
            <h2 className="text-4xl font-bold mb-6">Pronto para Conhecer Mais?</h2>
            <p className="text-xl mb-8 opacity-90">
              Descubra como nossa experiência e expertise podem transformar a conectividade da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#00C4CC] hover:bg-[#00a3aa] px-8 py-6 text-lg">Falar com Especialista</Button>
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
