import React, { useEffect, useState } from "react";
import Header from "../../layouts/header";
import Sidebar from "../../layouts/sidebar";
import Main from "../../layouts/main";
import InputSearch from "../../components/input";
import Topbar from "../../components/topbar";
import Product from "../../components/product";
import Paging from "../../components/paging";
import HierarchicalCategory from "../../components/hierarchicalCategory";
import CheckboxList from "../../components/checkboxList";
import Ratings from "../../components/ratings";
import Price from "../../components/price";
import { LIST_TYPE, LIST_BRAND } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../../features/product/productAction";
import "./style.scss";
import {
  changeBrand,
  changeProductName,
  changeType,
  clearFilter,
} from "../../features/filter/filterSlice";

function Products() {
  const dispatch = useDispatch();
  const { data, searchTime, total } = useSelector((state) => state.product);
  const filter = useSelector((state) => state.filter);
  const [isClear, setIsClear] = useState(false);

  useEffect(() => {
    dispatch(getProductsAction(filter));
    window.scrollTo(0, 0);
    if (
      filter["hierarchicalCategories.lvl0_like"] ||
      filter.type ||
      filter.brand ||
      filter.rating_gte ||
      filter.price_gte ||
      filter.price_lte
    ) {
      setIsClear(true);
    } else {
      setIsClear(false);
    }
  }, [dispatch, filter]);

  function handleChangeName(newName) {
    dispatch(changeProductName({ name: newName }));
  }

  function handleChangeType(newType) {
    dispatch(changeType({ type: newType }));
  }

  function handleChangeBrand(newBrand) {
    dispatch(changeBrand({ brand: newBrand }));
  }

  function handleclearFilter() {
    dispatch(clearFilter());
    setIsClear(false);
  }

  return (
    <>
      <Header>
        <InputSearch
          id="search-product"
          placeholder="Search a product"
          class="btn--right btn--golden"
          handleChangeInput={handleChangeName}
          autofocus={true}
        />
      </Header>
      <div className="content">
        <Sidebar>
          {isClear && (
            <button onClick={handleclearFilter} className="clear-filter">
              <i className="fa fa-eraser"></i> Clear all filters
            </button>
          )}
          <section>
            <h2 className="sidebar__title">Show result for </h2>
            {total > 0 && <HierarchicalCategory />}
          </section>
          <section>
            <h2 className="sidebar__title">Refine by</h2>
            {total > 0 && (
              <>
                <CheckboxList
                  title="Type"
                  options={LIST_TYPE}
                  checkedList={filter.type || []}
                  handleChangeOption={handleChangeType}
                />
                <CheckboxList
                  title="Brand"
                  filter={true}
                  class="btn--left btn--white"
                  id="brand-search"
                  placeholder="Search for other..."
                  options={LIST_BRAND}
                  checkedList={filter.brand || []}
                  handleChangeOption={handleChangeBrand}
                />
                <Ratings />
                <Price />
              </>
            )}
          </section>
        </Sidebar>
        <Main>
          <Topbar numberProduct={total} searchTime={searchTime} />
          <div className="product-grid">
            {data?.map((product, index) => (
              <Product
                key={index}
                name={product.name}
                rating={product.rating}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
          {total === 0 && (
            <h5 className="not-found-notification">
              No results found matching .
            </h5>
          )}
          {total > 0 && <Paging totalItem={total} />}
        </Main>
      </div>
    </>
  );
}

export default Products;
