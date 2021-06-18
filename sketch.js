const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammerObj,ironobj,stoneobj,rubberobj;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane= new Plane(600,height,1200,20)
    hammerobj= new Hammer(10,100);
    ironobj= new iron(600,560,50,90)
    stoneobj= new stone(300,560,80,80)
    rubberobj= new rubber(100,560,70)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammerobj.display();
    ironobj.display();
    stoneobj.display();
    rubberobj.display();
 
}
