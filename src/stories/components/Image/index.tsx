import React, { FC, ReactElement, useCallback, useMemo } from 'react';

import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import Image from 'next/image';
import Link from 'next/link';

import { ImageProps } from './types';

export const ImageComponent: FC<ImageProps> = ({
  alt,
  src,
  height,
  width,
  redirectLink
}): ReactElement => {
  const [isImageBroken, setIsImageBroken] = React.useState(false);

  const realWidth = useMemo(() => {
    if (typeof width !== 'number') return;
    return width;
  }, [width]);

  const realHeight = useMemo(() => {
    if (typeof height !== 'number') return;
    return height;
  }, [height]);

  const onError = useCallback(() => {
    setIsImageBroken(true);
  }, []);

  const ImageShow = useMemo(() => {
    return isImageBroken ? (
      <BrokenImageIcon fontSize="medium" />
    ) : (
      <Image
        src={src}
        alt={alt}
        width={realWidth}
        height={realHeight}
        onError={onError}
        loading="lazy"
      />
    );
  }, [isImageBroken, src, alt, realWidth, realHeight, onError]);

  const ImageContainer = useMemo(() => {
    return redirectLink != null ? <Link href={redirectLink}>{ImageShow}</Link> : ImageShow;
  }, [ImageShow, redirectLink]);

  return <React.Fragment>{ImageContainer}</React.Fragment>;
};
