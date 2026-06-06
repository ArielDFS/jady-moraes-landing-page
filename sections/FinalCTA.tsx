'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Sparkles } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

export function FinalCTA() {
  const whatsappUrl = buildWhatsAppUrl()

  return (
    <section className="py-24 lg:py-32 bg-wine-deeper relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-wine border border-wine-light blur-3xl"
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection variant="scaleIn" className="flex flex-col items-center gap-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-gold" />
            <span className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-gold/80">
              Pronto para começar?
            </span>
            <Sparkles size={14} className="text-gold" />
          </div>

          {/* Headline */}
          <h2 className="font-playfair font-bold text-cream-50 leading-[1.1]" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Sua história merece o melhor leitor
          </h2>

          {/* Subtitle */}
          <p className="font-lora text-lg text-cream-200/60 leading-relaxed max-w-2xl">
            Cada manuscrito que recebo carrega anos de dedicação, sonhos e palavras escolhidas com cuidado. 
            É com esse mesmo cuidado que faço minha leitura. Vamos conversar?
          </p>

          {/* CTA */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#25D366] text-white font-inter font-semibold text-lg shadow-xl hover:shadow-2xl hover:bg-[#1DAA54] transition-all duration-300"
          >
            <MessageCircle size={22} />
            Conversar no WhatsApp
          </motion.a>

          {/* Trust note */}
          <p className="font-inter text-xs text-cream-300/30">
            Sem compromisso · Resposta em até 1 dia útil · Total sigilo
          </p>

          {/* Decorative quote */}
          <div className="mt-4 pt-8 border-t border-white/5 max-w-xl">
            <p className="font-lora italic text-cream-200/30 text-sm leading-relaxed">
              &ldquo;Uma história bem contada tem o poder de mudar quem a lê.&rdquo;
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
