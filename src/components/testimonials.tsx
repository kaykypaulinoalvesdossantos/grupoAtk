"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

/* eslint-disable react/no-unescaped-entities */
export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Carlos Eduardo Silva",
      position: "CTO",
      company: "TechCorp Solutions",
      avatar: "/placeholder.svg?height=80&width=80",
      content:
        "O Grupo ATK revolucionou nossa infraestrutura de TI. A migração para fibra óptica aumentou nossa produtividade em 300% e o suporte técnico é excepcional. Recomendo sem hesitação!",
      rating: 5,
      industry: "Tecnologia",
      employees: "200+",
      improvement: "300% mais produtividade",
    },
    {
      name: "Maria Fernanda Santos",
      position: "Diretora de Operações",
      company: "Logística Express Ltda",
      avatar: "/placeholder.svg?height=80&width=80",
      content:
        "Com a internet móvel do Grupo ATK, nossa frota está sempre conectada. O sistema de rastreamento funciona perfeitamente e conseguimos otimizar nossas rotas em tempo real. Excelente investimento!",
      rating: 5,
      industry: "Logística",
      employees: "150+",
      improvement: "40% redução de custos",
    },
    {
      name: "João Pedro Oliveira",
      position: "CEO",
      company: "StartupTech Inovação",
      avatar: "/placeholder.svg?height=80&width=80",
      content:
        "O PABX em nuvem transformou nossa comunicação. Agora temos recursos profissionais que antes eram inacessíveis para uma startup. A escalabilidade é perfeita para nosso crescimento.",
      rating: 5,
      industry: "Startup",
      employees: "50+",
      improvement: "60% economia em telefonia",
    },
    {
      name: "Ana Carolina Mendes",
      position: "Gerente de TI",
      company: "Indústria Metalúrgica ABC",
      avatar: "/placeholder.svg?height=80&width=80",
      content:
        "O link dedicado garantiu a estabilidade que precisávamos para nossos sistemas críticos. Zero downtime em 18 meses de contrato. A confiabilidade é impressionante!",
      rating: 5,
      industry: "Industrial",
      employees: "500+",
      improvement: "Zero downtime",
    },
    {
      name: "Roberto Almeida Costa",
      position: "Diretor Comercial",
      company: "Consultoria Empresarial Pro",
      avatar: "/placeholder.svg?height=80&width=80",
      content:
        "As soluções em cloud nos permitiram trabalhar de qualquer lugar com total segurança. O backup automático já nos salvou algumas vezes. Parceria de longo prazo garantida!",
      rating: 5,
      industry: "Consultoria",
      employees: "80+",
      improvement: "100% mobilidade",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#00C4CC]/10 border border-[#00C4CC]/20 rounded-full text-[#00C4CC] text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Depoimentos Reais
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#0A2342] mb-6">
            Histórias de
            <span className="bg-gradient-to-r from-[#00C4CC] to-[#1E598F] bg-clip-text text-transparent"> Sucesso</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como empresas de diversos segmentos transformaram suas operações com nossas soluções em
            telecomunicações.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative mb-16">
          <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-white to-gray-50">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-3">
                {/* Testimonial Content */}
                <div className="lg:col-span-2 p-12">
                  <Quote className="h-12 w-12 text-[#00C4CC] mb-6" />

                  <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  <div className="flex items-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-3 text-gray-600 font-medium">5.0 / 5.0</span>
                  </div>

                  <div className="flex items-center">
                    <Avatar className="h-16 w-16 mr-4">
                      <AvatarImage src={testimonials[currentTestimonial].avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-[#00C4CC] text-white text-lg">
                        {testimonials[currentTestimonial].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-[#0A2342] text-lg">{testimonials[currentTestimonial].name}</div>
                      <div className="text-gray-600">{testimonials[currentTestimonial].position}</div>
                      <div className="text-[#00C4CC] font-semibold">{testimonials[currentTestimonial].company}</div>
                    </div>
                  </div>
                </div>

                {/* Company Info */}
                <div className="bg-gradient-to-br from-[#0A2342] to-[#1E598F] p-12 text-white flex flex-col justify-center">
                  <h4 className="text-2xl font-bold mb-6">Resultados Alcançados</h4>

                  <div className="space-y-6">
                    <div>
                      <div className="text-sm opacity-80 mb-1">Setor</div>
                      <div className="text-lg font-semibold">{testimonials[currentTestimonial].industry}</div>
                    </div>

                    <div>
                      <div className="text-sm opacity-80 mb-1">Funcionários</div>
                      <div className="text-lg font-semibold">{testimonials[currentTestimonial].employees}</div>
                    </div>

                    <div>
                      <div className="text-sm opacity-80 mb-1">Melhoria Obtida</div>
                      <div className="text-xl font-bold text-[#00C4CC]">
                        {testimonials[currentTestimonial].improvement}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="h-12 w-12 rounded-full bg-white shadow-lg border-2 border-gray-200 hover:border-[#00C4CC] hover:bg-[#00C4CC] hover:text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-6">
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="h-12 w-12 rounded-full bg-white shadow-lg border-2 border-gray-200 hover:border-[#00C4CC] hover:bg-[#00C4CC] hover:text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
                currentTestimonial === index
                  ? "border-[#00C4CC] shadow-lg shadow-[#00C4CC]/20"
                  : "border-gray-200 hover:border-[#00C4CC]/50"
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-3">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-[#00C4CC] text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-[#0A2342]">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm line-clamp-3">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? "bg-[#00C4CC] scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
