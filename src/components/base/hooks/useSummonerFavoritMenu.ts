import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../modules';

export default function useSummonerFavoritMenu(defaultTab: string) {
  const dispatch = useDispatch();

  const visible = useSelector((state: RootState) => state.header.summonerMenu);
  const [tab, setTab] = useState(defaultTab);

  return { visible, tab };
}
