import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../../features/product/productSlice";
import filterReducer from "../../features/filter/filterSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    product: productReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
