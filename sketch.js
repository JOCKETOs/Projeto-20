
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var block1;
var block2;
var block3;

function preload()
{
	
}

function setup() {
	createCanvas(400,400);
	

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var plane_options={
		isStatic: true
	}

	var block1_options = {
		restitution: 0.5,
		friction:0.02,
		frictionAir:0
	}

	var block2_options = {
		restitution: 0.7,
		friction:0.01,
		frictionAir:0.1
	}

	var block3_options = {
		restitution: 0.01,
		friction:1,
		frictionAir:0.3
	}


	plane = Bodies.rectangle(200,395,400,0.1,plane_options);
	World.add(world,plane);

	block1 = Bodies.circle(40,40,40,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(130,40,60,60,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(200,40,40,80,block3_options);
	World.add(world,block3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  Engine.update(engine);

  fill("white");
  stroke("black");

  rect(plane.position.x,plane.position.y,400,10);

  circle(block1.position.x,block1.position.y,67);
  rect(block2.position.x,block2.position.y,50,50);
  rect(block3.position.x,block3.position.y,40,70);

  drawSprites();
 
}



