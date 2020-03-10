function binary_search(array, target) {

  let left = 0,
      right = array.length - 1; 
  
  while(left + 1 < right) {
    const mid = left + Math.floor((right - left)/2) // possible to use bit shifting e.g. right + left >>> 1

    if(array[mid] == target) return mid;
    if(array[mid] < target) {
      left = mid; 
    }
    else {
      right = mid; 
    }
  }

  return -1;
}

