import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactFormSchema } from '@/lib/validations'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Validate input
    const result = contactFormSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { error: 'Dados inválidos. Por favor, verifique o formulário.' },
        { status: 400 }
      )
    }

    const { name, email, genre, workType, pages, message } = result.data

    const contactEmail = process.env.CONTACT_EMAIL || 'contato@jadymoraes.com.br'

    await resend.emails.send({
      from: 'Formulário do Site <noreply@jadymoraes.com.br>',
      to: [contactEmail],
      replyTo: email,
      subject: `Nova mensagem de ${name} — ${genre}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: Georgia, serif; background: #FAF7F2; color: #1A1210; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 40px auto; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(107,39,55,0.08); }
              .header { background: #6B2737; padding: 32px 40px; }
              .header h1 { color: #FAF7F2; font-size: 22px; margin: 0; }
              .header p { color: rgba(250,247,242,0.7); font-size: 13px; margin: 6px 0 0; }
              .body { padding: 40px; }
              .field { margin-bottom: 24px; }
              .field label { display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #C9A84C; margin-bottom: 6px; font-family: -apple-system, sans-serif; }
              .field p { margin: 0; font-size: 15px; color: #2D2220; line-height: 1.6; }
              .divider { height: 1px; background: #EDE8DF; margin: 32px 0; }
              .footer { background: #FAF7F2; padding: 24px 40px; }
              .footer p { font-size: 12px; color: #5C3D2E; opacity: 0.5; margin: 0; font-family: -apple-system, sans-serif; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Nova mensagem recebida ✦</h1>
                <p>Formulário de contato — jadymoraes.com.br</p>
              </div>
              <div class="body">
                <div class="field">
                  <label>Nome</label>
                  <p>${name}</p>
                </div>
                <div class="field">
                  <label>E-mail</label>
                  <p>${email}</p>
                </div>
                <div class="field">
                  <label>Gênero literário</label>
                  <p>${genre}</p>
                </div>
                <div class="field">
                  <label>Tipo de obra</label>
                  <p>${workType}</p>
                </div>
                <div class="field">
                  <label>Páginas (aprox.)</label>
                  <p>${pages}</p>
                </div>
                <div class="divider"></div>
                <div class="field">
                  <label>Mensagem</label>
                  <p>${message.replace(/\n/g, '<br>')}</p>
                </div>
              </div>
              <div class="footer">
                <p>Para responder, use o e-mail acima ou clique em "Responder" no seu cliente de e-mail.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Contact API] Error:', error)
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem. Por favor, tente novamente.' },
      { status: 500 }
    )
  }
}
