const apiData = {
  url: "https://api.le-systeme-solaire.net/rest/bodies/",
}
var planetNames = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

function getPlanet(planetName){
  const apiUrl = `${apiData.url}${planetName}`

  fetch(apiUrl)
  .then( (data) => data.json())
  .then( (planet) => generateHtml(planet));
}

const generateHtml = (planetJson) => {
  console.log(planetJson);

  var body = document.body,
      table  = document.createElement('table'),
      header = document.createElement('h1');

  header.innerHTML = planetJson.englishName;
  header.className = planetJson.englishName.toString().toLowerCase();
  table.appendChild(header);
  table.className = header.className.concat("Table");
  table.style.width  = '200px';
  table.style.border = '1px solid black';
  

  for(var i = 0; i < 4; i++){
    var tr = table.insertRow();
    var td = tr.insertCell();
    var th = document.createElement('th');

    switch(i) {
      case 0:
        td.className = "massTitle";
        th.className = "massValue";
        td.innerHTML = "Mass";
        th.innerHTML = planetJson.mass.massValue.toString()
          .concat("*10^")
          .concat(planetJson.mass.massExponent.toString())
          .concat("kg");
        break;
      case 1:
        td.className = "volume";
        th.className = "volumeValue";
        td.innerHTML = "Volume";
        th.innerHTML = planetJson.vol.volValue.toString()
          .concat("*10^")
          .concat(planetJson.vol.volExponent.toString())
          .concat(" km^3");
        break;
      case 2:
        td.className = "density";
        th.className = "densityValue";
        td.innerHTML = "Density";
        th.innerHTML = planetJson.density.toString()
          .concat(" g/cm^3");
        break;
      case 3:
        td.className = "gravity";
        th.className = "gravityValue";
        td.innerHTML = "Gravity";
        th.innerHTML = planetJson.gravity.toString()
          .concat(" m/s^2");
        break;
    }
    tr.appendChild(th);
    td.style.border = '1px solid black';
    td.style.color = "white";
    th.style.color = "white";
    header.style.color = "white";

  }
  body.appendChild(table);
}

planetNames.forEach(getPlanet);
