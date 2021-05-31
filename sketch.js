
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball=new Paperball(200,400,70);
	ground=new Ground(400,680,800,20);

	rod1= new Dustbin(902,505,10,120);
	rod2= new Dustbin(962,565,130,10);
	rod3= new Dustbin(1024,505,10,120);



	
  
}


function draw() {
	
	background(0);
	rectMode(CENTER);
	Engine.run(engine);
	
 paperball.display();
 rod1.display();
 rod2.display();
 rod3.display();
 ground.display();
 
 
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:15,y:-15})
	}
}



