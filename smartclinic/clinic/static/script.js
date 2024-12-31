
function onMenuClick() {
    var navbar = document.getElementById("navigation-bar");
    var responsive_class_name = "responsive";

    navbar.classList.toggle(responsive_class_name);
}

//For Slider
var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0;
const interval = 3000;

function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(' active', '');
    }

    //Update current image index
    if (n !== undefined) {
        currentImg = n;
    } else {
        currentImg = (currentImg + 1) % imgs.length;
    }

    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
}

//Allow manual slide change
var timer = setInterval(changeSlide, interval);

//Allow manual slide change
function manualChange(n) {
    clearInterval(timer);
    changeSlide(n);
    timer = setInterval(changeSlide, interval);
}

//Attach click handlers for manual changes
dots.forEach((dot, index) => {
    dot.onclick = () => manualChange(index);
});

//Initialize the slider
changeSlide(0);