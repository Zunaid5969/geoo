class stone{
    constructor(x,y,width,height){
        var options ={
         restitution:0.8,
         density:12,
         friction:0.9
        }
    this.body=Bodies.rectangle(x,y,width,height,options);
       this.width=width;
       this.height=height;
       World.add(world,this.body);
    }
    display(){
     var p=this.body.position;
     //var ang=this.body.angle;
     
     push();
     translate(p.x,p.y);
    // rotate(angle);
    rectMode(CENTER);
     strokeWeight(3);
     stroke("white");
     fill("yellow");
    rect(p.x,p.y,this.width,this.height);
     pop();
    }
}
