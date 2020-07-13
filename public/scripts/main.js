var planets = document.querySelectorAll('.planet');
planetNames.reverse(); //swap the order of planets in planetData.js
// var detailTables = document.getElementsByTagName('table');


for (i = 0; i < planets.length; i++) {
  (function(index) {
    planets[index].addEventListener("click", function() {
        getPlanet(planetNames[index]);

        // console.log(index);
    });
  })(i);
}

anime({
  targets: '#intro',
  translateX: 350,
  easing: 'spring(1, 80, 10, 0)'
});
