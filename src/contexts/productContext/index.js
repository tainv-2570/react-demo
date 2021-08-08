import React, { useReducer } from "react";
import * as actions from "../../store/actions/actions";
import * as filterReducer from "../../store/reducers/filterReducer";

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [stateFiltersReducer, dispatchFiltersReducer] = useReducer(
    filterReducer.filterReducer,
    filterReducer.initialState
  );

  const handleChangeCategory = (data) => {
    dispatchFiltersReducer(actions.changeCategory(data));
  };

  const handleChangeType = (data) => {
    dispatchFiltersReducer(actions.changeType(data));
  };

  const handleChangeBrand = (data) => {
    dispatchFiltersReducer(actions.changeBrand(data));
  };

  const handleChangeRating = (data) => {
    dispatchFiltersReducer(actions.changeRating(data));
  };

  const handleChangePrice = (data) => {
    dispatchFiltersReducer(actions.changePrice(data));
  };
  const handleChangeOrder = (data) => {
    dispatchFiltersReducer(actions.changeOrder(data));
  };

  const handleChangeProductName = (data) => {
    dispatchFiltersReducer(actions.changeProductName(data));
  };

  const handleChangePage = (data) => {
    dispatchFiltersReducer(actions.changePage(data));
  };

  const handleClearFilter = () => {
    dispatchFiltersReducer(actions.clearFilter());
  };

  return (
    <ProductContext.Provider
      value={{
        filters: stateFiltersReducer,
        handleChangeCategory: (categoryData) =>
          handleChangeCategory(categoryData),
        handleChangeType: (typeData) => handleChangeType(typeData),
        handleChangeBrand: (brandData) => handleChangeBrand(brandData),
        handleChangeRating: (ratingData) => handleChangeRating(ratingData),
        handleChangePrice: (priceData) => handleChangePrice(priceData),
        handleChangeOrder: (orderData) => handleChangeOrder(orderData),
        handleChangeProductName: (nameData) =>
          handleChangeProductName(nameData),
        handleChangePage: (pageData) => handleChangePage(pageData),
        handleClearFilter: () => handleClearFilter(),
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
