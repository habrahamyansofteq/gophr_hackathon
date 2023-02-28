import React from 'react';

import {Header} from '~/components';
import {useAppSelector} from '~/hooks';

import styles from './Page.module.scss';
import type {IPageProps} from './types';

const PageLayout: React.FC<IPageProps> = ({children}) => {
  const isDarkMode = useAppSelector((state) => state.app.isDarkMode);
  return (
    <>
      <Header />
      <div className={styles.container} style={{backgroundColor: isDarkMode ? '#333333' : 'white'}}>
        {children}
      </div>
    </>
  );
};

export default PageLayout;
