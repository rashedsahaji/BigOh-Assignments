let board = [
    [".",".",".",".","Camel",".",".","."]
   ,["King",".",".",".",".",".",".","."]
   ,[".",".",".",".",".",".",".","."]
   ,[".",".",".",".",".",".",".","."]
   ,[".",".",".",".",".",".",".","."]
   ,[".",".",".",".",".",".",".","."]
   ,[".",".",".",".",".",".",".","."]
   ,[".",".",".",".",".",".",".","."]
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

        if(chessBoard[i+moves][j] !== '.'){
            break;
        }
    }

    moves = 0;
    while (onBoard(i + --moves, j)){
      if (chessBoard[i + moves][j] == 'Camel'){
        return true;
      }
      if (chessBoard[i + moves][j] !== '.'){
          break;
      }
    }

    moves = 0;
    while (onBoard(i, j + ++moves))
    {
      if (chessBoard[i][j + moves] == 'Camel'){
        return true;
      }
      if (chessBoard[i][j + moves] !== '.'){
          break;
      }
    }
  
    moves = 0;
    while (onBoard(i, j + --moves))
    {
      if (chessBoard[i][j + moves] == 'Camel'){
          return true;
      }
      if (chessBoard[i][j + moves] !== '.'){
          break;
      }
    }
    return false;
}

function onBoard(i,j){
    return i >= 0 && i<8 && j>=0 && j<8;
}

console.log(isKingSafe(chessBoard));