let stringOne = "abc";
let stringTwo = "123";

let arr1 = stringOne.split("");
let arr2 = stringTwo.split("");

console.log(arr1);
console.log(arr2);

let newarr = [];

for (j in arr2) {
    for (i in arr1) {
        console.log(j);
        console.log(i)
    }
}
console.log(newarr)