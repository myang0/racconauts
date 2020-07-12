var planets = document.querySelectorAll('.planet');
var planetLabels = document.querySelectorAll('.planet-label');

for (i = 0; i < planets.length; i++) {
  (function(index) {
    planets[index].addEventListener("mouseover", function(event) {
      planetLabels[index].style.opacity = 1;
    });
  })(i);

  (function(index) {
    planets[index].addEventListener("mouseout", function(event) {
      planetLabels[index].style.opacity = 0;
    });
  })(i);
}
