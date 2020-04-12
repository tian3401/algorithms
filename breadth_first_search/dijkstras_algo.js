/***
 * @param {string} start
 * @param {Object} graph
 * @param {string} source 
 * @param {string|int [][]} graph[source] 
*/
function dijkstra(start, graph) {
  //create a visited ds
  const visited = new Set(); 
  //create distance table 
  const distTable = {}; 
  let loc = Object.keys(graph); // pull out all locations in graph 
  for(let source of loc) { //set table with default values 
    distTable[source] = {
      dist: Infinity, 
      from: null
    };
  }
  //set ditance and from properties for start vertex 
  distTable[start].dist = 0;
  distTable[start].from = start; 
  //create queue 
  const pq = new PriorityQueue(); 
  pq.enqueue(start, 0); 
  //loop through queue 
  while(!pq.isEmpty()) {
    const vertex = pq.dequeue();
    const neighbors = graph[vertex.value];
 
    if(!visited.has(vertex.value)) {
      //add neighbors to priority queue 
      neighbors.forEach((neighbor) => {
        let dest      = neighbor[0];
        let weight    = neighbor[1]; 
        let sumWeight = weight + distTable[vertex.value].dist; 
        //determine total distance from start to given vertex 
        if(sumWeight < distTable[dest].dist) {
          distTable[dest].dist = sumWeight;
          distTable[dest].from = vertex.value; 
        }
        //add neighbors to queue 
        pq.enqueue(dest, weight); 
      })
      visited.add(vertex.value); //ensure not in infinite loop 
    }
  }
  return distTable; // table of distances from vertex
};

class PQElement {
  constructor(value, priority) {
    this.value    = value;
    this.priority = priority; 
  }
};

//smaller num, higher priority 
class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(value, priority) {
    const element = new PQElement(value, priority); 
    let exist = false; 
    for(let i = 0; i < this.queue.length; i++) {
      if(element.priority < this.queue[i].priority) {
        this.queue.splice(i, 0, element);
        exist = true; 
        break; 
      }
    }
    if(!exist) this.queue.push(element)
  }
  dequeue() {
    if(this.queue.length < 1) return "cannot dequeue from empty queue"

    return this.queue.shift(); 
  }

  getFront() {
    if(this.isEmpty()) return "empty queue"

    return this.queue[0];
  }
  getBack() {
    if(this.isEmpty()) return "empty queue"

    return this.queue[this.queue.length - 1]; 
  }
  isEmpty() {
    if(this.queue.length == 0) return true;
    return false; 
  }

  print() {
    let string = []; 
    for(let el of this.queue) {
      string.push(JSON.stringify(el)); 
    }
    return string.join(" ")
  }
}; 
