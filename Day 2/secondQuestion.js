/*ii) Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold. If no three numbers sum up to the target sum, the function should return an empty array */
let intArray = [2,-2,4,1,3,8];
let num = 5;

function trippleAdder(array, number){
    let found = false;
    let sortArr = array.sort((a, b) => a - b);
    let arrSize = sortArr.length;

    for(let i=0;i<arrSize;i++){
        let arrayElement  = sortArr[i];
        let rightElement1 = i+1;
        let leftElement1 = arrSize;

        while(rightElement1 < leftElement1){
            if(arrayElement + sortArr[rightElement1]+sortArr[leftElement1] === number){
                console.log(arrayElement,rightElement1,leftElement1);
                rightElement1++;
                leftElement1--;
                found = true;
                break;
            }
            else if(arrayElement+rightElement1+leftElement1 < number){
                rightElement1++;
            }
            else{
                leftElement1--;
            }
        }
    }
    if(found==false){
        console.log(`Not Found, there is no combination in array`);
    }
}

trippleAdder(intArray,num);
