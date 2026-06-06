import { SITE_CONFIG } from './constants'

export function buildWhatsAppUrl(message?: string): string {
  const number = SITE_CONFIG.whatsapp.replace(/\D/g, '')
  const text = encodeURIComponent(message || SITE_CONFIG.whatsappMessage)
  return `https://wa.me/${number}?text=${text}`
}

export function buildWhatsAppUrlForService(serviceName: string): string {
  const message = `Olá, Jady! Gostaria de saber mais sobre o serviço de ${serviceName}.`
  return buildWhatsAppUrl(message)
}
