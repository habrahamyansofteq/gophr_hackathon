import {LocalesKey} from '~/locales/types';

export type UseLocalesReturn = {
  locale: LocalesKey;
  translatedTypo: string | null;
};
