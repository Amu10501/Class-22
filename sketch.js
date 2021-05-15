//NameSpacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var ground_options ={
    isStatic: true
  }

  var ball_options={

    restitution:1
  }

 //creating an object/body using Bodies
  
 ground = Bodies.rectangle(200, 400, 400, 20,ground_options)

 ball = Bodies.circle(200, 200, 20,ball_options)

  //Adding object to our world
  World.add(world,ground);
  World.add(world,ball);
}

function draw() {
  background("lightGreen");  
  
 //update the engine 
 Engine.update(engine);

 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,50)

 ellipseMode(CENTER);
 ellipse(ball.position.x,ball.position.y,20,20)

}