const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1, rubber2, rubber3, rubber4; 
var rubber5, rubber6; 
var iron1, iron2;
var stone1, stone2, stone3, stone4;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);

    hammer = new Hammer(10,100);

    iron1 = new Iron(400, 550, 50, 50);
    iron2 = new Iron(500, 550, 80, 80);

    stone1 = new Stone(620, 550, 35, 26);
    stone2 = new Stone(600, 550, 25, 25);
    stone3 = new Stone(650, 550, 35, 26);
    stone4 = new Stone(670, 550, 25, 25);

    rubber1 = new Rubber(450, 550, 50);
    rubber2 = new Rubber(400, 550, 25);
    rubber3 = new Rubber(425, 500, 25);
    rubber4 = new Rubber(450, 550, 25);
    rubber5 = new Rubber(400, 550, 30);
    rubber6 = new Rubber(425, 500, 30);
  }

function draw(){
    background("lightBlue");
    Engine.update(engine);

    iron1.display();
    iron2.display();
    plane.display();
    hammer.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
}