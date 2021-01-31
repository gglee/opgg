import React from 'react';
import styled from 'styled-components';

export type HomeLayoutProps = {
  main: React.ReactNode;
};

function HomeLayout({ main }: HomeLayoutProps) {
  return (
    <Block>
      <Main>{main}</Main>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
`;
const Main = styled.main`
  flex: 1;
`;

export default HomeLayout;
