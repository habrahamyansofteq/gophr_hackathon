import DeleteIcon from '@mui/icons-material/Delete';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import {Typography} from '../Typography';
import styles from './PhotoUpload.module.scss';

const ImageChildren = ({onImageUpdate, onImageRemove, index, image, shouldRemove}: any) => {
  return (
    <div className={styles.imageWrapper}>
      <img src={image.dataURL} alt="" width="300" />
      <div className={styles.buttonWrapper}>
        <div role="button" onClick={() => onImageUpdate(index)}>
          <div className={styles.button}>
            <Typography color="white">Re-upload</Typography>
            <RestartAltIcon sx={{color: 'white'}} />
          </div>
        </div>

        {!shouldRemove && (
          <div role="button" onClick={() => onImageRemove(index)}>
            <div className={styles.button}>
              <Typography color="white">Delete</Typography>
              <DeleteIcon sx={{color: '#FF3333'}} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageChildren;
