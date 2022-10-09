let a8 = 0;
let a9 = 0;
let a10 = 0;


let i8 = Array.from(document.querySelector(".nyolc").children[1].children);
let i9 = Array.from(document.querySelector(".kilenc").children[1].children);
let i10 = Array.from(document.querySelector(".tiz").children[1].children);


let prev8 = document.querySelector(".nyolc").children[0];
let next8= document.querySelector(".nyolc").children[2];
prev8.addEventListener("click", p8)
next8.addEventListener("click", n8)

let prev9 = document.querySelector(".kilenc").children[0];
let next9= document.querySelector(".kilenc").children[2];
prev9.addEventListener("click", p9)
next9.addEventListener("click", n9)

let prev10 = document.querySelector(".tiz").children[0];
let next10= document.querySelector(".tiz").children[2];
prev10.addEventListener("click", p10)
next10.addEventListener("click", n10)



function n8() {
    if (a8 < i8.length - 1) {
        i8[a8].classList.toggle("active");
        i8[a8 + 1].classList.toggle("active");
    }
    else {
        i8[a8].classList.toggle("active");
        i8[0].classList.toggle("active");
        a8 = -1;
    }
    a8++;
}

function p8() {
    if (a8 > 0) {
        i8[a8].classList.toggle("active");
        i8[a8 - 1].classList.toggle("active");
    }
    else {
        i8[i8.length - 1].classList.toggle("active");
        i8[0].classList.toggle("active");
        a8 = i8.length;
    }
    a8--;
}

function n9() {
    if (a9 < i9.length - 1) {
        i9[a9].classList.toggle("active");
        i9[a9 + 1].classList.toggle("active");
    }
    else {
        i9[a9].classList.toggle("active");
        i9[0].classList.toggle("active");
        a9 = -1;
    }
    a9++;
}

function p9() {
    if (a9 > 0) {
        i9[a9].classList.toggle("active");
        i9[a9 - 1].classList.toggle("active");
    }
    else {
        i9[i9.length - 1].classList.toggle("active");
        i9[0].classList.toggle("active");
        a9 = i9.length;
    }
    a9--;
}

function n10() {
    if (a10 < i10.length - 1) {
        i10[a10].classList.toggle("active");
        i10[a10 + 1].classList.toggle("active");
    }
    else {
        i10[a10].classList.toggle("active");
        i10[0].classList.toggle("active");
        a10 = -1;
    }
    a10++;
}

function p10() {
    if (a10 > 0) {
        i10[a10].classList.toggle("active");
        i10[a10 - 1].classList.toggle("active");
    }
    else {
        i10[i10.length - 1].classList.toggle("active");
        i10[0].classList.toggle("active");
        a10 = i10.length;
    }
    a10--;
}