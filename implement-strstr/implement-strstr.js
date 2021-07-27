/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(text, word) {
    if (!text && !word) {
        return 0;
    }
    
    if (text && !word) {
        return 0;
    }
    
    const table = buildTable(word);
    let textIndex = 0;
    let wordIndex = 0;

    while(textIndex < text.length) {
        if(text[textIndex] === word[wordIndex]) {

            if(wordIndex === word.length - 1){
                return textIndex - wordIndex;
            }

            textIndex++;
            wordIndex++;

        } else {
            if(wordIndex === 0) {
                textIndex++;
            } else {
                wordIndex = table[wordIndex - 1]
            }
        }
    }

    return -1;
};

function buildTable(pattern) {
    const table = [0];
    
    let prefixIndex = 0;
    let suffixIndex = 1;
    
    while(suffixIndex < pattern.length) {
        if(pattern[prefixIndex] === pattern[suffixIndex]){
            table[suffixIndex] = prefixIndex + 1;
            prefixIndex++;
            suffixIndex++;
        } else {
            if(prefixIndex === 0) {
                table[suffixIndex] = 0;
                suffixIndex++;
            } else {
                prefixIndex = table[prefixIndex - 1];
            }
        }
    }

    return table;
}
