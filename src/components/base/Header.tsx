import React from 'react';
import styled, { css } from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import HomeReponsive from '../base/HomeReponsive';
import SearchInput from '../search/SearchInput';
import HeaderSummonerFavoritMenu from './HeaderSummonerFavoritMenu';

export type HeaderProps = {};

function Header(props: HeaderProps) {
  const params = useParams<{ mode: string }>();
  return (
    <Block>
      <Inner>
        <SearchInput initial="" />
        <HeaderSummonerFavoritMenu />
      </Inner>
    </Block>
  );
}

const Block = styled.div`
  height: 6.0625rem;
  background: #1ea1f7;
`;

const Inner = styled(HomeReponsive)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default Header;
