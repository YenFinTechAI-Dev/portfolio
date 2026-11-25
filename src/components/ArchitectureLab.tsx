import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { CAPABILITIES, COPY, type Locale } from '../data/portfolioData';

interface ArchitectureLabProps {
  locale: Locale;
}

export function ArchitectureLab({ locale }: ArchitectureLabProps) {
  const [activeId, setActiveId] = useState(CAPABILITIES[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const t = COPY[locale].capabilities;

  const activeTrack = CAPABILITIES.find((c) => c.id === activeId) ?? CAPABILITIES[0];

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(activeTrack.blueprintCode);
      setCopiedId(activeTrack.id);
      window.setTimeout(() => setCopiedId(null), 1800);
    } catch {
      setCopiedId(null);
    }
  };

  return (
    <section
      id="capabilities"
      className="border-t border-[var(--border-default)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] [text-wrap:balance] md:text-4xl">
            {t.sectionTitle}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)]">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* 2-column interactive developer workbench */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left column: 4 selectable engineering tracks */}
          <div className="flex flex-col divide-y divide-[var(--border-default)] border-y border-[var(--border-default)] lg:col-span-5">
            {CAPABILITIES.map((track) => {
              const isSelected = track.id === activeTrack.id;
              return (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => setActiveId(track.id)}
                  aria-pressed={isSelected}
                  className={`group flex w-full cursor-pointer flex-col gap-2 py-5 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)] ${
                    isSelected
                      ? 'bg-[var(--surface-raised)] px-4'
                      : 'px-2 hover:bg-[var(--surface-raised)]/60'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-display text-lg font-semibold text-[var(--text-primary)]">
                      <span className="mr-2 font-mono text-xs text-[var(--brand-ink)] tabular-nums">
                        {track.index}.
                      </span>
                      {track.title[locale]}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{track.focus[locale]}</p>
                  <p className="font-mono text-xs text-[var(--text-muted)]">
                    {track.tools.join(' · ')}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right column: Active architecture specification & interactive blueprint */}
          <div className="flex flex-col justify-between rounded-2xl border border-[var(--border-default)] bg-[var(--surface-raised)] p-6 sm:p-8 lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[var(--border-default)] pb-5">
                <div>
                  <p className="font-mono text-xs text-[var(--brand-ink)] tabular-nums">
                    {activeTrack.index} · {activeTrack.focus[locale]}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                    {activeTrack.title[locale]}
                  </h3>
                </div>
                <div className="flex items-center gap-6">
                  {activeTrack.metrics.map((m) => (
                    <div key={m.value} className="text-right">
                      <p className="font-mono text-sm font-semibold text-[var(--text-primary)] tabular-nums">
                        {m.value}
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">{m.label[locale]}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                {activeTrack.description[locale]}
              </p>

              {/* Deliverables */}
              <div className="mt-6">
                <p className="text-xs font-semibold text-[var(--text-primary)]">
                  {t.deliverablesLabel}
                </p>
                <ul className="mt-3 space-y-2">
                  {activeTrack.deliverables[locale].map((item, idx) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]"
                    >
                      <span className="font-mono text-xs text-[var(--brand-ink)] tabular-nums">
                        0{idx + 1}.
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Clean code architecture snippet */}
            <div className="mt-8 overflow-hidden rounded-xl border border-[var(--border-default)] bg-[var(--surface-base)]">
              <div className="flex items-center justify-between gap-4 border-b border-[var(--border-default)] px-4 py-2.5">
                <div className="min-w-0">
                  <p className="truncate font-mono text-xs font-medium text-[var(--text-primary)]">
                    {activeTrack.blueprintFile}
                  </p>
                  <p className="truncate text-xs text-[var(--text-muted)]">
                    {activeTrack.blueprintTitle[locale]}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex min-h-9 shrink-0 cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border-default)] px-3 py-1.5 font-mono text-xs text-[var(--text-secondary)] transition-colors duration-150 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)] whitespace-nowrap"
                >
                  {copiedId === activeTrack.id ? (
                    <>
                      <Check className="size-3.5 text-[var(--brand-ink)]" aria-hidden="true" />
                      <span>{locale === 'vi' ? 'Đã chép' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" aria-hidden="true" />
                      <span>{locale === 'vi' ? 'Sao chép' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-xs leading-6 text-[var(--text-secondary)]">
                <code>{activeTrack.blueprintCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
