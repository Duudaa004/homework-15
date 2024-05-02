// work 1

for (let i = 0; i < 100; i++) {
    console.log(i);
}

// work 2

let i = 0;
while (i < 50) {
    console.log(i);
    i +=1;
}



// work 3

const name = ["nugo", "dato", "nini", "giorgi", "mari"];
console.log(name);
name.pop();
console.log(name);
name.shift();
console.log(name);
name.unshift("nana");
console.log(name);
name.push("temo");
console.log(name);


// work 4

const empty = [];
for (let i = 1; i < 10000; i++) {
    empty.push(i * i);
}
console.log(empty)

// work 5


const numbersArray =  [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbersArray.length; i++) 
{
    sum += numbersArray[i];
}
console.log(sum);

// work 6 can't do :(

// work 7

function changeCase(paragraph) {
    return paragraph.toLowerCase();
}

let paragraph = "MY NAME IS JOHN";

console.log(changeCase(paragraph));

// work 8

function evenNumbers(numbers) {
    return numbers.filter(numbers => numbers % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(evenNumbers(numbers));
