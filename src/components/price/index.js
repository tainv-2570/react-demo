import React, { useContext, useRef } from "react";
import { ProductContext } from "../../contexts/productContext";
import { LIST_PRICE_RANGE } from "../../utils/constant";
import "./style.scss";

function Price() {
  const context = useContext(ProductContext);
  const gteInput = useRef(null);
  const lteInput = useRef(null);
  function handleSubmitRange(event) {
    const data = event.target.dataset;
    if (data.lte || data.gte) {
      if (
        data.lte === context.filters.price_lte &&
        data.gte === context.filters.price_gte
      ) {
        console.log(event.target);
        context.handleChangePrice({});
      } else {
        context.handleChangePrice({
          price_gte: data.gte,
          price_lte: data.lte,
        });
      }
    } else {
      context.handleChangePrice({
        price_gte: gteInput.current.value,
        price_lte: lteInput.current.value,
      });
    }
  }
  return (
    <div className="price__filter">
      <h4 className="title">Prices</h4>
      <ul>
        {context.filters.price_gte && context.filters.price_lte ? (
          <li
            data-gte={context.filters.price_gte}
            data-lte={context.filters.price_lte}
            onClick={handleSubmitRange}
          >
            ${context.filters.price_gte} - ${context.filters.price_lte}
          </li>
        ) : context.filters.price_gte ? (
          <li
            data-gte={context.filters.price_gte}
            data-lte={context.filters.price_lte}
            onClick={handleSubmitRange}
          >
            ≥ ${context.filters.price_gte}
          </li>
        ) : context.filters.price_lte ? (
          <li
            data-gte={context.filters.price_gte}
            data-lte={context.filters.price_lte}
            onClick={handleSubmitRange}
          >
            ≤ ${context.filters.price_lte}
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
            defaultValue={context.filters.price_gte || ""}
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
            defaultValue={context.filters.price_lte || ""}
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
