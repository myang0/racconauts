var neptunePath = anime.path('#neptune-orbit path');
var uranusPath = anime.path('#uranus-orbit path');
var saturnPath = anime.path('#saturn-orbit path');
var jupiterPath = anime.path('#jupiter-orbit path');
var marsPath = anime.path('#mars-orbit path')
var earthPath = anime.path('#earth-orbit path');
var venusPath = anime.path('#venus-orbit path');
var mercuryPath = anime.path('#mercury-orbit path');

anime({
  targets: '#neptune',
  translateX: neptunePath('x'),
  translateY: neptunePath('y'),
  easing: 'linear',
  duration: 1650000,
  loop: true
});

anime({
  targets: '#uranus',
  translateX: uranusPath('x'),
  translateY: uranusPath('y'),
  easing: 'linear',
  duration: 840000,
  loop: true
});

anime({
  targets: '#saturn',
  translateX: saturnPath('x'),
  translateY: saturnPath('y'),
  easing: 'linear',
  duration: 290000,
  loop: true
})

anime({
  targets: '#jupiter',
  translateX: jupiterPath('x'),
  translateY: jupiterPath('y'),
  easing: 'linear',
  duration: 120000,
  loop: true
})

anime({
  targets: '#mars',
  translateX: marsPath('x'),
  translateY: marsPath('y'),
  easing: 'linear',
  duration: 19000,
  loop: true
})

anime({
  targets: '#earth',
  translateX: earthPath('x'),
  translateY: earthPath('y'),
  easing: 'linear',
  duration: 10000,
  loop: true
});

anime({
  targets: '#venus',
  translateX: venusPath('x'),
  translateY: venusPath('y'),
  easing: 'linear',
  duration: 6200,
  loop: true
});

anime({
  targets: '#mercury',
  translateX: mercuryPath('x'),
  translateY: mercuryPath('y'),
  easing: 'linear',
  duration: 2500,
  loop: true
});
