const apiData = {
  url: "https://api.le-systeme-solaire.net/rest/bodies/",
}
var planetNames = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

var detailContainer = document.getElementById('detail-table');

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
  

  for(var i = 0; i < 4; i++){
    var tr = table.insertRow();
    var th = document.createElement('th');
    th = tr.appendChild(th);
    var td = document.createElement('td');

    switch(i) {
      case 0:
        th.className = "massTitle tableTitle";
        td.className = "massValue tableValue";
        th.innerHTML = "Mass";
        td.innerHTML = planetJson.mass.massValue.toString()
          .concat(" × 10")
          .concat(planetJson.mass.massExponent.toString().sup())
          .concat(" kg");
        break;
      case 1:
        th.className = "volume tableTitle";
        td.className = "volumeValue tableValue";
        th.innerHTML = "Volume";
        td.innerHTML = planetJson.vol.volValue.toString()
          .concat(" × 10")
          .concat(planetJson.vol.volExponent.toString().sup())
          .concat(" km" + "3".sup());
        break;
      case 2:
        th.className = "density tableTitle";
        td.className = "densityValue tableValue";
        th.innerHTML = "Density";
        td.innerHTML = planetJson.density.toString()
          .concat(" g/cm" + "3".sup());
        break;
      case 3:
        th.className = "gravity tableTitle";
        td.className = "gravityValue tableValue";
        th.innerHTML = "Gravity";
        td.innerHTML = planetJson.gravity.toString()
          .concat(" m/s" + "2".sup());
        break;
    }

    tr.appendChild(td);

  }

  detailContainer.appendChild(table).toggle();
}

// planetNames.forEach(getPlanet);
