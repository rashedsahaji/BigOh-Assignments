/*iii) Write a program to print the below pattern:*/

          // \*****/
          // *\***/*
          // **\*/**
          // ***/***
          // **/*\**
          // */***\*
          // /*****\

function patternNum() {
    let n =7;
    let string = "";
    for(let i=0; i<n;i++){
        for(let y=0; y<n;y++){
          if(i === y){
            string += "/";
          }
          else if(i+y === n-1){
              string += "/";
          }
          else{
              string += "*";
          }
        }
       string += "\n";
    }
    console.log(string);
}
patternNum();