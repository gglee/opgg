import React from 'react';
import styled from 'styled-components';
import SummonerItem from './SummonerItem';

export type RecentSummonerListProps = {};

function RecentSummonerList(props: RecentSummonerListProps) {
  return (
    <Block>
      <SummonerItem userName="MIDHKING" favorited />
      <SummonerItem userName="강찬밥" />
    </Block>
  );
}

const Block = styled.div`
  background: white;
  padding: 1.25rem 0;
`;

export default RecentSummonerList;
