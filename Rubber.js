class Rubber{
    constructor(x,y,radius){
        var options={
            'restitution':0.3,
            'firction':5,
            'density':1
        };
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    };
    display(){
       ellipseMode(RADIUS);
       strokeWeight(4);
       stroke(0);
       fill("blue");
       circle(this.body.position.x,this.body.position.y,this.radius);
    }
}