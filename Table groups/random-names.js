function setup() {
createCanvas(1000,800);
background(200);
fill('pink');
rect(100, 100, 100,100);
// Get a random element from an array
keyPressed();
}

function draw() {
}

function keyPressed() {
  fill('black');
  var words = [ "apple", "bear", "cat", "dog" ];
  textSize(25);
  text(words,100,100);
  if (keyCode === LEFT_ARROW) {
    words.splice(1,1);
    text(words,200,200);
  }
}
