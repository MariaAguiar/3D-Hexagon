// alert("ok");

// var does=0;


var oct=2;

function sets(){
    setInterval(gets, 10);
    setTimeout(cancels, 1000);
}

function cancels(){
    clearInterval(gets);
}


function changes(clear){ 
    sets();
    gets();
    document.getElementById("p1").style.transform = "scale(1.5)";
    document.getElementById("p2").style.transform = "translateZ(50px) scale(1)";
}


function changes2(){
    sets();
    gets();
    var cX = event.clientX;
    var cY = event.clientY;
    var radians = Math.atan2(cX - window.innerWidth/2, cY - window.innerHeight/2);
    
    var degree = (radians * (180 / Math.PI) * -1) + 180;
    
    if(cX>window.innerWidth/2 && cY< window.innerHeight/2){
        var degree2 = degree/oct;
        document.getElementById("p1").style.transform = "rotateX("+degree2+"deg) rotateY("+degree2+"deg) scale(1.5)";
        document.getElementById("p2").style.transform = "rotateX("+degree2+"deg) rotateY("+degree2+"deg) translateZ(50px) scale(1)";
    }else if(cX>window.innerWidth/2 && cY> window.innerHeight/2){
        var degree2 = (degree/oct)-90;
        document.getElementById("p1").style.transform = "rotateX("+degree2+"deg) rotateY("+-degree2+"deg) scale(1.5)";
        document.getElementById("p2").style.transform = "rotateX("+degree2+"deg) rotateY("+-degree2+"deg) translateZ(50px) scale(1)";
    }else if(cX<window.innerWidth/2 && cY> window.innerHeight/2){
        var degree2 = (degree/oct)-180;
        document.getElementById("p1").style.transform = "rotateX("+degree2/3+"deg) rotateY("+degree2/3+"deg) scale(1.5)";
        document.getElementById("p2").style.transform = "rotateX("+degree2/3+"deg) rotateY("+degree2/3+"deg) translateZ(50px) scale(1)";
    }else if(cX<window.innerWidth/2 && cY< window.innerHeight/2){
        var degree2 = (degree/oct)-270;
        document.getElementById("p1").style.transform = "rotateX("+-degree2/4+"deg) rotateY("+degree2/4+"deg) scale(1.5)";
        document.getElementById("p2").style.transform = "rotateX("+-degree2/4+"deg) rotateY("+degree2/4+"deg) translateZ(50px) scale(1)";
    }
}


function gets(){
   /* 
    if(does=1){
        for(var d=1; d<=6; d++){
            document.getElementById("pol"+d).setAttribute("points", "");
        }
    }
    */
    var h1 = document.getElementById("h1");
    
    var v1 = document.getElementById("p1").getTotalLength(0);
    var v11=v1*(1/6)*5;
    var f11 = document.getElementById("p1").getPointAtLength(0);
    var f111 = f11.matrixTransform(p1.getScreenCTM());
    
    var f16 = document.getElementById("p1").getPointAtLength(v11);
    var f116 = f16.matrixTransform(p1.getScreenCTM());
    
    var v2 = document.getElementById("p2").getTotalLength(0);
    var v21=v2*(1/6)*5;
    var f21 = document.getElementById("p2").getPointAtLength(0);
    var f121 = f21.matrixTransform(p2.getScreenCTM());
    
    var f26 = document.getElementById("p2").getPointAtLength(v21);
    var f126 = f26.matrixTransform(p2.getScreenCTM());

    var array1 = [f111, f121, f126, f116];

    for (var zz=0; zz<array1.length;zz++) {
        var point = document.getElementById("h1").createSVGPoint();
        point = array1[zz];
        var point2 = point.matrixTransform(h1.getScreenCTM().inverse());
        document.getElementById("pol1").points.appendItem(point2);
    }
    
    
    
    var v12=v1*(1/6)*1;
    var f12 = document.getElementById("p1").getPointAtLength(v12);
    var f112 = f12.matrixTransform(p1.getScreenCTM());
    var v22=v2*(1/6)*1;
    var f22 = document.getElementById("p2").getPointAtLength(v22);
    var f122 = f22.matrixTransform(p2.getScreenCTM());
    
    var array2 = [f112, f122, f121, f111];

    for (var zz2=0; zz2<array2.length;zz2++) {
        var point = document.getElementById("h1").createSVGPoint();
        point = array2[zz2];
        var point2 = point.matrixTransform(h1.getScreenCTM().inverse());
        document.getElementById("pol2").points.appendItem(point2);
    }
    
    
    var v13=v1*(1/6)*2;
    var f13 = document.getElementById("p1").getPointAtLength(v13);
    var f113 = f13.matrixTransform(p1.getScreenCTM());
    var v23=v2*(1/6)*2;
    var f23 = document.getElementById("p2").getPointAtLength(v23);
    var f123 = f23.matrixTransform(p2.getScreenCTM());
    
    var array3 = [f113, f123, f122, f112];

    for (var zz3=0; zz3<array3.length;zz3++) {
        var point = document.getElementById("h1").createSVGPoint();
        point = array3[zz3];
        var point2 = point.matrixTransform(h1.getScreenCTM().inverse());
        document.getElementById("pol3").points.appendItem(point2);
    }
    
    
    
    var v14=v1*(1/6)*3;
    var f14 = document.getElementById("p1").getPointAtLength(v14);
    var f114 = f14.matrixTransform(p1.getScreenCTM());
    var v24=v2*(1/6)*3;
    var f24 = document.getElementById("p2").getPointAtLength(v24);
    var f124 = f24.matrixTransform(p2.getScreenCTM());
    
    var array4 = [f114, f124, f123, f113];

    for (var zz4=0; zz4<array4.length;zz4++) {
        var point = document.getElementById("h1").createSVGPoint();
        point = array4[zz4];
        var point2 = point.matrixTransform(h1.getScreenCTM().inverse());
        document.getElementById("pol4").points.appendItem(point2);
    }
    
    
    var v15=v1*(1/6)*4;
    var f15 = document.getElementById("p1").getPointAtLength(v15);
    var f115 = f15.matrixTransform(p1.getScreenCTM());
    var v25=v2*(1/6)*4;
    var f25 = document.getElementById("p2").getPointAtLength(v25);
    var f125 = f25.matrixTransform(p2.getScreenCTM());
    
    var array5 = [f115, f125, f124, f114];

    for (var zz5=0; zz5<array5.length;zz5++) {
        var point = document.getElementById("h1").createSVGPoint();
        point = array5[zz5];
        var point2 = point.matrixTransform(h1.getScreenCTM().inverse());
        document.getElementById("pol5").points.appendItem(point2);
    }
    
    
    var array6 = [f116, f126, f125, f115];

    for (var zz6=0; zz6<array6.length;zz6++) {
        var point = document.getElementById("h1").createSVGPoint();
        point = array6[zz6];
        var point2 = point.matrixTransform(h1.getScreenCTM().inverse());
        document.getElementById("pol6").points.appendItem(point2);
    }
    
    does=1;
}
