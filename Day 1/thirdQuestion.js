/*iii) Find the largest number less than N whose each digit is prime number */
let rem;
let flag;

function checkPrime(n){
    let isPrime = true;
    while(n > 0){
        rem = n % 10;
        n =(n / 10);
        console.log()
        for(let y=2;y<=(rem/2)| 0;++y){
            if(rem % y === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime === false){
            break;
        }
    }
    return true;
}

function prime(number){
    let result =0;
    for(let i=number-1;i>0;i--){
        if(checkPrime(i)){
            result = i;
            break;
        }
    }
    return result;
}
prime(100);
