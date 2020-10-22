const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var polygon,sling,floor1,floor2,floor3,floor4;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;


function setup () {

  createCanvas(1500,600);

  engine = Engine.create();
  world = engine.world;

  polygon = new Polygon(260,255);

  sling = new Slingshot(polygon.body,{x: 210,y: 305});

  floor1 = new Floor(600,250,250)
  floor2 = new Floor(1200,250,250)
  floor3 = new Floor(900,416,250)
  floor4 = new Floor(600,582,250)
  floor5 = new Floor(1200,582,250)

  box1 = new RedBox(680,130);
  box2 = new RedBox(624,130);
  box3 = new RedBox(568,130);
  box4 = new RedBox(512,130);
  box5 = new BlueBox(650,74);
  box6 = new BlueBox(594,74);
  box7 = new BlueBox(538,74);
  box8 = new GreenBox(620,18);
  box9 = new GreenBox(564,18);
  box10 = new WhiteBox(590,-38);

  box11 = new WhiteBox(1280,130);
  box12 = new WhiteBox(1224,130);
  box13 = new WhiteBox(1168,130);
  box14 = new WhiteBox(1112,130);
  box15 = new RedBox(1250,74);
  box16 = new RedBox(1194,74);
  box17 = new RedBox(1138,74);
  box18 = new BlueBox(1220,18);
  box19 = new BlueBox(1164,18);
  box20 = new GreenBox(1190,-38);
  
  box21 = new GreenBox(1280,462);
  box22 = new GreenBox(1224,462);
  box23 = new GreenBox(1168,462);
  box24 = new GreenBox(1112,462);
  box25 = new WhiteBox(1250,406);
  box26 = new WhiteBox(1194,406);
  box27 = new WhiteBox(1138,406);
  box28 = new RedBox(1220,350);
  box29 = new RedBox(1164,350);
  box30 = new BlueBox(1190,290);

  box31 = new BlueBox(680,462);
  box32 = new BlueBox(624,462);
  box33 = new BlueBox(568,462);
  box34 = new BlueBox(512,462);
  box35 = new GreenBox(650,406);
  box36 = new GreenBox(594,406);
  box37 = new GreenBox(538,406);
  box38 = new WhiteBox(620,350);
  box39 = new WhiteBox(564,350);
  box40 = new RedBox(590,290);

  box41 = new PurpleBox(980,296);
  box42 = new PurpleBox(924,296);
  box43 = new PurpleBox(868,296);
  box44 = new PurpleBox(812,296);
  box45 = new PurpleBox(950,240);
  box46 = new PurpleBox(894,240);
  box47 = new PurpleBox(838,240);
  box48 = new PurpleBox(920,184);
  box49 = new PurpleBox(864,184);
  box50 = new PurpleBox(890,128);

  //var render = Render.create({ 
    // element: document.body,
      //engine: engine,
      //options: { width: 1200, height: 700, wireframes: false } });
      //Render.run(render);

} 

function draw() {

  background("black"); 
  
  Engine.update(engine);

  polygon.display();

  sling.display();

  floor1.display();
  floor2.display();
  floor3.display();
  floor4.display();
  floor5.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();

  box41.display();
  box42.display();
  box43.display();
  box44.display();    
  box45.display();
  box46.display();
  box47.display();
  box48.display();
  box49.display();
  box50.display();

}

function mouseDragged(){

  Matter.Body.setPosition(polygon.body,{x: mouseX, y:mouseY})

}

function mouseReleased(){

  sling.fly();

}

function keyPressed(){

  if(keyCode === 32){

     Matter.Body.setPosition(polygon.body,{x: 210,y: 345})

     sling.attach(polygon.body);

  }

}