const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,catapult,attacker;

function preload() {
    backgroundImg = loadImage("bg.png");
    //ground=loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(200,200,250,10);
    //1st floor
    block1=new Box(260,120,30,30);
    block2=new Box(230,120,30,30);
    block3=new Box(200,120,30,30);
    block4=new Box(170,120,30,30);
    block5=new Box(140,120,30,30);
    block6=new Box(290,120,30,30);
    block7=new Box(110,120,30,30);
    //2nd floor
    block8=new Box(260,90,30,30);
    block9=new Box(230,90,30,30);
    block10=new Box(200,90,30,30);
    block11=new Box(170,90,30,30);
    block12=new Box(140,90,30,30);
    //3rd floor
    block13=new Box(230,60,30,30);
    block14=new Box(200,60,30,30);
    block15=new Box(170,60,30,30);
    //4th floor
    block16=new Box(200,30,30,30)

    attacker=new Attacker(990,170)
    chain=new Chain(attacker.body,{x:990,y:170})

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    attacker.display();
    chain.display();
}
function mouseDragged(){
    Matter.Body.setPosition(attacker.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.fly();
}
