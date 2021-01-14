class Square{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = 45;

      push();
      noStroke();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      rotate(angle);
      fill(this.color);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };