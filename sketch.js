
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane;
var hammer;
var stone;
var rubber;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8;
var iron;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  plane = new Plane(500,height,1000,10);
     hammer = new Hammer(400,350,100,40);
     stone = new Stone(200,0,80,80,);
     rubber = new Rubber(700, 0, 30);
     sand1 = new Sand(900,0,10);
     sand2 = new Sand(800,0,10);
     sand3 = new Sand(700,0,10);
     sand4 = new Sand(600,0,10);
     sand5 = new Sand(500,0,10);
     sand6 = new Sand(400,0,10);
     sand7 = new Sand(100,0,10);
     sand8 = new Sand(50,0,10);
     iron = new Iron(300,0,80,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  hammer.display();
  stone.display();
  plane.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  iron.display();
}



