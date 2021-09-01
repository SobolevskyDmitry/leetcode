/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return build(s) === build(t);
};

function build(str) {
    const stack = [];
    
    for(let s of str) {
        if(s === '#') {
            stack.shift();
        } else {
            stack.unshift(s);
        }
    }
    
    
    return stack.join('');
}