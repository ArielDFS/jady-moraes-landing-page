'use client'

import Image from 'next/image'
import { CheckCircle, Quote } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { ABOUT_TEXT, CREDENTIALS } from '@/lib/constants'

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <AnimatedSection variant="slideRight" className="relative">
            <div className="relative">
              {/* Decorative background rectangle */}
              <div className="absolute -top-6 -left-6 w-48 h-48 rounded-3xl bg-wine/8 border border-wine/10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gold/10 border border-gold/15" />

              {/* Photo */}
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-warm-xl">
                <Image
                  src="/images/hero-photo.png"
                  alt="Jady Moraes lendo um manuscrito"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 448px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
              </div>

              {/* Stats card */}
              <div className="absolute -bottom-4 left-4 right-4 sm:-bottom-6 sm:left-8 sm:right-auto sm:w-64 bg-cream-50 rounded-2xl p-5 shadow-warm-xl border border-beige">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '80+', label: 'Manuscritos' },
                    { value: '5+', label: 'Anos' },
                    { value: '12+', label: 'Gêneros' },
                    { value: '98%', label: 'Satisfação' },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="font-playfair font-bold text-2xl text-wine">{s.value}</p>
                      <p className="font-inter text-xs text-brown/60 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text side */}
          <AnimatedSection variant="slideLeft" className="flex flex-col gap-8 pt-8 lg:pt-0">
            <SectionTitle
              eyebrow={ABOUT_TEXT.eyebrow}
              title={ABOUT_TEXT.headline}
              align="left"
            />

            <div className="flex flex-col gap-5">
              {ABOUT_TEXT.paragraphs.map((p, i) => (
                <p key={i} className="font-lora text-brown/80 leading-relaxed text-[1.05rem]">
                  {p}
                </p>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="relative pl-6 border-l-2 border-gold py-2">
              <Quote
                size={32}
                className="absolute -top-2 -left-1 text-gold/30 fill-gold/20"
              />
              <p className="font-playfair italic text-wine text-lg leading-relaxed">
                {ABOUT_TEXT.quote.split(' — ')[0].replace('"', '')}
              </p>
              <footer className="mt-2 font-inter text-xs text-brown/50 uppercase tracking-wider">
                — {ABOUT_TEXT.quote.split(' — ')[1]}
              </footer>
            </blockquote>

            {/* Credentials */}
            <StaggerContainer className="flex flex-col gap-3 pt-2">
              {CREDENTIALS.map((cred) => (
                <StaggerItem key={cred}>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" />
                    <span className="font-inter text-sm text-brown/80 leading-relaxed">{cred}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
