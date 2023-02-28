import Image from 'next/image';
import React from 'react';

import {NextImageProps} from './types';

const NextImage: React.FC<NextImageProps> = ({src, alt = 'image', className, onClick, ...rest}) => (
  <div
    role="button"
    onClick={onClick}
    style={{position: 'relative'}}
    {...rest}
    className={className}>
    <Image layout="fill" src={src} alt={alt} />
  </div>
);

export default NextImage;
