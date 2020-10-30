var movingRect,fixedRect;
var rect1,rect2;
var sq1,sq1;

function setup()
 {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="red";

  movingRect=createSprite(600,200,50,100);
  movingRect.shapeColor="red"

  rect1=createSprite(100, 400, 50, 50);
  rect1.shapeColor="purple";
  rect1.velocityX=2;

  rect2=createSprite(1100,400,50,50);
  rect2.shapeColor="purple";
  rect2.velocityX=-2;

  sq1=createSprite(100,100,50,50);
  sq1.shapeColor="blue";

  sq2=createSprite(500,100,50,50);
  sq2.shapeColor="blue";
  sq2.velocityX=-2;
}

function draw() 
{
  background(0); 
  
  movingRect.y=mouseY;
  movingRect.x=mouseX;

isTouching(fixedRect,movingRect);  
bounce(rect1,rect2);

bounceOff(sq1,sq2);
 
  drawSprites();
}


