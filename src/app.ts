console.log("hello world");

const welcomePerson = (name: string): string => {
    return "hello " + name;
}

console.log(welcomePerson("aeong"));

let num: number = 3;
for(let i: number = 1; i <= 10; i++){
    console.log(num + "*" + i + "=" + (num * i));
}

let a: number = 5;
if (a > 0){
    console.log("a is positive");
}
else if(a == 5){
    console.log("a is 5!");
}
else{
    console.log("a is negative");
}