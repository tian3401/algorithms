//adapated insertion sort by Michael Mitrakos 
const insertionSort = (arr) => {
  //p2 always trails p1 
  for(let p1 = 1; p1 < arr.length; p1++) {
    //key == num we want to place into correct position 
    let key = arr[p1],
        p2 = p1 - 1;
    while( p2 >= 0 && arr[p2] > key) {
      //replace p1's num with p2's num
      arr[p2 + 1] = arr[p2];
      //p2 == -1 when it finishes comparing all num at index [0,p1)
      p2 = p2 - 1; 
    }
    //puts the key in the correct position
    arr[p2 + 1] = key; 
  }
  return arr; 
}
