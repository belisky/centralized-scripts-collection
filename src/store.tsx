import { configureStore } from "@reduxjs/toolkit";
import scriptReducer from "./reducers/ScriptReducer";
import signatureReducer from "./reducers/GlobalSignReducer";
import envelopeReducer from "./reducers/GlobalEnvReducer";
import idReducer from "./reducers/GlobalIdsReducer";

export const store = configureStore({
  reducer: {
    scripts: scriptReducer,
    envelopes: envelopeReducer,
    signature: signatureReducer,
    id: idReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
