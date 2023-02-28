import {useEffect} from 'react';

import {VoidCallback} from '~/types';

const useTriggerOnChange = (value: string, trigger: VoidCallback | undefined): void => {
  useEffect(() => {
    if (trigger && value) {
      trigger();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
};

export default useTriggerOnChange;
