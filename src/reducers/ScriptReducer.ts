import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IScript {
  _id: string;
  courseName: string;
  courseCode: string;
  collectedBy: string;
  deliveredBy: string;
  signatureUrl: string;
  numOfEnvelopes: string;
  collectedDate: string;
  class: string;
  collected: string;
  date: Date;
}

interface IInitialState {
  scripts: IScript[];
}

const initialState: IInitialState = { scripts: [] };
// export {};
export const scriptSlice = createSlice({
  name: "scripts",
  initialState,
  reducers: {
    updateScripts: (state, action: PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.scripts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateScripts } = scriptSlice.actions;

export default scriptSlice.reducer;
// export {};
