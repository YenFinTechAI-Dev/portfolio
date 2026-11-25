import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Copy, Github, Mail } from 'lucide-react';
import { COPY, PROFILE, type Locale } from '../data/portfolioData';

interface ContactSectionProps {
  locale: Locale;
}

export function ContactSection({ locale }: ContactSectionProps) {
  const t = COPY[locale].contact;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMsg = message.trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!trimmedName || !emailValid || trimmedMsg.length < 5) {
      setError(t.errorRequired);
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const mailtoHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    `[Portfolio] Liên hệ từ ${name.trim() || 'Guest'}`
  )}&body=${encodeURIComponent(
    `${message.trim()}\n\n---\n${name.trim()} (${email.trim()})`
  )}`;

  return (
    <section
      id="contact"
      className="border-t border-[var(--border-default)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left column: Direct channels */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] [text-wrap:balance] md:text-4xl">
              {t.sectionTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">
              {t.sectionSubtitle}
            </p>

            <div className="mt-10 divide-y divide-[var(--border-default)] border-y border-[var(--border-default)]">
              <div className="flex items-center justify-between gap-4 py-4">
                <div className="min-w-0">
                  <p className="text-xs text-[var(--text-muted)]">Email</p>
                  <p className="truncate font-mono text-sm font-medium text-[var(--text-primary)]">
                    {PROFILE.email}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex min-h-10 shrink-0 cursor-pointer items-center gap-2 rounded-lg border border-[var(--border-default)] bg-[var(--surface-raised)] px-3.5 py-2 text-xs font-medium text-[var(--text-primary)] transition-colors duration-150 hover:border-[var(--brand-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)] whitespace-nowrap"
                >
                  {copied ? (
                    <>
                      <Check className="size-3.5 text-[var(--brand-ink)]" aria-hidden="true" />
                      <span>{t.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" aria-hidden="true" />
                      <span>{t.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between gap-4 py-4">
                <div className="min-w-0">
                  <p className="text-xs text-[var(--text-muted)]">GitHub</p>
                  <p className="truncate font-mono text-sm font-medium text-[var(--text-primary)]">
                    github.com/{PROFILE.handle}
                  </p>
                </div>
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-lg border border-[var(--border-default)] bg-[var(--surface-raised)] px-3.5 py-2 text-xs font-medium text-[var(--text-primary)] transition-colors duration-150 hover:border-[var(--brand-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)] whitespace-nowrap"
                >
                  <Github className="size-3.5" aria-hidden="true" />
                  <span>{t.githubCta}</span>
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right column: Interactive inquiry form */}
          <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--surface-raised)] p-6 sm:p-8 lg:col-span-7">
            <h3 className="font-display text-xl font-semibold text-[var(--text-primary)]">
              {t.formTitle}
            </h3>

            {submitted ? (
              <div className="mt-6 space-y-5">
                <div className="rounded-xl border border-[var(--border-accent)] bg-[var(--surface-base)] p-5">
                  <p className="font-display text-base font-semibold text-[var(--brand-ink)]">
                    {t.successTitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {t.successBody}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={mailtoHref}
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[var(--brand-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--text-inverse)] transition-opacity duration-150 hover:opacity-90 whitespace-nowrap shrink-0"
                  >
                    <Mail className="size-4" aria-hidden="true" />
                    <span>{t.openMailClient}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="inline-flex min-h-11 cursor-pointer items-center rounded-lg border border-[var(--border-default)] px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-colors duration-150 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] whitespace-nowrap shrink-0"
                  >
                    {t.sendAnother}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-[var(--text-secondary)]"
                    >
                      {t.nameLabel}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.namePlaceholder}
                      className="mt-2 w-full rounded-lg border border-[var(--border-default)] bg-[var(--surface-base)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors duration-150 focus:border-[var(--brand-primary)] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-[var(--text-secondary)]"
                    >
                      {t.emailLabel}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.emailPlaceholder}
                      className="mt-2 w-full rounded-lg border border-[var(--border-default)] bg-[var(--surface-base)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors duration-150 focus:border-[var(--brand-primary)] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-[var(--text-secondary)]"
                  >
                    {t.topicLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.topicPlaceholder}
                    className="mt-2 w-full resize-none rounded-lg border border-[var(--border-default)] bg-[var(--surface-base)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors duration-150 focus:border-[var(--brand-primary)] focus:outline-none"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-xs font-medium text-red-500">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg bg-[var(--brand-primary)] px-6 py-2.5 text-sm font-semibold text-[var(--text-inverse)] transition-opacity duration-150 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)] whitespace-nowrap shrink-0"
                >
                  <span>{t.submit}</span>
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
