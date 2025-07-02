"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Cloud,
  Shield,
  Zap,
  Database,
  ArrowRight,
  Server,
  Monitor,
  Laptop,
  Phone,
  Network,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CloudPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)

  const mainServices = [
    {
      icon: Cloud,
      title: "Cloud Plus (Vivo Cloud Server)",
      description: "Servidores virtuais pré-configurados com máxima performance",
      features: [
        "6 pacotes pré-configurados com VMs",
        "Licenças Windows ou Linux incluídas",
        "Link dedicado de 300 Mbps",
        "Tráfego ilimitado",
        "Redimensionamento on-the-fly",
        "Rede privada integrada",
        "Monitoramento 24/7",
        "SLA de 99,95%",
        "Certificação Tier III",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Network,
      title: "Plataforma Multicloud",
      description: "Integração com os maiores provedores mundiais",
      features: [
        "Integração com AWS",
        "Conectividade Azure",
        "Acesso Google Cloud",
        "Suporte IBM Cloud",
        "Conexão Huawei Cloud",
        "Vivo Cloud Plus nativa",
        "Ambiente híbrido",
        "Cloud público/privado",
        "Gestão unificada",
      ],
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Server,
      title: "Vivo Open Cloud & Cloud Server",
      description: "Soluções escaláveis baseadas em VMWARE/OpenStack",
      features: [
        "Arquitetura escalável",
        "Modelo pague-pel-uso",
        "Suporte técnico especializado",
        "Segurança gerenciada",
        "VPN corporativa",
        "Hospedagem de sites",
        "Suporte para ERPs",
        "Integração com CRMs",
        "Data center redundante",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Laptop,
      title: "Vivo Tech - Aluguel de Equipamentos",
      description: "Notebooks, desktops e tablets das melhores marcas",
      features: [
        "Notebooks (Positivo, Dell, Vaio)",
        "Equipamentos Lenovo e Samsung",
        "Dispositivos Apple disponíveis",
        "Desktops e All-in-One",
        "Tablets corporativos",
        "Manutenção sem custo",
        "Suporte 24x7 incluído",
        "Seguro completo",
        "Antivírus pré-instalado",
      ],
      color: "from-orange-500 to-red-500",
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Segurança Avançada",
      desc: "SOC integrado, web gateway seguro e proteção multicamadas para seus dados e aplicações.",
    },
    {
      icon: Zap,
      title: "Performance Garantida",
      desc: "SLA de até 99,95%, baixa latência e infraestrutura de data center Tier III certificada.",
    },
    {
      icon: Database,
      title: "Backup e Redundância",
      desc: "Data center redundante com backup automático e disaster recovery para continuidade total.",
    },
    {
      icon: Award,
      title: "Vantagens Contábeis",
      desc: "Locação considerada OPEX, reduzindo carga tributária para empresas no regime Lucro Real.",
    },
  ]

  const additionalServices = [
    {
      title: "Hospedagem Profissional",
      desc: "Websites, e-commerces e aplicativos em infraestrutura redundante",
      icon: Monitor,
      features: ["Sites corporativos", "E-commerce", "Aplicações web", "ERPs na nuvem"],
    },
    {
      title: "PABX na Nuvem",
      desc: "Telefonia IP completa sem investimento em equipamentos físicos",
      icon: Phone,
      features: ["Telefonia IP", "Chat integrado", "Videoconferência", "Mobilidade total"],
    },
    {
      title: "Conexões Seguras",
      desc: "Links dedicados e VPN corporativa com máxima segurança",
      icon: Network,
      features: ["Link dedicado", "VPN IP corporativa", "Wi-Fi protegido", "Web gateway"],
    },
  ]

  const techAdvantages = [
    "Atualização tecnológica periódica",
    "Troca de equipamentos ao fim do contrato",
    "Frete grátis em todo território nacional",
    "Descarte ecológico Eco Smart",
    "Contratos flexíveis (24 ou 36 meses)",
    "Combo com internet e smartphones",
    "Integração com Office 365",
    "Suporte técnico especializado 24/7",
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
                <Cloud className="w-4 h-4 mr-2" />
                Infraestrutura Moderna
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Soluções
                <span className="bg-gradient-to-r from-[#00C4CC] to-white bg-clip-text text-transparent"> Cloud</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Migre para a nuvem com as soluções mais avançadas do mercado. Cloud servers, multicloud, aluguel de
                equipamentos e muito mais para impulsionar sua empresa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contato">
                  <Button className="bg-[#00C4CC] hover:bg-[#00a3aa] px-8 py-6 text-lg group">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#0A2342] px-8 py-6 text-lg bg-transparent"
                  >
                    Consultoria Gratuita
                  </Button>
                </Link>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="relative">
                <Image
                  src="/images/cloud.avif"
                  alt="Soluções Cloud"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342]/30 to-transparent rounded-2xl"></div>

                <div className="absolute -top-4 -right-4 bg-[#00C4CC] text-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold">99.95%</div>
                  <div className="text-sm opacity-90">SLA Garantido</div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md text-white rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Tier III Certificado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-6">Nossos Serviços Cloud</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas em nuvem com a tecnologia e parceria da Vivo Empresas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {mainServices.map((service, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                    activeService === index
                      ? "border-[#00C4CC] shadow-lg shadow-[#00C4CC]/20"
                      : "border-gray-200 hover:border-[#00C4CC]/50"
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white`}>
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#0A2342] mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-2">{service.description}</p>
                        <Badge className="bg-[#00C4CC]/10 text-[#00C4CC] hover:bg-[#00C4CC]/20">
                          {service.features.length} recursos inclusos
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Showcase */}
            <div className="relative">
              <div className="sticky top-8">
                <Card className="overflow-hidden border-0 shadow-2xl">
                  <div className={`h-64 bg-gradient-to-br ${mainServices[activeService].color} relative`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {(() => {
                        const Icon = mainServices[activeService].icon
                        return <Icon className="h-24 w-24 text-white" />
                      })()}
                    </div>
                    <div className="absolute bottom-4 left-6 text-white">
                      <h3 className="text-2xl font-bold">{mainServices[activeService].title}</h3>
                      <p className="opacity-90">{mainServices[activeService].description}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-[#0A2342] mb-4">Recursos Inclusos:</h4>
                    <div className="grid grid-cols-1 gap-2 mb-6">
                      {mainServices[activeService].features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#00C4CC] mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-[#00C4CC] hover:bg-[#00a3aa] group" asChild>
                      <Link href="/contato">
                        Solicitar Orçamento
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-6">Vantagens Exclusivas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Benefícios únicos que só conseguimos oferecer através da nossa parceria com a Vivo Empresas.
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

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-6">Serviços Complementares</h2>
            <p className="text-xl text-gray-600">Soluções integradas para uma infraestrutura completa e moderna.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00C4CC] to-[#1E598F] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2342] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <ul className="space-y-2 text-left">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-[#00C4CC] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vivo Tech Advantages */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0A2342] mb-6">Vantagens do Vivo Tech</h2>
              <p className="text-xl text-gray-600">Aluguel de equipamentos com benefícios únicos para sua empresa.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {techAdvantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle className="h-6 w-6 text-[#00C4CC] mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{advantage}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-[#00C4CC]/10 to-[#1E598F]/10 rounded-2xl border border-[#00C4CC]/20">
              <div className="flex items-start space-x-4">
                <Award className="h-8 w-8 text-[#00C4CC] mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#0A2342] mb-2">Vantagem Contábil Exclusiva</h3>
                  <p className="text-gray-700">
                    A locação é considerada OPEX (despesa operacional), podendo reduzir significativamente a carga
                    tributária de empresas no regime Lucro Real. Consulte nossos especialistas para entender como isso
                    pode beneficiar sua empresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#0A2342] to-[#1E598F]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Transforme Sua Infraestrutura com a Nuvem!</h2>
            <p className="text-xl mb-8 opacity-90">
              Nossa equipe de especialistas está pronta para ajudar sua empresa a migrar para a nuvem de forma segura e
              eficiente. Consultoria gratuita e orçamento personalizado!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button className="bg-[#00C4CC] hover:bg-[#00a3aa] px-8 py-6 text-lg w-full sm:w-auto">
                  Solicitar Orçamento Personalizado
                </Button>
              </Link>
              <Link href="/contato">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#0A2342] px-8 py-6 text-lg bg-transparent w-full sm:w-auto"
                >
                  Agendar Consultoria Gratuita
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
