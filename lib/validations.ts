import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome muito longo'),
  email: z
    .string()
    .email('E-mail inválido')
    .max(200, 'E-mail muito longo'),
  genre: z.string().min(1, 'Selecione um gênero literário'),
  workType: z.string().min(1, 'Selecione o tipo de obra'),
  pages: z
    .string()
    .min(1, 'Informe a quantidade aproximada de páginas'),
  message: z
    .string()
    .min(20, 'Mensagem deve ter pelo menos 20 caracteres')
    .max(2000, 'Mensagem muito longa'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const LITERARY_GENRES = [
  'Romance contemporâneo',
  'Fantasia',
  'Fantasia urbana',
  'Ficção científica',
  'Suspense / Thriller',
  'Terror',
  'Literatura brasileira',
  'Romance histórico',
  'Conto literário',
  'Novela',
  'Young Adult (YA)',
  'Infantojuvenil',
  'Outros',
]

export const WORK_TYPES = [
  'Romance',
  'Novela',
  'Conto / Coletânea de contos',
  'Roteiro',
  'Manuscrito inédito',
  'Outros',
]

export const PAGE_RANGES = [
  'Até 100 páginas',
  '100 a 200 páginas',
  '200 a 300 páginas',
  '300 a 400 páginas',
  '400 a 500 páginas',
  'Mais de 500 páginas',
]
