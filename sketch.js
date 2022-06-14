var suelo;
var imgSuelo;
var aguila,aguilaImg,aguilaGrupo,aguilaGrupoImg;
var bg,bgImg
var cazador,cazadorImg;
var sueloInv;
var obsGrupo,obsGrupoImg,cactus;
var aguilaRojaimg,aguilaDoradaImg
function preload(){
//imgSuelo=loadImage("imagen3.png");
aguilaImg=loadImage("aguila.png")
aguilaRojaimg=loadImage("roja.png")
aguilaDoradaImg=loadImage("dorada.png")
bgImg=loadImage("images (9).jpg")
cazadorImg=loadImage("cazador.png")
obsGrupoImg=loadImage("obstacle1.png")  
}


function setup() {

  createCanvas(700,800);


  bg=createSprite(400,800,1400,1900)
  bg.scale=4;
  bg.addImage(bgImg);


cazador=createSprite(100,494)
cazador.addImage(cazadorImg);
cazador.scale=0.8




fill("red")
sueloInv=createSprite(300,840,1000,10)

//ueloInv.visible=false;
aguilaGrupo=createGroup();
obsGrupo=createGroup();
}




function draw() {
  background(180);  
//bg.velocityX=3;
cazador.velocityY=cazador.velocityY+3;
cazador.collide(sueloInv);
if(keyDown("space")){
cazador.velocityY=-27;
}
if(obsGrupo.isTouching(cazador)){
cazador.velocityY=0;
obsGrupo.setLifetimeEach(-1);
aguilaGrupo.setLifetimeEach(-1);
obsGrupo.setVelocityXEach(0);
aguilaGrupo.setVelocityXEach(0);
}
//aqui perder

pajaros();
spawnObstacles();
  drawSprites();
  
}

function spawnObstacles(){

if(frameCount%85===0){
cactus=createSprite(900,740,50,50);
cactus.x=Math.round(random(400,600));
cactus.addImage(obsGrupoImg);
cactus.scale=1.7
cactus.velocityX=-5;
cactus.lifetime=200;
obsGrupo.add(cactus);
cactus.depth=cazador.depth;
cazador.depth=cazador.depth+1;
}


}

function pajaros(){
  if(frameCount%85===0){
    var aves=createSprite(100,90,50,50);
  aves.velocityX=4;
  var rand = Math.round(random(1,3)); 
switch(rand) { 
  case 1: aves.addImage(aguilaRojaimg); 
  break; 
  case 2: aves.addImage(aguilaDoradaImg); 
  break;
  case 3: aves.addImage(aguilaImg)
     break; 
     default:
        break;
        
     }
aves.scale=0.7;
     aves.lifetime=400;
     aguilaGrupo.add(aves)
    }
  }