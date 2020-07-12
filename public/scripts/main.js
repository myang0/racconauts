var starCount = 100;

function generateStars() {
  for (i = 0; i < starCount; i++) {
    var dimensions = Math.floor(3 + (Math.random() * 3));
    var halfDim = Math.ceil(dimensions / 2);
  
    var starDiv = document.createElement('div');
  
    starDiv.style.width = dimensions + 'px';
    starDiv.style.height = dimensions + 'px';
    starDiv.style.borderRadius = `${halfDim}px ${halfDim}px ${halfDim}px ${halfDim}px`;
    starDiv.style.marginLeft = `${Math.floor(Math.random() * window.innerWidth)}px`;
    starDiv.style.marginTop = `${Math.floor(Math.random() * document.body.scrollHeight)}px`;
    starDiv.style.opacity = `${Math.random()}`;
  
    starDiv.setAttribute('class', 'star');
  
    document.querySelector('.hide-overflow').appendChild(starDiv);
  }
}

function randomValues() {
  anime({
    targets: '.star',
    translateX: function() { return anime.random(-10, 10); },
    translateY: function() { return anime.random(-10, 10); },
    opacity: function() { return anime.random(0, 1) },
    scale: function() { return anime.random(0.5, 1.5) },
    easing: 'easeInOutQuad',
    delay: function() { return anime.random(200, 800) },
    endDelay: function() { return anime.random(200, 800) },
    duration: function() { return anime.random(500, 1000) },
    complete: randomValues
  });
}

generateStars();
randomValues();
