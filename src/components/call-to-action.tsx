"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PhoneIcon as WhatsApp, Mail, ArrowRight, Zap, Shield, Users } from "lucide-react"
import { useState } from "react"

export default function CallToAction() {
  const [email, setEmail] = useState("")

  const benefits = [
    { icon: Zap, text: "Ativação em 24h" },
    { icon: Shield, text: "Suporte 24/7" },
    { icon: Users, text: "Consultoria gratuita" },
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2342] via-[#1E598F] to-[#0A2342]"></div>

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#00C4CC] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-[#00C4CC] rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white rounded-full opacity-10 animate-ping"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-[#00C4CC]/20 border border-[#00C4CC]/30 rounded-full text-[#00C4CC] text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Transforme Sua Empresa Hoje
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Pronto para a
              <span className="bg-gradient-to-r from-[#00C4CC] to-white bg-clip-text text-transparent">
                {" "}
                Revolução Digital?
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Junte-se a mais de 500 empresas que já transformaram suas operações com nossas soluções. Fale com nossos
              especialistas e descubra como podemos impulsionar seu negócio.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <benefit.icon className="h-6 w-6 text-[#00C4CC]" />
                <span className="font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00C4CC] to-[#00a3aa] hover:from-[#00a3aa] hover:to-[#008a91] text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-[#00C4CC]/25 transition-all duration-300 group"
              onClick={() => window.open("https://wa.me/5511959432229", "_blank")}
            >
              <WhatsApp className="mr-2 h-5 w-5" />
              Falar com Especialista
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-[#0A2342] px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Solicitar Orçamento
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Receba Conteúdo Exclusivo</h3>
            <p className="text-gray-300 mb-6">
              Cadastre-se e receba dicas, tendências e novidades sobre telecomunicações diretamente no seu e-mail.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-[#00C4CC] focus:ring-[#00C4CC]"
              />
              <Button className="bg-[#00C4CC] hover:bg-[#00a3aa] px-6 py-2 whitespace-nowrap">Cadastrar Grátis</Button>
            </div>

            <p className="text-xs text-gray-400 mt-3">Não enviamos spam. Cancele a qualquer momento.</p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00C4CC] mb-2">500+</div>
              <div className="text-gray-300">Empresas Conectadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00C4CC] mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Garantido</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00C4CC] mb-2">24/7</div>
              <div className="text-gray-300">Suporte Técnico</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00C4CC] mb-2">7+</div>
              <div className="text-gray-300">Parceiros Premium</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
