/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const res = [];
    
    DFS(0, [], res, graph);
    
    return res;
};

   
function DFS(node, path, res, graph) {
    const target = graph.length - 1;

    path.push(node);

    if(node === target) {
        res.push(path);
    }

    graph[node].forEach((item) => {
       DFS(item,[...path], res, graph);    
    });
}