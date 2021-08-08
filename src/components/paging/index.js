import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { ProductContext } from "../../contexts/productContext";
import "./style.scss";

Paging.propTypes = {
  totalItem: PropTypes.number,
};

function Paging(props) {
  const context = useContext(ProductContext);
  const lastPage = Math.ceil(props.totalItem / 20);
  const [pageList, setPageList] = useState([]);
  useEffect(() => {
    const numberOfPage = Math.min(Math.ceil(props.totalItem / 20), 7);
    let newPageList = [];
    for (let index = 0; index < numberOfPage; index++) {
      newPageList.push(index + 1);
    }
    setPageList(newPageList);
  }, [props.totalItem]);
  function goToPage(newPage) {
    if (newPage > 0 && newPage <= lastPage) {
      context.handleChangePage({ page: newPage });
      let step = newPage - pageList[3];
      if (
        pageList[0] + step > 0 &&
        pageList[pageList.length - 1] + step <= lastPage
      ) {
        setPageList((pageList) => pageList.map((page) => page + step));
      } else {
        step =
          step < 0 ? 1 - pageList[0] : lastPage - pageList[pageList.length - 1];
        setPageList((pageList) => pageList.map((page) => page + step));
      }
    }
  }

  return (
    <section className="paging">
      <nav>
        <button
          className={`paging__control ${
            context.filters._page === 1 ? "paging__disable" : ""
          }`}
          onClick={() => goToPage(context.filters._page - 1)}
        >
          <i className="fa fa-angle-left fa-2x"></i>
          <span>Previous page</span>
        </button>
        <ul>
          {pageList.map((page) => (
            <li key={page}>
              <button
                className={`${
                  page === context.filters._page ? "active" : ""
                } page-number`}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
        <button
          className={`paging__control ${
            context.filters._page === lastPage ? "paging__disable" : ""
          }`}
          onClick={() => goToPage(context.filters._page + 1)}
        >
          <span>Next page</span>
          <i className="fa fa-angle-right fa-2x"></i>
        </button>
      </nav>
    </section>
  );
}

export default Paging;
