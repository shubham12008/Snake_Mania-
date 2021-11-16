let snake;
let rez = 18;
let food;
let w;
let h;
var score = 0;
var maze1img,maze2img,maze3img,maze4img;
var wait =1;
var maze,maze_group;
var rightEdge,leftEdge,upEdge,downEdge;
var gamestate = 0;
var serve = 0 ;
var play = 1;
var end = 2;
 

function preload(){
maze1img = loadImage("images/maze 1.png");
maze2img = loadImage("images/maze 2.png");
maze3img = loadImage("images/maze 3.png");
maze4img = loadImage("images/maze 4.png");
}

function setup(){
createCanvas(400,400);
w = floor(width / rez);
h = floor(height / rez);
frameRate(10);
snake = new Snake();
foodLocation();
maze_group = new Group();


}

function foodLocation(){
  let x = floor(random(w));
  let y = floor(random(h));
food =createVector(x,y);
}

function keyPressed(){
 /*if (keyCode === LEFT_ARROW){
    snake.setDir(-1,0);
  } else if (keyCode === RIGHT_ARROW){
    snake.setDir(1,0) 
    ;
  }else if (keyCode === UP_ARROW){
    snake.setDir(0,-1);
  }else if (keyCode === DOWN_ARROW){
    snake.setDir(0,1);
  }*/

if (keyCode === LEFT_ARROW){
  if(snake.xdir === 1){
  } else (snake.setDir(-1,0))
} else if (keyCode === RIGHT_ARROW){
  if(snake.xdir === -1){
  } else (snake.setDir(1,0))
} else if (keyCode === UP_ARROW){
  if(snake.ydir === 1){
  } else (snake.setDir(0,-1))
}else if (keyCode === DOWN_ARROW){
  if(snake.ydir === -1){
  } else (snake.setDir(0,1))
}
}

function draw(){
var hi = createSprite(10,10,1,1);
scale(rez);
background(43,62,79);
if (snake.eat(food)){
  foodLocation();
}
snake.eat(food);
snake.update();
snake.show();


noStroke();
fill(237,79,62);
rect(food.x,food.y,1,1);
textSize(1); 
text("SCORE - " + score,15,2);

if (score >= 1 ){
  if (frameCount%1 === 0){
    wait = wait+1
    console.log(wait);
    }
    if (wait < 30){
      spawnMaze();
    }
}
if (maze_group.isTouching(snake.Head)){
  console.log("gameover")
}
if(wait === 220){
  wait = 1;
}

var rightEdge = createSprite(width/rez,height/rez/2,1,400);
var leftEdge = createSprite(0,height/rez,1,400);
var upEdge = createSprite(height/2/rez,0,400,1);
var downEdge = createSprite(height/2/rez,width/rez,400,1);


drawSprites();
}


 function spawnMaze(){
  let x = floor(random(w));
  let y = floor(random(h));
   if (frameCount%10 === 0){
     var maze = createSprite(x,y);
   
     
     maze.scale = 0.02;
     console.log ("maze done")
     var random1 = Math.round(random(1,4));
     switch(random1){
       case 1: maze.addImage(maze1img);
       break; 
       case 2: maze.addImage(maze2img);
       break;
       case 3: maze.addImage(maze3img);
       break; 
       case 4: maze.addImage(maze4img);
       break;
       default:break;
     }
     maze.lifetime = 190 ;
     var random2 = Math.round(random(1,4));
     switch(random2){
       case 1: maze.rotation = 0;
       break; 
       case 2: maze.rotation = 90;
       break;
       case 3: maze.rotation = 180;
       break; 
       case 4: maze.rotation = 270;
       break;
       default:break;
     }
     maze_group.add(maze);
    }
 }

