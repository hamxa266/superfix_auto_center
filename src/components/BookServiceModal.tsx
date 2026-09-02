import { useEffect, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, CheckCircle2 } from 'lucide-react'
import { SERVICES } from '../data/services'

interface BookServiceModalProps {
  open: boolean
  onClose: () => void
}

interface FormValues {
  name: string
  phone: string
  vehicle: string
  service: string
  date: string
  message: string
}

const INITIAL_VALUES: FormValues = {
  name: '',
  phone: '',
  vehicle: '',
  service: '',
  date: '',
  message: '',
}

type FormErrors = Partial<Record<keyof FormValues, string>>

export default function BookServiceModal({ open, onClose }: BookServiceModalProps) {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  // Reset the form a beat after the close animation finishes.
  useEffect(() => {
    if (open) return
    const timeout = setTimeout(() => {
      setValues(INITIAL_VALUES)
      setErrors({})
      setSubmitted(false)
    }, 300)
    return () => clearTimeout(timeout)
  }, [open])

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  function validate(): FormErrors {
    const next: FormErrors = {}
    if (!values.name.trim()) next.name = 'Please enter your full name.'
    if (!values.phone.trim()) {
      next.phone = 'Please enter a phone number.'
    } else if (!/^[+\d][\d\s-]{6,}$/.test(values.phone.trim())) {
      next.phone = 'Please enter a valid phone number.'
    }
    if (!values.vehicle.trim()) next.vehicle = 'Please enter your vehicle make & model.'
    if (!values.service) next.service = 'Please select a service.'
    if (!values.date) next.date = 'Please select a preferred date.'
    return next
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    // Frontend-only demo: no network request, no storage — just a local success state.
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="book-service-heading"
              className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-md border border-line bg-charcoal p-6 shadow-2xl sm:p-8"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                type="button"
                onClick={onClose}
                aria-label="Close booking form"
                className="absolute top-5 right-5 flex size-9 items-center justify-center rounded-sm border border-white/15 text-white"
              >
                <X className="size-4" aria-hidden="true" />
              </button>

              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-10 text-center">
                  <CheckCircle2 className="size-14 text-red" aria-hidden="true" strokeWidth={1.5} />
                  <h2
                    id="book-service-heading"
                    className="font-display text-2xl font-extrabold tracking-tight text-white"
                  >
                    REQUEST RECEIVED
                  </h2>
                  <p className="max-w-xs text-sm leading-relaxed text-silver">
                    Thanks. Your service request has been prepared. Our team will contact you
                    shortly.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-2 font-display text-sm font-bold tracking-wide text-red uppercase"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h2
                    id="book-service-heading"
                    className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
                  >
                    Book a Service
                  </h2>
                  <p className="mt-2 text-sm text-silver">
                    Tell us about your vehicle and preferred date. This is a demo request form —
                    our team will follow up by phone or WhatsApp to confirm.
                  </p>

                  <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                    <Field
                      label="Full Name"
                      id="name"
                      error={errors.name}
                      value={values.name}
                      onChange={(v) => updateField('name', v)}
                      autoComplete="name"
                    />
                    <Field
                      label="Phone Number"
                      id="phone"
                      type="tel"
                      error={errors.phone}
                      value={values.phone}
                      onChange={(v) => updateField('phone', v)}
                      autoComplete="tel"
                      placeholder="+971 5X XXX XXXX"
                    />
                    <Field
                      label="Vehicle Make & Model"
                      id="vehicle"
                      error={errors.vehicle}
                      value={values.vehicle}
                      onChange={(v) => updateField('vehicle', v)}
                      placeholder="e.g. Toyota Camry"
                    />

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="service" className="text-sm font-semibold text-white">
                        Service Required
                      </label>
                      <select
                        id="service"
                        value={values.service}
                        onChange={(e) => updateField('service', e.target.value)}
                        aria-invalid={Boolean(errors.service)}
                        aria-describedby={errors.service ? 'service-error' : undefined}
                        className="rounded-sm border border-line bg-graphite px-3.5 py-2.5 text-sm text-white focus-visible:border-red"
                      >
                        <option value="">Select a service</option>
                        {SERVICES.map((s) => (
                          <option key={s.title} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p id="service-error" className="text-xs text-red-bright">
                          {errors.service}
                        </p>
                      )}
                    </div>

                    <Field
                      label="Preferred Date"
                      id="date"
                      type="date"
                      error={errors.date}
                      value={values.date}
                      onChange={(v) => updateField('date', v)}
                    />

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-sm font-semibold text-white">
                        Message <span className="font-normal text-metal">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        value={values.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        placeholder="Tell us what's going on with your vehicle"
                        className="resize-none rounded-sm border border-line bg-graphite px-3.5 py-2.5 text-sm text-white placeholder:text-metal focus-visible:border-red"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 inline-flex items-center justify-center rounded-sm bg-red px-6 py-3.5 font-display text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-red-bright"
                    >
                      Submit Request
                    </button>
                    <p className="text-center text-xs text-metal">
                      This form does not send data anywhere — it&apos;s a frontend demo only.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

interface FieldProps {
  label: string
  id: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: string
  autoComplete?: string
  placeholder?: string
}

function Field({ label, id, value, onChange, error, type = 'text', autoComplete, placeholder }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-white">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="rounded-sm border border-line bg-graphite px-3.5 py-2.5 text-sm text-white placeholder:text-metal focus-visible:border-red"
      />
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-bright">
          {error}
        </p>
      )}
    </div>
  )
}
