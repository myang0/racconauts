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
  duration: 3300000,
  loop: true
});

anime({
  targets: '#uranus',
  translateX: uranusPath('x'),
  translateY: uranusPath('y'),
  easing: 'linear',
  duration: 1680000,
  loop: true
});

anime({
  targets: '#saturn',
  translateX: saturnPath('x'),
  translateY: saturnPath('y'),
  easing: 'linear',
  duration: 580000,
  loop: true
})

anime({
  targets: '#jupiter',
  translateX: jupiterPath('x'),
  translateY: jupiterPath('y'),
  easing: 'linear',
  duration: 240000,
  loop: true
})

anime({
  targets: '#mars',
  translateX: marsPath('x'),
  translateY: marsPath('y'),
  easing: 'linear',
  duration: 38000,
  loop: true
})

anime({
  targets: '#earth',
  translateX: earthPath('x'),
  translateY: earthPath('y'),
  easing: 'linear',
  duration: 20000,
  loop: true
});

anime({
  targets: '#venus',
  translateX: venusPath('x'),
  translateY: venusPath('y'),
  easing: 'linear',
  duration: 12400,
  loop: true
});

anime({
  targets: '#mercury',
  translateX: mercuryPath('x'),
  translateY: mercuryPath('y'),
  easing: 'linear',
  duration: 5000,
  loop: true
});