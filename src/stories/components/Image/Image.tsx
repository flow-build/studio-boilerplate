import React, { FC, ReactElement, useCallback, useMemo } from 'react';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import { ImageProps } from './types';
import Image from 'next/image';
import Link from 'next/link';

export const ImageComponent: FC<ImageProps> = ({
  alt,
  src,
  height,
  width,
  redirectLink
}): ReactElement => {
  const [isImageBroken, setIsImageBroken] = React.useState(false);

  const realWidth = useMemo(() => {
    if (typeof width === 'number') return width;
    return undefined;
  }, [width]);

  const realHeight = useMemo(() => {
    if (typeof height === 'number') return height;
    return undefined;
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
