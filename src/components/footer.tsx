import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#0A2342] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image src="/images/logo.png" alt="Grupo ATK" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold">Grupo ATK</span>
            </div>
            <p className="text-gray-300 mb-4">
              Soluções completas e personalizadas em telecomunicações para empresas de todos os portes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/produtos/internet-fibra" className="text-gray-300 hover:text-[#00C4CC]">
                  Internet Fibra Óptica
                </Link>
              </li>
              <li>
                <Link href="/produtos/internet-movel" className="text-gray-300 hover:text-[#00C4CC]">
                  Internet Móvel
                </Link>
              </li>
              <li>
                <Link href="/produtos/link-dedicado" className="text-gray-300 hover:text-[#00C4CC]">
                  Link Dedicado
                </Link>
              </li>
              <li>
                <Link href="/produtos/pabx-nuvem" className="text-gray-300 hover:text-[#00C4CC]">
                  PABX em Nuvem
                </Link>
              </li>
              <li>
                <Link href="/produtos/cloud" className="text-gray-300 hover:text-[#00C4CC]">
                  Cloud
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#00C4CC]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-[#00C4CC]">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/parceiros" className="text-gray-300 hover:text-[#00C4CC]">
                  Parceiros
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-[#00C4CC]">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#00C4CC]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#00C4CC] mr-2 mt-0.5" />
                <span className="text-gray-300">+55 11 95943-2229</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#00C4CC] mr-2 mt-0.5" />
                <span className="text-gray-300">pedro.neto@groupoatk.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#00C4CC] mr-2 mt-0.5" />
                <span className="text-gray-300">
                Rua Alfredo Pujol, 545
                          <br />
                          Santana, São Paulo - SP 
                          <br />
                          CEP: 02017-000
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Grupo ATK. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="" className="text-gray-400 hover:text-[#00C4CC] text-sm">
              Política de Privacidade
            </Link>
            <Link href="" className="text-gray-400 hover:text-[#00C4CC] text-sm">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
