'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookMarked, Tag, FileText } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { PORTFOLIO_STATS, PORTFOLIO_PROJECTS } from '@/lib/constants'

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="font-playfair font-bold text-display-sm text-cream-50">
      {count}
      {suffix}
    </span>
  )
}

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-charcoal overflow-hidden">
      {/* Decorative top border */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 flex justify-center">
          <SectionTitle
            eyebrow="Experiência & portfólio"
            title="Histórias que já passaram pelas minhas mãos"
            subtitle="Cada manuscrito recebe atenção única. Aqui, alguns dos projetos com que tive a honra de colaborar."
            align="center"
            light
          />
        </AnimatedSection>

        {/* Stats */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {PORTFOLIO_STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center flex flex-col items-center gap-1">
                <CountUp target={stat.value} suffix={stat.suffix} />
                <span className="font-inter text-xs text-cream-300/50 uppercase tracking-wider leading-tight max-w-[8rem]">
                  {stat.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-16" />

        {/* Projects grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_PROJECTS.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/8 hover:border-gold/20 transition-all duration-300"
              >
                {/* Genre tag */}
                <div className="flex items-center gap-2 mb-4">
                  <Tag size={12} className="text-gold/60" />
                  <span className="font-inter text-[10px] text-gold/60 uppercase tracking-widest">
                    {project.genre}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-playfair font-semibold text-cream-100 text-lg leading-snug mb-3">
                  {project.title}
                </h3>

                {/* Service */}
                <div className="flex items-center gap-2 mb-2">
                  <FileText size={13} className="text-wine-light/60" />
                  <span className="font-inter text-xs text-cream-300/40">{project.service}</span>
                </div>

                {/* Highlight */}
                <div className="flex items-start gap-2 mt-3 pt-3 border-t border-white/5">
                  <BookMarked size={13} className="text-gold/50 shrink-0 mt-0.5" />
                  <span className="font-inter text-xs text-cream-300/50 leading-relaxed italic">
                    {project.highlight}
                  </span>
                </div>

                {/* Pages */}
                <div className="mt-3 flex justify-end">
                  <span className="font-inter text-[10px] text-cream-300/25">
                    ~{project.pages} páginas
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Disclaimer */}
        <AnimatedSection className="mt-12 text-center">
          <p className="font-lora text-xs italic text-cream-300/25">
            * Títulos e autores fictícios para preservar a confidencialidade dos projetos reais.
          </p>
        </AnimatedSection>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mt-20" />
    </section>
  )
}
