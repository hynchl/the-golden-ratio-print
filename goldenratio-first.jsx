#includepath "~/Documents/;%USERPROFILE%Documents";#include "basiljs/bundle/basil.js";
//
//사용되는 단위는 pt로 맞춤
var W = 283.465;
var H = 458.617;
var w = W;
var h = H;
var gr = (b.sqrt(5)+1)/2;

var T = 10;
var arrayL = new Array([T]);
var arrayR = new Array([T]);
var arrayT = new Array([T]);
var arrayB = new Array([T]);


function draw(){

  //초기 설정
  b.doc();
  b.canvasMode(b.MARGIN);

  drawOutline();
  makeGrid();
  // drawLineW();
  // drawLineH();

  // for(var i = 0; i<T; i++){
  //     b.println(i*100/T);
  //   for(var j = 0; j<T; j++){
  //     b.rect(arrayL[i], arrayT[j], 2, 2);
  //     b.rect(arrayL[i], arrayB[j], 2, 2);
  //     b.rect(arrayR[i], arrayT[j], 2, 2);
  //     b.rect(arrayR[i], arrayB[j], 2, 2);
  //   }
  // }
  var count = 50;
  while(count>0){
    //drawRandomShape();
    drawRandomRect();
    count--;
  }

}

/// drawRandom
function drawRandomShape(){
  b.beginShape(b.CLOSE);

  b.vertex(arrayL[parseInt(b.random(0, T))], arrayT[parseInt(b.random(0, T))]);

  b.vertex(arrayL[parseInt(b.random(0, T))], arrayB[parseInt(b.random(0, T))]);

  b.vertex(arrayR[parseInt(b.random(0, T))], arrayB[parseInt(b.random(0, T))]);

  b.vertex(arrayR[parseInt(b.random(0, T))], arrayT[parseInt(b.random(0, T))]);

  b.endShape();
}

function drawRandomRect(){

  b.rectMode(b.CORNERS);
  b.rect(arrayL[parseInt(b.random(T))], arrayT[parseInt(b.random(T))],
    arrayR[parseInt(b.random(T))], arrayB[parseInt(b.random(T))]);

}


/// 그리드 만들기
function makeGrid(){
  for(var i=0; i<20; i++){

    //배열에 값 넣기
    arrayL[i] = w;
    arrayR[i] = W-w;
    arrayT[i] = h;
    arrayB[i] = H-h;

    w /= gr;
    h /= gr;

  }
}

/// 윤곽선 그리기
function drawOutline() {

  // b.strokeWeight(0.5);
  b.noStroke();
  b.fill(255);
  b.rect(0,0, w, h);

}

/// 원 그리기
function drawCircle() {

  //두 방향 모두 그리고 싶다.
  b.stroke(0,0,255);
  b.noFill();
  b.beginShape(b.CENTER);
  b.ellipse(W/2, W/2, W, W);
  b.ellipse(W/2, H-W/2, W, W);

}

/// 가로 나누기
function drawLineW(){

  for(var i=0; i<20; i++){
    b.stroke(255,0,0);
    b.line(arrayL[i],0,arrayL[i],H);
    b.stroke(0,255,0);
    b.line(arrayR[i],0,arrayR[i],H);
  }
}


/// 세로 나누기
function drawLineH(){

  for(var i=0; i<20; i++){
    b.stroke(255,0,0);
    b.line(0,arrayT[i],W,arrayT[i]);
    b.stroke(0,255,0);
    b.line(0,arrayB[i],W,arrayB[i]);
  }

}

b.go();