const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint

var engine,world,canvas;

var p1,p2,p3,p4,p5;
var s1,s2,s3,s4,s5;
var mConstraint

function setup(){
    canvas=createCanvas(windowWidth/2,windowHeight/1.5)
    engine=Engine.create()
    world=engine.world

    let canvasmouse=Mouse.create(canvas.elt)
   canvasmouse.pixelRatio=pixelDensity();
   let opt={
     mouse:canvasmouse
   };
   mConstraint=MouseConstraint.create(engine,opt)
   World.add(world,mConstraint)

  p1=new Pendulum(170,50,"blue")
  p2=new Pendulum(230,50,"blue")
  p3=new Pendulum(290,50,"blue")
  p4=new Pendulum(350,50,"blue")
  p5=new Pendulum(410,50,"blue")
  s1=new Sling(p1.body,{x:340,y:50})
  s2=new Sling(p2.body,{x:400,y:50})
  s3=new Sling(p3.body,{x:460,y:50})
  s4=new Sling(p4.body,{x:520,y:50})
  s5=new Sling(p5.body,{x:580,y:50})

    //creating objects
}

function draw(){
  background(180)
  Engine.update(engine)
p1.display()
p2.display()
p3.display()
p4.display()
p5.display()
 s1.display()
 s2.display()
 s3.display()
 s4.display()
 s5.display()

}

function mouseDragged(){
  Matter.Body.setPosition(b1.body,{x:mouseX,y:mouseY})
}