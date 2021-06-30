function fizzBuzz(n: number) {
    for(let i = 1; i <= n; i++) {
        // Using a array of strings to save the different parts of the answer
        // Decided to do this because we can't change a const and I didn't want to keep track of which string we have to print at the end
        const strings: string[] = []; 

        if(i % 3 == 0 && part1_flag)
            strings.push("Fizz");

        if(i % 5 == 0 && part1_flag)
            strings.push("Buzz");

        if(i % 7 == 0 && part2_flag)
            strings.push("Bang");
    
        if(i % 11 == 0 && part2_flag) {
            strings.splice(0, strings.length);
            strings.push("Bong")
        }

        if(i % 13 == 0 && part2_flag) {
            let j: number;

            // Here we find the first string starting with B
            for(j = 0; j < strings.length; j++)
                if(strings[j].charAt(0) == 'B')
                    break;

            strings.splice(j, 0, "Fezz");
        }

        if(i % 17 == 0 && part2_flag)
            strings.reverse();

        if(strings.length == 0)
            console.log(i);
        else 
            console.log(strings.join(""));

    }
}

function parseFlags() {
    if(process.argv.some((s) => {return s == "--disable-part1"}))
        part1_flag = false;


    if(process.argv.some((s) => {return s == "--disable-part2"}))
        part2_flag = false;

        
    if(process.argv.some((s) => {return s == "--disable-stretch"}))
        stretch_flag = false;
}

import readline from "readline";

let part1_flag = true;
let part2_flag = true;
let stretch_flag = true;

parseFlags();

if(stretch_flag) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Write N ", (n) => {
      fizzBuzz(parseInt(n));

      rl.close();
    })
} else 
    fizzBuzz(300);