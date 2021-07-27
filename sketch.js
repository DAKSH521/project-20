var bg,together, tomImg1,tomImg2,tomImg3
   var  jerryImg1,jerryImg2 ,jerryImg3 
var tom,jerry
function preload() {
    //load the images here
  bg=loadImage("images/garden.png")
tomImg1=loadAnimation("images/cat1.png")
tomImg2=loadAnimation("images/cat2.png")
tomImg3=loadAnimation("images/cat4.png")
jerryImg1=loadAnimation("images/mouse1.png")
jerryImg2=loadAnimation("images/mouse2.png")
jerryImg3=loadAnimation("images/mouse3.png")

}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    createCanvas(1200,800);
tom=createSprite(870,600)
tom.addAnimation("tomsleeping",tomImg1)
tom.scale=0.2
    jerry = createSprite(600, 350, 50, 80);
    jerry.addAnimation ("jerryStanding",jerriImg1);
    jerry.scale=0.15
  }
 
function draw() {

    background(bg);
   if(tom.x-jerry.x<(tom.width-jerry.width)/2){
tom.velocityX=0
tom.addAnimation("TOM"tomImg3)
tom.x=300
tom.scale=0.2
tom.changeAnimation("TOM")
jerry.addAnimation("JERRY"jerryImg3)

jerry.scale=0.15
jerry.changeAnimation("JERRY")

   }
   drawSprites()
}



function keyPressed(){
if(keyCode===LEFT_ARROW){
tom.velocityX=-5
tom.addAnimation("tomRunning"tomImg2)
tom.changeAnimation("tomRunning")
jerry.addAnimation("jerryTeasing"jerryImg2)
jerry.frameDelay=25
jerry.changeAnimation("jerryTeasing")
}
  

}
