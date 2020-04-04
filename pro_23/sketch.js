const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    console.Rect(ground)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    
    Rect1 = new Rect(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    Rect3 =  new Rect(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    Rect4 = new Rect(760,120,150, PI/7);
    Rect5 = new Rect(870,120,150, -PI/7);

    
}

function draw(){
    background("black");
    Engine.update(engine);
    console.Rect(box2.body.position.x);
    console.Rect(box2.body.position.y);
    console.Rect(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();

    Rect1.display();

    box3.display();
    box4.display();
    pig3.display();
    Rect3.display();

    box5.display();
    Rect4.display();
    Rect5.display();

    
    platform.display();
}
