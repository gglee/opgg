import React from 'react';
import styled from 'styled-components';
import { ReactComponent as GGIcon } from '../../static/svg/icon-gg.svg';
import useSearch from './hooks/useSearch';

export type SearchInputProps = {
  initial: string;
};

function SearchInput({ initial }: SearchInputProps) {
  const { onShowMenu, onCloseMenu, input, onChange, inputRef } = useSearch(initial);

  return (
    <Block>
      <input
        placeholder="소환사명,챔피언…"
        ref={inputRef}
        onFocus={onShowMenu}
        onBlur={onCloseMenu}
        onChange={onChange}
        value={input}
      />
      <GGIcon />
    </Block>
  );
}

const Block = styled.div`
  width: 16.25rem;
  display: flex;
  align-items: center;
  background: white;
  margin-top: 2.5625rem;
  border-radius: 0.125rem;
  padding: 0.5625rem 0.75rem 0.5rem 0.875rem;
  cursor: text;
  input {
    height: 0.9375rem;
    width: 100%;
    font-size: 0.75rem;
    color: #727272;
    border: none;
    outline: 0;
  }
  svg {
    width: 2.375rem;
    height: 0.875rem;
  }
`;

export default SearchInput;
