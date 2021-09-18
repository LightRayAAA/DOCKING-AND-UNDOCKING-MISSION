var bgImg
var spacecraft1,spacecraft2,spacecraft3,spacecraft4,spacecraft
var issImg
var hasDocked = false

function preload() { 
bgImg = loadImage("images/spacebg.jpg")
spacecraft1 = loadImage("images/spacecraft1.png")
spacecraft2 = loadImage("images/spacecraft2.png")
spacecraft3 = loadImage("images/spacecraft3.png")
spacecraft4 = loadImage("images/spacecraft4.png")
issImg = loadImage("images/iss.png")
}

function setup() {
createCanvas(600,350);
iss = createSprite(330,130)
spacecraft = createSprite(285,240)
iss.addImage("iss", issImg)
spacecraft.addImage("idle", spacecraft1)
spacecraft.scale = 0.2
}

function draw() {
background(bgImg);
if(!hasDocked) {
spacecraft.x = spacecraft.x+random(-1,1)
if(keyDown(LEFT_ARROW)) {
spacecraft.x = spacecraft.x-1
spacecraft.addImage("left", spacecraft4)
}
if(keyDown(RIGHT_ARROW)) {
spacecraft.x = spacecraft.x+1
spacecraft.addImage("right", spacecraft3)
}
if(keyDown(UP_ARROW)) {
spacecraft.y = spacecraft.y-1
spacecraft.addImage("up", spacecraft2)
}  
}
if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)) {
hasDocked = true
fill("red")
text("Docking Successful!",200,300)
}
drawSprites();
fill("red")
text(mouseX+","+mouseY,mouseX,mouseY)
}
