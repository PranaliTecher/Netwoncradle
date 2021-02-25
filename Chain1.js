class Chain1{

    constructor(body1,point1) {
        var options = {
            bodyA:body1,
            pointB:point1
        }
    
    this.chain1 = Constraint.create(options);
    World.add(world,this.chain1);
    }
    display() {
        var pointA = this.chain1.bodyA.position;
        var pointB = this.chain1.pointB;
        stroke('white');
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }