export default function uniqueArray(arr = [], key) {
  const idsArray = [];
  return arr.filter(item => {
    if (idsArray.indexOf(item[key]) === -1) {
      idsArray.push(item[key]);
      return true;
    }
    return false;
  });
}
