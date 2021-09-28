/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
   const target = graph.length - 1;
   const queue = [[0]]; 
   const res = [];
    
   while(queue.length) {
     const nodes = queue.shift();
     const lastElement = nodes[nodes.length - 1];  
     
     if(lastElement === target) {
         res.push(nodes);
         continue;
     }  
       
     graph[lastElement].forEach(node => queue.push([...nodes,node]));  
   } 
    
   return res;  
};

