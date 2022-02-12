let arr = [1, 2, 3, 1, 4, 5, 2, 3, 6];
let n = 3;
let temp =[];
let max = 0;
let start = 0;

while(n<=arr.length){
    for(let i=start;i<n;i++){
        temp.push(arr[i]);
    }
    
    for(let j =0; j<=temp.length;j++){
        if(temp[j]> max){
            max = temp[j];
        }
    }

    console.log(max);
    n++;
    start++;
    temp = [];
}