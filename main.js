var sq;
var feed = [];
var numFood = 10; 

function setup() {
    createCanvas(640, 480);
    sq = new Squirrel();
    
    var numFood = 10; 
    for(var i = 0; i< numFoodl i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function mousePressed() {
    sq.est();
}

function draw() {
    var x = width/2; 
    var y = height/2; 
}

function Food(x, y) {
    this.x = x; 
    this.y = y; 
    this.color = color(255, 0, 0);
}



function Squirrel() {
    
    this.display = function() {
        var x = mouseX; 
        var y = mouseY;
    
        //face
        background('#FFFAED');
        noStroke();
        fill('#8B4513');
        ellipse(x, y, 210, 190);

        //nose
        fill('#D2691E');
        ellipse(x, y+60, 100, 70);

        //eyeleft
        fill('#FFFFFF');
        ellipse(x+42, y-26, 60, 75);

        // pupilLeft
        fill('#000000');
        ellipse(x+30, y-10, 30, 30)

        //eyeRight
        fill('#FFFFFF');
        ellipse(x-42, y-26, 60, 75);

        // pupilRight
        fill('#000000');
        ellipse(x-30, y-10, 30, 30);

        //earleft 
        fill('#8B4513');
        push();
        translate(x-130, y-20);
        rotate(Math.PI / 4); 
        ellipse(0,0, 70, 90);
        pop();

        //innerEarLeft
        fill('#D2B48C');
        push();
        translate(x-130, y-20);
        rotate(Math.PI / 4); 
        ellipse(0,0, 45, 55);
        pop();

        //earRight
        fill('#8B4513');
        push();
        translate(x+130, y-20);
        rotate(-Math.PI / 4); 
        ellipse(0,0, 70, 90);
        pop();

        //innerEarRight
        fill('#D2B48C');
        push();
        translate(x+130, y-20);
        rotate(Math.PI / 4); 
        ellipse(0,0, 55, 45);
        pop();

        //smile
        stroke(0);
        noFill();
        arc(300, 300, 100, 50, 50, HALF_PI);
        noStroke();
    };
}
