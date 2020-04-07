//Problem is defined as a set of integers where we need to find all combinations or permutations 
function dfsProblem(problem) {
  const res   = [],
        stack = [[[],0]];
  while(stack.length > 0) {
    const [temp, start] = stack.pop(); 
    res.push(temp); 
    for(let i = start; i < problem.length; i++) {
      stack.push([[...temp, problem[i]],i + 1])
    }
  }
}