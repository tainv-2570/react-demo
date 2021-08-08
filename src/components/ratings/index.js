import React, { useContext } from "react";
import Rating from "../rating";
import "./style.scss";
import { ProductContext } from "../../contexts/productContext";

function Ratings() {
  const context = useContext(ProductContext);
  function handleRatingItemClick(event) {
    console.log(context.filters.rating_gte);
    if (event.target.dataset.gte === context.filters.rating_gte) {
      context.handleChangeRating({ rating_gte: 0 });
    } else {
      context.handleChangeRating({ rating_gte: event.target.dataset.gte });
    }
  }
  return (
    <div className="rating__filter">
      <h4 className="title">Ratings</h4>
      <ul>
        {Array.from({ length: 4 }, (_, index) => (
          <li
            className={`rating__items ${
              context.filters.rating_gte === `${4 - index}` ? "active" : ""
            }`}
            key={index}
            data-gte={4 - index}
            onClick={handleRatingItemClick}
          >
            <Rating rate={4 - index} />
            <span> & Up </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ratings;
