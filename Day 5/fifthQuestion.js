let arr = [
    [5,1,9,11],
    [2,4,8,10],
    [13,3,6,7],
    [15,14,12,16]
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