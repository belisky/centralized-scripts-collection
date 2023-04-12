import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../lib/types";

const initialState: IData[] = [];
// export {};
export const scriptSlice = createSlice({
  name: "scripts",
  initialState: { scripts: [] },
  reducers: {
    updateScripts: (state, action: PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.scripts = action.payload;
    },
    updateEnvelopeNum: (
      state,
      action: PayloadAction<{ index: number; numOfEnv: number }>
    ) => {
      const paper: IData = state.scripts[action.payload.index];
      // "mutate" the object by overwriting a field
      paper.numOfEnvelopes = action.payload.numOfEnv;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateEnvelopeNum, updateScripts } = scriptSlice.actions;

export default scriptSlice.reducer;
// export {};
