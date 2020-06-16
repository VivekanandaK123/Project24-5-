const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper,ground,box1,box2,box3;
var engine,world;


function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	paper = new Paper(150,100,15);
	ground = new Ground(400,390,800,20);
	box1 = new Box(650,373,150,15);
	box2 = new Box(570,345,15,70);
	box3 = new Box(730,345,15,70)
	
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:32,y:-32});
	}
}



