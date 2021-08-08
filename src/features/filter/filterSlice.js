import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  _page: 1,
  _limit: 16,
  _sort: "featured",
  _order: "desc",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state._page = 1;
      state["hierarchicalCategories.lvl0_like"] = action.payload.categoryLvl0;
      state["hierarchicalCategories.lvl1_like"] = action.payload.categoryLvl1;
      state["hierarchicalCategories.lvl2_like"] = action.payload.categoryLvl2;
    },
    changeType: (state, action) => {
      state._page = 1;
      state.type = action.payload.type;
    },
    changeBrand: (state, action) => {
      state._page = 1;
      state.brand = action.payload.brand;
    },
    changeRating: (state, action) => {
      state._page = 1;
      state.rating_gte = action.payload.rating_gte;
    },
    changePrice: (state, action) => {
      state._page = 1;
      state.price_gte = action.payload.price_gte;
      state.price_lte = action.payload.price_lte;
    },
    changeOrder: (state, action) => {
      state._page = 1;
      state._sort = action.payload.sort;
      state._order = action.payload.order;
    },
    changeProductName: (state, action) => {
      state._page = 1;
      state.name_like = action.payload.name;
    },
    changePage: (state, action) => {
      state._page = action.payload.page;
    },
    clearFilter: () => initialState,
  },
});
export const {
  changeCategory,
  changeBrand,
  changeOrder,
  changePage,
  changePrice,
  changeProductName,
  changeRating,
  changeType,
  clearFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
