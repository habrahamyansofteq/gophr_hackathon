import classNames from 'classnames';

import {useAppSelector, useLocales} from '~/hooks';

import {TypographyProps} from './types';
import styles from './Typography.module.scss';

const Typography = ({
  capitalize,
  children = '',
  tagName = 'span',
  variant,
  type,
  align,
  className = '',
  color = undefined,
  ...rest
}: TypographyProps): JSX.Element => {
  const isDarkMode = useAppSelector((state) => state.app.isDarkMode);

  const {translatedTypo} = useLocales(children);

  const Tag = tagName;
  const alignKey = align && `typography__align_${align}`;
  const fontKey = variant && type && `typography__${variant}_${type}`;

  const classes = classNames(alignKey, fontKey, {
    [className]: className,
    [styles.container_capitalized]: capitalize,
  });

  return (
    <Tag
      {...rest}
      className={classes.length ? classes : undefined}
      style={{color: color ? color : isDarkMode ? 'white' : 'black'}}>
      {translatedTypo || children}
    </Tag>
  );
};

export default Typography;
