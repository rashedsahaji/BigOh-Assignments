let grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ];

  let counter = 0;
  let row = grid.length;
  let col = grid[0].length;

  function makeVisted(grid, i,j, rowSIze, colSize){
      if(i<0||i>=rowSIze||j<0||j>=colSize||grid[i][j] !='1'){
          return ;
      }
      grid[i][j] = 'visted';
      makeVisted(grid,i+1,j,rowSIze,colSize);
      makeVisted(grid,i,j+1,rowSIze,colSize);
      makeVisted(grid,i-1,j,rowSIze,colSize);
      makeVisted(grid,i,j-1,rowSIze,colSize);
  }

  for(let i=0;i<row;i++){
      for(let j=0;j<col;j++){
          if(grid[i][j]==1){
              makeVisted(grid, i,j, row, col);
              counter++;
          }
      }
  }

  console.log(counter);