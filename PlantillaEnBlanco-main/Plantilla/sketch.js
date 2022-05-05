//Variables Globales
var Plataforma
var PlataformaIMG
var Plataforma2
var Plataforma2IMG
var PlataformasGroup
var Fondo
var FondoIMG
var Personaje,PersonajeIMG
var Ground
var Bordes

function preload(){
  //precargar imagenes y sonidos
  PlataformaIMG = loadImage("./Imagenes/Plataforma 1.png");
  Plataforma2IMG = loadImage("./Imagenes/Plataforma 2.png");
  FondoIMG = loadImage("./Imagenes/Cielo.png");
  PersonajeIMG = loadAnimation("./Imagenes/Quieto.png","./Imagenes/Saltando.png");
}

function setup(){
 //Crear Sprites
  createCanvas(650,650);
  PlataformasGroup = new Group();
  Fondo = createSprite(300,300);
  Fondo.addImage("Fondo",FondoIMG);
  Fondo.scale = 10;
  Fondo.velocityY = 1.7;
  Personaje = createSprite(20,599,20,40);
  Personaje.addAnimation("Quieto",PersonajeIMG);
  Personaje.scale = 2;
  Ground = createSprite(5,637,650,20);
  Ground.debug = true;
  Personaje.debug = true;
  Personaje.setCollider("rectangle",0,0,20,28)
}

function draw(){
  if (Fondo.y > 300){

   Fondo.y = 100;

  }

  if (keyDown("LEFT_ARROW")){

   Personaje.x -= 5;
  }
  if (keyDown("RIGHT_ARROW")){

    Personaje.x += 5;
   }
   if (keyDown("SPACE")){

    Personaje.velocityY = -14;
   }
   Personaje.velocityY += .7;
   Personaje.collide(Ground);
   Personaje.collide(PlataformasGroup);
   //Bordes = createEdges.Sprites();
  spawnPlataformas();

  
 
 
  drawSprites();
}


function spawnPlataformas(){

 if(frameCount%80===0){

  Plataforma = createSprite(50,20,100,20);
  Plataforma.addImage("Plataforma",PlataformaIMG);
  Plataforma.scale = 2;
  Plataforma.debug = true;
  Plataforma.setCollider("rectangle",0,0,100,20)
  Plataforma.velocityY = 2.3;
  Plataforma.x = Math.round(random(20,580));
  //Plataforma.y = Math.round(random(20,400));
  Plataforma.lifetime = 800
  PlataformasGroup.add(Plataforma);




  
  
  
  
  
  
  //Plataforma2 = createSprite(200,20);
  //Plataforma2.addImage("Plataforma2",Plataforma2IMG);
 }




}