var tom,tomImage;
var jerry,jerryImage;
var garden,gardenImage;

function preload() {
    //load the images here
    tom_running = loadAnimation("tom1.png","tom2.png","tom3.png","tom4.png");
    jerry_running = loadAnimation("jerry1.png","jerry2.png","jerry3.png","jerry4.png");
    
    groundImage = loadImage("ground.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom= createSprite(50,160,20,50);
    tom.addAnimation("running", tom_running);
  
    jreey = createSprite(50,160,20,50);
    jerry.addAnimation("running", jerry_running);
    
    ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
 
  
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
