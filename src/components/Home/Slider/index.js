
let slideIndex = 1;
showSlide(slideIndex);


function plusSlide(n) {
    showSlide(slideIndex += n);
    clearInterval(auto)
    auto = setInterval(() => {
        time2()
    }, 3000)
}

function time2() {
    showSlide(slideIndex += 1);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}


function showSlide(n) {


    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");


    if (n > slides.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = slides.length };

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";


    };
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    };

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}

// setTimeout(time2, 3000);
let auto = setInterval(() => {
    time2()
}, 5000)
