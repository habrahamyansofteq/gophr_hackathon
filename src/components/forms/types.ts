import {HTMLInputTypeAttribute} from 'react';

import {FormFieldNames} from '~/hooks/useForm/types';

export type FormField<T extends FormFieldNames> = {
  [FieldName in T]: {
    id: string;
    name: string;
    label?: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
  };
};
