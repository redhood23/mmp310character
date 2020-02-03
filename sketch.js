/*
	setting sketch
	9.11.2019
*/

// character variables -- bob
var x = 200;
var y = 200;
var faceSize = 200;
var eyeSize = 20;
var eyeOffset = 50;
var c = 'blue'; // color
var greeting = '"Whats the name of this club?!"';






// second character -- pac
var jerryX =900;
var jerryY = 200;
var jerrySize = 200;
var jerryColor = 'yellow';
var jerryGreeting = '"yea....Ummm Whattt?!."';

var story1 = "pac-man lost storys with friends";

var scene="city";

function setup() {
    createCanvas(innerWidth,innerHeight);
background("green")
    
    
}
    

//function mousePressed() {
//	if (scene == "city") {
//		scene = "forest";
//	} else if (scene == "forest") {
//		scene = "ocean";
//	} else if (scene == "ocean") {
//		scene = "city";	
//	}
//}

function draw() {
	// set the setting
	if (scene == "city") {
		background('green');
		
		/* city scene */
		fill('red');
		for (let x = 10; x < width; x += 100) {
			rect(x, 100 + random(200), 60, height - 400);
		}
		
	} else if (scene == "forest") {
		background("orange");
		
		/* forest scene */
		fill('green');
		noStroke();
		
		for (let x = 30; x < width; x += 80) {
			triangle(
				x, 200 + random(300),
				x + 150, 600,
				x - 150, 600
			);	
		}
		fill('red');
		circle(width - 200, 100, 100);
		
        
        
	} else if (scene == "ocean") {
		background("purple");
		
		/* ocean scene */
		stroke('red');
		for (let x = 60; x < width; x += 200) {
			let y = random(height);
			noFill();
			beginShape();
			curveVertex(x - 200, y + 100);
			curveVertex(x, y);
			curveVertex(x + 100, y);
			curveVertex(x + 100, y + 80);
			curveVertex(x, y);
			curveVertex(x - 10, y);
			endShape();
			
			ellipse(x + 100, y, 20);
			fill('yellow');
			ellipse(x + 100, y, 10);
		}
	}
	





    // bob character
    fill(c);
    ellipse(x, y, faceSize); // face
    
    fill('black');
    stroke('white');
    strokeWeight(4);

    rect(x - eyeOffset, y - eyeOffset, eyeSize, eyeSize); // left eye
    rect(x + eyeOffset, y - eyeOffset, eyeSize, eyeSize); // right eye
//mouth
stroke(400, 50, 50);
line(218, 205, 185, 208);
    
    textSize(40);
    fill('white');
    noStroke();
    text(greeting, x + 100, y - 50);

    // pac character
    fill(jerryColor);
    stroke('white');
    // face
    arc(jerryX, jerryY, jerrySize, jerrySize, PI, HALF_PI + QUARTER_PI, PIE);
    // left eye
    fill('black');
    triangle(
        jerryX - 50, jerryY - 75,
        jerryX, jerryY - 50,
        jerryX - 50, jerryY - 25
    );

//    // right eye
//    quad(
//        jerryX + 30, jerryY - 75,
//        jerryX + 25, jerryY - 25,
//        jerryX + 75, jerryY - 50,
//        jerryX + 75, jerryY - 60,
//    );

    fill('white');
    noStroke();
    text(jerryGreeting, jerryX - 200, jerryY + 150);


    textAlign(CENTER);
    text(story1, width / 4, height - 100, width / 2, 200);


    
    
    
    

}
