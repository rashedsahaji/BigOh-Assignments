let arr = [2,4,3];
let arrMap = new Map();

for(let i=1;i<arr.length;i++){
    if(arrMap.has(arr[i]-arr[i-1])){
        break;
    }
    arrMap.set(arr[i]-arr[i-1]);
}

console.log(arrMap)