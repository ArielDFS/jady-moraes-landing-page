'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, CheckCircle, AlertCircle, Loader2, RefreshCw } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { useContactForm } from '@/hooks/useContactForm'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { LITERARY_GENRES, WORK_TYPES, PAGE_RANGES } from '@/lib/validations'
import { cn } from '@/lib/utils'

const inputClass = `
  w-full px-4 py-3 rounded-xl bg-cream-100 border border-beige
  font-inter text-sm text-charcoal placeholder:text-brown/30
  focus:outline-none focus:border-wine/40 focus:ring-2 focus:ring-wine/10
  transition-all duration-200
`

export function Contact() {
  const { form, status, errorMessage, onSubmit, resetStatus } = useContactForm()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form

  const whatsappUrl = buildWhatsAppUrl(
    'Olá, Jady! Gostaria de fazer um orçamento para leitura crítica do meu manuscrito.'
  )

  return (
    <section id="contato" className="py-24 lg:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 flex justify-center">
          <SectionTitle
            eyebrow="Entre em contato"
            title="Vamos conversar sobre seu manuscrito"
            subtitle="Preencha o formulário abaixo ou, se preferir, entre em contato diretamente pelo WhatsApp."
            align="center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Sidebar info */}
          <AnimatedSection variant="slideRight" className="lg:col-span-2 flex flex-col gap-8">
            <div className="bg-wine rounded-3xl p-8 text-cream-50">
              <h3 className="font-playfair font-bold text-2xl mb-4">Prefere o WhatsApp?</h3>
              <p className="font-lora text-cream-200/70 text-sm leading-relaxed mb-6">
                Sem formulários! Clique abaixo e inicie uma conversa direta comigo. Respondo com
                carinho e rapidez.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-2xl bg-[#25D366] text-white font-inter font-semibold text-sm hover:bg-[#1DAA54] transition-colors shadow-md"
              >
                <MessageCircle size={18} />
                Falar pelo WhatsApp
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-playfair font-semibold text-charcoal text-lg">
                O que acontece depois?
              </h4>
              {[
                'Recebo seu formulário e leio com atenção',
                'Te respondo em até 1 dia útil',
                'Conversamos sobre o projeto e prazo',
                'Envio proposta personalizada',
              ].map((step, i) => (
                <div key={step} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-inter text-[10px] font-bold text-gold-dark">{i + 1}</span>
                  </div>
                  <span className="font-inter text-sm text-brown/70 leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection variant="slideLeft" className="lg:col-span-3">
            <div className="bg-cream-100 rounded-3xl p-8 border border-beige shadow-warm-sm">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-5 py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center">
                      <CheckCircle size={32} className="text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-playfair font-bold text-2xl text-charcoal mb-2">
                        Mensagem enviada!
                      </h3>
                      <p className="font-lora text-brown/70 text-sm leading-relaxed max-w-sm mx-auto">
                        Recebi sua mensagem e retornarei em até 1 dia útil. Obrigada pela confiança!
                      </p>
                    </div>
                    <button
                      onClick={resetStatus}
                      className="flex items-center gap-2 font-inter text-sm text-wine hover:text-wine-dark transition-colors"
                    >
                      <RefreshCw size={14} />
                      Enviar outra mensagem
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-5"
                    noValidate
                  >
                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-inter text-xs font-medium text-brown/70 uppercase tracking-wider">
                          Nome *
                        </label>
                        <input
                          {...register('name')}
                          placeholder="Seu nome completo"
                          className={cn(inputClass, errors.name && 'border-red-300 bg-red-50/30')}
                        />
                        {errors.name && (
                          <p className="font-inter text-xs text-red-500">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-inter text-xs font-medium text-brown/70 uppercase tracking-wider">
                          E-mail *
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          placeholder="seu@email.com"
                          className={cn(inputClass, errors.email && 'border-red-300 bg-red-50/30')}
                        />
                        {errors.email && (
                          <p className="font-inter text-xs text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Genre + Work Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-inter text-xs font-medium text-brown/70 uppercase tracking-wider">
                          Gênero literário *
                        </label>
                        <select
                          {...register('genre')}
                          className={cn(inputClass, 'cursor-pointer', errors.genre && 'border-red-300')}
                        >
                          <option value="">Selecione...</option>
                          {LITERARY_GENRES.map((g) => (
                            <option key={g} value={g}>{g}</option>
                          ))}
                        </select>
                        {errors.genre && (
                          <p className="font-inter text-xs text-red-500">{errors.genre.message}</p>
                        )}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-inter text-xs font-medium text-brown/70 uppercase tracking-wider">
                          Tipo de obra *
                        </label>
                        <select
                          {...register('workType')}
                          className={cn(inputClass, 'cursor-pointer', errors.workType && 'border-red-300')}
                        >
                          <option value="">Selecione...</option>
                          {WORK_TYPES.map((w) => (
                            <option key={w} value={w}>{w}</option>
                          ))}
                        </select>
                        {errors.workType && (
                          <p className="font-inter text-xs text-red-500">{errors.workType.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 3: Pages */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-inter text-xs font-medium text-brown/70 uppercase tracking-wider">
                        Quantidade aproximada de páginas *
                      </label>
                      <select
                        {...register('pages')}
                        className={cn(inputClass, 'cursor-pointer', errors.pages && 'border-red-300')}
                      >
                        <option value="">Selecione...</option>
                        {PAGE_RANGES.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                      {errors.pages && (
                        <p className="font-inter text-xs text-red-500">{errors.pages.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-inter text-xs font-medium text-brown/70 uppercase tracking-wider">
                        Mensagem *
                      </label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        placeholder="Conte um pouco sobre seu livro, o que você espera do feedback e qualquer informação relevante..."
                        className={cn(
                          inputClass,
                          'resize-none',
                          errors.message && 'border-red-300 bg-red-50/30'
                        )}
                      />
                      {errors.message && (
                        <p className="font-inter text-xs text-red-500">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Error state */}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border border-red-100"
                      >
                        <AlertCircle size={16} className="text-red-500 shrink-0" />
                        <p className="font-inter text-sm text-red-600">{errorMessage}</p>
                      </motion.div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="flex items-center justify-center gap-2 w-full py-4 px-8 rounded-2xl bg-wine text-cream-50 font-inter font-semibold hover:bg-wine-dark disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-warm-md hover:shadow-warm-lg mt-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Enviar mensagem
                        </>
                      )}
                    </button>

                    <p className="font-inter text-xs text-brown/40 text-center">
                      Seus dados são tratados com total sigilo e não serão compartilhados.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
