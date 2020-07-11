var earthPath = anime.path('#earth-orbit path');
var venusPath = anime.path('#venus-orbit path');
var mercuryPath = anime.path('#mercury-orbit path');

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

