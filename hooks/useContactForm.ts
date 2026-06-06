'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, ContactFormData } from '@/lib/validations'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function useContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      genre: '',
      workType: '',
      pages: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Erro ao enviar mensagem')
      }

      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Ocorreu um erro inesperado. Tente novamente.'
      )
    }
  }

  const resetStatus = () => {
    setStatus('idle')
    setErrorMessage('')
  }

  return { form, status, errorMessage, onSubmit, resetStatus }
}
