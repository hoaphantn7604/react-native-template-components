import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IRootState {
  locale: string;
  loading: boolean;
  data: any[];
}

const initialState: IRootState = {
  locale: 'en',
  loading: false,
  data: [],
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeLanguageAction: (
      state: IRootState,
      action: PayloadAction<string>,
    ) => {
      state.locale = action.payload;
    },
    todoRequestAction: (state: IRootState) => {
      state.loading = true;
    },
    todoSuccessRequestAction: (
      state: IRootState,
      action: PayloadAction<any[]>,
    ) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export const {
  changeLanguageAction,
  todoRequestAction,
  todoSuccessRequestAction,
} = mainSlice.actions;
export const selectMain = (state: { main: any }) => state.main;
export default mainSlice.reducer;
