import {useEffect, useState} from 'react';

import {onThemeChange} from '~/utils';

import {useIsomorphicLayoutEffect} from '../useIsomorphicLayoutEffect';
import {Theme, UseSystemThemeArgs} from './types';

export const colorSchemes = {
  light: '(prefers-color-scheme: light)',
  dark: '(prefers-color-scheme: dark)',
};

const useSystemTheme: UseSystemThemeArgs = (initialTheme = Theme.Light) => {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    // SSR or matchMedia not supported
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const lightMatch = window.matchMedia(colorSchemes.light);
    const onLightMatches = onThemeChange(() => setTheme(Theme.Light));

    lightMatch.addListener(onLightMatches);

    const darkMatch = window.matchMedia(colorSchemes.dark);
    const onDarkMatches = onThemeChange(() => setTheme(Theme.Dark));

    darkMatch.addListener(onDarkMatches);

    return () => {
      lightMatch.removeListener(onLightMatches);
      darkMatch.removeListener(onDarkMatches);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    // SSR or matchMedia not supported
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    if (window.matchMedia(colorSchemes.dark).matches && theme !== 'dark') {
      setTheme(Theme.Dark);
    } else if (window.matchMedia(colorSchemes.light).matches && theme !== 'light') {
      setTheme(Theme.Light);
    }
  }, [theme]);

  return theme;
};

export default useSystemTheme;
