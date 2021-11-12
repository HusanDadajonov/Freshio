let elSearchBtn = document.querySelector(".bottom-menu__btn--search");
let elForm = document.querySelector(".header__form-box");
let elIconSearch = document.querySelector(".bi-search");
let elIconX = document.querySelector(".bi-x");
let elBurgerBtn = document.querySelector(".header__burger-btn");
let elNav = document.querySelector(".nav__list-box");
let elOpacitybody = document.querySelector(".nav__opacity");
let elnavCloseBtn = document.querySelector(".nav__close-btn");
let elNavBurger = document.querySelector(".nav__contents");
let elShopDrowDown = document.querySelector(".shop-dropw-down");
const elSLiderBtns = document.querySelectorAll(".customers__btn");
let elBacktoTop = document.querySelector(".back-to-top");

window.addEventListener("scroll",function(){
    elBacktoTop.classList.toggle("show-back-to-top",window.scrollY > 100);
})

elSLiderBtns.forEach(function(item) {
    item.addEventListener("click", function () {
        let clickedBtn = item;
        elSLiderBtns.forEach(function(item) {
            item.classList.remove("customers__btn--active")
        })
        clickedBtn.classList.add("customers__btn--active")
    })    
})

elSearchBtn.addEventListener("click",function() {
    elForm.classList.toggle("show-form");
    elIconSearch.classList.toggle("remove-search-btn");
    elIconX.classList.toggle("show-x-icon");
})

elNavBurger.addEventListener("click", function () {
    elShopDrowDown.classList.toggle("show-shop-drop-down")
})

elBurgerBtn.addEventListener("click",function (){
    elNav.classList.toggle("show-nav-list-box");
    elOpacitybody.classList.toggle("add-opacity");
})

elnavCloseBtn.addEventListener("click",function (){
    elNav.classList.remove("show-nav-list-box");
    elOpacitybody.classList.remove("add-opacity");
})



