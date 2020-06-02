const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;

function setup() {
  var canvas = createCanvas(1350,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(770,height,1500,20);

  box1  = new Box(500,100,20,40);

}

function draw() {
  background("white");  
  Engine.update(engine);

  ground.display();
  box1.display();

  drawSprites();
}