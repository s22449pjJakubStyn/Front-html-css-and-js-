// Czarny blok, który zasłania stronę (wyświetla)
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Zamyka ten czarny blok
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Strzałki przełączania zdjęć 
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Wyświewtlanie slajdu 
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    //Domyślnie wszystkie slajdy są włączone pętla je "ukrywa" i włącza wybrane zdjęcie slides[slideIndex-1].style.display = "block";
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    //Usuwa klasę active z elementów z klasą demo
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    //Ustawia odpowiewdni tytuł zdjęcia
    captionText.innerHTML = dots[slideIndex-1].alt;
  }