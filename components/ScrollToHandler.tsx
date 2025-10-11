'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToHashHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = (hash?: string) => {
      const raw = (hash ?? window.location.hash ?? '').replace(/^#/, '');
      if (!raw) return;

      const tryScroll = (tries = 0) => {
        const el = document.getElementById(raw);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          (el as HTMLElement).focus?.();
          return;
        }
        if (tries < 12) {
          setTimeout(() => tryScroll(tries + 1), 100);
        }
      };

      tryScroll();
    };

    // run on mount
    scrollToHash();

    // listen for hash changes (back/forward or manual changes)
    const onHash = () => scrollToHash();
    window.addEventListener('hashchange', onHash);

    return () => window.removeEventListener('hashchange', onHash);
  }, [pathname]);

  return null;
}
