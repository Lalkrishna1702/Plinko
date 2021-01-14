const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var squares = [];

function setup() {
  createCanvas(1600,790);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(width/2,height,width,50);
  ground2 = new Ground(width-width,height/2,40,height);
  ground3 = new Ground(width-10,height/2,50,height);;
  ground4 = new Ground(width/2,height-50,width-100,35);

  division1 = new Division(1380,height-10,15,400);
  division2 = new Division(200,height-10,15,400);
  division3 = new Division(350,height-10,15,400);
  division4 = new Division(500,height-10,15,400);
  division5 = new Division(740,height-10,15,400)
  division6 = new Division(870,height-10,15,400);
  division7 = new Division(1080,height-10,15,400);
  division8 = new Division(1230,height-10,15,400);
  
  for (var j = 75; j <=width-50; j=j+100) {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 100; j <=width-100; j=j+100) {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j <=width-100; j=j+100) {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 100; j <=width-100; j=j+100) {
    plinkos.push(new Plinko(j,375));
  }

  for(var j = 0; j < 800; j += 110){
    squares.push(new Square(0,j,75,75));
  }

  for(var j = 0; j < 800; j += 110){
    squares.push(new Square(width-18,j,75,75));
  }

}

function draw() {
  background(247, 245, 201);
  
  Engine.update(engine);

  push();
  textSize(30);
  text("Score : "+score,20,40);
  fill("green")
  text("10,000",760,height-40);
  fill("red")
  text("0",960,height-40);
  text("0",600,height-40);
  fill("blue")
  text("1000",390,height-40);
  text("1000",1120,height-40);
  fill("purple")
  text("500",250,height-40);
  text("500",1270,height-40);
  fill("violet")
  text("100",75,height-40);
  text("100",1450,height-40);
  pop();
  
  ground1.display();
  ground2.display();
  ground3.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();

  if(frameCount%60 === 0){
    particles.push(new Particle(random(100,width-100),10,15));
  }

  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display();  
  }

 for(var i = 0; i < squares.length; i++){
    squares[i].display();
  }
}