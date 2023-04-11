import { configureStore } from "@reduxjs/toolkit";
import scriptReducer from "./reducers/ScriptReducer";
import envelopeReducer from "./reducers/GlobalEnvReducer";

export const store = configureStore({
  reducer: {
    scripts: scriptReducer,
    envelopes: envelopeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
