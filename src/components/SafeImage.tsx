import { useState } from 'react';
import { Layers } from 'lucide-react';

interface SafeImageProps {
  src?: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
}

export function SafeImage({ src, alt, fallbackTitle, className = '' }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-[var(--surface-overlay)] px-6 text-center ${className}`}
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 20%, rgba(133, 216, 64, 0.14), transparent 60%)',
        }}
      >
        <Layers className="size-7 text-[var(--brand-ink)]" aria-hidden="true" />
        <span className="font-display text-sm font-semibold text-[var(--text-primary)]">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
