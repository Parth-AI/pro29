class Box{
     constructor(x, y, width, height, angle) {
         var options = {
             'restitution':0.8,
             'friction':1.0,
             'density':1.0
         }
         this.body = Bodies.rectangle(x, y, width, height, options);
        // fill(62,223,207);
         //fill("blue");

         this.width = width;
         this.height = height;                                   
        // this.body = Bodies.rectangle(x,y,width,height,options);
         World.add(world, this.body);
       }
       display(){
         var angle = this.body.angle;
         var pos = this.body.position;
         push();
         translate(this.body.position.x, this.body.position.y);
         rotate(angle);
         imageMode(CENTER);
         fill(62,223,207);
         rect(pos.x, pos.y, this.width, this.height);
         pop();
       }
 }