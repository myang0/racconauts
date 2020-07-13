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

// for (i = 0; i < planets.length; i++) {
//   (function(index) {
//     planets[index].addEventListener("click", function() {
        
//         if (document.body.contains(detailTables)) {
//             detailTables.parentNode.removeChild(detailTables);
//         } else {
//             getPlanet(planetNames[index]);
//             body.appendChild(document.importNode(detailContainer.content, true));
//         }
//     });
//   })(i);
// }