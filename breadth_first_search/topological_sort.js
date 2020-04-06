// node [] directed_graph 
// node: int label , int [] neighbors 
function topSort(graph) {
  //initialization 
  let indeg = getIndeg(graph),
      res   = [],
      queue = []; //use array for deque
  for(let node of graph) {
    if(indeg[node] == 0) {
      queue.push(indeg[node])
    }
  }

  //bfs 
  while(queue.length > 0) {
    let node = queue.shift();
    res.push(node); 
    for(let neighbor of node.neighbors) {
      let currIndeg = indeg.get(neighbor)
      currIndeg -= 1; 
      indeg.set(neighbor, currIndeg); 
      if(indeg.get(neighbor) == 0) {
        queue.push(neighbor); 
      }
    }
  }

  return res; 
}

//returns indeg map 
function getIndeg(graph) {
  let indeg = new Map(); 
  for(let node of graph) {
    indeg.set(node.label, null); 
    for(let neighbor of node.neighbors) {
      if(!indeg.has(neighbor)) {
        indeg.set(neighbor, null);
      }
      let currIndeg = indeg.get(neighbor); 
      currIndeg += 1; 
      indeg.set(neighbor, currIndeg); 
    }
  }
  return indeg; 
}