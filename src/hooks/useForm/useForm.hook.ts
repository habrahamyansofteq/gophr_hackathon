import {yupResolver} from '@hookform/resolvers/yup';
import {useMemo} from 'react';
import {useForm as useReactHookForm, UseFormProps as UseReactHookFormProps} from 'react-hook-form';

import {FieldShapeLookup, FormFieldNames, UseFormProps, UseFormReturnType} from './types';
import {composeFormSchema} from './utils';

const useForm = <K extends FormFieldNames, T extends FieldShapeLookup<K>>({
  schemaKeys,
  defaultValues,
  options,
}: UseFormProps<K, T>): UseFormReturnType<T> => {
  const schema = composeFormSchema<K>(schemaKeys);

  const defaultValuesMemo = useMemo(() => defaultValues, [defaultValues]);

  const formOptions: UseReactHookFormProps<T> = {
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: defaultValuesMemo,
    ...options,
  };

  const formMethods = useReactHookForm(formOptions);

  return {
    formMethods,
    handleSubmit: formMethods.handleSubmit,
    isValid: formMethods.formState.isValid,
    isSubmitting: formMethods.formState.isSubmitting,
  };
};

export default useForm;
