class BlueBox{

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
      fill(31, 25, 212);
      stroke(250, 18, 82);
      strokeWeight(3);
      rect(this.body.position.x,this.body.position.y,52,52);
      pop();

    }
    
    }