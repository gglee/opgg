import React from 'react';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import HorizontalTab from '../common/HorizontalTab';
import useSummonerFavoritMenu from './hooks/useSummonerFavoritMenu';
import RecentSummonerList from '../search/RecentSummonerList';

export type HeaderSummonerFavoritMenuProps = {};

function HeaderSummonerFavoritMenu(props: HeaderSummonerFavoritMenuProps) {
  const { visible, tab } = useSummonerFavoritMenu('recent');

  if (!visible) return null;

  return (
    <Block>
      <HorizontalTab activeTab={tab}>
        <HorizontalTab.TabItem name="recent" text="최근검색" />
        <HorizontalTab.TabItem name="favorit" text="즐겨찾기" />
      </HorizontalTab>
      <RecentSummonerList />
    </Block>
  );
}

const Block = styled.div`
  position: absolute;
  width: 16.25rem;
  top: 5.5rem;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
  border-radius: 0.125rem;
`;

export default HeaderSummonerFavoritMenu;
