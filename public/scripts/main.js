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
  translateY: 5,
  direction: 'alternate',
  duration: 1000,
  loop: true,
  easing: 'cubicBezier(0.445, 0.05, 0.55, 0.95)'
});

anime({
  targets: '#moon',
  scale: 1.2,
  rotate: '10deg',
  duration: 2000,
  direction: 'alternate',
  loop: true,
  easing: 'cubicBezier(.5, .05, .1, .3)'
});
