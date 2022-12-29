let clickmenu = document.getElementById("clickmenu");
let displaymenu = document.getElementById("displaymenu");
let closemenu = document.getElementById("closemenu");
let background_black = document.getElementById("background-black");
let grow1 = document.getElementById("grow1");
let grow2 = document.getElementById("grow2");
let grow3 = document.getElementById("grow3");

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
})
grow2.addEventListener("click",() => {
    grow2.style.width = "10px";
    grow2.style.height = "10px";
    grow1.style.width = "7px";
    grow1.style.height = "7px";
    grow3.style.width = "7px";
    grow3.style.height = "7px";
})
grow3.addEventListener("click",() => {
    grow3.style.width = "10px"
    grow3.style.height = "10px";
    grow1.style.width = "7px";
    grow1.style.height = "7px";
    grow2.style.width = "7px";
    grow2.style.height = "7px";
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
});





// menu auto slide
/*let i = 0;
function Menu() {
    let array_img = [
        "https://images.unsplash.com/photo-1672218814630-97eb18814965?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1670844763152-81c99a307cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1672152024595-d8f2ec9dbdeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    ]

    let imgslide = document.getElementById("imgslide");
    imgslide.src = array_img[i];

    i++;
    if (i >= array_img.length) {
        i = 0;
    }
}
setInterval("Menu()",2000);*/