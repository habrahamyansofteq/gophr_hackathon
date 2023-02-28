import React from 'react';

import {PageLayout, PhotoUpload} from '~/components';

const HomeContainer: React.FC = () => {
  return (
    <PageLayout>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <PhotoUpload />
      </div>
    </PageLayout>
  );
};

export default HomeContainer;
