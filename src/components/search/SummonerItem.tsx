import React from 'react';
import styled from 'styled-components';

export type SummonerItemProps = {
  favorited: boolean;
  userName: string;
};

function SummonerItem({ userName, favorited }: SummonerItemProps) {
  return (
    <Block>
      <Summoner>
        <span>{userName}</span>
        {/* {favorited? } */}
      </Summoner>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  padding: 0.25rem;
`;

const Summoner = styled.div``;

export default SummonerItem;
