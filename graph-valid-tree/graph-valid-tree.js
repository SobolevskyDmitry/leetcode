/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    if(edges.length !== n - 1) return false;
    
    const unionFind = new UnionFind(n);
    
    for(let edge of edges) {
        const A = edge[0];
        const B = edge[1];
        
        if (!unionFind.union(A,B)) {
            return false
        }
    }
    
    return true;
};

class UnionFind {
   
    constructor(n) {
        this.parent = [];
        
        for (let i=0;i < n; i++) {
            this.parent[i] = i;
        } 
    }
    
    find(A) {
        while(this.parent[A] !== A) {
            A = this.parent[A];
        }
        
        return A;
    }
    
    union(A,B) {
        const rootA = this.find(A);
        const rootB = this.find(B);
        
        if (rootA === rootB) {
            return false;
        }
        
        this.parent[rootA] = rootB;
        
        return true;
    }
}