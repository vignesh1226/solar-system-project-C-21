var sun,p1,p2,p3,p4,p5,p6,p7,p8;

function setup() {
  createCanvas(800,400);
  
  sun = createSprite(400,200,80,80);
  sun.shapeColor = "Yellow";
  
  p1 = createSprite(380,69,25,25);
  p1.shapeColor = "grey";
  p2 = createSprite(450,113,25,25);
  p2.shapeColor = "orange";
  p3 = createSprite(715,175,25,25);
  p3.shapeColor = "blue";
  p4 = createSprite(270,213,25,25);
  p4.shapeColor = "red";
  p5 = createSprite(634,266,25,25);
  p5.shapeColor = "black";
  p6 = createSprite(175,299,25,25);
  p6.shapeColor = "brown";
  p7 = createSprite(538,343,25,25);
  p7.shapeColor = "purple";
  p8 = createSprite(79,375,25,25);
  p8.shapeColor = "violet";
}

function draw() {
  background(255,255,255); 
  
  if(World.frameCount%50 === 0){
    sun.width = sun.width+10;
    sun.height = sun.height+10;
  }
  
  sun.debug=true;

  p1.debug=true;
  p2.debug=true;
  p3.debug=true;
  p4.debug=true;
  p5.debug=true;
  p6.debug=true;
  p7.debug=true;
  p8.debug=true;
  
  
  if(isTouching(sun,p1)){
    p1.destroy();
  }
  if(isTouching(sun,p2)){
    p2.destroy();
  }
  if(isTouching(sun,p3)){
    p3.destroy();
  }
  if(isTouching(sun,p4)){
    p4.destroy();
  }
  if(isTouching(sun,p5)){
    p5.destroy();
  }
  if(isTouching(sun,p6)){
    p6.destroy();
  }
  if(isTouching(sun,p7)){
    p7.destroy();
  }
  if(isTouching(sun,p8)){
    p8.destroy();
  }

  drawSprites();
}