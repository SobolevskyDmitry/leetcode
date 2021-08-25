/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const currentColor = image[sr][sc];
  
  if(currentColor !== newColor) {
      dfs(image,sr, sc, currentColor, newColor);
  }
    
  return image;  
};


function dfs(image, r, c, currentColor, newColor) {
    if (image[r][c] === currentColor) {
      image[r][c] = newColor;
        
      
      if(r >= 1) {
          dfs(image, r - 1, c, currentColor, newColor);
      }  
      
      if(c >= 1) {
          dfs(image, r, c -1, currentColor, newColor);
      }  
        
      if (r + 1 < image.length) {
          dfs(image, r + 1, c, currentColor, newColor);
      }     
        
      if(c + 1 < image[0].length) {
          dfs(image, r , c + 1, currentColor, newColor);
      }      
    }
    
}