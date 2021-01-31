import { createSlice } from '@reduxjs/toolkit';

export interface HeaderState {
  summonerMenu: boolean;
}

const initialState: HeaderState = {
  summonerMenu: false,
};

const header = createSlice({
  name: 'header',
  initialState,
  reducers: {
    showSummonerMenu(state) {
      state.summonerMenu = true;
    },
    closeSummonerMenu(state) {
      state.summonerMenu = false;
    },
  },
});

export default header;
