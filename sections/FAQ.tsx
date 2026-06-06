'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { FAQ_ITEMS } from '@/lib/constants'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open ? 'border-wine/20 bg-cream-50 shadow-warm-md' : 'border-beige bg-cream-100 hover:border-wine/10'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        aria-expanded={open}
      >
        <span className={`font-playfair font-semibold text-lg leading-snug transition-colors ${open ? 'text-wine' : 'text-charcoal'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 0 : 0 }}
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
            open ? 'bg-wine text-cream-50' : 'bg-beige text-brown/50'
          }`}
        >
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="h-px w-full bg-beige mb-4" />
              <p className="font-lora text-brown/75 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-beige/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 flex justify-center">
          <SectionTitle
            eyebrow="Dúvidas frequentes"
            title="Perguntas e respostas"
            subtitle="Respondendo as dúvidas mais comuns de quem está considerando a leitura crítica."
            align="center"
          />
        </AnimatedSection>

        <StaggerContainer className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item) => (
            <StaggerItem key={item.question}>
              <FAQItem question={item.question} answer={item.answer} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
