var cometCount = 4;
var comets = [];

function generateComets() {
  for (i = 0; i < cometCount; i++) {
    var dimensions = Math.floor(7 + (Math.random() * 5));
    var halfDim = Math.ceil(dimensions / 2);
  
    var cometDiv = document.createElement('div');
  
    cometDiv.style.width = dimensions + 'px';
    cometDiv.style.height = dimensions + 'px';
    cometDiv.style.borderRadius = `${halfDim}px ${halfDim}px ${halfDim}px ${halfDim}px`;
    cometDiv.style.marginLeft = `${window.innerWidth + 50 + Math.floor(Math.random() * 50)}px`;
    cometDiv.style.marginTop = `${Math.floor(Math.random() * window.innerHeight)}px`;
    cometDiv.style.opacity = `${0.25 + (Math.random() * 0.5)}`;
    cometDiv.style.transform = `scaleX(15)`;
    cometDiv.style.background = randomColor({
      luminosity: 'bright'
    });
  
    cometDiv.setAttribute('class', 'comet');
  
    comets.push(cometDiv);
    document.querySelector('.hide-overflow').appendChild(cometDiv);
  }
}

function shiftComets() {
  for (i = 0; i < comets.length; i++) {
    comets[i].style.marginLeft = `${window.innerWidth + 100 + Math.floor(Math.random() * 50)}px`;
    comets[i].style.marginTop = `${Math.floor(Math.random() * window.innerHeight)}px`;
    comets[i].style.background = randomColor({
      luminosity: 'bright'
    });
  }
}

function cometRandomValues() {
  shiftComets();

  anime({
    targets: '.comet',
    translateX: -1000,
    translateY: function() { return anime.random(-400, 400); },
    easing: 'easeInOutQuad',
    delay: function() { return anime.random(1000, 20000) },
    endDelay: function() { return anime.random(1000, 20000) },
    duration: function() { return anime.random(500, 1500) },
    direction: 'alternate',
    complete: cometRandomValues
  });
}

generateComets();
cometRandomValues();