function fizzBuzz(n: number) {
    for(let i = 1; i <= n; i++) {
        // Using a array of strings to save the different parts of the answer
        // Decided to do this because we can't change a const and I didn't want to keep track of which string we have to print at the end
        const strings:string[] = []; 

        if(i % 3 == 0)
            strings.push("Fizz");

        if(i % 5 == 0)
            strings.push("Buzz");

        if(i % 7 == 0)
            strings.push("Bang");
    
        if(i % 11 == 0){
            strings.splice(0,strings.length);
            strings.push("Bong")
        }

        if(i % 13 == 0){
            let j:number;

            for(j = 0; j < strings.length; j++)
                if(strings[j].charAt(0) == 'B')
                    break;

            strings.splice(j,0,"Fezz");
        }

        if(strings.length == 0)
            console.log(i);
        else 
            console.log(strings.join(""));

    }
}

fizzBuzz(300);