import {StripDefaultLocaleArgs} from './types';

const stripDefaultLocale: StripDefaultLocaleArgs = (str) => {
  return str.replace('/default', '');
};

export default stripDefaultLocale;
