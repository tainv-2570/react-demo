import React, { useState } from "react";
import PropTypes from "prop-types";
import InputSearch from "../input";
import getFilteredArray from "../../utils/arrayFilter";
import "./style.scss";

CheckboxList.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
  filter: PropTypes.bool,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  class: PropTypes.string,
  checkedList: PropTypes.array,
  handleChangeOption: PropTypes.func,
};

function CheckboxList(props) {
  const [filteredArray, setFilteredArray] = useState(
    getFilteredArray(props.options)
  );
  const [selected, setSelected] = useState([]);

  function handleChangeOptionFilter(data) {
    const filteredResult = getFilteredArray(props.options, data);
    if (filteredResult || data === "") {
      setFilteredArray(filteredResult);
    }
  }

  function handleOptionSelect(event) {
    let newSelected = event.target.checked
      ? [...selected, event.target.value]
      : [...selected.filter((option) => option !== event.target.value)];
    setSelected(newSelected);
    props.handleChangeOption(newSelected);
  }

  return (
    <div>
      <h4 className="title">{props.title}</h4>
      {props.filter && (
        <InputSearch
          placeholder={props.placeholder}
          id={props.id}
          class={props.class}
          handleChangeInput={handleChangeOptionFilter}
        />
      )}
      <ul className="checkbox-list">
        {filteredArray?.map((option, index) => (
          <li className="option" key={index}>
            <label htmlFor={index + option}>
              <input
                type="checkbox"
                id={index + option}
                value={option}
                onChange={handleOptionSelect}
                checked={props.checkedList.includes(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckboxList;
