'use client'

import { BookOpen, FileText, Users, MessageSquare, MessageCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SERVICES } from '@/lib/constants'
import { buildWhatsAppUrlForService } from '@/lib/whatsapp'

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen size={26} />,
  FileText: <FileText size={26} />,
  Users: <Users size={26} />,
  MessageSquare: <MessageSquare size={26} />,
}

export function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 flex justify-center">
          <SectionTitle
            eyebrow="Meus serviços"
            title="Como posso ajudar você"
            subtitle="Cada serviço é desenhado para atender uma necessidade específica do seu processo criativo."
            align="center"
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const waUrl = buildWhatsAppUrlForService(service.title)
            return (
              <StaggerItem key={service.id}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`relative flex flex-col gap-5 p-8 rounded-3xl border h-full group transition-shadow duration-300 ${
                    service.highlight
                      ? 'bg-wine text-cream-50 border-wine shadow-warm-xl'
                      : 'bg-cream-100 border-beige hover:shadow-warm-lg hover:border-gold/20'
                  }`}
                >
                  {/* Tag */}
                  <div className="flex items-start justify-between">
                    <span
                      className={`inline-block font-inter text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${
                        service.highlight
                          ? 'bg-white/10 text-gold-light'
                          : 'bg-wine/8 text-wine'
                      }`}
                    >
                      {service.tag}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        service.highlight ? 'bg-white/10 text-gold' : 'bg-wine/8 text-wine'
                      }`}
                    >
                      {iconMap[service.icon]}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col gap-3">
                    <h3
                      className={`font-playfair font-bold text-2xl leading-snug ${
                        service.highlight ? 'text-cream-50' : 'text-charcoal'
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`font-lora text-sm leading-relaxed ${
                        service.highlight ? 'text-cream-200/80' : 'text-brown/70'
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className={`h-px ${service.highlight ? 'bg-white/10' : 'bg-beige'}`} />

                  {/* Benefit & Audience */}
                  <div className="flex flex-col gap-2 flex-grow">
                    <div className="flex items-start gap-2">
                      <span
                        className={`font-inter text-[10px] font-semibold uppercase tracking-wider mt-0.5 ${
                          service.highlight ? 'text-gold-light' : 'text-gold-dark'
                        }`}
                      >
                        Benefício
                      </span>
                      <p
                        className={`font-inter text-xs leading-relaxed ${
                          service.highlight ? 'text-cream-200/70' : 'text-brown/60'
                        }`}
                      >
                        {service.benefit}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span
                        className={`font-inter text-[10px] font-semibold uppercase tracking-wider mt-0.5 shrink-0 ${
                          service.highlight ? 'text-gold-light' : 'text-gold-dark'
                        }`}
                      >
                        Para quem
                      </span>
                      <p
                        className={`font-inter text-xs leading-relaxed ${
                          service.highlight ? 'text-cream-200/70' : 'text-brown/60'
                        }`}
                      >
                        {service.audience}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-2 flex items-center gap-2 font-inter text-sm font-medium transition-all duration-200 group/link ${
                      service.highlight
                        ? 'text-gold hover:text-gold-light'
                        : 'text-wine hover:text-wine-dark'
                    }`}
                  >
                    <MessageCircle size={16} />
                    Solicitar via WhatsApp
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </a>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
