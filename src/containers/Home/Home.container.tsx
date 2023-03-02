import React, {useEffect, useState} from 'react';
import {ImageListType} from 'react-images-uploading';

import {LastResults, PageLayout, PhotoUpload, Typography} from '~/components';
import {useCloudDetector, useLastResults} from '~/hooks';

const HomeContainer: React.FC = () => {
  const [images, setImages] = useState<ImageListType | []>([]);

  const {data: lastResults, refetch, isLoading, isRefetching} = useLastResults();

  const {
    isLoading: imageLoading,
    mutateAsync,
    isSuccess: successfullyPublished,
  } = useCloudDetector(images?.[0]?.dataURL);

  useEffect(() => {
    if (successfullyPublished) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      refetch();
    }
  }, [successfullyPublished]);

  return (
    <PageLayout>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <PhotoUpload
          images={images}
          setImages={setImages}
          isLoading={imageLoading}
          uploadImage={mutateAsync}
        />
      </div>
      {isLoading || isRefetching ? (
        <div style={{marginTop: 5, marginLeft: 16}}>
          <Typography>Loading...</Typography>
        </div>
      ) : (
        <LastResults data={lastResults} />
      )}
    </PageLayout>
  );
};

export default HomeContainer;
