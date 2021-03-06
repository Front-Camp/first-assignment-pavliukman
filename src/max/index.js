/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
	let maxNumber = 0;
	for (let i = 1; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i] !== Number.POSITIVE_INFINITY && arr[i] !== Number.NEGATIVE_INFINITY) {
      if (maxNumber < arr[i]) {
        maxNumber = arr[i];
      }
    }
  }
  
  return maxNumber;
};

export default max;
