
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var circle,circle3,circle4,circle6;
var constraintlog;
var ground;
var ground2;
var chain,c2,c3,c4,c5,c6;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
ground=new Ground(400,200,500,10);
ground2=new Ground(400,650,800,10);
	circle = new Circle2(300,200,50);
	circle2 = new Circle2(300,20,50);
	circle3 = new Circle2(300,20,50);
	circle4 = new Circle2(300,20,50);
	circle5 = new Circle2(300,20,50);
	circle6 = new Circle2(300,20,50);
	//constraintlog = new Circle(200,200,120, PI/2);
	chain = new Circle(circle.body,ground.body);
	c2 = new Circle(circle2.body,ground.body);
	c3 = new Circle(circle3.body,ground.body);
	c4 = new Circle(circle4.body,ground.body);
	c5 = new Circle(circle5.body,ground.body);
	c6 = new Circle(circle6.body,ground.body);	

	Engine.run(engine);
  
}


function draw() {
	background("blue");
  rectMode(CENTER);
 
  circle.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  circle6.display();


  ground2.display();
  ground.display();
  chain.display();
  c2.display();
c3.display();
c4.display();
c5.display();
c6.display();

  //constraintlog.display();
  drawSprites();

 
}



