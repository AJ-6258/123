const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, box1,box2,ground123;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(240,300,50,50);
  box2 = new Box(220,100,50,100); 
  ground123 = new ground(200,350,400,20);
  
}

function draw() {
  background(0);
  Engine.update(engine);
 
  box1.display();
  box2.display();
  ground123.display();
}

