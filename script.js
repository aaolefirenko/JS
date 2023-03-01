
/* Задачка 1 */

var sotka = 100;
var Nsotka = 10;
var Sall = sotka * Nsotka;
console.log (Sall);
/*alert(Sall);*/
var a1 = 15;
var b1 = 25;
var Sgryadka = a1*b1;
/*alert(Sgryadka);*/
var Ost = Sall-Sgryadka;
/*alert(Ost);*/
console.log(Ost);


/* Задачка 2 */

var Sovaldm = 15;
var Sovalsm = Sovaldm*100;
console.log(Sovalsm);
var sovalsm = 600;
var Sostoval = Sovalsm-sovalsm;
console.log(Sostoval);
/*alert(Sostoval);*/







/* Задачка 3 */
/*var num1 = 60;
var num2 = 59;
var num3 = 58;
*/


/*
var numX = prompt ("введи число 1");
var numY = prompt ("введи число 2");
var numZ = prompt ("введи число 3");


if (numX < numY) {
alert('x<y');
        if (numX < numZ) {
            alert('x-самое мелкое');
            
        } else {
            alert('z-самое мелкое');
        }
} else {
alert('x>y');
        if (numY < numZ) {
            alert('y-самое мелкое');
            
        } else {
            alert('z1-самое мелкое');
        }
}
*/

                                                /* if (num11 < num22) {
                                                        alert('1<2');
                                                    } else {
                                                        alert('1>2');
                                                    }
                                                    if (num11 < num33) {
                                                        alert('1-самое мелкое');
                                                    } else {
                                                        alert('1>3');
                                                    }
                                                    */


  /* Задачка 4

  СЛАБАЯ ВЕРСИЯ
            
var m = prompt ("Введите любое число");
if (m < 0) {
    m=m*(-1);
}
console.log(m);

var n = prompt ("Введите любое число");
if (n < 0) {
    n=n*(-1);
}
console.log(n);
const X = 10;

/*m = convert_positive(m);
n = convert_positive(n);

var rez1 = X-m;
if (rez1 < 0) {
    rez1=rez1*(-1);
}
console.log(rez1);

var rez2 = X-n;
if (rez2 < 0) {
    rez2=rez2*(-1);
}
console.log(rez2);
  if (rez1<rez2) {
    alert((m) + ' наиболее ближе к 10');
  }
  else {
    alert(n+' наиболее ближе к 10');
  }
  */



  /*ДОРАБОТКА1*/

  /*
  var m = prompt ("Введите любое число");
var m1 = m;
if (m1 < 0) {
    var m1=m1*(-1);
}
console.log(m1);

var n = prompt ("Введите любое число");
var n1=n;
if (n1 < 0) {
    n1=n1*(-1);
}
console.log(n);

const X = 10;

var rez1 = X-m1;
if (rez1 < 0) {
    rez1=rez1*(-1);
}
console.log(rez1);

var rez2 = X-n1;
if (rez2 < 0) {
    rez2=rez2*(-1);
}
console.log(rez2);
  if (rez1<rez2) {
    alert((m) + ' наиболее ближе к 10');
  }
  else {
    alert(n+' наиболее ближе к 10');
  }

*/
  /*ДОРАБОТКА2*/
var m = prompt ("Введите любое число");

console.log(m);

var n = prompt ("Введите любое число");

console.log(n);

const X = 10;

var rez1 = X-m;
if (rez1 < 0) {
    rez1=rez1*(-1);
}
console.log(rez1);

var rez2 = X-n;
if (rez2 < 0) {
    rez2=rez2*(-1);
}
console.log(rez2);
  if (rez1<rez2) {
    alert((m) + ' наиболее ближе к 10');
  }
  else {
    alert(n+' наиболее ближе к 10');
  }