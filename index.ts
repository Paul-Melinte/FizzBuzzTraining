function fizzBuzz(n: number) {
    for(let i = 1; i <= n; i++) {
        // Using a array of strings to save the different parts of the answer
        // Decided to do this because we can't change a const and I didn't want to keep track of which string we have to print at the end
        const strings = []; 

        if(i % 3 == 0)
            strings.push("Fizz");

        if(i % 5 == 0)
            strings.push("Buzz");

        if(i % 7 == 0)
            strings.push("Bang");
    

        if(strings.length == 0)
            console.log(i);
        else 
            console.log(strings.join(""));

    }
}

fizzBuzz(120);