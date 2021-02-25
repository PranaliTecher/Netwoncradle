class Roof {
    constructor() {
     var  options = {
         isStatic:true,
     
       }

       this.body = Bodies.rectangle(400,100,300,10,options);
       this.width=300;
       this.height=10;
       World.add(world,this.body)
     
    }

    display() { 
        fill('yellow');
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
       
    }
}