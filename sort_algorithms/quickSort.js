
function swap(arr, left, right) {
  let temp = arr[left]; 
  arr[left] = arr[right];
  arr[right] = temp;

}

function partition(arr, left, right) {
  let indexOfPivot = right,
  pivot = arr[indexOfPivot]; 
  right -= 1; 

  while(left < right) {
    while(arr[left] < pivot) {
      left++; 
 
    }
    while(arr[right] > pivot) {
      right--;
   
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

function quick_sort(arr, left, right) {
  let index;
  if(arr.length > 1) {
    index = partition(arr, left, right);
      if(left < index - 1) {
        quick_sort(arr,left, index - 1);
      }
      if(right > index) {
        quick_sort(arr,index + 1, right);
      }
  }
  
  return arr; 
  
}