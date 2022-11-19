const navItems = document.querySelectorAll('.link')
const logo = document.getElementsByClassName("logo")
const current = document.getElementsByClassName("active");
const menu = document.querySelector(".menu");
const openMenu = document.querySelector(".open");
const menuSize = document.querySelector(".menu-size")
const logoPhone = document.querySelector(".logoPhone")

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        openMenu.innerText = '☰'
    } else {
        menu.classList.add("showMenu");
        openMenu.innerText = 'X'
    }
}

openMenu.addEventListener("click", toggleMenu);

navItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)

for (let i = 0; i < navItems.length; i++) {
    navItems[i].onclick = function () {
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    }

    logo.onclick = function () {
        current[0].className = current[0].className.replace(" active", "");
        menuSize.className += " active"
    }
}

logoPhone.onclick = () => {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu")
        openMenu.innerText = '☰'
    }
}
let slideIndex = 0;
showSlides();
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); 
}