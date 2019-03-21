function setup() {
createCanvas(1000,800);
background(200);
fill('pink');
rect(100, 100, 100,100);
// Get a random element from an array
name();
}

function draw() {
}

function name() {
  fill('black');
  var words = [ "apple", "bear", "cat", "dog" ];
  textSize(25);
  text(random(words),100,100);  // Displays one of the four words
  text(random(words),200,150);
  text(random(words),50,150);
  text(random(words),100,200);
}
