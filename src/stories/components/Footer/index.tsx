import React, { FC, PropsWithChildren, useMemo, Children } from 'react';

import Grid from '@mui/material/Grid';

import * as S from './styles';

export const Footer: FC<PropsWithChildren> = ({ children }) => {
  const renderNavChildren = useMemo(() => {
    return Children.toArray(children).slice(0, 4);
  }, [children]);

  const renderFlagsChildren = useMemo(() => {
    return Children.toArray(children).slice(4, 8);
  }, [children]);

  const renderDisclaimerChildren = useMemo(() => {
    return Children.toArray(children).slice(8);
  }, [children]);

  return (
    <S.Container>
      <S.LinkWrapper container>
        {renderNavChildren}
        {renderFlagsChildren}
      </S.LinkWrapper>

      <Grid item>{renderDisclaimerChildren}</Grid>
    </S.Container>
  );
};
