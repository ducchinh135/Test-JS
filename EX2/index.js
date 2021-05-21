let stringOne = prompt('Nhập vào chuỗi 1');
let stringTwo = prompt('Nhập vào chuỗi 2');
let arrOne = [...stringOne];
let newStr = [];
let arrTwo = [...stringTwo];
let maxLength = Math.max(arrOne.length, arrTwo.length);
for (let i = 0; i < maxLength; i++) {
    newStr.push(arrOne[i]);
    newStr.push(arrTwo[i]);
}
for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] == undefined) {
        newStr.splice(i, 1);
    }
}
let resultStr = newStr.join('');
alert("Chuỗi cần tìm là :" + resultStr);