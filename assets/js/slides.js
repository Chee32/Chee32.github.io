slider = document.getElementById("slider_1");
slider.onmouseover = pauseSlider;
slider.onmouseout = function() { slider.setAttribute("data-slidetimer", setTimeout(runSlides, 5000) ); }// Change image after 5 seconds

runSlides();

// Next/previous controls
function plusSlides(n) {
  slider.setAttribute("data-slideindex", parseInt(slider.getAttribute("data-slideindex")) + n);
  showSlides();
}

// Thumbnail image controls
function currentSlide(n) {
  slider.setAttribute("data-slideindex", n.toString());
  showSlides();
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  if (parseInt(slider.getAttribute("data-slideindex")) > slides.length) {slider.setAttribute("data-slideindex" , "1")} 
  if (parseInt(slider.getAttribute("data-slideindex")) < 1) {slider.setAttribute("data-slideindex" , slides.length)}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[parseInt(slider.getAttribute("data-slideindex"))-1].style.display = "block"; 
  dots[parseInt(slider.getAttribute("data-slideindex"))-1].className += " active";

}

function runSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slider.setAttribute("data-slideindex", parseInt(slider.getAttribute("data-slideindex")) + 1 );
  if (parseInt(slider.getAttribute("data-slideindex")) > slides.length) {slider.setAttribute("data-slideindex" , "1")}
   
  slides[parseInt(slider.getAttribute("data-slideindex"))-1].style.display = "block";
  dots[parseInt(slider.getAttribute("data-slideindex"))-1].className += " active"; 
  slider.setAttribute("data-slidetimer", setTimeout(runSlides, 10000) ); // Change image every 10 seconds

}

function pauseSlider() {
  clearTimeout(parseInt(slider.getAttribute("data-slidetimer")));
}