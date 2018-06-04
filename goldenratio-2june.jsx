#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";


//사용되는 단위는 pt로 맞춤
var W = 283.465;
var H = 458.617;

var gr;
var weight = 1;
var T = 9;
var count = 0;

function draw(){

  // 초기 설정
  b.doc();
  b.canvasMode(b.MARGIN);
  gr = (b.sqrt(5)+1)/2;

  b.noFill();
  b.strokeWeight(0.25);
  b.textSize(6);

  // var w = W;
  // var h = H;

  // 외곽선 그리기
  b.rect(0, 0, W, H);
  goldenRatio(T, 0, 0, W, H);

}


function goldenRatio(t, x1, y1, x2, y2){
  b.println(count++);
  // 재귀 호출 종료
  if(t==0){
    return;
  }

  /// 세로가 더 긴 경우
  if(x2-x1 < y2-y1){

    // 좌
    drawgoldenRatiooup(1, t, x1, y1, x2, y2)
    goldenRatio(t-1, x1, y1, x2, y2-(x2-x1));

    // 우
    drawgoldenRatiooup(2, t, x1, y1, x2, y2)
    goldenRatio(t-1, x1, y1+(x2-x1), x2, y2);

  }else {

    // 위
    drawgoldenRatiooup(3, t, x1, y1, x2, y2)
    goldenRatio(t-1, x1, y1, x2-(y2-y1), y1+(y2-y1));

    /// 아래
    drawgoldenRatiooup(4, t, x1, y1, x2, y2)
    goldenRatio(t-1, x1+(y2-y1), y1, x2, y1+(y2-y1));

  }
}

  function drawgoldenRatiooup(type, t, x1, y1, x2, y2){
    // drawDivision(type, t, x1, y1, x2, y2);
    drawCircle(type, t, x1, y1, x2, y2);
    // drawOval(type, t, x1, y1, x2, y2);
  }

  function drawDiagonal(type, t, x1, y1, x2, y2){
    b.noFill();
    b.stroke(255,0,0);

    b.line(x1, y1, x2, y2);
    b.line(x1, y2, x2, y1);

  }


  function drawDivision(type, t, x1, y1, x2, y2){
    b.stroke(255,255,0);
    b.noFill();

    switch (type) {
      case 1:
        b.line(x1, y2-(x2-x1), x1, y2-(x2-x1));
        break;
      case 2:
        b.line(x1, y1+(x2-x1), x2, y1+(x2-x1));
        break;
      case 3:
        b.line(x2-(y2-y1), y1, x2-(y2-y1), y2);
        break;
      case 4:
        b.line(x1+(y2-y1), y1, x1+(y2-y1), y2);
        break;
      default:

    }


    // 캡션
    // b.fill(0,255,0);
    // b.noStroke();
    // b.rect(X1, Y1, 2, 2);
    // b.rect(X2, Y2, 2, 2);
    // b.text("division : "+String(T-t+1), X1, Y1, 30, 10);

  }


  function drawCircle(type, t, x1, y1, x2, y2){
    b.stroke(0,255,0);
    b.noFill();

    switch (type) {
      case 1:

        b.ellipse((x1+x2)/2, y2-(x2-x1)/2, x2-x1, x2-x1);
        break;
      case 2:
        b.ellipse((x1+x2)/2, y1+(x2-x1)/2, x2-x1, x2-x1);
        break;
      case 3:
        b.ellipse(x2-(y2-y1)/2, (y1+y2)/2, y2-y1, y2-y1);
        break;
      case 4:
        b.ellipse(x1+(y2-y1)/2, (y1+y2)/2, y2-y1, y2-y1);
        break;
    }

      // 캡션
      // b.fill(0,255,0);
      // b.noStroke();
      // b.rect(cX, cY, 2, 2);
      // b.text(" circle : "+String(T-t+1), cX, cY, 30, 10);

  }


  function drawOval(type, t, x1, y1, x2, y2){
    b.stroke(0,255,0);
    b.noFill();

    switch (type) {
      case 1:
        b.ellipse((x1+x2)/2, (y1+(y2-(x2-x1)))/2, x2-x1, (y2-(x2-x1)-y1));
        break;
      case 2:
        b.ellipse((x1+x2)/2, (y1+(x2-x1)+y2)/2, x2-x1, y2-(y1+(x2-x1)));
        break;
      case 3:
        b.ellipse((x1+x2-(y2-y1))/2, (y1+y2)/2, (x2-(y2-y1))-x1, y2-y1);
        break;
      case 4:
        b.ellipse((x1+(y2-y1)+x2)/2, (y1+y2)/2, x2-(x1+(y2-y1)), y2-y1);
        break;
      default:

    }
      // 캡션
      // b.fill(0,0,255);
      // b.noStroke();
      // b.rect(cX, cY, 2, 2);
      // b.text(" oval : "+String(T-t+1), cX, cY, 30, 10);

  }


b.go();
