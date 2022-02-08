let img_yama;
let img_saka;
let img_bay;
let img_train1;
let img_train2;
let img_yazirusi;
let img_tw1;
let img_tw2;

function preload(){
  img_yama=loadImage("imagesp5/yama.png");
  img_saka=loadImage("imagesp5/saka.png");
  img_bay=loadImage("imagesp5/bay.png");
  img_train1=loadImage("imagesp5/train1.png");
  img_train2=loadImage("imagesp5/train2.png");
  img_yazirusi=loadImage("imagesp5/yazirusi.png");
  img_tw1=loadImage("imagesp5/tower1.png");
  img_tw2=loadImage("imagesp5/tower2.png");
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
  train();
  tower();
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
    fill(30,10,100);
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

var tf=1;
var tx=0;
var ty=0;
var stx=0;
var sty=0;
var stf=0;//ストッパーフラグ変数
var fload=0;//マウスの距離を図る用の変数
var load=0;
var balltx=0;
var plusty=0;

function train(){
  plusty+=0.08;
  image(img_yazirusi,20-abs(sin(plusty))*10,650+abs(sin(plusty))*10,img_yazirusi.width*0.1,img_yazirusi.height*0.1);
  image(img_train1,100,550,img_train1.width*1.1,img_train1.height*1.1);/*450加算*/
  fill(0,0,98);
  strokeWeight(0.4);
  if(mouseX>120&&mouseX<170&&mouseY>850&&mouseY<900){/*条件分岐 */
   fill(0,0,92);
   if(mouseIsPressed==true&&tf==0){
     mouseIsPressed=false;
   tf=1;
   }else if(mouseIsPressed==true&&tf==1){
     mouseIsPressed=false;
   tf=0;
   }
  }
  rect(120,850,50,50,30);
  if(tf==1){
   fill(207,50,90);
   rect(130,860,30,30,30);//ボタン部分
  }

push();
translate(150,600);
fill(50,10,100);
rotate(PI/11);
stroke(0);
rect(tx,ty,80,40);//電車部分
pop();
if(tf==1){
if(mouseX>180&&mouseX<250&&mouseY>640&&mouseY<660){//ストッパー　ホバー用の変数
　　fill(0,90,90);//ホバー時一時色を変更する
  if(mouseIsPressed==true){
    stf=1;
  }
}else {
  if(mouseIsPressed==true){
      stf=0;
  }
}
}
//stf が1の時にクリックしたと判定して以下の処理を行う。

if(stf==1){
  stx=mouseX-180;
  sty=mouseY-640;
}else if(stf==0){//サイドクリックで0に戻る
  stx=0;
  sty=0;
}
push();
translate(180,640);//ストッパー部分180,640
fill(50,20,100);
stroke(0);
rect(stx,sty,70,20);
pop();
  
  strokeWeight(0.8);
  stroke(300,10,10);
  fill(360,50,90);
  ellipse(600+balltx, 750, 50,50);//ビー玉*/

  if(tf==1){
    if(stx<-30){
    tx+=4;
    ty=3;
    if(tx>370){
       tx=370;
       balltx++;
       if(balltx>100){
          stf=0;
          balltx=0;
       }
    }
    }
    if(stf==0){
        tx=0;
        ty=0;
        balltx=0;
    }
  }

 if(tf==0){
   tx=0;
   ty=0;
 }

/*******************/
  stroke(10,20);
  fill(10,70);
  textSize(20);
  text("#04. Train",190,885);
  image(img_train2,65,500,img_train2.width*0.4,img_train2.height*0.4);
}

var tof=1;
var gb1x=0;
var gb2x=0;
var gb3x=0;
var db1f=0;
var db1r=0;
var db2f=0;
var db2r=0;
var db3r=0;
var db3f=0;
var gb3y=0;
var gf1=0;
var gf2=0;
var gf3=0;
var gf4=0;
var gf5=0;
var gf6=0;
function tower(){
   image(img_tw2,500,500,img_tw2.width*0.8,img_tw2.height*0.8);
   fill(0,0,98);
   strokeWeight(0.4);
   if(mouseX>1130&&mouseX<1180&&mouseY>650&&mouseY<700){/*条件分岐 */
    fill(0,0,92);
    if(mouseIsPressed==true&&tof==0){
      mouseIsPressed=false;
    tof=1;
    }else if(mouseIsPressed==true&&tof==1){
      mouseIsPressed=false;
    tof=0;
    }
   }
   rect(1130,650,50,50,30);//ボタン
   if(tof==1){
    fill(207,50,90);
    rect(1140,660,30,30,30);
   }

   strokeWeight(0.8);
   stroke(300,10,10);
   fill(360,50,90);
   ellipse(1800+gb1x, 1250, 50,50);//ビー玉1*/
   ellipse(1165+gb2x, 960, 50,50);//ビー玉2*/
   ellipse(1552+gb3x, 760+gb3y, 50,50);//ビー玉2*/

   if(tof==1){
     gb1x-=5;
     if(gb1x<-630){
          db1f=1;//段ボール到達したらの判定 1は到達判定の数値
          if(gb1x<-670){
                     gb1x=-670;
          }
     }
   }

   if(db1f==1){
     db1r+=PI/180;
     gb2x+=5;
     if(gb2x>375){
       db2f=1;
       if(gb2x>405){
             gb2x=405;
       }
     }
     if(db1r>PI/22){
           db1r=PI/22;
     }
   }
   if(db2f==1){
       db2r-=PI/180;
       if(gf1==0){
       gb3x-=5;
       gb3y+=0.3;
       }
       if(gb3x<-540&&gb3x>-560){
         if(gb3y<140){
        gb3y+=4;
         }
        gf1=1;
       }
       if(db2r<-PI/22){
              db2r=-PI/22;
       }
   }
  
if(gb3y>160){
    gf2=1;
}

   if(gf1==1){//タワー入ったら
      gb3y+=1;
   }
   if(gf2==1){
      gb3y+=0.6;
      gb3x-=2.6;
      if(gb3y>230){
        gf3=1;
      }
   }
   if(gf3==1){
         gb3x+=2.8;
        gb3y+=1;
        if(gb3y>280){
                gf4=1;
        }
   }
   if(gf4==1){
            gb3x+=3.2;
            gb3y+=0.1;
            if(gb3y>370){
                   gf5=1;
            }
   }

   if(gf5==1){
          gb3x-=6.0;
          gb3y+=0.1;
          if(gb3y>470){
            gf6=1;
          }
   }
   if(gf6==1){
        gb3x+=4.0;
        gb3y+=0.1;
        if(gb3y>620){
            tof=0;
        }
   }
   strokeWeight(3);
   stroke(0,50);

   push();//第一段ボール
   translate(1140,986);
   rotate(db1r);
   line(0,-100,0,280);
   pop();

   push();//第二段ボール
   translate(1580,840);
   rotate(db2r);
   line(0,-150,0,280);
   pop();
   strokeWeight(1);

  if(tof==0){
    gb1x=0;
    db1r=0;
    db1f=0;
    gb2x=0;
    db2r=0;
    db2f=0;
    gb3x=0;
    gb3y=0;
    gf1=0;
    gf2=0;
    gf3=0;
    gf4=0;
    gf5=0;
    gf6=0;
  }
/*******************/
   stroke(10,20);
   fill(10,70);
   textSize(20);
   text("#05. Goryokaku Tower",1200,685);
   /*表の画像*/
   image(img_tw1,500,500,img_tw1.width*0.8,img_tw1.height*0.8);
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

