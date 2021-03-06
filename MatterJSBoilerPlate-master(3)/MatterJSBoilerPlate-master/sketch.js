
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;


function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	World.add(world,rope1);
	rope2 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	World.add(world,rope2);
	rope3 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	World.add(world,rope3);
	rope4 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	World.add(world,rope4);
	rope5 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
    World.add(world,rope5);

	bob1 = new Bob(250,300);
	bob2 = new Bob(300,300);
	bob3 = new Bob(350,300);
	bob4 = new Bob(400,300);
	bob5 = new Bob(450,300);

	roof = new Roof(300,150,400,50);
	World.add(world,roof);


	Engine.run(engine);
  
}


function draw() {
  
  background ("white");
  Engine.update(engine);
  
   
roof.display();

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
 
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyforce(bob1.body,bob1.body.position,{x : 750, y : 0});
	}
}



