import React from 'react';
import styled from 'styled-components';
import FavoritOn from '../../static/images/icon-favorite-on.png';
import FavoritOff from '../../static/images/icon-favorite-off.png';
import DeleteIcon from '../../static/images/icon-history-delete.png';

export type SummonerItemProps = {
  favorited?: boolean;
  userName: string;
};

function SummonerItem({ userName, favorited }: SummonerItemProps) {
  return (
    <Block>
      <Summoner>
        <span>{userName}</span>
        <Right>
          <FavoritWrapper>
            <img src={favorited ? FavoritOn : FavoritOff} alt="favorite-icon" />
          </FavoritWrapper>
          <DeleteWrapper>
            <img src={DeleteIcon} alt="delete" />
          </DeleteWrapper>
        </Right>
      </Summoner>
    </Block>
  );
}

const Block = styled.div`
  padding-left: 1.25rem;
  padding-right: 0.9375rem;

  span {
    font-size: 0.75rem;
    color: #666666;
  }
  & + & {
    margin-top: 0.9375rem;
  }
`;

const Summoner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const FavoritWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DeleteWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
`;

export default SummonerItem;
