const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ground;
var Box1,Box2,Box3,Box4,Box5;
var  Log1,Log2,Log3,Log4;
var Pig1,Pig2;
var Bird1;


function setup() {
  createCanvas(1200,400);
myEngine=Engine.create();
myWorld=myEngine.world;
Box1 = new Box(700,320,70,70);
Box2 = new Box(920,320,70,70);
Box3 = new Box(700,240,70,70);
Box4 = new Box(920,240,70,70);
Box5 = new Box(810,160,70,70);
Pig1 = new Pig(810,350);
Pig2 = new Pig(810,220);
Log1 = new Log(810,260,300,PI/2);
Log2 = new Log(810,180,300,PI/2);
Log3 = new Log(760,120,150,PI/7);
Log4 = new Log(870,120,150,-PI/7);
ground = new Ground(600,height,1200,20);
Bird1 = new Bird(100,100);
}

function draw() {
  background(0);
  Engine.update(myEngine);
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  ground.display();
  Pig1.display();
  Pig2.display();
  Log1.display();
  Log2.display();
  Log3.display();
  Log4.display();
  Bird1.display();
  
 
}