var boat,boat_floating
var sea,back_sea
function preload()
{
boat_floating = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
back_sea = loadAnimation("sea.png")
}
function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,200,400,400)
  sea.addAnimation("background",back_sea)
  sea.scale ="0.25"
  

  boat = createSprite(250,185,50,10)
  boat.addAnimation("floating",boat_floating)
  boat.scale="0.15"



}

function draw() {
  background("blue");
  drawSprites()

}