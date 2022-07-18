class Player {
    constructor(x, y, width, height) {
      var options = {
        isStatic: false
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
  
      this.width = width;
      this.height = height;
      this.image = loadImage("/assets/Player.png");
  
      World.add(world, this.body);
    }
  

    display() {
      if (keyIsDown("D")) {
        Matter.Body.applyForce(player.body, { x: 0, y: 0 }, { x: 1, y: 0 });
  
      }
      
      if (keyIsDown("A")) {
        Matter.Body.applyForce(player.body, { x: 0, y: 0 }, { x: -1 , y: 0 });
  
      }
      if (keyIsDown("W")) {
        Matter.Body.applyForce(player.body, { x: 0, y: 0 }, { x: 0, y: 1 });
  
      }
     
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  