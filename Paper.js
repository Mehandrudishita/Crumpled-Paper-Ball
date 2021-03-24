class Paper{
    constructor(x,y){
        this.body = Bodies.circle(x,y,35,{restitution:0.3,density:1.2,friction:0,isStatic:false});
        World.add(world,this.body);
        this.image = loadImage("paper.png");
        this.radius = 35;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,90,90);
        pop();
    }
}