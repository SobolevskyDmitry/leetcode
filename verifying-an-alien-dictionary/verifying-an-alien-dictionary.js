/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let map = {};

    for (let i = 0; i < order.length; i++) {
        map[order[i]] = i;
    }

    for(let i = 1; i < words.length; i++){
        let prev = words[i-1];
        let curr = words[i];
        
        if (map[prev[0]] > map[curr[0]]) {
            return false;
        } else if(prev[0] === curr[0]){
            let pointer = 1
            
            
           while (prev[pointer] === curr[pointer] && pointer < Math.max(curr.length, prev.length)) {
            pointer++;
           }
            
            //           v               v === undefined
            // prev: "apple" - curr: "app"  
            if(curr[pointer] === undefined && prev[pointer]) {
                return false
            }
            
            if(map[prev[pointer]] > map[curr[pointer]]) {
                return false
            }
        }
    }
    
    return true;
};
