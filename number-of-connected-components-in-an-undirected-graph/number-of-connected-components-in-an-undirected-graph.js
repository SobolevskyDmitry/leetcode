/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const unionFind = new UnionFind(n);
    const set = new Set();
    
    for(let edge of edges) {
        unionFind.union(edge[0], edge[1]);
    }
    
    unionFind.arr.forEach(node => set.add(unionFind.find(node)));
    console.log(unionFind.arr);

    return set.size;
};

class UnionFind {
    
    constructor(n) {
        this.arr = [];
        
        for(let i = 0; i < n; i++) {
            this.arr[i] = i;
        }
    }
    
    
    find(A) {
        while(this.arr[A] !== A) {
            A = this.arr[A];
        }
        
        return A;
    }
    
    union(A,B) {
        const rootA = this.find(A);
        const rootB = this.find(B);
        
        this.arr[rootA] = rootB;
    }
}