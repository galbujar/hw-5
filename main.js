function firstLetterName(name) {
    alert("The name " + name + " starts with the letter " + name[0]);
}

function divisibleByTwo(num) {
    if (num % 2 == 0) {
    console.log("The number " + num + " is divisble by two. ");
    console.log(true);
    } else {
        console.log("The number " + num + " is not divisble by two. ");
        console.log(false);
    }
}

function largestNum(arr) {
    console.log(Math.max(...arr));
}

firstLetterName("Gilmaris");
divisibleByTwo(8);
divisibleByTwo(9);
largestNum([2, 15, 32, 8, 10, 13, 21])
