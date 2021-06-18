class iron{
    constructor(x,y,width,height){
        var options ={
         restitution:0.8,
         density:30,
         friction:3
        }
       this.body=Bodies.rectangle(x,y,width,height,options);
       this.width=width;
       this.height=height;
       World.add(world,this.body);
    }
    display(){
     var pos=this.body.position;
    // var ang=this.body.angle;

     push();
     translate(pos.x,pos.y);
  //   rotate(angle);
     rectMode(CENTER);
     strokeWeight(3);
    stroke("white");
    fill("red");
    rect(pos.x,pos.y,this.width,this.height);
     pop();
    }
}




