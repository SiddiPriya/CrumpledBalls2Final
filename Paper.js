class Paper{
    constructor(){
        var options ={
            
            restitution :0,
            friction :0,
            density :1.2
            
        }
        this.body = Bodies.circle(250,540,20,options);
        this.width =33;
        this.image = loadImage("Images/paper.png");
        World.add(world, this.body);
    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        rotate(angle);
        imageMode(CENTER);
        fill("blue");
        stroke("yellow");
        strokeWeight(4);
        image(this.image,pos.x,pos.y,33,33);
    }
}