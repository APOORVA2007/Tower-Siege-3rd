class Polygon{
    constructor(x, y, radius){

        var options = {
            'restitution': 0.9,
            'friction': 2.6,
            'density': 1.0
        }

        this.radius = radius;

        this.body = Bodies.circle(50, 200, 20);
        World.add(world, this.body);

        this.image = loadImage("polygon.png");
        
    }

    display() {
  
        var pos = this.body.position;
        fill(176,219,83);
        //ellipseMode(CENTER);
        //ellipse(pos.x, pos.y, this.radius);
        imageMode(CENTER);
        image(this.image, pos.x,pos.y, 40,40);

    }
}