var fixedRect, movingRect;
var car,wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

car = createSprite(200,300,100,40);
car.shapeColor = "Pink";
car.debug = true;
car.velocityX = 6;

wall = createSprite(1000,300,50,300)
wall.shapeColor = "Yellow";
wall.debug = true;




}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  drawSprites();

 if(isTouching(car,wall))
{
  car.shapeColor = 'orange';
 wall.shapeColor = "purple"
}
bounceOff(car,wall)



}

