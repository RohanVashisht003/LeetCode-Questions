/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
   let n = matrix.length;
    let m = matrix[0].length;
    let MIN = Number.MIN_VALUE;
    
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(matrix[i][j]===0){
                markRow(i,matrix,n,m,MIN)
                markCol(j,matrix,n,m,MIN)
            }
        }
    }
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(matrix[i][j]===MIN){
                matrix[i][j]=0;
            }
        }
    }
    return matrix;
};

var markRow = function(i,matrix,n,m,MIN){
    for(let j=0; j<m; j++){
        if(matrix[i][j]!==0){
            matrix[i][j]=MIN
        }
    }
}
var markCol = function(j,matrix,n,m,MIN){
    for(let i=0; i<n; i++){
        if(matrix[i][j]!==0){
            matrix[i][j]=MIN
        }
    }
}