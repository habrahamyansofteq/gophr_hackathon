import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import classNames from 'classnames';

import {Typography} from '~/components';
import {useAppDispatch, useAppSelector} from '~/hooks';
import {setDarkMode} from '~/redux/slices/app/slice';

import styles from './Header.module.scss';

const Header = () => {
  const isDarkMode = useAppSelector((state) => state.app.isDarkMode);
  const dispatch = useAppDispatch();

  const setAppMode = () => {
    dispatch(setDarkMode(!isDarkMode));
  };

  const mode = (
    <div onClick={setAppMode}>
      <>
        {isDarkMode ? (
          <LightModeIcon color="primary" sx={{color: 'white'}} fontSize="large" />
        ) : (
          <DarkModeIcon fontSize="large" sx={{color: '#333333'}} />
        )}
      </>
    </div>
  );

  const headerStyle = classNames(
    isDarkMode ? styles.headerDark : styles.headerLight,
    styles.header,
  );

  return (
    <div className={headerStyle}>
      <Typography className={styles.title}>GO PHR HACKATHON</Typography>
      {mode}
    </div>
  );
};

export default Header;
