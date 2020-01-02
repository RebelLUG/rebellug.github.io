var slideIndex = [1,1];
var slideId = ["slides1", "slides2", "slides3", "slides4", "slides5", "slides6"]
showSlides(0, 0);
showSlides(0, 1);
showSlides(0, 2);
showSlides(0, 3);
showSlides(0, 4);
showSlides(0, 5);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}