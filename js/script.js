//isShowBtn & isShowBtn_hide
window.onload = () => {

    const scrollBtn = document.querySelector('.isShowBtn')

    window.onscroll = () => {
        if (window.scrollY > 700) {
            scrollBtn.classList.remove('isShowBtn_hide');
        } else if (window.scrollY < 700) {
            scrollBtn.classList.add('isShowBtn_hide');
        }
    };

    scrollBtn.onclick = () => {
        window.scrollTo(0, 0);
    };
};

//Gallery btn open-close
// const dialog = document.querySelector("#dialog");
// document.querySelector("#open-btn").addEventListener('click', () => {
//     dialog.showModal();
// });

// document.querySelector("#close-btn").addEventListener('click', () => {
//     dialog.close();
// });


//Section-Gallery
//var slideIndex = 1;
//showSlides(slideIndex);
//
//function plusSlides(n) {
//  showSlides(slideIndex += n);
//}
//
//function currentSlide(n) {
//  showSlides(slideIndex = n);
//}
//
//function showSlides(n) {
//  var i;
//  var slides = document.getElementsByClassName("mySlides");
//  var dots = document.getElementsByClassName("demo");
//  var captionText = document.getElementById("caption");
//  if (n > slides.length) {slideIndex = 1}
//  if (n < 1) {slideIndex = slides.length}
//  for (i = 0; i < slides.length; i++) {
//      slides[i].style.display = "none";
//  }
//  for (i = 0; i < dots.length; i++) {
//      dots[i].className = dots[i].className.replace(" active", "");
//  }
//  slides[slideIndex-1].style.display = "block";
//  dots[slideIndex-1].className += " active";
//  captionText.innerHTML = dots[slideIndex-1].alt;
//}