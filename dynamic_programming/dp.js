//base problem climbStairs 
function dp(n) { // int [] n 
  //1.Check base case 
  if(n == 1) return 1; 
  //2. Initialize dp table with base values 
  const table = new Array(n.length).fill(0); 
  table[0] = 1;
  table[1] = 2; 

  //3.Fill table with fn expression 
  for(let i = 2; i < n; i++) {
    table[i] = table[i - 1] + table[i - 2]; 
  }
  //4. Return final state of dp table
  return res[table.length - 1]; 
}





