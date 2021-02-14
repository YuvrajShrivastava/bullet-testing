var bullet,wall
var speed,wight

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,200);
  speed = random(223,331);
  wight = random(30,52);
}

function draw() {
  background(0);
 

  if(keyDown("space")){
    bullet.velocityX=speed;
  }
 
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*wight*speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor=(255,0,0);

  }

  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}
  drawSprites();
}

function hasCollided(lbullet,lwall){
  var  bulletRightEdge =lbullet.x+lbullet.width;
  var  wallLeftEdge = lwall.x;
    if(bulletRightEdge>wallLeftEdge){
        return true
    }
    return false;
}