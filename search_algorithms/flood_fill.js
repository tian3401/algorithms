// Flood fill is an alogrithm that allows us to search a connect system for a given requirement
function main(system, start, replacement) {
  const column = [-1, -1, -1, 0, 0, 1, 1, 1],
  row          = [-1, 0, 1, -1, 1, -1, 0, 1],
  [x, y]       = start; 

  floodFillDFS(system, x, y, row, column, replacement);
  printSystem(system);
  return system 
};

function verifyValid(system, x, y, target) {
  return (x >= 0) &&
         (x < system.length) &&
         (y >= 0) &&
         (y < system[x].length) &&
         (system[x][y] == target)
};

function printSystem(system) {
  for(let row of system) {
    console.log(row)
  }
};

function floodFillDFS(system, x, y, row, column, replacement) {
  if(baseCase) {
    //...do some logic
    return;  
  } 
  let target = system[x][y]; //default self value

  system[x][y] = replacement; 

  for(let i = 0; i < row.length; i++) {
    if(verifyValid(system, x + row[i], y + column[i], target)) {
      floodFillDFS(system, x + row[i], y + column[i], row, column, replacement)
    }
  }
};


