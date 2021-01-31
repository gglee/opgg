import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'throttle-debounce';
import header from '../../../modules/header';
import { RootState } from '../../../modules';

export default function useSearch(defaultValue: string) {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const summonerMenu = useSelector((state: RootState) => state.header.summonerMenu);
  const [input, setInput] = useState(defaultValue);

  const onShowMenu = useCallback(() => {
    dispatch(header.actions.showSummonerMenu());
  }, [dispatch]);

  const onCloseMenu = useCallback(() => {
    dispatch(header.actions.closeSummonerMenu());
  }, [dispatch]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  useEffect(() => {
    const focused = document.activeElement;

    if (inputRef.current === focused && input) {
      onCloseMenu();
    }

    if (inputRef.current === focused && !summonerMenu && !input) {
      onShowMenu();
    }
  }, [input, summonerMenu, onCloseMenu, onShowMenu]);

  return { onShowMenu, onCloseMenu, onChange, input, inputRef };
}
