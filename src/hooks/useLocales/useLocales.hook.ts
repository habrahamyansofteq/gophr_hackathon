import {has} from 'lodash';
import {useRouter} from 'next/router';

import locales from '~/locales';
import {LocalesKey} from '~/locales/types';

import {UseLocalesReturn} from './types';

const useLocales = (typoKey: string): UseLocalesReturn => {
  const {locale} = useRouter();
  const detectedLocale = locale === 'default' ? 'en' : (locale as LocalesKey);
  const detectedLocales = locales[detectedLocale];
  const translatedTypo =
    typoKey && has(detectedLocales, typoKey)
      ? detectedLocales[typoKey as keyof typeof detectedLocales]
      : null;

  return {
    translatedTypo,
    locale: detectedLocale,
  };
};

export default useLocales;
