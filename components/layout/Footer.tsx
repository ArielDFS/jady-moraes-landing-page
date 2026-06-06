'use client'

import { BookOpen, Mail, Instagram, MessageCircle, Heart } from 'lucide-react'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

export function Footer() {
  const year = new Date().getFullYear()
  const whatsappUrl = buildWhatsAppUrl()

  return (
    <footer className="bg-charcoal text-cream-100">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-wine flex items-center justify-center">
                <BookOpen size={18} className="text-gold" />
              </div>
              <div>
                <p className="font-playfair font-bold text-xl text-cream-50">Jady Moraes</p>
                <p className="font-inter text-xs text-cream-400/60 uppercase tracking-widest">
                  Leitura Crítica Literária
                </p>
              </div>
            </div>

            <p className="font-lora text-cream-300/70 text-sm leading-relaxed max-w-sm">
              Análise crítica profissional para autores que querem aprimorar seus manuscritos com
              cuidado, honestidade e sensibilidade literária.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#25D366] flex items-center justify-center transition-colors duration-300 group"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} className="text-cream-300 group-hover:text-white" />
              </a>
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-[#833ab4] hover:to-[#fd1d1d] flex items-center justify-center transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-cream-300 group-hover:text-white" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-wine flex items-center justify-center transition-colors duration-300 group"
                aria-label="E-mail"
              >
                <Mail size={16} className="text-cream-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-inter text-xs font-semibold uppercase tracking-widest text-gold">
              Navegação
            </h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-cream-300/60 hover:text-cream-100 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-inter text-xs font-semibold uppercase tracking-widest text-gold">
              Contato
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-inter text-sm text-cream-300/60 hover:text-cream-100 transition-colors duration-200 flex items-center gap-2"
                >
                  <Mail size={14} className="text-gold/60" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-sm text-cream-300/60 hover:text-cream-100 transition-colors duration-200 flex items-center gap-2"
                >
                  <MessageCircle size={14} className="text-gold/60" />
                  Falar pelo WhatsApp
                </a>
              </li>
            </ul>

            <div className="mt-4 p-4 rounded-2xl bg-wine/20 border border-wine/10">
              <p className="font-lora text-xs italic text-cream-300/50 leading-relaxed">
                &ldquo;A literatura é o espelho mais fiel de uma época.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-cream-300/40">
            © {year} Jady Moraes · Leitura Crítica Literária · Todos os direitos reservados.
          </p>
          <p className="font-inter text-xs text-cream-300/30 flex items-center gap-1">
            Feito com <Heart size={10} className="text-wine-light" /> para autores
          </p>
        </div>
      </div>
    </footer>
  )
}
