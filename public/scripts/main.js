gsap.set(".raccoonaut", {xPercent: -50, yPercent: -50});

var naut = document.querySelector(".raccoonaut");
var pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
var mouse = { x: pos.x, y: pos.y };
var speed = 0.05;

var maxSpeed = { x: window.innerWidth * speed * 0.25, y: window.innerHeight * speed * 0.25 }

var lastFramePos = pos;
var currentFramePos;

var xSet = gsap.quickSetter(naut, "x", "px");
var ySet = gsap.quickSetter(naut, "y", "px");
var angleSet = gsap.quickSetter(naut, "rotate", "deg");

var angle = 0;

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

  angleSet(getAngle() * angleDampener());

  lastFramePos = { x: pos.x, y: pos.y };

  angle++;
});

function getAngle() {
  var xDist = mouse.x - pos.x;
  var yDist = mouse.y - pos.y;

  return (Math.atan2(yDist, xDist) * (180 / Math.PI)) + 90 + ((xDist < 0 && yDist >= 0) ? -360 : 0);
}

function angleDampener() {
  var xDist = currentFramePos.x - lastFramePos.x;
  var yDist = currentFramePos.y - lastFramePos.y;

  var speedFraction = (((Math.abs(xDist) / maxSpeed.x) + (Math.abs(yDist) / maxSpeed.y)) / 2);

  return ((speedFraction > 1) ? 1 : speedFraction);
}

function hoverAnimationHelper(angle) {
  return Math.sin(angle) * 10;
}
