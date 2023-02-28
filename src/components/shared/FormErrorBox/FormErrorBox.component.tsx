import React from 'react';

import {BlockIcon} from '~/assets';

import styles from './FormErrorBox.module.scss';
import {FormErrorBoxProps} from './types';

const FormErrorBox: React.FC<FormErrorBoxProps> = ({errors}) => (
  <div className={styles.wrapper}>
    <BlockIcon className={styles.wrapper__icon} />
    <div>{errors}</div>
  </div>
);

export default FormErrorBox;
