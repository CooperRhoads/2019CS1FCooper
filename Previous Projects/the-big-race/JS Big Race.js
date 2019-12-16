init();

function init(){
    for(var r=0; r<10.; r++)
        for(var c=0; c<4; c++){
            var color = (r+c)%2===0?' black': ' white';
            $('#finishLine').append("<div class='checker " + color + "'></div>");
        }
    startRace1();
    startRace2();
    startRace3();
}

function startRace1(){
    TweenMax.to("#plane1",0.5,{x:520,ease:Sine.easeOut});
    TweenMax.to("#plane1",0.5,{rotation:-90,delay:0.5, ease:Sine.easeOut});
    TweenMax.to("#plane1",0.5,{x:520, y:-300,delay:1., ease:Sine.easeOut});
    TweenMax.to("#plane1",0.5,{rotation:-180,delay:1.5, ease:Sine.easeOut});
    TweenMax.to("#plane1",0.5,{x:-100, y:-300,delay:2.5, ease:Sine.easeOut});
    TweenMax.to("#plane1",0.5,{rotation:-270,delay:3.0, ease:Sine.easeOut});
    TweenMax.to("#plane1",0.5,{x:-100, y:8,delay:3.8, ease:Sine.easeOut});
    TweenMax.to("#plane1",0.5,{rotation:-360,delay:4.0, ease:Sine.easeOut});
    TweenMax.to("#plane1",0.5,{x:220,delay:5., ease:Sine.easeOut});
    //Twee0.5Max.to("#plane1",1,{x:-170, y:-400,delay:1, ease:Sine.easeOut});
}

function startRace2(){
    TweenMax.to("#plane2",1,{rotation:90,delay:-1.0, ease:Sine.easeOut});
    TweenMax.to("#plane2",1,{x:520,ease:Sine.easeOut});
    TweenMax.to("#plane2",1,{rotation:-0,delay:1.5, ease:Sine.easeOut});
    TweenMax.to("#plane2",1,{x:520, y:-300,delay:2., ease:Sine.easeOut});
    TweenMax.to("#plane2",1,{rotation:-90,delay:2.5, ease:Sine.easeOut});
    TweenMax.to("#plane2",1,{x:-100, y:-300,delay:3.8, ease:Sine.easeOut});
    TweenMax.to("#plane2",1,{rotation:-180,delay:4.0, ease:Sine.easeOut});
    TweenMax.to("#plane2",1,{x:-100, y:8,delay:5.8, ease:Sine.easeOut});
    TweenMax.to("#plane2",1,{rotation:-270,delay:6.0, ease:Sine.easeOut});
    TweenMax.to("#plane2",1,{x:220,delay:8., ease:Sine.easeOut});
    //TweenMax.to("#plane2",1,{x:-170, y:-400,delay:1, ease:Sine.easeOut});
}

function startRace3(){
    TweenMax.to("#plane3",1.5,{x:520,ease:Sine.easeOut});
    TweenMax.to("#plane3",1.5,{rotation:-90,delay:2.5, ease:Sine.easeOut});
    TweenMax.to("#plane3",1.5,{x:520, y:-300,delay:3., ease:Sine.easeOut});
    TweenMax.to("#plane3",1.5,{rotation:-180,delay:4, ease:Sine.easeOut});
    TweenMax.to("#plane3",1.5,{x:-100, y:-300,delay:6., ease:Sine.easeOut});
    TweenMax.to("#plane3",1.5,{rotation:-270,delay:7, ease:Sine.easeOut});
    TweenMax.to("#plane3",1.5,{x:-100, y:8,delay:8.8, ease:Sine.easeOut});
    TweenMax.to("#plane3",1.5,{rotation:-360,delay:9, ease:Sine.easeOut});
    TweenMax.to("#plane3",1.5,{x:220,delay:13., ease:Sine.easeOut});
    //TweenMax.to("#plane3",1.5,{x:-170, y:-400,delay:1, ease:Sine.easeOut});
}
