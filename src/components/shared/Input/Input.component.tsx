import classNames from 'classnames';
import React from 'react';
import {useController, useFormContext} from 'react-hook-form';

import {Typography} from '~/components';
import {useLocales, useTriggerOnChange} from '~/hooks';

import styles from './Input.module.scss';
import {InputProps} from './types';

const Input: React.FC<InputProps> = ({
  id,
  name,
  label,
  triggerOnChange,
  containerClassName,
  placeholder = '',
  autoFocus = false,
  className,
  type = 'text',
  showError = true,
  showLabel = true,
  ...rest
}) => {
  const {translatedTypo: translatedPlaceholder} = useLocales(placeholder);

  const {
    control,
    formState: {errors},
  } = useFormContext<Record<string, string>>();
  const {field} = useController({name, control});

  useTriggerOnChange(field.value, triggerOnChange);

  const errorMessage = errors[field.name]?.message;
  const wrapperClasses = classNames(styles.wrapper, className);

  return (
    <div className={containerClassName}>
      {showLabel && (
        <label htmlFor={id} className={styles.label}>
          <Typography tagName="p">{label}</Typography>
        </label>
      )}
      <div className={wrapperClasses}>
        <input
          {...rest}
          name={id}
          type={type}
          autoFocus={autoFocus}
          value={field.value || ''}
          onChange={field.onChange}
          className={styles.input}
          placeholder={translatedPlaceholder || ''}
        />
      </div>
      {showError && errorMessage && (
        <Typography tagName="p" className={styles.error_message}>
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};

export default Input;
