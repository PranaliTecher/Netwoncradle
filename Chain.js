class Chain{

    constructor(body1,body2,xoffset) {
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:xoffset,y:0}
           
        };
        this.chain = Constraint.create(options);
        this.xoffset = xoffset;
        World.add(world,this.chain);
    }

    display() {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        stroke('white');
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x+this.xoffset,pointB.y);
    }
}