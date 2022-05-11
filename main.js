x=0;
y=0;
dibujarcuadrado="";
var voz=window.webkitSpeechRecognition;
var reconosevoz=new voz();
function inisio(){
    document.getElementById("palabra").innerHTML="porfabor abla";
    reconosevoz.start();
}
 reconosevoz.onresult=function(event){
     var cantidad=event.results[0][0].transcript;
     document.getElementById("palabra").innerHTML="usted dijo "+ cantidad;
     if(cantidad=="uno"){
x=Math.floor(Math.random()*800);
y=Math.floor(Math.random()*800);
document.getElementById("palabra").innerHTML="se dibujo un cuadro";
dibujarcuadrado="un cuadro"
     }
     if(cantidad=="dos"){
        x=Math.floor(Math.random()*800);
        y=Math.floor(Math.random()*800);
        document.getElementById("palabra").innerHTML="se dibujo dos cuadro";
        dibujarcuadrado="dos cuadro"
             }
             if(cantidad=="tres"){
                x=Math.floor(Math.random()*800);
                y=Math.floor(Math.random()*800);
                document.getElementById("palabra").innerHTML="se dibujo tres cuadros";
                dibujarcuadrado="tres cuadro"
                     }
                     if(cantidad=="cuatro"){
                        x=Math.floor(Math.random()*800);
                        y=Math.floor(Math.random()*800);
                        document.getElementById("palabra").innerHTML="se dibujo cuatro cuadro";
                        dibujarcuadrado="cuatro cuadro"
                             }
 }
function setup(){
    canvas=createCanvas(900,900);
}
function draw(){
    if(dibujarcuadrado=="un cuadro"){
        fill(51, 113, 196);
        stroke(9, 80, 74);
rect(x,y,70,70);
document.getElementById("palabra").innerHTML="se dibujo un cuadro";
dibujarcuadrado="";
    }
    if(dibujarcuadrado=="dos cuadro"){
        fill(51, 113, 196);
        stroke(9, 80, 74);
rect(x,y,70,70);
document.getElementById("palabra").innerHTML="se dibujo dos cuadro";
dibujarcuadrado="";
    }
    if(dibujarcuadrado=="tres cuadro"){
        fill(51, 113, 196);
        stroke(9, 80, 74);
rect(x,y,70,70);
document.getElementById("palabra").innerHTML="se dibujo tres cuadro";
dibujarcuadrado="";
    }
    if(dibujarcuadrado=="cuatro cuadro"){
        fill(51, 113, 196);
        stroke(9, 80, 74);
rect(x,y,70,70);
document.getElementById("palabra").innerHTML="se dibujo cuatro cuadro";
dibujarcuadrado="";
    }
}
