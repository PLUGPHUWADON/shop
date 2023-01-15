let clickmenu = document.getElementById("clickmenu");
let displaymenu = document.getElementById("displaymenu");
let closemenu = document.getElementById("closemenu");
let background_black = document.getElementById("background-black");
let grow1 = document.getElementById("grow1");
let grow2 = document.getElementById("grow2");
let grow3 = document.getElementById("grow3");
let img1 = document.querySelectorAll(".img1");

// script click menu
clickmenu.addEventListener("click",() => {
    displaymenu.classList.remove('closenav');
    displaymenu.classList.add("openmenu");
    background_black.classList.add("background-back-open");
});

closemenu.addEventListener("click",() => {
    displaymenu.classList.remove("openmenu");
    displaymenu.classList.add('closenav');
    background_black.classList.remove("background-back-open");
})

// script click slide img
grow1.addEventListener("click",() => {
    grow1.style.width = "10px";
    grow1.style.height = "10px";
    grow2.style.width = "7px";
    grow2.style.height = "7px";
    grow3.style.width = "7px";
    grow3.style.height = "7px";
    for (let i = 0 ; i < img1.length ; i++) {
        img1[i].style.display = "none";
    }
    img1[0].style.display = "block";
})
grow2.addEventListener("click",() => {
    grow2.style.width = "10px";
    grow2.style.height = "10px";
    grow1.style.width = "7px";
    grow1.style.height = "7px";
    grow3.style.width = "7px";
    grow3.style.height = "7px";
    for (let i = 0 ; i < img1.length ; i++) {
        img1[i].style.display = "none";
    }
    img1[1].style.display = "block";
})
grow3.addEventListener("click",() => {
    grow3.style.width = "10px"
    grow3.style.height = "10px";
    grow1.style.width = "7px";
    grow1.style.height = "7px";
    grow2.style.width = "7px";
    grow2.style.height = "7px";
    for (let i = 0 ; i < img1.length ; i++) {
        img1[i].style.display = "none";
    }
    img1[2].style.display = "block";
})

// script click slide product
let check_clickl = 0;
let check_clickr = 0;

let clickl_slide_product = document.getElementById("clickl_slide_product");
clickl_slide_product.addEventListener("click",() => {
    let array = [
        "#p1"
    ];
    let len = array.length - 1;
    if (check_clickl > len) {
        check_clickl = len
    }
    clickl_slide_product.href = array[check_clickl];
    ++check_clickl;
});

let clickr_slide_product = document.getElementById("clickr_slide_product");
clickr_slide_product.addEventListener("click",() => {
    let array = [
        "#p8"
    ];
    let len = array.length - 1;
    if (check_clickr > len) {
        check_clickr = len;
    }
    clickr_slide_product.href = array[check_clickr];
    ++check_clickr;
})