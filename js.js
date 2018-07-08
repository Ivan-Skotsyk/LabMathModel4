
var dataFirstY = [];
var dataFirstX = [];

var dataSecondY = [];
var dataSecondX = [];

var dataThirdY = [];
var dataThirdX = [];

var dataFourthY = [];
var dataFourthX = [];

var dataFifthY = [];
var dataFifthX = [];

var dataSixthY = [];
var dataSixthX = [];

var dataSeventhY = [];
var dataSeventhX = [];

var dataEighthY = [];
var dataEighthX = [];


var dataResult1 = [];
var dataResult2 = [];
var dataResult3 = [];
var dataResult4 = [];
var dataResult5 = [];
var dataResult6 = [];
var dataResult7 = [];
var dataResult8 = [];

var a1, a2, a3, a4;
var b1, b2, b3, b4;
var d1, d2, d3, d4;
var f1, f2, f3, f4;
var g1, g2, g3, g4;
var h1, h2, h3, h4;
var k1, k2, k3, k4;
var l1, l2, l3, l4;




var C1 = (13.0 * 0.1190 * 97.2 * 201.45 * 5.285 * 5.285) / (2 * 660000);
var C2 = (1.83 * 0.1190 * 97.2 * 97.2 * 201.45 * 5.285) / (2 * 660000);
var C3 = (0.96 * 0.1190 * 97.2 * 97.2 * 201.45 * 5.285) / (2 *660000);
var C4 = ((5.78 + 0.046) * 0.1190 * 97.2 * 201.45 * 9.81) / (2 * 73000); 
var C5 = (3.8 * 0.1190 * 97.2 * 201.45 * 5.285 * 5.285) / (2 * 660000);
var C6 = 97.2 / 57.3;
var C9 = (0.2865 * 0.1190 * 97.2 * 201.45 * 9.81) / (2 * 73000);
var C16 = 97.2 / (57.3 * 9.81);
var C17 = (-5.78 * (0.24 - 0.24) * 0.1190 * 97.2 * 97.2 * 201.45 * 5.285) / (2 * 660000);
var C18 = (-0.2865 * (0.24 - 0.24) * 0.1190 * 97.2 * 97.2 * 201.45 * 5.285) / (2 * 660000);

// console.log(C1);
// console.log(C2);
// console.log(C3);
// console.log(C4);
// console.log(C5);
// console.log(C6);
// console.log(C9);
// console.log(C16);
// console.log(C17);
// console.log(C18);




var x0 = 0;
var x1 = 0;
var x2 = 0;
var x4 = 0;
var x5 = 0;
var x6 = 0;
var x7 = 0;
var x8 = 0;

var y0 = 0;
var y1 = 0;
var y2 = 0;
var y4 = 500;
var y5 = 0;
var y6 = 0;
var y7 = 0;
var y8 = 0;
var y9 = 0;


var deltaStar = 0;
var Hzad = 500 + 20;

var F_int_dH;
var F_dlt_str;
var F_delta;
var F_x;
var F_sigma;
var d_Teta;
var delta;
var sigmaStar;
var sigma;
var DV;

var Cy_bal_1 = (2 * 73000) / (201.45 * 0.119 * 97.2 * 97.2);
var a_bal_1 = 57.3 * (Cy_bal_1 - (-0.255)) / 5.78;

var dv_bal_1 = -57.3 * ((0.2 + ((-1.83 * a_bal_1) / 57.3) + Cy_bal_1 * (0.24 - 0.24)) / -0.96 );

// console.log("DV_BAL " + dv_bal_1);

var myK = 0;
var dT = 0.05;

for (var T = 0; T < 180; T = T + dT) {

  F_x = 0;

  if((0.002 * y7) < -10 || (0.002 * y7) == -10){
    F_int_dH = -10;
  }
  else if ((0.002 * y7) > 10 || (0.002 * y7) == 10) {
    F_int_dH = 10;
  }
  else{
    F_int_dH = 0.002 * y7;
  }


  deltaStar = 0.1 * (y4 - Hzad) + 0.4 * (y4 - Hzad) - y8 + F_int_dH;


  if (deltaStar < -10 || deltaStar == -10) {
    F_dlt_str = -10;
  }
  else if(deltaStar > 10 || deltaStar == 10){
    F_dlt_str = 10;
  }
  else {
    F_dlt_str = deltaStar;
  }

//console.log("det  " + deltaStar);
  d_Teta = y0;
  // d_Teta = 0;

  delta = F_dlt_str + 2 * d_Teta;
  // delta = F_dlt_str;

  if (delta < -3.5 || delta == -3.5) {
    F_delta = -3.5;
  }
  else if (delta > 3.5 || delta == 3.5) {
    F_delta = 3.5;
  }
  else {
    F_delta = delta;
  }

  sigmaStar = F_delta + 3 * x0;
  // sigmaStar = F_delta ;


  if (delta < -2 || delta == -2) {
    F_x = -0.6;
  }
  else if (delta > 2 || delta == 2) {
    F_x = 0.6;
  }
  else {
    F_x = 0;
  }


  x8 = F_x;

  if (sigmaStar < -10 || sigmaStar == -10) {
    F_sigma = -10;
  }
  else if (sigmaStar > 10 || sigmaStar == 10) {
    F_sigma = 10;
  }
  else {
    F_sigma = sigmaStar;
  }


  sigma = F_sigma;

  DV = sigma + y9;

  // DV = -2;








 
  x0 = y1;
  x1 = -(C1 * x0 + (C2 + C17) * y5 + C5 * x5 + (C3 + C18) * DV);
  x2 = C4 * y5 + C9 * DV;
  x4 = C6 * y2;
  x5 = x0 - x2;
  x6 = y4 - Hzad;
  x7 = 0.4 * (y4 - Hzad) - y8;
  

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

    // y0 += x0 * dT;
    // y1 += x1 * dT;
    // y2 += x2 * dT;
    // y4 += x4 * dT; 
    // y5 += x5 * dT;
    // y6 = C16 * x2;
    // y7 += x6 * dT;
    // y8 += x7 * dT;
    // y9 += x8 * dT;

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

    k1 = y1;
    k2 = y1;
    k3 = y1;
    k4 = y1;
    y0 = y0 + dT * (k1 + 2 * k2 + 2 * k3 + k4) / 6;

    k1 = -(C1 * x0 + (C2 + C17) * y5 + C5 * x5 + (C3 + C18) * DV);
    k2 = -(C1 * (x0 + dT / 2) + (C2 + C17) * (y5) + C5 * (x5 + dT / 2) + (C3 + C18) * DV);;
    k3 = -(C1 * (x0 + dT / 2) + (C2 + C17) * (y5) + C5 * (x5 + dT / 2) + (C3 + C18) * DV);
    k4 = -(C1 * (x0 + dT) + (C2 + C17) * (y5) + C5 * (x5 + dT) + (C3 + C18) * DV);
    y1 = y1 + dT * (k1 + 2 * k2 + 2 * k3 + k4) / 6;

    k1 = C4 * y5 + C9 * DV;
    k2 = C4 * (y5) + C9 * DV;
    k3 = C4 * (y5)  + C9 * DV;
    k4 = C4 * (y5) + C9 * DV;
    y2 = y2 + dT * (k1 + 2 * k2 + 2 * k3 + k4) / 6;

    k1 = C6 * y2;
    k2 = C6 * (y2);
    k3 = C6 * (y2);
    k4 = C6 * (y2);
    y4 = y4 + dT * (k1 + 2 * k2 + 2 * k3 + k4) / 6;

    k1 =  x0 - x2;
    k2 = (x0 + dT / 2) - (x2 + dT / 2);
    k3 = (x0 + dT / 2) - (x2 + dT / 2);
    k4 = (x0 + dT) - (x2 + dT);
    y5 = y5 + dT * (k1 + 2 * k2 + 2 * k3 + k4) / 6;

    y6 = C16 * x2;

    k1 = y4 - Hzad;
    k2 = (y4) - Hzad;
    k3 = (y4) - Hzad;
    k4 = (y4) - Hzad;
    y7 = y7 + dT * (k1 + 2 * k2 + 2 * k3 + k4) / 6;

    k1 = 0.4 * (y4 - Hzad) - y8;
    k2 = 0.4 * ((y4) - Hzad) - (y8);
    k3 = 0.4 * ((y4) - Hzad) - (y8);
    k4 = 0.4 * ((y4) - Hzad) - (y8);
    y8 = y8 + dT * (k1 + 2 * k2 + 2 * k3 + k4) / 6;

    k1 = k2 = k3 = k4 = F_x;
    y9 = y9 + dT * (k1 + 2 * k2 + 2 * k3 + k4) / 6;


    
 // console.log("y4  " + y4)
    
    
      if((Math.round(T * 10000) / 10000) % 3 == 0){
         console.log(Math.round(T * 100) / 100 + "        " + (Math.round(y0 * 100000) / 100000) + "       " + (Math.round(y1 * 100000) / 100000) + "       " + (Math.round(y2 * 100000) / 100000) + "       " + (Math.round(y4 * 100000) / 100000) + "       " +  (Math.round(y5 * 100000) / 100000) + "      " +  (Math.round(y6 * 100000) / 100000));
  // console.log(Math.round(T * 10000) / 10000 + "        " + (Math.round(y6 * 100000) / 100000));
  // console.log(Math.round(T * 100) / 100 + " " + y1 + " | " + y2 + " | " + y3 + " | " + y4 + " | " y5);
  // console.log(Math.round(T * 100) / 100 + " " + y2 + "  y2");
  // console.log(Math.round(T * 100) / 100 + " " + y3 + "  y3");
  // console.log(Math.round(T * 100) / 100 + " " + y4 + "  y4");
  // console.log(Math.round(T * 100) / 100 + " " + y5 + "  y5");
  // console.log(Math.round(T * 100) / 100 + " " + y6 + "  y6");
  // console.log(Math.round(T * 100) / 100 + " " + y7 + "  y7");
  // console.log(' ');
   }

  
      //for first
    dataFirstY[myK] = y0;
    dataFirstX[myK] = T;
    //for second
    dataSecondY[myK] = y1;
    dataSecondX[myK] = T; 
    //for third
    dataThirdY[myK] = y2;
    dataThirdX[myK] = T;  
    //for fourth

    dataFifthY[myK] = y4;
    dataFifthX[myK] = T;

    dataSixthY[myK] = y5;
    dataSixthX[myK] = T;

    dataSeventhY[myK] = y6;
    dataSeventhX[myK] = T;

    dataEighthY[myK] = y7;
    dataEighthX[myK] = T;



      myK++;

 // console.log(' ');

}

//for Result  Result X Y
for (var i = 0; i < 3600; i++) {
  //for 1
  dataResult1[i] = [];
  dataResult1[i][1] = dataFirstY[i];
  dataResult1[i][0] = dataFirstX[i];
  //for 2
  dataResult2[i] = [];
  dataResult2[i][1] = dataSecondY[i];
  dataResult2[i][0] = dataSecondX[i];
  //for 3
  dataResult3[i] = [];
  dataResult3[i][1] = dataThirdY[i];
  dataResult3[i][0] = dataThirdX[i];
  //for 4
  dataResult4[i] = [];
  dataResult4[i][1] = dataFourthY[i];
  dataResult4[i][0] = dataFourthX[i];

  dataResult5[i] = [];
  dataResult5[i][1] = dataFifthY[i];
  dataResult5[i][0] = dataFifthX[i];

  dataResult6[i] = [];
  dataResult6[i][1] = dataSixthY[i];
  dataResult6[i][0] = dataSixthX[i];

  dataResult7[i] = [];
  dataResult7[i][1] = dataSeventhY[i];
  dataResult7[i][0] = dataSeventhX[i];

  dataResult8[i] = [];
  dataResult8[i][1] = dataEighthY[i];
  dataResult8[i][0] = dataEighthX[i];
}





