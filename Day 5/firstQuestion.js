function clockWise(){
    let arr = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    
    let left = 0;
    let top = 0;
    let right = 3-1;
    let bottom = 3-1;

    let temp = [];
    
    while(top<=bottom && left<=right){
        for(let i=left; i<=right;i++){
            temp.push(arr[top][i]);
        }
        top++;
        for(let i=top;i<=bottom;i++){
            temp.push(arr[i][right]);
        }
        right--;
        if(left<=right){
            for(let i=right;i>=left;i--){
                temp.push(arr[bottom][i]);
            }
            bottom--;
        }
        if(top<=bottom){
            for(let i=bottom;i>=top;i--){
                temp.push(arr[i][left])
            }
            left++;
        }
    }
    return temp;
}
console.log(clockWise());
console.log('-------------------')
function antiClockWise(){
    let arr = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    
    let left = 0;
    let top = 0;
    let right = 3-1;
    let bottom = 3-1;

    let temp = [];

    while(top<=bottom && left<=right){
        for(let i=right; i>=left;i--){
            temp.push(arr[top][i]);
        }
        top++;
        for(let i=top;i<=bottom;i++){
            temp.push(arr[i][left]);
        }
        left++;
        if(left<=right){
            for(let i=left;i<=right;i++){
                temp.push(arr[bottom][i]);
            }
            bottom--;
        }
        if(top<=bottom){
            for(let i=bottom;i>=top;i--){
                temp.push(arr[i][right])
            }
            right--;
        }
    }
    return temp;
}
console.log(antiClockWise());