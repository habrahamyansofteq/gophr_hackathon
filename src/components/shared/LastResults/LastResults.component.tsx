import {Key} from 'react';

import {Typography} from '../Typography';
import styles from './LastResults.module.scss';

const LastResults = ({data}: any) => {
  const renderItem = (
    item: {data: {detectedObject: string | undefined}},
    index: Key | null | undefined,
  ) => {
    return (
      <div key={index} className={styles.item}>
        <Typography color="#333333">{item.data.detectedObject}</Typography>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Typography color="lightgrey">Last Five Guesses</Typography>
      {data?.map(renderItem)}
    </div>
  );
};

export default LastResults;
