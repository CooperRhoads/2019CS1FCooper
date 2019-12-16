var diameter = 228 ; 

TweenMax.to("#electron1", 5 ,{
bezier:{curviness:1.5,values:[
    
    {x:0,y:0},
    {x:diameter/2,y:diameter/2},
    {x:0,y:diameter},
    {x:-diameter/2,y:diameter/2},
    {x:0,y:0}

]}
,ease:Power0.easeNone,repeat:-1});





TweenMax.to("#electron2", 5 ,{
bezier:{curviness:1.5,values:[
    
    {x:0,y:0},
    {x:-diameter/2,y:-diameter/2},
    {x:0,y:-diameter},
    {x:diameter/2,y:-diameter/2},
    {x:0,y:0}

]}
,ease:Power0.easeNone,repeat:-1});