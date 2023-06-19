import { breadcrumbItems, descriptionMock, miniCards } from '__mocks__/postsPage';
import { Breadcrumbs, ImageComponent } from 'stories/components';
import { Markdown } from 'stories/components/Markdown';
import { MiniCardsCarousel } from 'stories/components/MiniCardsCarousel';
import { RecentPosts } from 'stories/components/RecentPosts';
import * as S from 'styles/postsPageStyles';
import { getCurrencyIntegerValue } from 'utils';

export default function Posts() {
  return (
    <S.Main>
      <Breadcrumbs items={breadcrumbItems} />
      <S.ContentWrapper>
        <S.Wrapper>
          <S.TitleWrapper>
            <S.Title>Nome da Coisa</S.Title>
          </S.TitleWrapper>
          <ImageComponent
            src={'https://img.logoipsum.com/284.svg'}
            alt={'Lorem Ipsum Image'}
            width={536}
            height={354}
          />
          <Markdown children={descriptionMock} />
        </S.Wrapper>
        <S.SideRight>
          <S.Box>
            <RecentPosts
              title={'Recent Posts'}
              price={{
                value: getCurrencyIntegerValue(1234),
                description: 'p/ período'
              }}
              description={'Adicione uma descrição aqui'}
            />
          </S.Box>

          <MiniCardsCarousel miniCards={miniCards} arraySize={3} />
        </S.SideRight>
      </S.ContentWrapper>
    </S.Main>
  );
}
