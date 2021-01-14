class Box{
    constructor(x,y,width,height){

        var options = {
            'isStatic': false,
            'restitution': 0.8,
            'friction': 0.06
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
    }

    score(){
        if(this.visibility<0 && this.visibility > -105){
            score = score + 1;
        }
    }

    display(){
        var pos = this.body.position;

        if(this.body.speed < 3){
            rectMode(CENTER);
            rect(pos.x, pos.y, this.width, this.height);
          }

         else{
             World.remove(world, this.body);
             push();
             this.visibility = this.visibility - 5;
             tint(255, this.visibility);
             rect(this.x, this.y, 20, 30);
             pop();
        }
    }
}