let n = Number(prompt("Moi nhap n ?"));
let inputNumber = Number(prompt("Moi nhap so can tim doi dien?"));

function findOppositeNumber(n, inputNumber) {
    let i = Number((n / 2).toFixed());
    console.log(i);
    let oppositeNumber;
    if (inputNumber < i) {
        oppositeNumber = inputNumber + i;
    }
    else {
        oppositeNumber = inputNumber - i;
    }
    alert(oppositeNumber)
}

findOppositeNumber(n, inputNumber);