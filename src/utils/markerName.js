export default function markerName(name, target) {
  if (target) {
    let nameArray = name.split(new RegExp(`(${target})`, "ig"));
    let targetName = [];
    for (let index = 0; index < nameArray.length; index++) {
      if (nameArray[index].toLowerCase() === target.toLowerCase()) {
        targetName.push(<mark> {nameArray[index]} </mark>);
      } else {
        targetName.push(nameArray[index]);
      }
    }
    return targetName;
  } else {
    return [name];
  }
}
