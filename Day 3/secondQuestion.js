let board = [
    ["5","3",".",".","7",".",".","."]
   ,["6",".",".","1","9","5",".","."]
   ,[".","9","8",".",".",".",".","6"]
   ,["8",".",".",".","6",".",".","."]
   ,["4",".",".","8",".","3",".","."]
   ,["7",".",".",".","2",".",".","."]
   ,[".","6",".",".",".",".","2","8"]
   ,[".",".",".","4","1","9",".","."]
   ];

function isKingSafe(chessBoard){
    for(let i=0; i<chessBoard.length;i++){
        for(let j=0; j<chessBoard.length;j++){
            if (chessBoard[i][j] == 'King'){
                if(camel(chessBoard,i,j)){
                    return false;
                }
            }
        }
    }
}

function camel(chessBoard,i,j){
    let moves = 0;
    while(onBoard(i+ ++moves, j)){
        if(chessBoard[i+moves][j]=='Camel'){
            return true;
        }

        if(chessBoard[i+moves][j] !== 0){
            break;
        }
    }

    moves = 0;
    while (onBoard(i + --moves, j)){
      if (chessBoard[i + moves][j] == 'Camel'){
        return true;
      }
      if (chessBoard[i + moves][j] !== 0){
          break;
      }
    }

    moves = 0;
    while (onBoard(i, j + ++moves))
    {
      if (chessBoard[i][j + moves] == 'Camel'){
        return true;
      }
      if (chessBoard[i][j + moves] !== 0){
          break;
      }
    }
  
    moves = 0;
    while (onBoard(i, j + --moves))
    {
      if (chessBoard[i][j + moves] == 'Camel'){
          return true;
      }
      if (chessBoard[i][j + moves] !== 0){
          break;
      }
    }
    return false;
}

function onBoard(i,j){
    return i >= 0 && i<8 && j>=0 && j<8;
}

console.log(isKingSafe(chessBoard));