function getLCM(a, b) {
    let m = (a>a)?a : b;
    while(true){
        if(m%a === 0 && m%b === 0){
            return m;
        }
        m++;
    }
}

function lcmInRange(arr,size){
    let lcm = getLCM(arr[0],arr[1]);
    for(let i=2; i<size;i++){
        lcm = getLCM(lcm,arr[i]);
    }
    return lcm;
}

let numbers =[2,3,4,5,6,7,8,9];

console.log(lcmInRange(numbers,numbers.length));