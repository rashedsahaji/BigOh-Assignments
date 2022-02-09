/*i) Write a method Boolean isValidSudoku(int[][]Sudoku)Returns true if the given Sudoku is correctly arranged otherwise false

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition. */

/*
    Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
 */

let board = [
 ["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]
];

function search(array,element){
    for(let i=0; i<array.length;i++){
        if(array[i]==element){
            return true;
        }
    }
    return false;
}

function isValidSudoku(Sudoku){
    let rows =[];
    let cols = [];
    let boxes = [];

    for(let i=0; i<9;i++){
        rows.push([]);
        cols.push([]);
        boxes.push([]);
    }

    for(let i=0; i<Sudoku.length;i++){
        for(let j=0; j<Sudoku.length;j++){

            let cellValue = Sudoku[i][j];

            if(cellValue !== '.'){
                if(search(rows[i],cellValue)){
                    return false
                }else{
                    rows[i].push(Sudoku[i][j]);
                }

                if(search(cols[j],cellValue)){
                    return false;
                }else{
                    cols[j].push(Sudoku[i][j]);
                }

                let gridIndex = Math.floor((i/3))*3+ Math.floor(j/3);

                if(search(boxes[gridIndex],cellValue)){
                    return false;
                }else{
                    boxes[gridIndex].push(cellValue);
                }
            }
        }
    }
    return true;
}

console.log(isValidSudoku(board));