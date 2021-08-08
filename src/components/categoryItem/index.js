import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ProductContext } from "../../contexts/productContext";
import "./style.scss";

CategoryItem.propTypes = {
  category: PropTypes.object,
  handleClick: PropTypes.func,
  active: PropTypes.bool,
  level: PropTypes.number,
};

function CategoryItem(props) {
  const context = useContext(ProductContext);
  console.log(props);
  return (
    <>
      {props.category && (
        <li
          className={`category__item lvl${props.level} ${
            props.active && "active"
          }`}
          data-value={props.category.categoryName}
          data-level={props.level}
          data-active={props.active}
          onClick={props.handleClick}
        >
          <i className="fa fa-angle-right"></i>
          <span>{props.category.categoryName}</span>
        </li>
      )}
      {props.active && (
        <ul>
          {props.category.subCategories?.map((cate, index) => (
            <CategoryItem
              key={index}
              category={cate}
              handleClick={props.handleClick}
              active={
                cate.categoryName ===
                context.filters[
                  `hierarchicalCategories.lvl${props.level + 1}_like`
                ]
              }
              level={props.level + 1}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default CategoryItem;
