/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  const parent = new Array(isConnected.length).fill(-1);
  let count = 0;
    
  for(let i=0; i < isConnected.length; i++) {
      for(let j=0; j < isConnected.length; j++) {
          
          if(isConnected[i][j] && i !== j) {
              union(parent,i, j);
          }
      }
  }
  
  for (let i =0; i < parent.length; i++) {
      if (parent[i] === -1) {
          count++;
      }
  }  
    
  return count;  
};

function find(parent, i) {
    if(parent[i] === -1) {
        return i;
    }
    
    return find(parent, parent[i]);
}

function union(parent, x, y) {
    const xset = find(parent,x);
    const yset = find(parent,y);
    
    if(xset != yset) {
        parent[xset] = yset;
    }
}