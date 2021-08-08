import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
import { changePage } from "../../features/filter/filterSlice";

Paging.propTypes = {
  totalItem: PropTypes.number,
};

function Paging(props) {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
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
      dispatch(changePage({ page: newPage }));
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
            filter._page === 1 ? "paging__disable" : ""
          }`}
          onClick={() => goToPage(filter._page - 1)}
        >
          <i className="fa fa-angle-left fa-2x"></i>
          <span>Previous page</span>
        </button>
        <ul>
          {pageList.map((page) => (
            <li key={page}>
              <button
                className={`${
                  page === filter._page ? "active" : ""
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
            filter._page === lastPage ? "paging__disable" : ""
          }`}
          onClick={() => goToPage(filter._page + 1)}
        >
          <span>Next page</span>
          <i className="fa fa-angle-right fa-2x"></i>
        </button>
      </nav>
    </section>
  );
}

export default Paging;
