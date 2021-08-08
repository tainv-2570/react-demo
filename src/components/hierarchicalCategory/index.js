import React from "react";
import CategoryItem from "../categoryItem";
import {
  getCategoryFilterData,
  hideCategoryLvl1,
  showCategoryLvl1,
} from "../../utils/category";
import { LIST_CATEGORY } from "../../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import { changeCategory } from "../../features/filter/filterSlice";
import "./style.scss";

function HierarchicalCategory() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  function handleChangeCategory(event) {
    let data = event.target.dataset;
    let categoryData = getCategoryFilterData(filter, data.level);
    if (data.level > 1 && data.active === "false") {
      hideCategoryLvl1();
    } else {
      showCategoryLvl1();
    }
    categoryData[`categoryLvl${data.level}`] =
      data.active === "false" ? data.value : "";
    dispatch(changeCategory(categoryData));
  }

  return (
    <div className="hierarchicalCategory">
      <nav>
        <ul>
          {LIST_CATEGORY.map((category, index) => (
            <CategoryItem
              key={index}
              category={category}
              handleClick={handleChangeCategory}
              active={
                category.categoryName ===
                filter["hierarchicalCategories.lvl0_like"]
              }
              level={0}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default HierarchicalCategory;
