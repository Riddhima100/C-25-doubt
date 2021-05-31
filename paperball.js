class Paperball {
    constructor(x,y, radius){

    var options={
        isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,

    }
    
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius
    this.width=width
    this.height=height

    this.image=loadImage("paper.png")

  World.add(world,this.body);
};
    display() {
        
    
    ellipseMode(RADIUS)
    fill(255);

    circle(this.body.position.x,this.body.position.y, this.radius)
    
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0, width, height);
    pop();
    
};
};