let sky;
let rocket;
var rocket_img;
var sky_img;


var vx = 0;
var g = 0.05;
var vy = 1;

function preload()
{
  rocket_img = loadImage("Rocket.png");
  sky_img = loadImage("sky.jpg");
  asteroid1 = loadImage("asteroid1.png");
  asteroid2 = loadImage("asteroid2.png");
  asteroid3 = loadImage("asteroid3.png");
  planet1 = loadImage("planet1.png");
  planet2 = loadImage("planet2.png");
  planet3 = loadImage("planet3.png");
  fireball1 = loadImage("fireball.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);


  sky=createSprite(700,500,600,600);
  sky.addImage(sky_img);
  
  



  rocket = createSprite(650,650);
  rocket.addImage(rocket_img);
  rocket.scale = 0.3;

  rectMode(CENTER);
  textSize(15);

  asteroidGroup = new Group();
  fireballGroup = new Group();
}

function draw() 
{
  background(51);
  
  
  sky.velocityY=-0.5;

  
  if(keyWentDown("space")){
    fireball = createSprite(rocket.x,rocket.y,20,10);
    fireball.addImage(fireball1);
    fireball.velocityY = -20;
    fireball.scale = 0.3;
    
    fireballGroup.add(fireball)
    rocket.depth = fireball.depth
    rocket.depth = rocket.depth+2
    //player.addImage(shooter_shooting)
    // = bullets-1
  }

  

  if(sky.y<-50){
   sky.y=500;
  }
  
 rocket.x=mouseX;
 rocket.y=mouseY;
 
 enemy();

 if(asteroidGroup.isTouching(fireballGroup)){
  for(var i=0;i<asteroidGroup.length;i++){     
      
   if(asteroidGroup[i].isTouching(fireballGroup)){
        asteroidGroup[i].destroy()
        fireballGroup.destroyEach()
       
        } 
  
  }
}

  drawSprites();
}


function enemy(){
  if(frameCount%150===0){

    //giving random x and y positions for zombie to appear
    asteroid = createSprite(random(20,windowWidth),0,40,40);
 var rand = Math.round(random(1,6));
 switch(rand)
{
  case 1: asteroid.addImage(asteroid1);
  break;
  case 2: asteroid.addImage(asteroid2);
  break;
  case 3: asteroid.addImage(asteroid3);
  break;
  case 4: asteroid.addImage(planet1);
  break;
  case 5: asteroid.addImage(planet2);
  break;
  case 6: asteroid.addImage(planet3);
  break;
  default: break;
}
    
    asteroid.scale = 0.3
    asteroid.velocityY = 1;
    //asteroid.debug= true
    asteroid.setCollider("rectangle",0,0,400,400)
   
   asteroid.lifetime = 400
   asteroidGroup.add(asteroid);
  }

}



