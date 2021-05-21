
let i = 0;

function dialNumber() {
    let inputNumber = document.querySelector("#inputNumber").value;
    let random = Math.floor(Math.random() * 11);
    console.log(inputNumber);
    console.log(random);

    while (true) {
        if (isNaN(inputNumber)) {
            alert("Moi nhap lai la 1 so");
            break;
        } else {
            if (inputNumber === random) {
                alert("Xin chúc mừng bạn đã trúng thưởng")
            }
            else {
                alert("Chúc may mắn lần sau");
                break;
            }
        }
    }

    document.querySelector("#inputNumber").value = "";
}

