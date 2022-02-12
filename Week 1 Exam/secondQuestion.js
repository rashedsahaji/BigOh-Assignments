
let nums1 = [7,8,22,52,55,60,64,80];
let nums2 = [7,8,9,10,11];

function median(numsArr){
    let n = numsArr.length-1;
    let med;
    if(n%2===0){
         med = ((n/2)+((n+1)/2))/2 | 0;
    }else{
        med = (n+1)/2 | 0;
    }

    return numsArr[med];
}

console.log(`The median of nums1 array is : ${median(nums1)}`);
console.log(`The median of nums2 array is : ${median(nums2)}`);