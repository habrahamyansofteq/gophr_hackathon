import FileUploadIcon from '@mui/icons-material/FileUpload';
import React from 'react';
import ImageUploading from 'react-images-uploading';

import {ActivityIndicator, Button, Typography} from '~/components';
import {useWindowDimensions} from '~/hooks';

import ImageChildren from './ImageChildren.component';
import styles from './PhotoUpload.module.scss';

const PhotoUpload = ({setImages, images, isLoading, uploadImage}: any) => {
  const {width} = useWindowDimensions();

  // 1024 is the default width of usual desktop
  const isDesktop = width && width > 1024;

  const uploadText = isDesktop
    ? 'Click or Drop here to upload an image'
    : 'Press Here to upload an image';

  return (
    <div className={styles.container}>
      <ImageUploading
        multiple={false}
        value={images}
        onChange={(imageList) => setImages(imageList)}
        maxNumber={1}>
        {({imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps}): any => (
          <>
            {!imageList.length && (
              <div
                role="button"
                className={styles.imageDropPlacement}
                onClick={onImageUpload}
                {...dragProps}>
                <Typography color="#333333">{isDragging ? 'Time To Drop' : uploadText}</Typography>
                {!isDragging && <FileUploadIcon />}
              </div>
            )}
            {imageList.length
              ? imageList.map((image, index) => (
                  <React.Fragment key={index}>
                    <ImageChildren
                      onImageUpdate={onImageUpdate}
                      onImageRemove={onImageRemove}
                      index={index}
                      image={image}
                    />
                  </React.Fragment>
                ))
              : null}
          </>
        )}
      </ImageUploading>
      {images.length ? (
        <div className={styles.contentWrapper}>
          <Button color="#3865b3" paddingString="15px" onClick={uploadImage}>
            <div className={styles.buttonContent}>
              <p className={styles.uploadButtonText}>{isLoading ? 'Loading' : 'Submit'}</p>
              {isLoading && <ActivityIndicator />}
            </div>
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default PhotoUpload;
