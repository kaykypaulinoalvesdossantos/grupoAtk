"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Phone, Send, PhoneIcon as WhatsApp, Clock, Award, MessageCircle } from "lucide-react"

export default function ContatoPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    assunto: "",
    servico: "",
    mensagem: "",
  })

  const contactMethods = [
    {
      icon: WhatsApp,
      title: "WhatsApp",
      description: "Atendimento rápido e direto",
      contact: "+55 11 95943-2229",
      action: "Iniciar Conversa",
      color: "from-green-500 to-emerald-500",
      onClick: () => window.open("https://wa.me/5511959432229", "_blank"),
    },
    {
      icon: Phone,
      title: "Telefone",
      description: "Suporte técnico especializado",
      contact: "+55 11 95943-2229",
      action: "Ligar Agora",
      color: "from-blue-500 to-cyan-500",
      onClick: () => window.open("https://wa.me/5511959432229", "_blank"),
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Atendimento comercial",
      contact: "pedro.neto@grupoaki.com.br",
      action: "Enviar E-mail",
      color: "from-purple-500 to-violet-500",
      onClick: () => window.open("mailto:pedro.neto@grupoaki.com.br"),
    },
  ]

  const officeHours = [
    { day: "Segunda a Sexta", hours: "08:00 às 18:00" },
    { day: "Sábado", hours: "08:00 às 12:00" },
    { day: "Domingo", hours: "Fechado" },
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.nome,
          email: formData.email,
          message: `Empresa: ${formData.empresa}\nTelefone: ${formData.telefone}\nAssunto: ${formData.assunto}\nServiço: ${formData.servico}\nMensagem: ${formData.mensagem}`,
        }),
      });
      if (res.ok) {
        // alert('Mensagem enviada com sucesso!');
        setFormData({ nome: '', empresa: '', email: '', telefone: '', assunto: '', servico: '', mensagem: '' });
      } else {
        // alert('Erro ao enviar mensagem. Tente novamente.');
      }
    } catch {
      // alert('Erro ao enviar mensagem. Tente novamente.');
    }
  };

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
              <MessageCircle className="w-4 h-4 mr-2" />
              Fale Conosco
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Entre em
              <span className="bg-gradient-to-r from-[#00C4CC] to-white bg-clip-text text-transparent"> Contato</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estamos prontos para ajudar sua empresa a encontrar as melhores soluções em telecomunicações. Nossa equipe
              de especialistas está à disposição para atendê-lo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-6">Como Prefere Falar Conosco?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o canal de comunicação mais conveniente para você. Estamos disponíveis em múltiplas plataformas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`h-32 bg-gradient-to-r ${method.color} relative`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <method.icon className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-[#0A2342] mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-3">{method.description}</p>
                    <p className="font-semibold text-[#1E598F] mb-4">{method.contact}</p>
                    <Button className="w-full bg-[#00C4CC] hover:bg-[#00a3aa]" onClick={method.onClick}>{method.action}</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#0A2342] mb-6">Envie sua Mensagem</h3>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="nome" className="text-sm font-medium text-gray-700">
                          Nome Completo *
                        </label>
                        <Input
                          id="nome"
                          placeholder="Seu nome completo"
                          value={formData.nome}
                          onChange={(e) => handleInputChange("nome", e.target.value)}
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="empresa" className="text-sm font-medium text-gray-700">
                          Empresa *
                        </label>
                        <Input
                          id="empresa"
                          placeholder="Nome da sua empresa"
                          value={formData.empresa}
                          onChange={(e) => handleInputChange("empresa", e.target.value)}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          E-mail *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="telefone" className="text-sm font-medium text-gray-700">
                          Telefone *
                        </label>
                        <Input
                          id="telefone"
                          placeholder="(00) 00000-0000"
                          value={formData.telefone}
                          onChange={(e) => handleInputChange("telefone", e.target.value)}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="servico" className="text-sm font-medium text-gray-700">
                          Serviço de Interesse
                        </label>
                        <Select value={formData.servico} onValueChange={(value) => handleInputChange("servico", value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Selecione um serviço" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="internet-fibra">Internet Fibra Óptica</SelectItem>
                            <SelectItem value="internet-movel">Internet Móvel</SelectItem>
                            <SelectItem value="link-dedicado">Link Dedicado</SelectItem>
                            <SelectItem value="pabx-nuvem">PABX em Nuvem</SelectItem>
                            <SelectItem value="cloud">Soluções Cloud</SelectItem>
                            <SelectItem value="consultoria">Consultoria</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="assunto" className="text-sm font-medium text-gray-700">
                          Assunto
                        </label>
                        <Input
                          id="assunto"
                          placeholder="Assunto da mensagem"
                          value={formData.assunto}
                          onChange={(e) => handleInputChange("assunto", e.target.value)}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="mensagem" className="text-sm font-medium text-gray-700">
                        Mensagem *
                      </label>
                      <Textarea
                        id="mensagem"
                        placeholder="Descreva como podemos ajudar sua empresa..."
                        rows={6}
                        value={formData.mensagem}
                        onChange={(e) => handleInputChange("mensagem", e.target.value)}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-[#1E598F] hover:bg-[#0A2342] h-12 text-lg">
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <Card className="border-t-4 border-t-[#00C4CC]">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-[#0A2342] mb-4">Contato Direto</h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-[#00C4CC] mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Telefone</p>
                        <p className="text-gray-700">+55 11 95943-2229</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <WhatsApp className="h-5 w-5 text-[#00C4CC] mr-3 mt-1" />
                      <div>
                        <p className="font-medium">WhatsApp</p>
                        <p className="text-gray-700">+55 11 95943-2229</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-[#00C4CC] mr-3 mt-1" />
                      <div>
                        <p className="font-medium">E-mail</p>
                        <p className="text-gray-700">pedro.neto@grupoaki.com.br</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-[#00C4CC] mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Endereço</p>
                        <p className="text-gray-700">
                          Rua Alfredo Pujol, 545
                          <br />
                          Santana, São Paulo - SP 
                          <br />
                          CEP: 02017-000
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="border-t-4 border-t-[#00C4CC]">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-[#0A2342] mb-4 flex items-center">
                    <Clock className="h-5 w-5 text-[#00C4CC] mr-2" />
                    Horário de Atendimento
                  </h3>

                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-700">{schedule.day}</span>
                        <span className="font-medium text-[#1E598F]">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-[#00C4CC]/10 rounded-lg">
                    <p className="text-sm text-[#00C4CC] font-medium">
                      💡 Suporte técnico 24/7 disponível para clientes Premium
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <Button className="w-full bg-[#25D366] hover:bg-[#20BD5C] h-16 text-lg" onClick={() => window.open("https://wa.me/5511959432229", "_blank")}>
                <WhatsApp className="mr-2 h-6 w-6" />
                Prefere WhatsApp? Clique Aqui!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-[#0A2342]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <Award className="h-8 w-8 text-[#00C4CC] mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">500+</div>
              <div className="text-gray-300">Empresas Atendidas</div>
            </div>
            <div>
              <Clock className="h-8 w-8 text-[#00C4CC] mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">24h</div>
              <div className="text-gray-300">Tempo de Resposta</div>
            </div>
            <div>
              <Phone className="h-8 w-8 text-[#00C4CC] mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-gray-300">Suporte Técnico</div>
            </div>
            <div>
              <MessageCircle className="h-8 w-8 text-[#00C4CC] mx-auto mb-2" />
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-gray-300">Satisfação</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
