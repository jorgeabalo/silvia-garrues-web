import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Check, Loader2 } from 'lucide-react'
import { useI18n } from '../i18n'
import { practiceAreas } from '../content/practice'
import { site } from '../content/site'
import { Button } from './Button'

type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'error'

export function ContactForm() {
  const { t, lang, to } = useI18n()
  const f = t.contact.form
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.reportValidity()) return
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    if (data._gotcha) return // honeypot anti-spam
    setStatus('sending')
    if (site.formEndpoint) {
      try {
        const res = await fetch(site.formEndpoint, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, idioma: lang }),
        })
        if (!res.ok) throw new Error(String(res.status))
        setStatus('sent')
        form.reset()
      } catch {
        setStatus('error')
      }
      return
    }
    // Sin endpoint configurado: abre el correo con la consulta ya redactada.
    const body = [`${f.name}: ${data.name}`, `${f.email}: ${data.email}`, `${f.phone}: ${data.phone || '—'}`, `${f.reason}: ${data.reason}`, '', data.message].join('\n')
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${f.title} — ${data.reason}`)}&body=${encodeURIComponent(body)}`
    setStatus('mailto')
  }

  const field =
    'peer w-full rounded-2xl border border-line bg-white px-4 pb-3 pt-6 text-[16px] text-ink outline-none transition-[border,box-shadow] duration-300 placeholder:text-transparent focus:border-intense focus:shadow-[0_0_0_4px_rgba(30,79,214,.12)]'
  const labelCls =
    'pointer-events-none absolute left-4 top-2 text-[12px] font-medium text-ink/55 transition-all duration-300 peer-placeholder-shown:top-[18px] peer-placeholder-shown:text-[15px] peer-focus:top-2 peer-focus:text-[12px] peer-focus:text-intense'

  if (status === 'sent' || status === 'mailto') {
    return (
      <div role="status" className="flex flex-col items-start gap-5 rounded-[28px] border border-line bg-white p-8 shadow-soft sm:p-10">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-intense text-white">
          <Check className="h-6 w-6" />
        </span>
        <p className="text-xl leading-snug tracking-[-0.02em] text-ink">{status === 'sent' ? f.success : f.mailto}</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="rounded-[28px] border border-line bg-white p-6 shadow-soft sm:p-10" aria-describedby="form-disclaimer">
      <h3 className="text-2xl font-medium tracking-[-0.03em] text-ink">{f.title}</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="relative block sm:col-span-2">
          <input name="name" required autoComplete="name" placeholder={f.name} className={field} />
          <span className={labelCls}>{f.name} *</span>
        </label>
        <label className="relative block">
          <input name="email" type="email" required autoComplete="email" inputMode="email" placeholder={f.email} className={field} />
          <span className={labelCls}>{f.email} *</span>
        </label>
        <label className="relative block">
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder={f.phone} className={field} />
          <span className={labelCls}>{f.phone}</span>
        </label>
        <label className="relative block sm:col-span-2">
          <select name="reason" required defaultValue="" className={`${field} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22><path d=%22M1 1l5 5 5-5%22 fill=%22none%22 stroke=%22%230B1A30%22 stroke-width=%221.5%22/></svg>')] bg-[right_1.1rem_center] bg-no-repeat pr-10`}>
            <option value="" disabled>
              {f.reasonPlaceholder}
            </option>
            {practiceAreas.map((a) => (
              <option key={a.slug} value={a.name[lang]}>
                {a.name[lang]}
              </option>
            ))}
            <option value={f.other}>{f.other}</option>
          </select>
          <span className="pointer-events-none absolute left-4 top-2 text-[12px] font-medium text-ink/55">{f.reason} *</span>
        </label>
        <label className="relative block sm:col-span-2">
          <textarea name="message" required rows={5} placeholder={f.message} className={`${field} resize-y`} />
          <span className={labelCls}>{f.message} *</span>
        </label>
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      </div>

      <label className="mt-5 flex cursor-pointer items-start gap-3 text-[14px] leading-relaxed text-ink/70">
        <input type="checkbox" name="privacy" required className="mt-1 h-5 w-5 shrink-0 cursor-pointer rounded accent-[#1E4FD6]" />
        <span>
          {f.privacy}{' '}
          <Link to={to('privacy')} className="font-medium text-abyss underline underline-offset-4">
            {f.privacyLink}
          </Link>
          . *
        </span>
      </label>

      <p id="form-disclaimer" className="mt-5 rounded-2xl bg-mist px-4 py-3.5 text-[13px] leading-relaxed text-ink/70">
        {f.disclaimer}
      </p>
      <p className="mt-3 text-[12px] leading-relaxed text-ink/50">{f.rgpd}</p>

      {status === 'error' && (
        <p role="alert" className="mt-4 text-[14px] font-medium text-red-700">
          {f.error}
        </p>
      )}

      <Button type="submit" className="mt-6 w-full sm:w-auto" disabled={status === 'sending'} icon={status !== 'sending'}>
        {status === 'sending' ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" /> {f.sending}
          </span>
        ) : (
          f.submit
        )}
      </Button>
    </form>
  )
}
