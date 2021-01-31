import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../../lib/styles/media';

export type HomeReponsiveProps = {
  className?: string;
  children: React.ReactNode;
};

function HomeReponsive({ className, children }: HomeReponsiveProps) {
  return <Block className={className}>{children}</Block>;
}

const Block = styled.div`
  width: 1300px;
  margin-left: auto;
  margin-right: auto;
  ${mediaQuery(1440)} {
    width: 1024px;
  }
`;

export default HomeReponsive;
