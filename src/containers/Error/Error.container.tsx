import React from 'react';

import {Link, Typography} from '~/components';
import {Routes} from '~/constants';

import styles from './Error.module.scss';

const ErrorContainer: React.FC = () => (
  <div className={styles.container}>
    <h1 className={styles.container__title}>404</h1>
    <Typography tagName="h4" className={styles.container__text}>
      pageNotFound
    </Typography>
    <Link to={Routes.Home} className={styles.container__btn}>
      home
    </Link>
  </div>
);

export default ErrorContainer;
