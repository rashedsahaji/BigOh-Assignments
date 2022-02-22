/*i)Write a program to remove duplicate values from an array and returns an array of unique values. int[] removeDuplicates(int[]values) */

function removeDuplicate(values) {
    let arr = [...values].sort((a,b)=>a-b);
    let result = [];
    let temp=[];

    for(let i=0; i<arr.length;i++){
        if(arr[i]===arr[i+1]){
            temp.push(arr[i]);
        }
        else{
            result.push(arr[i]);
        }
    }

    console.log(`Recorded Duplicate Values ${temp}\n`)
    return result;
}
console.log(removeDuplicate([2, 4, 6, 7, 11,4,11,2,4]));