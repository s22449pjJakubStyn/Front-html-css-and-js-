var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Przełączanie między dodawaniem i usuwaniem „aktywnej” klasy,
    w celu podświetlenia przycisku sterującego panelem */
    this.classList.toggle("active");

    /* Przełączanie między ukrywaniem a pokazywaniem aktywnego panelu */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}