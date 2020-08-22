function minNumberOfArray(array) {
  if (array.length === 0) return null;
  let minNumber = array[0];
  for (let index = 1; index < array.length; index += 1) {
    minNumber = (array[index] < minNumber) ? array[index] : minNumber;
  }
  return minNumber;
}

function maxNumberOfArray(array) {
  if (array.length === 0) return null;
  let maxNumber = array[0];
  for (let index = 1; index < array.length; index += 1) {
    maxNumber = (array[index] > maxNumber) ? array[index] : maxNumber;
  }
  return maxNumber;
}

function analyze(array) {
  const sum = array.reduce((total, element) => total + element);
  const { length } = array;
  const average = sum / length;
  const min = minNumberOfArray(array);
  const max = maxNumberOfArray(array);

  return {
    average,
    min,
    max,
    length,
  };
}

export default analyze;