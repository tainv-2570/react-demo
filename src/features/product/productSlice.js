import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  total: 0,
  load: false,
  error: null,
  searchTime: 0,
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    FETCH_LIST_REQUEST: (state) => {
      state.load = true;
    },
    FETCH_LIST_SUCCESS: (state, action) => {
      state.load = false;
      state.data = action.payload.data;
      state.total = action.payload.total;
      state.searchTime = action.payload.searchTime;
    },
    FETCH_LIST_FAILURE: (state, action) => {
      state.load = false;
      state.error = action.payload.message;
    },
  },
});
export const { FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_FAILURE } =
  productReducer.actions;
export default productReducer.reducer;
