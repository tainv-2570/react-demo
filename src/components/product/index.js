import React, { useContext } from "react";
import PropTypes from "prop-types";
import Rating from "../rating";
import { ProductContext } from "../../contexts/productContext";
import markerName from "../../utils/markerName";
import "./style.scss";

Product.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
};

function Product(props) {
  const context = useContext(ProductContext);
  const productNames = markerName(props.name, context.filters?.name_like);
  // namelike ? markname : name
  return (
    <div className="product-card">
      <div className="product__image">
        <img src={props.image} alt="product" loading="lazy" />
      </div>
      <div className="product__name">
        <h4>
          {productNames.map((str, index) => (
            <span key={index}>{str}</span>
          ))}
        </h4>
      </div>
      <div className="product__rating">
        <Rating rate={props.rating} />
      </div>
      <div className="product__price">
        <span>$ {props.price}</span>
      </div>
    </div>
  );
}

export default Product;
