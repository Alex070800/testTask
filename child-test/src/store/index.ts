import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { progressReducer } from "./progress-test/reducer";

export const rootReducer = combineReducers({
  progressReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const initialState: Partial<RootState> = {};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export const typedDispatch = store.dispatch;
