'use client'

import { Send, Eye, Search, Heart } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { HOW_IT_WORKS } from '@/lib/constants'

const iconMap: Record<string, React.ReactNode> = {
  Send: <Send size={24} />,
  Eye: <Eye size={24} />,
  Search: <Search size={24} />,
  Heart: <Heart size={24} />,
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 flex justify-center">
          <SectionTitle
            eyebrow="O processo"
            title="Como funciona"
            subtitle="Quatro passos simples para transformar seu manuscrito com feedback estruturado e personalizado."
            align="center"
          />
        </AnimatedSection>

        {/* Steps */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HOW_IT_WORKS.map((item, index) => (
            <StaggerItem key={item.step}>
              <div className="relative flex flex-col items-center text-center group">
                {/* Connector line (desktop) */}
                {index < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+3rem)] right-0 h-px bg-gradient-to-r from-gold/40 to-gold/10 z-0" />
                )}

                {/* Step number + icon */}
                <div className="relative z-10 mb-6">
                  {/* Outer ring */}
                  <div className="w-20 h-20 rounded-full border-2 border-gold/20 flex items-center justify-center group-hover:border-gold/40 transition-colors duration-300">
                    {/* Inner circle */}
                    <div className="w-14 h-14 rounded-full bg-wine flex items-center justify-center text-cream-50 shadow-warm-md group-hover:bg-wine-dark transition-colors duration-300">
                      {iconMap[item.icon]}
                    </div>
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gold flex items-center justify-center shadow-gold">
                    <span className="font-inter text-[10px] font-bold text-charcoal">{index + 1}</span>
                  </div>
                </div>

                {/* Content card */}
                <div className="bg-cream-50 rounded-2xl p-6 shadow-warm-sm border border-beige/60 w-full group-hover:shadow-warm-md transition-shadow duration-300">
                  <h3 className="font-playfair font-bold text-charcoal text-lg mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-lora text-sm text-brown/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA hint */}
        <AnimatedSection className="mt-16 text-center">
          <p className="font-lora text-brown/60 text-sm italic">
            Simples, transparente e sem burocracia. Cada etapa é pensada para que você se sinta seguro durante todo o processo.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
