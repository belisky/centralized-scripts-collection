import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../lib/types";

// // import { useQuery, gql } from "@apollo/client";

// // const GET_SCRIPTS = gql`
// //   query {
// //     getPapers {
// //       courseCode
// //       class
// //     }
// //   }
// // `;
// // export {};

// // export const GetScriptsData = () => {
// //   const { error, data, loading } = useQuery(GET_SCRIPTS);
// // };

// // // const todosReducer = createReducer([], (builder) => {
// // //     builder
// // //       .addCase('ADD_TODO', (state, action) => {
// // //         // "mutate" the array by calling push()
// // //         state.push(action.payload)
// // //       })
// // //       .addCase('TOGGLE_TODO', (state, action) => {
// // //         const todo = state[action.payload.index]
// // //         // "mutate" the object by overwriting a field
// // //         todo.completed = !todo.completed
// // //       })
// // //       .addCase('REMOVE_TODO', (state, action) => {
// // //         // Can still return an immutably-updated value if we want to
// // //         return state.filter((todo, i) => i !== action.payload.index)
// // //       })
// // //   })

// // export interface CounterState {
// //   value: number;
// // }

const initialState: IData[] = [];
// export {};
export const scriptSlice = createSlice({
  name: "script",
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
