import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ProductContext } from "../../contexts/productContext";
import * as sortBy from "../../utils/constant";
import "./style.scss";

Topbar.propTypes = {
  numberProduct: PropTypes.number,
  searchTime: PropTypes.number,
};

function Topbar(props) {
  const context = useContext(ProductContext);
  function handleSelect(event) {
    switch (event.target.value) {
      case sortBy.FEATURED:
        context.handleChangeOrder({ sort: "featured", order: "asc" });
        break;
      case sortBy.PRICE_ASC:
        context.handleChangeOrder({ sort: "price", order: "asc" });
        break;
      case sortBy.PRICE_DESC:
        context.handleChangeOrder({ sort: "price", order: "desc" });
        break;
      default:
    }
  }
  return (
    <section className="top-bar">
      <div className="result-count">
        <p>
          {props.numberProduct || 0} results found in {props.searchTime}ms
        </p>
      </div>
      <div className="sort-by">
        <label htmlFor="sort-by">Sort by</label>
        <select id="sort-by" name="sort-by" onChange={handleSelect}>
          <option value={sortBy.FEATURED}>Featured</option>
          <option value={sortBy.PRICE_ASC}>Price asc.</option>
          <option value={sortBy.PRICE_DESC}>Price desc.</option>
        </select>
      </div>
    </section>
  );
}

export default Topbar;
