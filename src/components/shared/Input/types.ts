import {HTMLInputTypeAttribute} from 'react';

import {VoidCallback} from '~/types';

export type InputProps = {
  id: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  showError?: boolean;
  showLabel?: boolean;
  autoFocus?: boolean;
  className?: string;
  placeholder?: string;
  containerClassName?: string;
  triggerOnChange?: VoidCallback;
};
