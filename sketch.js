
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var grnd,dtbin_left,dtbin_middle,dtbin_right;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);

	angleMode(RADIANS);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	grnd=new Ground(10,450,2000,30);
	dtbin_left=new Dustbin(700,380,30,100,PI);
	dtbin_middle=new Dustbin(800,420,180,30,-PI/180);
	dtbin_right=new Dustbin(900,380,30,100,PI);
	paper=new Paper(100,410,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  grnd.display();
  dtbin_left.display();
  dtbin_middle.display();
  dtbin_right.display();
  paper.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}




