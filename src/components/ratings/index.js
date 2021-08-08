import React from "react";
import Rating from "../rating";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeRating } from "../../features/filter/filterSlice";

function Ratings() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  function handleRatingItemClick(event) {
    if (event.target.dataset.gte === filter.rating_gte) {
      dispatch(changeRating({ rating_gte: 0 }));
    } else {
      dispatch(changeRating({ rating_gte: event.target.dataset.gte }));
    }
  }
  return (
    <div className="rating__filter">
      <h4 className="title">Ratings</h4>
      <ul>
        {Array.from({ length: 4 }, (_, index) => (
          <li
            className={`rating__items ${
              filter.rating_gte === `${4 - index}` ? "active" : ""
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
