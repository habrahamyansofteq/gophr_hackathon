import {UseFormProps as UseReactHookFormProps, UseFormReturn} from 'react-hook-form';
import {UseFormHandleSubmit} from 'react-hook-form/dist/types/form';

export type FormFieldNames = 'email' | 'password';

export type FieldShapeLookup<K extends FormFieldNames> = {
  [P in K]?: Record<FormFieldNames, unknown>[P];
};

export type UseFormProps<K extends FormFieldNames, T extends FieldShapeLookup<K>> = {
  schemaKeys: K[];
  defaultValues?: UseReactHookFormProps<T>['defaultValues'];
  options?: Omit<UseReactHookFormProps<T>, 'defaultValues'>;
};

export type UseFormReturnType<T> = {
  isValid: boolean;
  isSubmitting: boolean;
  formMethods: UseFormReturn<T, unknown>;
  handleSubmit: UseFormHandleSubmit<T>;
};
