import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: {
  ids: {
    id: string;
  }[];
} = {
  ids: [],
};
// export {};
export const idSlice = createSlice({
  name: "ids",
  initialState,
  reducers: {
    addIds: (state, action: PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.ids.includes(action.payload)) {
        state.ids = state.ids.filter((id) => id !== action.payload);
      } else {
        state.ids.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addIds } = idSlice.actions;
export const selectIds = (state: RootState) => state.id.ids;

export default idSlice.reducer;
// export {};
