import React, { useContext } from "react";
import { ProductContext } from "../../contexts/productContext";
import CategoryItem from "../categoryItem";
import {
  getCategoryFilterData,
  hideCategoryLvl1,
  showCategoryLvl1,
} from "../../utils/category";
import { LIST_CATEGORY } from "../../utils/constant";

import "./style.scss";

function HierarchicalCategory() {
  const context = useContext(ProductContext);
  function handleChangeCategory(event) {
    let data = event.target.dataset;
    let categoryData = getCategoryFilterData(context.filters, data.level);
    if (data.level > 1 && data.active === "false") {
      hideCategoryLvl1();
    } else {
      showCategoryLvl1();
    }
    categoryData[`categoryLvl${data.level}`] =
      data.active === "false" ? data.value : "";
    context.handleChangeCategory(categoryData);
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
                context.filters["hierarchicalCategories.lvl0_like"]
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
