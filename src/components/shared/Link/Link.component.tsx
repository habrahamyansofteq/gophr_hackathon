import classNames from 'classnames';
import NextLink from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';

import {useLocales} from '~/hooks';

import styles from './Link.module.scss';
import {LinkProps} from './types';

const Link = ({
  to,
  blank,
  onClick,
  children,
  disabled,
  className,
  queryValue,
  anchorProps,
  queryKey = '',
  activeClassName = '',
  ...linkProps
}: LinkProps): JSX.Element => {
  const {asPath, query} = useRouter();
  const {translatedTypo, locale} = useLocales(children);

  const anchorModifiedProps = blank
    ? {
        ...anchorProps,
        target: '_blank',
        rel: 'noreferrer',
      }
    : anchorProps;
  const activeClasses = query[queryKey] ? query[queryKey] === queryValue : asPath.includes(to);

  const anchorClasses = classNames(className, {
    [styles.container_disabled]: disabled,
    [activeClassName]: activeClasses && activeClassName,
  });

  return (
    <NextLink {...linkProps} href={to} locale={locale}>
      <a role="button" onClick={onClick} className={anchorClasses} {...anchorModifiedProps}>
        {translatedTypo}
      </a>
    </NextLink>
  );
};

export default Link;
