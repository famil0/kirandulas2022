let a1 = 0;
let a2 = 0;
let a3 = 0;
let a4 = 0;

let i1 = Array.from(document.querySelector(".egy").children[1].children);
let i2 = Array.from(document.querySelector(".ketto").children[1].children);
let i3 = Array.from(document.querySelector(".harom").children[1].children);
let i4 = Array.from(document.querySelector(".negy").children[1].children);


let prev1 = document.querySelector(".egy").children[0];
let next1 = document.querySelector(".egy").children[2];
prev1.addEventListener("click", p1)
next1.addEventListener("click", n1)

let prev2 = document.querySelector(".ketto").children[0];
let next2 = document.querySelector(".ketto").children[2];
prev2.addEventListener("click", p2)
next2.addEventListener("click", n2)

let prev3 = document.querySelector(".harom").children[0];
let next3= document.querySelector(".harom").children[2];
prev3.addEventListener("click", p3)
next3.addEventListener("click", n3)

let prev4 = document.querySelector(".negy").children[0];
let next4= document.querySelector(".negy").children[2];
prev4.addEventListener("click", p4)
next4.addEventListener("click", n4)

let prev5 = document.querySelector(".ot").children[0];
let next5= document.querySelector(".ot").children[2];
prev5.addEventListener("click", p5)
next5.addEventListener("click", n5)



function n1() {
    if (a1 < i1.length - 1) {
        i1[a1].classList.toggle("active");
        i1[a1 + 1].classList.toggle("active");
    }
    else {
        i1[a1].classList.toggle("active");
        i1[0].classList.toggle("active");
        a1 = -1;
    }
    a1++;
}

function p1() {
    if (a1 > 0) {
        i1[a1].classList.toggle("active");
        i1[a1 - 1].classList.toggle("active");
    }
    else {
        i1[i1.length - 1].classList.toggle("active");
        i1[0].classList.toggle("active");
        a1 = i1.length;
    }
    a1--;
}

function n2() {
    if (a2 < i2.length - 1) {
        i2[a2].classList.toggle("active");
        i2[a2 + 1].classList.toggle("active");
    }
    else {
        i2[a2].classList.toggle("active");
        i2[0].classList.toggle("active");
        a2 = -1;
    }
    a2++;
}

function p2() {
    if (a2 > 0) {
        i2[a2].classList.toggle("active");
        i2[a2 - 1].classList.toggle("active");
    }
    else {
        i2[i2.length - 1].classList.toggle("active");
        i2[0].classList.toggle("active");
        a2 = i2.length;
    }
    a2--;
}

function n3() {
    if (a3 < i3.length - 1) {
        i3[a3].classList.toggle("active");
        i3[a3 + 1].classList.toggle("active");
    }
    else {
        i3[a3].classList.toggle("active");
        i3[0].classList.toggle("active");
        a3 = -1;
    }
    a3++;
}

function p3() {
    if (a3 > 0) {
        i3[a3].classList.toggle("active");
        i3[a3 - 1].classList.toggle("active");
    }
    else {
        i3[i3.length - 1].classList.toggle("active");
        i3[0].classList.toggle("active");
        a3 = i3.length;
    }
    a3--;
}

function n4() {
    if (a4 < i4.length - 1) {
        i4[a4].classList.toggle("active");
        i4[a4 + 1].classList.toggle("active");
    }
    else {
        i4[a4].classList.toggle("active");
        i4[0].classList.toggle("active");
        a4 = -1;
    }
    a4++;
}

function p4() {
    if (a4 > 0) {
        i4[a4].classList.toggle("active");
        i4[a4 - 1].classList.toggle("active");
    }
    else {
        i4[i4.length - 1].classList.toggle("active");
        i4[0].classList.toggle("active");
        a4 = i4.length;
    }
    a4--;
}