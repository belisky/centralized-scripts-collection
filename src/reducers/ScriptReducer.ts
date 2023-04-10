// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

// import { useQuery, gql } from "@apollo/client";

// const GET_SCRIPTS = gql`
//   query {
//     getPapers {
//       courseCode
//       class
//     }
//   }
// `;
// export {};

// export const GetScriptsData = () => {
//   const { error, data, loading } = useQuery(GET_SCRIPTS);
// };

// // const todosReducer = createReducer([], (builder) => {
// //     builder
// //       .addCase('ADD_TODO', (state, action) => {
// //         // "mutate" the array by calling push()
// //         state.push(action.payload)
// //       })
// //       .addCase('TOGGLE_TODO', (state, action) => {
// //         const todo = state[action.payload.index]
// //         // "mutate" the object by overwriting a field
// //         todo.completed = !todo.completed
// //       })
// //       .addCase('REMOVE_TODO', (state, action) => {
// //         // Can still return an immutably-updated value if we want to
// //         return state.filter((todo, i) => i !== action.payload.index)
// //       })
// //   })

// export interface CounterState {
//   value: number;
// }

// const initialState: CounterState = {
//   value: 0,
// };

export {};
// export const scriptSlice = createSlice({
//   name: "script",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action: PayloadAction<number>) => {
//       state.value += action.payload;
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export default counterSlice.reducer;
