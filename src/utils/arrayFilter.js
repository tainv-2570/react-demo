/**
 * loc ra cac phan tu trong mang co chua tu tuong tu target
 * neu khong tim duoc tra ve false
 * neu tim duoc tra ve 5 phan tu dau tien
 * @param {array} array 
 * @param {string} target 
 * @returns 
 */
export default function getFilteredArray(array, target) {
  if (target) {
    let arrayFiltered = array.filter(
      (word) => word.toLowerCase().search(target.toLowerCase()) >= 0
    );
    if (arrayFiltered.length > 0) {
      return arrayFiltered.slice(0, 5);
    }
    return false;
  }
  return array.slice(0, 5);
}
