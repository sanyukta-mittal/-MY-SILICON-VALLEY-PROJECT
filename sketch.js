var ground, ball, player
var score = 0;
var ballGroup
function preload() {
  playerImage = loadAnimation("player.png", "player2.png", "player3.png", "player4.png", "player5.png", "player6.png")

  bgImage = loadImage("bg_image.jpg")

  ball1 = loadImage("ball1.png")
  ball2 = loadImage("ball2.png")
  ball3 = loadImage("ball3.png")
  ball4 = loadImage("ball4.png")
  ball5 = loadImage("ball5.png")

  trackImg = loadImage("track_Img2.png")

  gameOver = loadImage("gameOver_Img.png")
}



function setup() {
  createCanvas(windowWidth, 400);

 /*  wall=createSprite(width / 2, 200, width, 400)
  wall.addImage(bgImage)
 // wall.x = wall.width / 2;
//  wall.scale=0.5
  wall.velocityX=4 */

  player = createSprite(1300, 200, 50, 50);
  player.addAnimation("Animation", playerImage)

  player.scale = 0.5

  ground = createSprite(width / 2, height - 60, width, 10);
  ground.x = ground.width / 2;
 // ground.addImage(trackImg)
  ground.velocityX=4

  
  ground2 = createSprite(width / 2, height - 400, width, 10);

  ballGroup=new Group()

  edges = createEdgeSprites()


}

function draw() {
  background(bgImage);



  if (keyDown("space")) {
    player.velocityY = -10
  }

  player.velocityY = player.velocityY + 1

  /* if (wall.x > 950) {
    wall.x = wall.width / 2;
  } */
 
  if (ground.x > 600) {
    ground.x = ground.width / 2;
  } 
 
  player.collide(ground)
  spawnObstacle()
/* 
  if (player.isTouching(ballGroup)) {
    ballGroup.destroyEach()
    life = life - 1;
  } */

  ballGroup.collide(player,removePlayer)


  
  drawSprites();
  textSize(20)
  fill("red")
  text("Score: " + score, 100, 50)
}

function spawnObstacle() {
  if (frameCount % 20 === 0) {
    ball = createSprite(-50, 150, 20, 20)

    var rand = Math.round(random(1, 5));
    switch (rand) {
      case 1: ball.addImage(ball1);
        break;
      case 2: ball.addImage(ball2);
        break;
      case 3: ball.addImage(ball3);
        break;
      case 4: ball.addImage(ball4);
        break;
      case 5: ball.addImage(ball5);
        break;

      default: break;
    }
    //ball.velocityX = 20

    ball.setSpeed(15, random(0,100))

    ballGroup.bounceOff(ground)
    ballGroup.bounceOff(ground2)

    ball.scale = 0.2;

    ball.lifetime = 300;

    ballGroup.add(ball);
 }
  }


  function removePlayer(ballGroup){
    ballGroup.remove()

    score=score+1
  }

  

  
