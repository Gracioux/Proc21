
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	groundObj =new ground(width/2,670,width,20)
  rightSide =new ground(1050,600,20,120)
  leftSide =new ground(1100,600,20,120)

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restituition:0.4,
	friction:0,
	density:1.2,
}

ball=Bodies.circle(500,200,100,ball_options)

World.add(world,ball)
	
rectMode(CENTER);
ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.display();
  
  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		ball.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})

	}
}



