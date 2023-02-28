import classNames from 'classnames';
import {isString} from 'lodash';
import React, {useEffect, useState} from 'react';

import {useLocales} from '~/hooks';
import {shadeColor} from '~/utils';

import Link from '../Link/Link.component';
import styles from './Button.module.scss';
import {ButtonProps, ButtonVariants, Coordinates} from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  color,
  variant,
  onClick,
  marginString,
  paddingString,
  disabled = false,
}) => {
  const typo = isString(children) ? children : '';
  const {translatedTypo} = useLocales(typo);

  const [coords, setCoords] = useState<Coordinates>({x: -1, y: -1});
  const [isRippling, setIsRippling] = useState<boolean>(false);

  const distances = {
    margin: marginString,
    padding: paddingString,
    backgroundColor: color,
    color: 'white',
  };

  const rippleStyles = {
    left: coords.x,
    top: coords.y,
    backgroundColor: color && shadeColor(color, -50),
  };

  const variants = classNames(styles.wrapper, {
    [styles.variant_text]: variant === ButtonVariants.Text,
    [styles.variant_outlined]: variant === ButtonVariants.Outlined,
    [styles.variant_contained]: variant === ButtonVariants.Contained,
  });

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 200);
    } else {
      setIsRippling(false);
    }
  }, [coords]);

  useEffect(() => {
    if (!isRippling) {
      setCoords({x: -1, y: -1});
    }
  }, [isRippling]);

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement> | any): void => {
    const rect = event.target.getBoundingClientRect();
    setCoords({x: event.clientX - rect.left, y: event.clientY - rect.top});
    onClick && onClick();
  };

  return (
    <button disabled={disabled} onClick={clickHandler} className={variants} style={distances}>
      <span className={styles.wrapper__content}>{translatedTypo || children}</span>
      {isRippling && <span className={styles.wrapper__ripple} style={rippleStyles} />}
    </button>
  );
};

export default Button;
