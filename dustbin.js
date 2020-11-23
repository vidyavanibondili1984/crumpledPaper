class Dustbin
{
    constructor(x,y,width,height,angle)
    {
        var opt={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,opt);
        this.width=width;
        this.height=height;
        //this.thickness=20;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        rectMode(CENTER);
        fill ("red");
        translate(pos.x,pos.y);
        rotate (angle);
        rect(0,0,this.width,this.height);
        pop ();
    }
}