function setup() {
  createCanvas(600, 400);
}
function draw() {
  //sky blue background
  background(135, 206, 235);
  //sun in top-right corner
  fill("yellow");
  circle(550, 50, 100);
 
  //grass on bottom half
  fill("green");
  rect(0, 200, 600, 200);
 
  //emojis
  textSize(40)
  text("🌻", 250, 250)
  text("🌻", 200, 250)
  text("🌻", 150, 250)
  text("🌻", 100, 250)
  
  text("🐝", mouseX, mouseY) 
}