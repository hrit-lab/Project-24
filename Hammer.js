class Hammer{
    constructor(x,y){
       var options = {
          'density':2,
          'friction' :1.0,
          'restitution':0.5
       };
       this.body = Bodies.rectangle(x,y,100,40,options);
       this.width = 100;
       this.height = 40;
       
       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rotate(angle);
        strokeWeight(4);
        stroke("white");
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();
    }
}