function fibonacci(n){
    let a = 0;
    let b = 1;
    let c = a+b;
    while(c<=n){
        console.log(a);
        a = b;
        b = c;
        c = a+b;
    }
}

fibonacci(1000)