export function getCategoryFilterData(filter, level) {
  let newCategory = {};
  for (let index = 0; index <= level; index++) {
    newCategory[`categoryLvl${index}`] =
      filter[`hierarchicalCategories.lvl${index}_like`];
  }
  return newCategory;
}

export function hideCategoryLvl1() {
  document
    .querySelectorAll("li.category__item.lvl1")
    .forEach((element) => (element.style.display = "none"));
}

export function showCategoryLvl1() {
  document
    .querySelectorAll("li.category__item.lvl1")
    .forEach((element) => (element.style.display = "block"));
}
