let arr = [
    [1,2,3,4],
    [4,5,6,9],
    [0,7,8,9],
    [10,11,12,13]
];

let n = arr.length;

for(let i=0;i<n; i++){
    for(let j=i;j<arr[i].length;j++){
        let temp = 0;
        temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
    }
}

for(let i=0;i<n;i++){
    for(let j=0;j<n/2;j++){
        let temp=0;
        temp = arr[i][j];
        arr[i][j]=arr[i][n-1-j];
        arr[i][n-1-j]=temp;
    }
}

console.log(arr);