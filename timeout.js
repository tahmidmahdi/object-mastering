function doSomething() {
    console.log(222);
}

console.log(111);
setTimeout(doSomething, 4000);
console.log(333);

setInterval(() => {
    console.log("hey i am set Interval");
}, 3000);