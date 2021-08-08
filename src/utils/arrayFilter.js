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
