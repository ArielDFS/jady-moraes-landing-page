'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { TESTIMONIALS } from '@/lib/constants'

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1))
  }

  const next = () => {
    setDirection(1)
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1))
  }

  const t = TESTIMONIALS[current]

  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 flex justify-center">
          <SectionTitle
            eyebrow="Depoimentos"
            title="O que os autores dizem"
            subtitle="Cada palavra aqui é de alguém que confiou a mim um pedaço do seu trabalho criativo."
            align="center"
          />
        </AnimatedSection>

        {/* Testimonial Card */}
        <AnimatedSection className="relative max-w-4xl mx-auto">
          {/* Large decorative quote */}
          <Quote
            size={80}
            className="absolute -top-6 -left-4 text-wine/6 fill-wine/5 hidden lg:block"
          />

          <div className="relative bg-cream-50 rounded-3xl shadow-warm-xl border border-beige overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-wine via-gold to-wine" />

            <div className="p-8 lg:p-12">
              {/* Card content with animation */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="flex flex-col gap-8"
                >
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Author info */}
                    <div className="flex flex-col items-center lg:items-start gap-3 lg:min-w-[160px]">
                      {/* Avatar placeholder */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-wine to-wine-dark flex items-center justify-center text-cream-50 font-playfair font-bold text-xl shadow-warm-md">
                        {t.name.charAt(0)}
                      </div>
                      <div className="text-center lg:text-left">
                        <p className="font-playfair font-semibold text-charcoal text-lg leading-snug">
                          {t.name}
                        </p>
                        <p className="font-inter text-xs text-brown/50 mt-0.5">{t.role}</p>
                        <p className="font-lora text-xs italic text-wine/60 mt-1">
                          &ldquo;{t.book}&rdquo;
                        </p>
                      </div>
                      {/* Stars */}
                      <div className="flex gap-0.5">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="text-gold fill-gold"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Quote text */}
                    <div className="flex-1">
                      <p className="font-lora text-lg lg:text-xl text-brown/80 leading-relaxed italic">
                        &ldquo;{t.text}&rdquo;
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-beige">
                {/* Dots */}
                <div className="flex gap-2">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setDirection(i > current ? 1 : -1)
                        setCurrent(i)
                      }}
                      className={`transition-all duration-300 rounded-full ${
                        i === current
                          ? 'w-6 h-2 bg-wine'
                          : 'w-2 h-2 bg-beige hover:bg-gold/40'
                      }`}
                      aria-label={`Depoimento ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-3">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-beige hover:border-wine hover:text-wine flex items-center justify-center text-brown/50 transition-all duration-200"
                    aria-label="Anterior"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full bg-wine text-cream-50 hover:bg-wine-dark flex items-center justify-center transition-colors duration-200"
                    aria-label="Próximo"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
