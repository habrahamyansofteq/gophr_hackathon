import {OnThemeChangeArgs} from './types';

const onThemeChangeUtil: OnThemeChangeArgs = (callback) => {
  return (event) => {
    if (!event || !event.matches) {
      return;
    }

    callback();
  };
};

export default onThemeChangeUtil;
