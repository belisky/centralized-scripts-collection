import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: { envelopes: { id: string; numOfEnv: number }[] } = {
  envelopes: [],
};
// export {};
export const envelopeSlice = createSlice({
  name: "envelopes",
  initialState,
  reducers: {
    addEnvelope: (state, action: PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.envelopes.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addEnvelope } = envelopeSlice.actions;
export const selectEnvelopes = (state: RootState) => state.envelopes.envelopes;

export default envelopeSlice.reducer;
// export {};
