import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export type HomeTemplateProps = {
  children?: React.ReactNode;
};

const BackgroundStyle = createGlobalStyle`
  body {
    background:#eaeaea;
  }
`;

function HomeTemplate({ children }: HomeTemplateProps) {
  return (
    <>
      <BackgroundStyle />
      <Block>{children}</Block>
    </>
  );
}

const Block = styled.div``;

export default HomeTemplate;
