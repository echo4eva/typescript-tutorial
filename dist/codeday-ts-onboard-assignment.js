// - For each number from 1-100, the program prints the number
// - If the number is evenly divisible by 3, the program also prints "fizz"
// - If the number is evenly divisible by 5, the program also prints "buzz"
// - If it's evenly divisible by both, it prints "fizzbuzz"
// - The program should use a method to determine what to print.
var isWhat = function (givenNum) {
    if (givenNum % 3 == 0 && givenNum % 5 == 0) {
        return "fizzbuzz";
    }
    else if (givenNum % 3 == 0) {
        return "fizz";
    }
    else if (givenNum % 5 == 0) {
        return "buzz";
    }
    else {
        return givenNum;
    }
};
var fizzBuzzFunc = function () {
    for (var i = 1; i <= 100; i++) {
        console.log(isWhat(i));
    }
};
var main = function () {
    fizzBuzzFunc();
};
main();
