class WhiteBox{

    constructor(x,y){
    
       var options = {

        'friction': 12,
           'density': 1

       }


       this.body = Bodies.rectangle(x,y,55,55,options);
       this.width = 55;
       this.height = 55;

       World.add(world,this.body);

    }
    
    
    display(){
        
      push();
      fill(255, 231, 255);
      stroke(0, 255, 39);
      strokeWeight(3);
      rect(this.body.position.x,this.body.position.y,52,52);
      pop()
    }
    
    }