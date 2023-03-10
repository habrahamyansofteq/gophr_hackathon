import {ReactNode} from 'react';
import {UseFormReturn} from 'react-hook-form';

import {VoidCallback} from '~/types';

export type FormWrapperProps<T extends Record<string, unknown>> = {
  formMethods: UseFormReturn<T>;
  children: ReactNode;
  onSubmit: VoidCallback;
};
