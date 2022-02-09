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
                if(rows[i].includes(cellValue)){
                    return false
                }else{
                    rows[i].push(Sudoku[i][j]);
                }

                if(cols[j].includes(cellValue)){
                    return false;
                }else{
                    cols[j].push(Sudoku[i][j]);
                }

                let gridIndex = Math.floor((i/3))*3+ Math.floor(j/3);

                if(boxes[gridIndex].includes(cellValue)){
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