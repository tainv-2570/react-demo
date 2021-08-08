/**
 * Copy cac truong filter category cua global state co level khong lon hon
 * @param {object} filter 
 * @param {number} level 
 * @returns 
 */
export function getCategoryFilterData(filter, level) {
  let newCategory = {};
  for( let index = 0; index <= level; index ++){
    newCategory[`categoryLvl${index}`] = filter[`hierarchicalCategories.lvl${index}_like`];
  }
  return newCategory;
}

/**
 * An cac category level 1
 */
export function hideCategoryLvl1(){
    document.querySelectorAll('li.category__item.lvl1').forEach(
        element => element.style.display = 'none'
    );
}

/**
 * Hien thi cac category level 1
 */
export function showCategoryLvl1(){
    document.querySelectorAll('li.category__item.lvl1').forEach(
        element => element.style.display = 'block'
    );
}