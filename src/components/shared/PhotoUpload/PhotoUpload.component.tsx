import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import React from 'react';
import ImageUploading, {ImageListType} from 'react-images-uploading';

import {Button, Typography} from '~/components';
import {useWindowDimensions} from '~/hooks';

import styles from './PhotoUpload.module.scss';

const PhotoUpload = () => {
  const [images, setImages] = React.useState([]);
  const {width} = useWindowDimensions();

  // 1024 is the default width of usual desktop
  const isDesktop = width && width > 1024;

  const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  const uploadText = isDesktop
    ? 'Click or Drop here to upload an image'
    : 'Press Here to upload an image';

  return (
    <div>
      <ImageUploading multiple={false} value={images} onChange={onChange} maxNumber={1}>
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
                  <div key={index} className={styles.imageWrapper}>
                    <img src={image.dataURL} alt="" width="300" />
                    <div className={styles.buttonWrapper}>
                      <div role="button" onClick={() => onImageUpdate(index)}>
                        <div className={styles.button}>
                          <Typography color="white">Re-upload</Typography>
                          <RestartAltIcon sx={{color: 'white'}} />
                        </div>
                      </div>

                      <div role="button" onClick={() => onImageRemove(index)}>
                        <div className={styles.button}>
                          <Typography color="white">Delete</Typography>
                          <DeleteIcon sx={{color: '#FF3333'}} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </>
        )}
      </ImageUploading>
      {images.length ? (
        <>
          <Button>Guess me</Button>
        </>
      ) : null}
    </div>
  );
};

export default PhotoUpload;
