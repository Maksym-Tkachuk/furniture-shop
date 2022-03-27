import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./reducers/ProductSlice";

const rootReducers = combineReducers({
    ProductReducer:ProductSlice
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};


export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']