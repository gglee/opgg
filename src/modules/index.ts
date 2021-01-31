import { combineReducers } from '@reduxjs/toolkit';
import header, { HeaderState } from './header';

export type RootState = { header: HeaderState };

const rootReducer = combineReducers({
  header: header.reducer,
});

export default rootReducer;
