function fizzBuzz(n: number) {
    for(let i = 1;i <= n;i++){
        if(i % 3 == 0)
            console.log("Fizz");
        else console.log(i);
    }
}

fizzBuzz(100);