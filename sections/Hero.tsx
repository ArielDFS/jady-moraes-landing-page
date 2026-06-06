'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown, Sparkles } from 'lucide-react'
import { LinkButton } from '@/components/ui/Button'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

export function Hero() {
  const whatsappUrl = buildWhatsAppUrl()

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream-100"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grain texture via SVG */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Warm gradient top-right */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-beige/60 to-transparent" />
        {/* Gold accent circles */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 right-[10%] w-64 h-64 rounded-full bg-gold/5 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-24 left-[5%] w-80 h-80 rounded-full bg-wine/5 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <Sparkles size={14} className="text-gold" />
              <span className="font-inter text-xs font-semibold uppercase tracking-[0.25em] text-wine">
                Leitura Crítica Literária
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-playfair font-bold text-charcoal leading-[1.1]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Seu manuscrito merece um olhar{' '}
              <em className="text-wine not-italic relative">
                crítico e cuidadoso
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold/50 rounded-full" />
              </em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-lora text-lg text-brown/80 leading-relaxed max-w-xl"
            >
              Ajudo autores a transformarem seus manuscritos com análises profundas sobre narrativa,
              personagens, ritmo e estrutura — com cuidado, honestidade e profundo respeito pela
              sua história.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <LinkButton
                href={whatsappUrl}
                external
                variant="whatsapp"
                size="lg"
                icon={<MessageCircle size={20} />}
              >
                Solicitar orçamento
              </LinkButton>

              <LinkButton
                href="#servicos"
                variant="secondary"
                size="lg"
              >
                Conhecer meu trabalho
              </LinkButton>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 pt-2"
            >
              {[
                { value: '80+', label: 'Manuscritos analisados' },
                { value: '5+', label: 'Anos de experiência' },
                { value: '98%', label: 'Satisfação' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <span className="font-playfair font-bold text-wine text-xl">{stat.value}</span>
                  <span className="font-inter text-xs text-brown/60 leading-tight max-w-[6rem]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            {/* Decorative frame */}
            <div className="relative">
              {/* Gold border accent */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl border-2 border-gold/20" />

              {/* Main photo container */}
              <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] rounded-3xl overflow-hidden shadow-warm-xl">
                <Image
                  src="/images/hero-photo.png"
                  alt="Jady Moraes — Leitura Crítica Literária"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                />
                {/* Warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -left-6 bottom-12 bg-cream-50 rounded-2xl p-4 shadow-warm-lg border border-beige max-w-[11rem]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-[#25D366]" />
                  <span className="font-inter text-[10px] text-brown/60 uppercase tracking-wider">
                    Disponível agora
                  </span>
                </div>
                <p className="font-playfair text-sm font-semibold text-charcoal leading-snug">
                  Aceitando novos manuscritos
                </p>
              </motion.div>

              {/* Quote badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -right-4 top-10 bg-wine rounded-2xl px-4 py-3 shadow-warm-lg max-w-[9rem]"
              >
                <p className="font-lora text-xs italic text-cream-100 leading-snug">
                  &ldquo;Cada história merece ser ouvida.&rdquo;
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="font-inter text-xs text-brown/40 uppercase tracking-widest">Rolar</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} className="text-brown/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
