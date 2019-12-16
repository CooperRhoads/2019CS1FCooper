var diameter = 400 ; 

/*TweenMax.to("#electron1",0.5,{rotation:-90,delay:0.5, ease:Sine.easeOut});
bezier:{curviness: 3.5,values:[{x:520,y:-300},{x:-diameter/40,y:diameter/20},{x:520,y:diameter/20},{x:diameter/40,y:diameter/20},{x:520,y:-300}]}
,ease:Power9.easeNone,repeat:5});*/

TweenMax.to("#electron2", 5 ,{
bezier:{curviness:3.0,values:[{x:20,y:20},{x:-diameter/40,y:diameter/20},{x:20,y:diameter/20},{x:diameter/40,y:diameter/20},{x:20,y:20}]}
,ease:Power0.easeNone,repeat:-1});