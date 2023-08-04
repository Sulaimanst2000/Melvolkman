// Slick Slider
$('.slideSlick').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// AOS Animation
AOS.init({
    offset: 0,
    duration: 1800,
    once: true,
});
// Cart
const cart = document.getElementById("cart")
const cartSideBar = document.querySelector(".cart-sidebar")
const closeCart =document.querySelector(".close-cart")

let Cart = [];
let buttonsDOM = [];

cart.addEventListener("click", function () {
    cartSideBar.style.transform = "translate(0%)"
    const bodyOverlay = document.createElement("div")
    bodyOverlay.classList.add("overlay");
    setTimeout(function () {
        document.querySelector("body").append(bodyOverlay)
    }, 300)
})
closeCart.addEventListener("click", function () {
    cartSideBar.style.transform = "translate(100%)"
    const bodyOverlay = document.querySelector(".overlay")
    document.querySelector("body").removeChild(bodyOverlay)
})

    

// search bar
var slideSearch = document.querySelector(".btn-outline-success");
var input1 = document.querySelector(".input-box");

$(document).ready(function () {
    $(slideSearch).click(function () {
        if ($(input1).toggle()) {
            input1.style.visibility = "visible"
            input1.style.zIndex = "5"
        }
        else {
            input1.style.visibility = "hidden"
        }
    });
});

//dropdown
function showDropdown() {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.add('show');
}
function hideDropdown() {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.remove('show');
}

//sticky header
window.onscroll = function () { myfunction() };
let header = document.querySelector(".head");
let sticky = header.offsetTop;
function myfunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

