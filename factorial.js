const factorial = (n)=>{
    if(n === 1) return 1;
    else return n * factorial(n-1);
}

const n = factorial(5);
console.log(n);