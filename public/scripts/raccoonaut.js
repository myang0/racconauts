const particleManager = new DomParticles({
  max: 150,
  container: document.querySelector('body')
});

gsap.set(".raccoonaut", {xPercent: -50, yPercent: -50});

var naut = document.querySelector(".raccoonaut");
var pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
var mouse = { x: pos.x, y: pos.y };
var speed = 0.05;

var maxSpeed = { x: window.innerWidth * speed * 0.25, y: window.innerHeight * speed * 0.25 }

var lastFramePos = pos;
var currentFramePos = pos;

var xSet = gsap.quickSetter(naut, "x", "px");
var ySet = gsap.quickSetter(naut, "y", "px");
var angleSet = gsap.quickSetter(naut, "rotate", "deg");

var angle = 0;

const emitSmoke = (event) => {
  var dimensions = Math.floor(Math.random() * 26);
  var halfD = Math.ceil(dimensions / 2);

  var velocity = { 
    x: event.x - pos.x,
    y: event.y - pos.y
  }

  particleManager.addParticle({
    position: { x: pos.x - 50, y: pos.y + 50 },
    velocity: { x: -velocity.x + Math.floor(-50 + (Math.random() * 101)), y: -velocity.y + Math.floor(-50 + (Math.random() * 101)) },
    acceleration: { x: -5, y: -5 },
    contents: '',
    style: {
      'position': 'fixed',
      'background': '#e3e3e3',
      'width': `${dimensions}px`,
      'height': `${dimensions}px`,
      'border-radius': `${halfD}px ${halfD}px ${halfD}px ${halfD}px`,
      'scale': [1, 0],
      'opacity': [Math.random() * 0.75, 0],
      'z-index': 2
    }
  });
}

document.onmousemove = (event) => {
  emitSmoke(event);
}

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;  
});

gsap.ticker.add(() => {
  pos.x += (mouse.x - pos.x) * speed;
  pos.y += (mouse.y - pos.y) * speed;

  currentFramePos = { x: pos.x, y: pos.y };

  xSet(pos.x - 50);
  ySet(pos.y + hoverAnimationHelper(angle * (Math.PI / 180)) + 50);

  angleSet(getAngle() * speedFraction());

  lastFramePos = { x: pos.x, y: pos.y };

  angle++;
});

function getAngle() {
  var xDist = mouse.x - pos.x;
  var yDist = mouse.y - pos.y;

  return (Math.atan2(yDist, xDist) * (180 / Math.PI)) + 90 + ((xDist < 0 && yDist >= 0) ? -360 : 0);
}

function speedFraction() {
  var xDist = currentFramePos.x - lastFramePos.x;
  var yDist = currentFramePos.y - lastFramePos.y;

  var fraction = (((Math.abs(xDist) / maxSpeed.x) + (Math.abs(yDist) / maxSpeed.y)) / 2);

  return ((fraction > 1) ? 1 : fraction);
}

function hoverAnimationHelper(angle) {
  return Math.sin(angle) * 10;
}
