/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    const map = employees.reduce((acc, cur) => {
        
        acc[cur.id] = cur;
        
        return acc;
    }, {});
    
    const queue = [map[id]];
    let sum = 0;
    
    while(queue.length) {
       const emp = queue.shift();
       
       sum = sum + +emp.importance;
        
       if(emp.subordinates && emp.subordinates.length) {
           emp.subordinates.forEach(subordinateId => queue.push(map[subordinateId]));
       }
    }
    
    return sum;
};
