import React, { FC, ReactElement, useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import * as S from './styles';
import { ImageProps } from './types';
import { Logger } from 'utils';
import Image from 'next/image';

export const ImageComponent: FC<ImageProps> = ({
  alt,
  src,
  height,
  width,
  redirectLink
}): ReactElement => {
  const [isImageBroken, setIsImageBroken] = React.useState(false);
  const router = useRouter();

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

  const handleRedirect = useCallback(
    async (link: string) => {
      if (link !== undefined) {
        try {
          await router.push(link);
        } catch (error) {
          Logger.error('Erro ao redirecionar para a página:', error);
        }
      }
    },
    [router]
  );

  const handleButtonClick = useCallback(() => {
    if (redirectLink !== undefined) {
      handleRedirect(redirectLink).catch((error) => {
        Logger.error('Erro ao redirecionar para a página:', error);
      });
    }
  }, [handleRedirect, redirectLink]);

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
    return redirectLink != null ? (
      <S.ButtonLink onClick={handleButtonClick}>{ImageShow}</S.ButtonLink>
    ) : (
      ImageShow
    );
  }, [ImageShow, handleButtonClick, redirectLink]);

  return <React.Fragment>{ImageContainer}</React.Fragment>;
};
