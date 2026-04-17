import { useEffect, useState } from 'react';

type ConnectionLike = {
  effectiveType?: string;
  saveData?: boolean;
  addEventListener?: (type: 'change', listener: () => void) => void;
  removeEventListener?: (type: 'change', listener: () => void) => void;
};

type ExperiencePreferences = {
  isDesktop: boolean;
  isMobile: boolean;
  prefersReducedMotion: boolean;
  shouldReduceData: boolean;
};

const MOBILE_QUERY = '(max-width: 767px)';
const DESKTOP_QUERY = '(min-width: 1024px)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function readPreferences(): ExperiencePreferences {
  if (typeof window === 'undefined') {
    return {
      isDesktop: false,
      isMobile: false,
      prefersReducedMotion: false,
      shouldReduceData: false,
    };
  }

  const connection = navigator.connection as ConnectionLike | undefined;
  const effectiveType = connection?.effectiveType ?? '';
  const shouldReduceData =
    Boolean(connection?.saveData) || /(?:2g|slow-2g)/i.test(effectiveType);

  return {
    isDesktop: window.matchMedia(DESKTOP_QUERY).matches,
    isMobile: window.matchMedia(MOBILE_QUERY).matches,
    prefersReducedMotion: window.matchMedia(REDUCED_MOTION_QUERY).matches,
    shouldReduceData,
  };
}

export function useExperiencePreferences() {
  const [preferences, setPreferences] = useState<ExperiencePreferences>(() =>
    readPreferences()
  );

  useEffect(() => {
    const mobileQuery = window.matchMedia(MOBILE_QUERY);
    const desktopQuery = window.matchMedia(DESKTOP_QUERY);
    const reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    const connection = navigator.connection as ConnectionLike | undefined;

    const updatePreferences = () => {
      setPreferences(readPreferences());
    };

    mobileQuery.addEventListener('change', updatePreferences);
    desktopQuery.addEventListener('change', updatePreferences);
    reducedMotionQuery.addEventListener('change', updatePreferences);
    connection?.addEventListener?.('change', updatePreferences);

    updatePreferences();

    return () => {
      mobileQuery.removeEventListener('change', updatePreferences);
      desktopQuery.removeEventListener('change', updatePreferences);
      reducedMotionQuery.removeEventListener('change', updatePreferences);
      connection?.removeEventListener?.('change', updatePreferences);
    };
  }, []);

  return preferences;
}
