import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePrice } from "../../features/filter/filterSlice";
import { LIST_PRICE_RANGE } from "../../utils/constant";
import "./style.scss";

function Price() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const gteInput = useRef(null);
  const lteInput = useRef(null);
  function handleSubmitRange(event) {
    const data = event.target.dataset;
    if (data.lte || data.gte) {
      if (data.lte === filter.price_lte && data.gte === filter.price_gte) {
        dispatch(changePrice({}));
      } else {
        dispatch(
          changePrice({
            price_gte: data.gte,
            price_lte: data.lte,
          })
        );
      }
    } else {
      dispatch(
        changePrice({
          price_gte: gteInput.current.value,
          price_lte: lteInput.current.value,
        })
      );
    }
  }
  return (
    <div className="price__filter">
      <h4 className="title">Prices</h4>
      <ul>
        {filter.price_gte && filter.price_lte ? (
          <li
            data-gte={filter.price_gte}
            data-lte={filter.price_lte}
            onClick={handleSubmitRange}
          >
            ${filter.price_gte} - ${filter.price_lte}
          </li>
        ) : filter.price_gte ? (
          <li
            data-gte={filter.price_gte}
            data-lte={filter.price_lte}
            onClick={handleSubmitRange}
          >
            ≥ ${filter.price_gte}
          </li>
        ) : filter.price_lte ? (
          <li
            data-gte={filter.price_gte}
            data-lte={filter.price_lte}
            onClick={handleSubmitRange}
          >
            ≤ ${filter.price_lte}
          </li>
        ) : (
          LIST_PRICE_RANGE.map((range, index) => (
            <li
              key={index}
              data-gte={range.gte}
              data-lte={range.lte}
              onClick={handleSubmitRange}
            >
              {!range.gte
                ? `≤ ${range.lte}`
                : !range.lte
                ? `≥ ${range.gte}`
                : `$${range.gte} - ${range.lte}`}
            </li>
          ))
        )}
      </ul>

      <div className="price-range__input">
        <label>
          $
          <input
            type="number"
            min={0}
            max={99999}
            defaultValue={filter.price_gte || ""}
            ref={gteInput}
          ></input>
        </label>
        <span> to </span>
        <label>
          $
          <input
            type="number"
            min={0}
            max={99999}
            defaultValue={filter.price_lte || ""}
            ref={lteInput}
          ></input>
        </label>
        <button className="submit-range" onClick={handleSubmitRange}>
          Go
        </button>
      </div>
    </div>
  );
}

export default Price;
