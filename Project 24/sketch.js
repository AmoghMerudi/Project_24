const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paperBall, wall1, wall2, base;

function setup() {
	createCanvas(1200, 350);


	engine = Engine.create();
	world = engine.world;

	ground = createSprite(600,340,1200,10);
	ground.shapeColor = "brown";
	
	wall1 = createSprite(910,280,20,100);
	wall1.shapeColor = 225;

	wall2 = createSprite(1090,280,20,100);
	wall2.shapeColor = 225;

	base = createSprite(1000,325,200,20);
	base.shapeColor = 225;

	var option = {
		isStatic: true
	}

	ground = Bodies.rectangle(600,340,1200,10,option);
	World.add(world, ground);

	wall1 = Bodies.rectangle(910,280,20,100,option);
	World.add(world, wall1);

	wall2 = Bodies.rectangle(1090,280,20,100,option);
	World.add(world, wall2);

	base = Bodies.rectangle(1000,280,200,20,option);
	World.add(world, wall2);

	paperBall = new Paperball(100,338,20);

	Engine.run(engine);

  keyPressed();
}


function draw() {
  background(0);
  Engine.update(engine);
  paperBall.display();
  drawSprites();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85})
	}
}