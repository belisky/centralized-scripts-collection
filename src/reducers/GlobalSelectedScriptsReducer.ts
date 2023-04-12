import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: {
  selected: { id: string; details: { courseName: string; code: string } }[];
} = { selected: [] };
// export {};
export const idSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    addIds: (state, action: PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.selected.includes(action.payload)) {
        state.selected.filter((select) => select.id !== action.payload.id);
      } else {
        state.selected.push(action.payload);
      }
    },
    removeIds: (state) => {
      state.selected = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addIds, removeIds } = idSlice.actions;
export const selectIds = (state: RootState) => state.id.ids;

export default idSlice.reducer;
// export {};
