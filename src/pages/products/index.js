import React, { useContext, useEffect, useState } from "react";
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
import { ProductContext } from "../../contexts/productContext";
import productApi from "../../api/productApi";
import { LIST_TYPE, LIST_BRAND } from "../../utils/constant";
import "./style.scss";

function Products() {
  const context = useContext(ProductContext);
  const [productData, setProductData] = useState({});
  const [searchTime, setSearchTime] = useState(0);
  const [filterChanged, setFilterChanged] = useState(false);
  useEffect(() => {
    try {
      let startAt = new Date().getTime();
      productApi.getAll(context.filters).then((response) => {
        setSearchTime(new Date().getTime() - startAt);
        setProductData(response);
        window.scrollTo(0, 0);
      });
    } catch (error) {
      console.log(error);
    }

    if (
      context.filters["hierarchicalCategories.lvl0_like"] ||
      context.filters.type ||
      context.filters.brand ||
      context.filters.rating_gte ||
      context.filters.price_gte ||
      context.filters.price_lte
    ) {
      setFilterChanged(true);
    } else {
      setFilterChanged(false);
    }
  }, [context.filters]);

  function handleChangeName(newName) {
    context.handleChangeProductName({ name: newName });
  }

  function handleChangeType(newType) {
    context.handleChangeType({ type: newType });
  }

  function handleChangeBrand(newBrand) {
    context.handleChangeBrand({ brand: newBrand });
  }

  function clearFilter() {
    context.handleClearFilter();
    setFilterChanged(false);
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
          {filterChanged && (
            <button onClick={clearFilter} className="clear-filter">
              <i className="fa fa-eraser"></i> Clear all filters
            </button>
          )}
          <section>
            <h2 className="sidebar__title">Show result for </h2>
            {productData.total > 0 && <HierarchicalCategory />}
          </section>
          <section>
            <h2 className="sidebar__title">Refine by</h2>
            {productData.total > 0 && (
              <>
                <CheckboxList
                  title="Type"
                  options={LIST_TYPE}
                  checkedList={context.filters.type || []}
                  handleChangeOption={handleChangeType}
                />
                <CheckboxList
                  title="Brand"
                  filter={true}
                  class="btn--left btn--white"
                  id="brand-search"
                  placeholder="Search for other..."
                  options={LIST_BRAND}
                  checkedList={context.filters.brand || []}
                  handleChangeOption={handleChangeBrand}
                />
                <Ratings />
                <Price />
              </>
            )}
          </section>
        </Sidebar>
        <Main>
          <Topbar numberProduct={productData.total} searchTime={searchTime} />
          <div className="product-grid">
            {productData.data?.map((product, index) => (
              <Product
                key={index}
                name={product.name}
                rating={product.rating}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
          {productData.total === 0 && (
            <h5 className="not-found-notification">
              No results found matching .
            </h5>
          )}
          {productData.total > 0 && <Paging totalItem={productData.total} />}
        </Main>
      </div>
    </>
  );
}

export default Products;
