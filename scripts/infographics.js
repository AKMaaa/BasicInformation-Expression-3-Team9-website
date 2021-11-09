let img_yama;
let img_saka;
let img_bay;
function preload(){
  img_yama=loadImage("imagesp5/yama.png");
  img_saka=loadImage("imagesp5/saka.png");
  img_bay=loadImage("imagesp5/bay.png");
}

function setup() {
  createCanvas(1885,1920);
  colorMode(HSB,360,100,100,100);
}

function draw() {
  background(360,0,100,90);//背景
 // grid();
  yama();
  saka();
  bay();
}

var yx=0,yy=0;
var ytx=0,yty=0;
var yf=1,ycf=0;
var pr=0;//角度加算用の変数

function yama(){
   image(img_yama,100,50,img_yama.width*1.2,img_yama.height*1.2);
   fill(0,0,98);
   strokeWeight(0.4);
   if(mouseX>120&&mouseX<170&&mouseY>350&&mouseY<400){/*条件分岐 */
    fill(0,0,92);
    if(mouseIsPressed==true&&yf==0){
      mouseIsPressed=false;
    yf=1;
    }else if(mouseIsPressed==true&&yf==1){
      mouseIsPressed=false;
    yf=0;
    }
   }
   rect(120,350,50,50,30);
   if(yf==1){
    fill(207,50,90);
    rect(130,360,30,30,30);
   }
   strokeWeight(1);
   stroke(0,100);
   line(255+yx,80+yy,255+yx,90+yy);

   strokeWeight(0.8);
   stroke(300,10,10);
   fill(360,50,90);
   ellipse(255+ytx+yx, 30+yty+yy, 30,30);//ビー玉

   if(yf==1){
      yty+=1;
      if(yty>70){//箱にビー玉入る条件
       yty=70;
       yx+=0.7;
       yy+=0.38;
       pr+=PI/52;
       if(pr>PI/4.7){
              pr=PI/4.7;
       }
       if(yy>140){
         //yf=0;
         ytx=0;
         yty=0;
         yx=0;
         yy=0;
         pr=0;
       }
      }
   }

  if(yf==0){
   ytx=0;
   yty=0;
   yx=0;
   yy=0;
   pr=0;
  }

   fill(0,5,100);
   push();
   translate(225+yx+30,90+yy);
   rotate(pr);
   rect(-30,0,60,40);//ロープウェイの箱
   pop();
/*******************/
   stroke(10,20);
   fill(10,70);
   textSize(20);
   text("#01. Ropeway",190,385);
}

var sf=1;
var sy=0;
var srp=0;
function saka(){
   image(img_saka,600,-50,img_saka.width/2,img_saka.height/2);
   fill(0,0,98);
   strokeWeight(0.4);
   if(mouseX>630&&mouseX<680&&mouseY>350&&mouseY<400){/*条件分岐 */
    fill(0,0,92);
    if(mouseIsPressed==true&&sf==0){
      mouseIsPressed=false;
    sf=1;
    }else if(mouseIsPressed==true&&sf==1){
      mouseIsPressed=false;
    sf=0;
    }
   }
   rect(630,350,50,50,30);
   if(sf==1){
    fill(207,50,90);
    rect(640,360,30,30,30);
   }

   strokeWeight(0.8);
   stroke(300,10,10);
   fill(360,50,90);
   ellipse(755, 20+sy, 20+srp,20+srp);//ビー玉

   if(sf==1){
   sy+=2;
   srp+=0.25;
   if(sy>300){
   //sf=0;
   srp=0;
   sy=0;
   }
 }

if(sf==0){
 srp=0;
 sy=0;
}
stroke(10,20);
fill(10,70);
textSize(20);
text("#02. Hatiman-zaka",700,385);
}

/*金森倉庫*/ 
var kf=1;
var kx=0;
var bkx=0;
var dkr=0;
var alg=0;
var storebay=0;
var btime=0;
var btimef=0;
function bay(){
  image(img_bay,1100,-90,img_bay.width*0.8,img_bay.height*0.8);
  fill(0,0,98);
  strokeWeight(0.4);
  if(mouseX>1130&&mouseX<1180&&mouseY>350&&mouseY<400){/*条件分岐 */
   fill(0,0,92);
   if(mouseIsPressed==true&&kf==0){
     mouseIsPressed=false;
   kf=1;
   }else if(mouseIsPressed==true&&kf==1){
     mouseIsPressed=false;
   kf=0;
   btime++;
   }
  }
  rect(1130,350,50,50,30);
  if(kf==1){
   fill(207,50,90);
   rect(1140,360,30,30,30);
   alg++;
  }

  strokeWeight(0.8);
  stroke(300,10,10);
  fill(360,50,90);
  ellipse(1100+bkx-40*abs(cos(dkr)), 300, 50,50);//ビー玉*/

  for(var i=1200;i<1700;i+=40){
    if(kf==1&&bkx==75){
      alg=abs(sin(dkr-i/160));
      if(alg>PI/6){
         alg=PI/6;
      }
    }else{
      alg=0;
    }
    push();
    translate(i-5,290);
    rotate(alg);
     rect(5,-40,20,80);
    pop();
  }
  if(kf==1){
    bkx+=50;
    if(bkx>75){
       bkx=75;
       dkr+=0.05;
       storebay=dkr;
    }
    if(btime%180000==0){
      btimef++;
    }
    if(btimef>=1&&btimef<=5){
    noStroke();
    fill(65,35,99);
    rect(1110,160,50,50);
    }else if(btimef>=6&&btimef<=13){
      noStroke();
      fill(65,35,99);
      rect(1320,160,50,50);
      } else if(btimef>=14&&btimef<=19){
        noStroke();
        fill(65,35,99);
        rect(1510,160,50,50);
        } else if(btimef>=20&&btimef<=25){
          noStroke();
          fill(65,160,99);
          rect(1710,160,50,50);
          }
    if(btimef>30){
     btimef=0;
    }
}

if(kf==0){
  btime=0;
  btimef=0;
}

stroke(10,20);
fill(10,70);
textSize(20);
text("#03. Kanemori Red Brick Warehouse",1200,385);//x=700 つまり+500でおけ
}

function grid(){
  strokeWeight(0.05);
  for( y=0;y<height;y+=100){
    for( x=0;x<width;x+=100){
         line(x,0,x,height);
         line(0,y,width,y);
    }
  }
}