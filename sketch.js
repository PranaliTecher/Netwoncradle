const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof,bob1,bob2,bob3,bob4,bob5;


function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof();

	//Create the Bodies Here.
  bob1 = new Bob(300,300);
  bob2 = new Bob(350,300);
	bob3 = new Bob(400,300);
	bob4 = new Bob(450,300);
	bob5 = new Bob(500,300);
  chain1 = new Chain1(bob1.body,{x:300,y:100});
  chain2 = new Chain(bob2.body,roof.body,-50);
  chain3 = new Chain(bob3.body,roof.body,0);
  chain4 = new Chain(bob4.body,roof.body,50);
  chain5 = new Chain(bob5.body,roof.body,100);



	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display(); 
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display(); 
  chain3.display(); 
  chain4.display(); 
  chain5.display(); 

}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50});
  }
}


