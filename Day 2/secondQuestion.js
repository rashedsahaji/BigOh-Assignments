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
