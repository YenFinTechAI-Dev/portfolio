import { useEffect } from 'react';
import { ArrowUpRight, Github, X } from 'lucide-react';
import { COPY, type Locale, type ProjectItem } from '../data/portfolioData';
import { SafeImage } from './SafeImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  locale: Locale;
  onClose: () => void;
}

export function ProjectModal({ project, locale, onClose }: ProjectModalProps) {
  const t = COPY[locale].modal;

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md sm:p-6 md:p-10"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[var(--border-default)] bg-[var(--surface-base)] text-[var(--text-primary)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar inside modal */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-[var(--border-default)] bg-[var(--surface-glass)] px-6 py-4 backdrop-blur-xl sm:px-8">
          <div className="min-w-0">
            <p className="truncate font-mono text-xs text-[var(--text-muted)] tabular-nums">
              {project.categoryLabel[locale]} · {project.year} · {project.repoName}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-[var(--border-default)] bg-[var(--surface-raised)] text-[var(--text-secondary)] transition-colors duration-150 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)]"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        {/* Media header */}
        {project.image && (
          <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[var(--border-default)] bg-[var(--surface-raised)]">
            <SafeImage
              src={project.image}
              alt={project.title[locale]}
              fallbackTitle={project.title[locale]}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <h2
                id="project-modal-title"
                className="font-display text-2xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-3xl"
              >
                {project.title[locale]}
              </h2>
              <p className="mt-1.5 text-sm text-neutral-200 sm:text-base">
                {project.subtitle[locale]}
              </p>
            </div>
          </div>
        )}

        {/* Content body */}
        <div className="space-y-8 p-6 sm:p-8">
          {!project.image && (
            <div className="border-b border-[var(--border-default)] pb-6">
              <h2
                id="project-modal-title"
                className="font-display text-2xl font-bold tracking-tight text-[var(--text-primary)] [text-wrap:balance] sm:text-3xl"
              >
                {project.title[locale]}
              </h2>
              <p className="mt-2 text-base text-[var(--text-secondary)]">
                {project.subtitle[locale]}
              </p>
            </div>
          )}

          {/* Clean unboxed stack metadata */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 border-b border-[var(--border-default)] pb-6 text-sm text-[var(--text-secondary)]">
            <span className="font-medium text-[var(--text-primary)]">{t.stack}:</span>
            {project.stack.map((tech, idx) => (
              <span key={tech} className="inline-flex items-center gap-2.5 font-mono text-xs">
                <span className="text-[var(--brand-ink)]">{tech}</span>
                {idx < project.stack.length - 1 && (
                  <span aria-hidden="true" className="text-[var(--text-muted)]">
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* Problem & Solution 2-column split */}
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-display text-base font-semibold text-[var(--text-primary)]">
                {t.problem}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                {project.problem[locale]}
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-[var(--text-primary)]">
                {t.solution}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                {project.solution[locale]}
              </p>
            </div>
          </div>

          {/* Technical Highlights */}
          <div className="border-t border-[var(--border-default)] pt-6">
            <h3 className="font-display text-base font-semibold text-[var(--text-primary)]">
              {t.highlights}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {project.highlights[locale].map((item, idx) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[var(--text-secondary)]"
                >
                  <span className="mt-0.5 font-mono text-xs text-[var(--brand-ink)] tabular-nums">
                    0{idx + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 border-t border-[var(--border-default)] pt-6">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[var(--brand-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--text-inverse)] transition-opacity duration-150 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)] whitespace-nowrap shrink-0"
              >
                <span>{t.openDemo}</span>
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-raised)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-colors duration-150 hover:border-[var(--brand-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)] whitespace-nowrap shrink-0"
            >
              <Github className="size-4" aria-hidden="true" />
              <span>{t.openGithub}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
