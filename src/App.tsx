/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUp,
  ArrowUpRight,
  Github,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import {
  COPY,
  MILESTONES,
  PROFILE,
  PROJECTS,
  REPO_ARCHIVE,
  type Locale,
  type ProjectCategory,
  type ProjectItem,
} from './data/portfolioData';
import { InteractiveGrid } from './components/InteractiveGrid';
import { SafeImage } from './components/SafeImage';
import { ProjectModal } from './components/ProjectModal';
import { ArchitectureLab } from './components/ArchitectureLab';
import { ContactSection } from './components/ContactSection';

const FILTER_ORDER: ProjectCategory[] = [
  'all',
  'fintech-ai',
  'data-ml',
  'blockchain-web',
];

export default function App() {
  const [locale, setLocale] = useState<Locale>('vi');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('yen-portfolio-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [publicRepoCount, setPublicRepoCount] = useState<number>(PROFILE.initialRepoCount);

  const t = COPY[locale];

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem('yen-portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    let active = true;
    fetch(`https://api.github.com/users/${PROFILE.handle}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (active && data && typeof data.public_repos === 'number' && data.public_repos > 0) {
          setPublicRepoCount(data.public_repos);
        }
      })
      .catch(() => {
        // Keep initial verified fallback count when offline or rate-limited
      });
    return () => {
      active = false;
    };
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const statValues = [
    `${publicRepoCount}+`,
    `0${PROFILE.liveDeployCount}+`,
    '04',
    '2024–2026',
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--surface-base)] text-[var(--text-primary)] transition-colors duration-200">
      {/* Strict 3-Zone Top Bar Contract */}
      <header className="nav-glass sticky top-0 z-40 w-full">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-5 md:px-8">
          {/* Zone 1: Single text element Brand wordmark */}
          <a
            href="#top"
            className="font-display text-lg font-extrabold tracking-tight text-[var(--text-primary)] transition-opacity duration-150 hover:opacity-90 brand-glow whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-primary)]"
          >
            {PROFILE.brandWordmark}
          </a>

          {/* Zone 2: 5 concise single-line navigation links */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 text-sm font-medium text-[var(--text-secondary)] md:flex"
          >
            <a
              href="#about"
              className="py-1 transition-colors duration-150 hover:text-[var(--text-primary)] hover:underline underline-offset-8 decoration-[var(--brand-primary)] whitespace-nowrap shrink-0"
            >
              {t.nav.about}
            </a>
            <a
              href="#projects"
              className="py-1 transition-colors duration-150 hover:text-[var(--text-primary)] hover:underline underline-offset-8 decoration-[var(--brand-primary)] whitespace-nowrap shrink-0"
            >
              {t.nav.projects}
            </a>
            <a
              href="#capabilities"
              className="py-1 transition-colors duration-150 hover:text-[var(--text-primary)] hover:underline underline-offset-8 decoration-[var(--brand-primary)] whitespace-nowrap shrink-0"
            >
              {t.nav.capabilities}
            </a>
            <a
              href="#journey"
              className="py-1 transition-colors duration-150 hover:text-[var(--text-primary)] hover:underline underline-offset-8 decoration-[var(--brand-primary)] whitespace-nowrap shrink-0"
            >
              {t.nav.journey}
            </a>
            <a
              href="#contact"
              className="py-1 transition-colors duration-150 hover:text-[var(--text-primary)] hover:underline underline-offset-8 decoration-[var(--brand-primary)] whitespace-nowrap shrink-0"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Zone 3: Single primary action (desktop) / menu trigger (mobile) */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="hidden min-h-10 cursor-pointer items-center gap-1.5 rounded-lg bg-[var(--brand-primary)] px-4 py-2 text-xs font-semibold text-[var(--text-inverse)] transition-opacity duration-150 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)] whitespace-nowrap shrink-0 md:inline-flex"
            >
              <span>{t.nav.cta}</span>
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-[var(--border-default)] text-[var(--text-primary)] md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="size-4" aria-hidden="true" />
              ) : (
                <Menu className="size-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation sheet */}
        {mobileMenuOpen && (
          <div className="border-t border-[var(--border-default)] bg-[var(--surface-base)] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium text-[var(--text-secondary)]">
              <button
                type="button"
                onClick={() => scrollToSection('about')}
                className="py-2 text-left hover:text-[var(--text-primary)]"
              >
                {t.nav.about}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="py-2 text-left hover:text-[var(--text-primary)]"
              >
                {t.nav.projects}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('capabilities')}
                className="py-2 text-left hover:text-[var(--text-primary)]"
              >
                {t.nav.capabilities}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('journey')}
                className="py-2 text-left hover:text-[var(--text-primary)]"
              >
                {t.nav.journey}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="mt-2 inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--brand-primary)] px-4 py-2.5 text-sm font-semibold text-[var(--text-inverse)]"
              >
                {t.nav.cta}
              </button>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="atmosphere-mesh relative">
        {/* Hero Section */}
        <section
          id="about"
          className="atmosphere-grain relative overflow-hidden pt-8 pb-20 md:pt-12 md:pb-24"
        >
          <InteractiveGrid />

          <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
            {/* Hero Utility Bar: Handle/Location + Theme & Locale controls */}
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-default)] pb-4">
              <p className="font-mono text-xs text-[var(--text-muted)]">
                @{PROFILE.handle} · {PROFILE.location[locale]}
              </p>

              <div className="flex items-center gap-3">
                {/* Theme toggle */}
                <button
                  type="button"
                  onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
                  aria-label={theme === 'dark' ? t.hero.themeLight : t.hero.themeDark}
                  className="inline-flex min-h-9 cursor-pointer items-center gap-2 rounded-lg border border-[var(--border-default)] bg-[var(--surface-raised)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors duration-150 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)] whitespace-nowrap shrink-0"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="size-3.5 text-[var(--brand-ink)]" aria-hidden="true" />
                      <span>{t.hero.themeLight}</span>
                    </>
                  ) : (
                    <>
                      <Moon className="size-3.5 text-[var(--brand-ink)]" aria-hidden="true" />
                      <span>{t.hero.themeDark}</span>
                    </>
                  )}
                </button>

                {/* Locale switcher segmented control */}
                <div
                  role="group"
                  aria-label="Language"
                  className="inline-flex items-center rounded-lg border border-[var(--border-default)] bg-[var(--surface-raised)] p-0.5 font-mono text-xs"
                >
                  <button
                    type="button"
                    onClick={() => setLocale('vi')}
                    aria-pressed={locale === 'vi'}
                    className={`min-h-8 cursor-pointer rounded-md px-2.5 py-1 transition-colors duration-150 whitespace-nowrap shrink-0 ${
                      locale === 'vi'
                        ? 'bg-[var(--brand-primary)] font-semibold text-[var(--text-inverse)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    VI
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocale('en')}
                    aria-pressed={locale === 'en'}
                    className={`min-h-8 cursor-pointer rounded-md px-2.5 py-1 transition-colors duration-150 whitespace-nowrap shrink-0 ${
                      locale === 'en'
                        ? 'bg-[var(--brand-primary)] font-semibold text-[var(--text-inverse)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>

            {/* Split-Screen Hero */}
            <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
              <div className="flex flex-col justify-center lg:col-span-7">
                <p className="font-mono text-xs font-medium text-[var(--brand-ink)]">
                  {t.hero.kicker}
                </p>

                <h1 className="mt-4 font-display text-[clamp(2.25rem,4.3vw,3.65rem)] font-bold leading-[1.08] tracking-tight text-[var(--text-primary)] [text-wrap:balance]">
                  {t.hero.headline}
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                  {t.hero.lead}
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => scrollToSection('projects')}
                    className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-lg bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-[var(--text-inverse)] transition-opacity duration-150 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)] whitespace-nowrap shrink-0"
                  >
                    <span>{t.hero.primaryCta}</span>
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </button>

                  <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-raised)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors duration-150 hover:border-[var(--brand-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)] whitespace-nowrap shrink-0"
                  >
                    <Github className="size-4" aria-hidden="true" />
                    <span>{t.hero.secondaryCta}</span>
                  </a>
                </div>
              </div>

              {/* Hero Right Column Visual Container matching height */}
              <div className="lg:col-span-5">
                <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--surface-raised)]">
                  <SafeImage
                    src={PROFILE.heroImage}
                    alt="Kiến trúc khối kính đen và ánh sáng xanh chanh đại diện cho FinTech và AI"
                    fallbackTitle={PROFILE.displayName}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="font-mono text-xs text-[#85d840]">
                      {t.hero.visualCaption}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white tabular-nums">
                      {publicRepoCount}+ {locale === 'vi' ? 'kho mã nguồn công khai trên GitHub' : 'public repositories on GitHub'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Full-Width 4-Column KPI / Proof Strip below Hero Split */}
            <div className="mt-14 grid grid-cols-2 divide-y divide-[var(--border-default)] border-y border-[var(--border-default)] lg:grid-cols-4 lg:divide-x lg:divide-y-0">
              {t.stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="py-6 pr-4 lg:px-6 lg:first:pl-0 lg:last:pr-0"
                >
                  <p className="font-display text-2xl font-bold tracking-tight text-[var(--text-primary)] tabular-nums sm:text-3xl">
                    {statValues[idx]}
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-[var(--text-primary)]">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--text-muted)]">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subtle Editorial Marquee Divider */}
        <div
          aria-hidden="true"
          className="overflow-hidden border-y border-[var(--border-default)] bg-[var(--surface-raised)] py-3.5"
        >
          <div className="animate-marquee flex w-max items-center gap-8 font-mono text-xs text-[var(--text-muted)]">
            {[...t.marquee, ...t.marquee].map((item, idx) => (
              <span key={`${item}-${idx}`} className="inline-flex items-center gap-8 whitespace-nowrap">
                <span>{item}</span>
                <span className="text-[var(--brand-ink)]">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Section 01: Selected Works (Bento Grid + Interactive Filters + Archive) */}
        <section id="projects" className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] [text-wrap:balance] md:text-4xl">
                  {t.projects.sectionTitle}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)]">
                  {t.projects.sectionSubtitle}
                </p>
              </div>

              {/* Interactive segmented filter bar */}
              <div
                role="tablist"
                aria-label="Project categories"
                className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-[var(--border-default)] bg-[var(--surface-raised)] p-1"
              >
                {FILTER_ORDER.map((cat) => {
                  const active = activeFilter === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveFilter(cat)}
                      className={`min-h-9 cursor-pointer rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)] ${
                        active
                          ? 'bg-[var(--brand-primary)] font-semibold text-[var(--text-inverse)]'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {t.projects.filters[cat]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Bento Showcase Grid */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {filteredProjects.map((project) => {
                const hasVisual = Boolean(project.image);
                return (
                  <article
                    key={project.id}
                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--surface-raised)] transition-colors duration-150 hover:border-[var(--border-strong)]"
                  >
                    <div>
                      {hasVisual && (
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="relative block aspect-[16/10] w-full cursor-pointer overflow-hidden border-b border-[var(--border-default)] bg-[var(--surface-overlay)] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)]"
                        >
                          <SafeImage
                            src={project.image}
                            alt={project.title[locale]}
                            fallbackTitle={project.title[locale]}
                            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                          />
                        </button>
                      )}

                      <div className="p-6 sm:p-7">
                        {/* Clean unboxed typographic metadata */}
                        <p className="font-mono text-xs text-[var(--brand-ink)] tabular-nums">
                          {project.categoryLabel[locale]} · {project.year}
                        </p>

                        <h3 className="mt-2.5 font-display text-xl font-bold tracking-tight text-[var(--text-primary)] [text-wrap:balance] sm:text-2xl">
                          <button
                            type="button"
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer text-left transition-colors duration-150 hover:text-[var(--brand-ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)]"
                          >
                            {project.title[locale]}
                          </button>
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                          {project.summary[locale]}
                        </p>

                        <p className="mt-5 font-mono text-xs text-[var(--text-muted)]">
                          {project.stack.join(' · ')}
                        </p>
                      </div>
                    </div>

                    {/* Action footer row */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-default)] px-6 py-4 sm:px-7">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex min-h-9 cursor-pointer items-center gap-1.5 text-xs font-semibold text-[var(--text-primary)] transition-colors duration-150 hover:text-[var(--brand-ink)] whitespace-nowrap shrink-0"
                      >
                        <span>{t.projects.viewDetails}</span>
                        <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      </button>

                      <div className="flex items-center gap-5 text-xs font-medium text-[var(--text-secondary)]">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-9 items-center gap-1 text-[var(--brand-ink)] transition-opacity duration-150 hover:opacity-80 whitespace-nowrap shrink-0"
                          >
                            <span>{t.projects.liveDemo}</span>
                            <ArrowUpRight className="size-3.5" aria-hidden="true" />
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-9 items-center gap-1.5 transition-colors duration-150 hover:text-[var(--text-primary)] whitespace-nowrap shrink-0"
                        >
                          <Github className="size-3.5" aria-hidden="true" />
                          <span>{t.projects.sourceCode}</span>
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Additional Public GitHub Repository Index */}
            <div className="mt-20">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                    {t.projects.archiveTitle}
                  </h3>
                  <p className="mt-1.5 text-sm text-[var(--text-secondary)]">
                    {t.projects.archiveSubtitle}
                  </p>
                </div>
                <a
                  href={`${PROFILE.githubUrl}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[var(--brand-ink)] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
                >
                  <span>github.com/{PROFILE.handle}</span>
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-6 overflow-x-auto border-y border-[var(--border-default)]">
                <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border-default)] text-xs text-[var(--text-muted)]">
                      <th className="py-3.5 pr-4 font-medium">{t.projects.colProject}</th>
                      <th className="px-4 py-3.5 font-medium">{t.projects.colCategory}</th>
                      <th className="px-4 py-3.5 font-medium">{t.projects.colTech}</th>
                      <th className="px-4 py-3.5 font-medium">{t.projects.colUpdated}</th>
                      <th className="py-3.5 pl-4 text-right font-medium">{t.projects.colLinks}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-default)]">
                    {REPO_ARCHIVE.map((repo) => (
                      <tr
                        key={repo.name}
                        className="transition-colors duration-150 hover:bg-[var(--surface-raised)]"
                      >
                        <td className="py-4 pr-4 align-top">
                          <p className="font-medium text-[var(--text-primary)]">
                            {repo.title[locale]}
                          </p>
                          <p className="mt-1 max-w-md text-xs leading-relaxed text-[var(--text-secondary)]">
                            {repo.summary[locale]}
                          </p>
                        </td>
                        <td className="px-4 py-4 align-top text-xs text-[var(--text-secondary)] whitespace-nowrap">
                          {repo.category[locale]}
                        </td>
                        <td className="px-4 py-4 align-top font-mono text-xs text-[var(--text-muted)] whitespace-nowrap">
                          {repo.language}
                        </td>
                        <td className="px-4 py-4 align-top font-mono text-xs text-[var(--text-muted)] tabular-nums whitespace-nowrap">
                          {repo.updated}
                        </td>
                        <td className="py-4 pl-4 text-right align-top whitespace-nowrap">
                          <div className="inline-flex items-center justify-end gap-4 text-xs font-medium">
                            {repo.demoUrl && (
                              <a
                                href={repo.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[var(--brand-ink)] hover:underline underline-offset-4"
                              >
                                <span>Demo</span>
                                <ArrowUpRight className="size-3.5" aria-hidden="true" />
                              </a>
                            )}
                            <a
                              href={repo.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                            >
                              <span>GitHub</span>
                              <ArrowUpRight className="size-3.5" aria-hidden="true" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Core Capabilities & Interactive Blueprint Lab */}
        <ArchitectureLab locale={locale} />

        {/* Section 03: Journey & Engineering Philosophy */}
        <section
          id="journey"
          className="border-t border-[var(--border-default)] py-20 md:py-28"
        >
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
              {/* Left column: Manifesto & 3 principles */}
              <div className="lg:col-span-5">
                <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] [text-wrap:balance] md:text-4xl">
                  {t.journey.sectionTitle}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)]">
                  {t.journey.sectionSubtitle}
                </p>

                <div className="mt-10 border-t border-[var(--border-default)] pt-8">
                  <h3 className="font-display text-xl font-bold text-[var(--text-primary)] [text-wrap:balance]">
                    {t.journey.manifestoTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {t.journey.manifestoBody}
                  </p>
                </div>

                <div className="mt-8 divide-y divide-[var(--border-default)] border-y border-[var(--border-default)]">
                  {t.journey.principles.map((p, idx) => (
                    <div key={p.title} className="py-4">
                      <p className="text-sm font-semibold text-[var(--text-primary)]">
                        <span className="mr-2 font-mono text-xs text-[var(--brand-ink)] tabular-nums">
                          0{idx + 1}.
                        </span>
                        {p.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column: Chronological Milestones */}
              <div className="divide-y divide-[var(--border-default)] border-y border-[var(--border-default)] lg:col-span-7">
                {MILESTONES.map((item) => (
                  <div
                    key={`${item.year}-${item.title.en}`}
                    className="grid gap-4 py-7 sm:grid-cols-12"
                  >
                    <div className="sm:col-span-3">
                      <p className="font-display text-2xl font-bold text-[var(--text-primary)] tabular-nums">
                        {item.year}
                      </p>
                      <p className="mt-1 font-mono text-xs text-[var(--text-muted)]">
                        {item.period[locale]}
                      </p>
                    </div>
                    <div className="sm:col-span-9">
                      <h3 className="font-display text-lg font-semibold text-[var(--text-primary)]">
                        {item.title[locale]}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {item.detail[locale]}
                      </p>
                      <p className="mt-3.5 font-mono text-xs text-[var(--brand-ink)]">
                        {item.artifacts.join(' · ')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 04: Contact & Collaboration */}
        <ContactSection locale={locale} />
      </main>

      {/* Quiet Minimal Footer */}
      <footer className="border-t border-[var(--border-default)] bg-[var(--surface-raised)] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center md:px-8">
          <div>
            <p className="font-display text-base font-bold text-[var(--text-primary)]">
              {PROFILE.brandWordmark} · {PROFILE.displayName}
            </p>
            <p className="mt-1 text-xs text-[var(--text-muted)]">
              {t.footer.tagline} {t.footer.rights}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[var(--text-secondary)]">
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-150 hover:text-[var(--text-primary)] whitespace-nowrap"
            >
              GitHub
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="transition-colors duration-150 hover:text-[var(--text-primary)] whitespace-nowrap"
            >
              {PROFILE.email}
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex min-h-9 cursor-pointer items-center gap-1.5 text-[var(--brand-ink)] transition-opacity duration-150 hover:opacity-80 whitespace-nowrap"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="size-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </footer>

      {/* Fullscreen Editorial Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        locale={locale}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
