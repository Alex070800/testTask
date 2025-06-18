import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { answerReducer } from "./answers-test/reducer";

export const rootReducer = combineReducers({
  answerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const initialState: Partial<RootState> = {};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // отключаем проверку сериализуемости
    }),
});

export const typedDispatch = store.dispatch;
