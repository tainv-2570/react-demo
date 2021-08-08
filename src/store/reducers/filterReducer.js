import * as actionTypes from "../actions/actionTypes";

export const initialState = {
  _page: 1,
  _limit: 12,
  _sort: "featured",
  _order: "desc",
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return {
        ...state,
        _page: 1,
        "hierarchicalCategories.lvl0_like": action.categoryLvl0,
        "hierarchicalCategories.lvl1_like": action.categoryLvl1,
        "hierarchicalCategories.lvl2_like": action.categoryLvl2,
      };
    case actionTypes.CHANGE_TYPE:
      return {
        ...state,
        _page: 1,
        type: action.productType,
      };
    case actionTypes.CHANGE_BRAND:
      return {
        ...state,
        _page: 1,
        brand: action.brand,
      };
    case actionTypes.CHANGE_RATING:
      return {
        ...state,
        _page: 1,
        rating_gte: action.rating_gte,
      };
    case actionTypes.CHANGE_PRICE:
      return {
        ...state,
        _page: 1,
        price_gte: action.price_gte,
        price_lte: action.price_lte,
      };
    case actionTypes.CHANGE_ORDER:
      return {
        ...state,
        _page: 1,
        _sort: action.sort,
        _order: action.order,
      };
    case actionTypes.CHANGE_PRODUCT_NAME:
      return {
        ...state,
        _page: 1,
        name_like: action.name,
      };
    case actionTypes.CHANGE_PAGE:
      return {
        ...state,
        _page: action.page,
      };
    case actionTypes.CLEAR_FILTER:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
