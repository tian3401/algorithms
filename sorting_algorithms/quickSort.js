
function swap(arr, left, right) {
  let temp = arr[left]; 
  arr[left] = arr[right];
  arr[right] = temp;
  // console.log('new array after swap: ', arr)
}

function partition(arr, left, right) {
  let indexOfPivot = right,
  pivot = arr[indexOfPivot]; 
  right -= 1; 

  while(left < right) {
    while(arr[left] < pivot) {
      left++; 
      // console.log('left: ',left)
    }
    while(arr[right] > pivot) {
      right--;
      // console.log('right: ',right, 'value: ', arr[right])
    }
    // need this check to make sure that still true after while loops
    if(left < right) {
      swap(arr,left,right); 
      left++; 
    }
  }
  // this swaps the index of Pivot and the left pointer 
  swap(arr,left,indexOfPivot)

  return left; 
}

function quickSort(arr, left, right) {
  let index;
  if(arr.length > 1) {
    index = partition(arr, left, right);
      if(left < index - 1) {
        quickSort(arr,left, index - 1);
      }
      if(right > index) {
        quickSort(arr,index + 1, right);
      }
  }
  
  return arr; 
  
}

let array = [3,9,1,5,6]
let answer1 = quickSort(array, 0, array.length - 1)
array = [2,8,3,1,4]
let answer2 = quickSort(array, 0, array.length - 1)
array = [9,1,5,4,8]
let answer3 = quickSort(array, 0, array.length - 1)
array = [9,8,7,6,5]
let answer4 = quickSort(array, 0, array.length - 1)
console.log(answer1, answer2, answer3, answer4)