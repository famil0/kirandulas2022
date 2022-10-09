let a5 = 0;
let a6 = 0;
let a7 = 0;


let i5 = Array.from(document.querySelector(".ot").children[1].children);
let i6 = Array.from(document.querySelector(".hat").children[1].children);
let i7 = Array.from(document.querySelector(".het").children[1].children);


let prev5 = document.querySelector(".ot").children[0];
let next5= document.querySelector(".ot").children[2];
prev5.addEventListener("click", p5)
next5.addEventListener("click", n5)

let prev6 = document.querySelector(".hat").children[0];
let next6= document.querySelector(".hat").children[2];
prev6.addEventListener("click", p6)
next6.addEventListener("click", n6)

let prev7 = document.querySelector(".het").children[0];
let next7= document.querySelector(".het").children[2];
prev7.addEventListener("click", p7)
next7.addEventListener("click", n7)



function n5() {
    if (a5 < i5.length - 1) {
        i5[a5].classList.toggle("active");
        i5[a5 + 1].classList.toggle("active");
    }
    else {
        i5[a5].classList.toggle("active");
        i5[0].classList.toggle("active");
        a5 = -1;
    }
    a5++;
}

function p5() {
    if (a5 > 0) {
        i5[a5].classList.toggle("active");
        i5[a5 - 1].classList.toggle("active");
    }
    else {
        i5[i5.length - 1].classList.toggle("active");
        i5[0].classList.toggle("active");
        a5 = i5.length;
    }
    a5--;
}

function n6() {
    if (a6 < i6.length - 1) {
        i6[a6].classList.toggle("active");
        i6[a6 + 1].classList.toggle("active");
    }
    else {
        i6[a6].classList.toggle("active");
        i6[0].classList.toggle("active");
        a6 = -1;
    }
    a6++;
}

function p6() {
    if (a6 > 0) {
        i6[a6].classList.toggle("active");
        i6[a6 - 1].classList.toggle("active");
    }
    else {
        i6[i6.length - 1].classList.toggle("active");
        i6[0].classList.toggle("active");
        a6 = i6.length;
    }
    a6--;
}

function n7() {
    if (a7 < i7.length - 1) {
        i7[a7].classList.toggle("active");
        i7[a7 + 1].classList.toggle("active");
    }
    else {
        i7[a7].classList.toggle("active");
        i7[0].classList.toggle("active");
        a7 = -1;
    }
    a7++;
}

function p7() {
    if (a7 > 0) {
        i7[a7].classList.toggle("active");
        i7[a7 - 1].classList.toggle("active");
    }
    else {
        i7[i7.length - 1].classList.toggle("active");
        i7[0].classList.toggle("active");
        a7 = i7.length;
    }
    a7--;
}