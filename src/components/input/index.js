import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

InputSearch.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string,
  class: PropTypes.string,
  handleChangeInput: PropTypes.func,
  autofocus: PropTypes.bool,
};

function InputSearch(props) {
  let timeout;
  function handleOnKeyUp(event) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      props.handleChangeInput(event.target.value);
    }, 500);
  }
  return (
    <div className={`${props.class} input__group`}>
      <input
        type="text"
        id={props.id}
        placeholder={props.placeholder}
        onKeyUp={handleOnKeyUp}
        autoFocus={props.autofocus}
      ></input>
      <button>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}

export default InputSearch;
