//Problem is defined as a set of integers where we need to find all combinations or permutations 
function dfsProblem(problem) {
  const result = [];
  dfs(problem, result, [], 0)
  return result; 
};

//Dfs template for combination and permutation problems 
function dfs(problem, result, temp, index) {
  result.push([...temp]) //base case not needed in this case 

  //Build combination/permutation 
  for(let i = index; i < problem.length; i++) { // if permutation i = 0
    //Pattern: add, recurse, pop 
    temp.push(problem[index]);
    dfs(problem, result, temp, i + 1); //i + 1 becomes new index 
    temp.pop();
  }
};

//Use dfs template if only have two options: add or do not add
function dfsBinary(problem, result, temp, index) {
    //Some base case is met 
    if(index == problem.length) {
      //Add to possible combination/permutation to result
      result.push([...temp])
      return;
    }
    //Build combination/permutation 
    temp.push(problem[index])
    dfsBinary(problem, result, temp, index + 1); //With addition
    temp.pop()
    dfsBinary(problem, result, temp, index + 1); //Without addition
};

