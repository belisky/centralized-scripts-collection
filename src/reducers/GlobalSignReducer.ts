import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: {
  signature: {
    id: string;
    deliveredBy: string;
    collectedBy: string;
    signatureUrl: string;
    collectedDate: string;
  }[];
} = {
  signature: [],
};
// export {};
export const signatureSlice = createSlice({
  name: "signature",
  initialState,
  reducers: {
    addSigned: (state, action: PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.signature.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSigned } = signatureSlice.actions;
export const selectSignatures = (state: RootState) => state.signature.signature;

export default signatureSlice.reducer;
// export {};
