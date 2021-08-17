/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    const map = {};
    
    items.forEach(item => {
        if(map[item[0]]) {
            map[item[0]].push(item[1]);
        } else {
            map[item[0]] = [item[1]];
        }
    });
    
    return Object.keys(map).map(key => {
       const avgSum = Math.floor(map[key]
                                 .sort((a, b)=> a - b)
                                 .splice(-5)
                                 .reduce((acc,val) => acc + val, 0) / 5);
        
        return [key,avgSum]
    });
};