// Space Explorer
// Richard Pavis
// Helper and Draw Functions for Space Explorer

// ### Initialization Functions

function initStars(){
	for (i = 0; i<= 49; i++) {
		
	 star_posn_x[i] = Math.floor(Math.random() * 299);
	 star_posn_y[i] = Math.floor(Math.random() * 299);		
	}
}

function initAsteroids(){
	for (i = 0; i<= 19; i++) {
		
	 asteroid_posn_x[i] = Math.floor(Math.random() * 299);
	 asteroid_posn_y[i] = Math.floor(Math.random() * 299);		
	}
}

function initCanvas(){
	// Get the main canvas element.
	canvas = document.getElementById("myCanvas");
	// Get the cost canvas element.
	canvas2 = document.getElementById("myCost");	
	
		// Initialize the cost element.
	if (canvas2.getContext)
	// If you have it, create cost element.
	{
		// Specify cost 2d canvas type.
		ctx2 = canvas2.getContext("2d");
	}
	if (canvas.getContext)
	// If you have it, create a canvas user inteface element.
	{
		// Specify main 2d canvas type.
		ctx = canvas.getContext("2d");
		// Paint it black.
		ctx.fillStyle = "black";
		ctx.rect(0, 0, 300, 300);
		ctx.fill();

		// Save the initial background.
		back = ctx.getImageData(0, 0, 30, 30);

	}
	
}

function initializeGame(){
	initCanvas();
	
	initStars();
	
	initAsteroids();
	
	// Add keyboard listener.
	window.addEventListener('keydown', whatKey, true);
}

// ### Draw Functions

function clearScreen(){
	ctx.fillStyle = "black";
	ctx.rect(0, 0, 300, 300);
	ctx.fill();
}

function drawStars() {
	// Draw 50 stars.
	for (i = 0; i <= 49; i++) {


	// Make the stars white
	ctx.fillStyle = white;

	// Paint the star but not if too close to ship.
	if (star_posn_x[i] > 40 && star_posn_y[i] > 40) {

		// Draw an individual star.
		ctx.beginPath();
		ctx.arc(star_posn_x[i], star_posn_y[i], 3, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
		} ;
	}
	// Save black background.
	oldBack = ctx.getImageData(0, 0, 30, 30);
}
     
function drawAsteroids() {
	// Draw asteroids.
	for (i = 0; i <= 20; i++) {

	// Make the asteroids red
		ctx.fillStyle = red;
	// Keep the asteroids far enough away from
	// the beginning or end.
	// Draw an individual asteroid.
		ctx.beginPath();
		ctx.arc(asteroid_posn_x[i], asteroid_posn_y[i], 10, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
	}

}

function drawGoal() {
	// Draw blue goal.
	ctx.fillStyle = blue ;
	ctx.beginPath();
	ctx.rect(270, 270, 30, 30);
	ctx.closePath();
	ctx.fill();
}

function drawShip() {
	// Draw saucer bottom.
	ctx.beginPath();
	ctx.moveTo(28.4, 16.9);
	ctx.bezierCurveTo(28.4, 19.7, 22.9, 22.0, 16.0, 22.0);
	ctx.bezierCurveTo(9.1, 22.0, 3.6, 19.7, 3.6, 16.9);
	ctx.bezierCurveTo(3.6, 14.1, 9.1, 11.8, 16.0, 11.8);
	ctx.bezierCurveTo(22.9, 11.8, 28.4, 14.1, 28.4, 16.9);
	ctx.closePath();
	ctx.fillStyle = "rgb(222, 103, 0)";
	ctx.fill();
	
	// Draw saucer top.
	ctx.beginPath();
	ctx.moveTo(22.3, 12.0);
	ctx.bezierCurveTo(22.3, 13.3, 19.4, 14.3, 15.9, 14.3);
	ctx.bezierCurveTo(12.4, 14.3, 9.6, 13.3, 9.6, 12.0);
	ctx.bezierCurveTo(9.6, 10.8, 12.4, 9.7, 15.9, 9.7);
	ctx.bezierCurveTo(19.4, 9.7, 22.3, 10.8, 22.3, 12.0);
	ctx.closePath();
	ctx.fillStyle = "rgb(51, 190, 0)";
	ctx.fill();
	
	// Save ship data.
	ship = ctx.getImageData(0, 0, 30, 30);
	
	// Erase it for now.
	ctx.putImageData(oldBack, 0, 0);
	
	// Put ship in new position.
	ctx.putImageData(ship, shipX, shipY);
	
	
}

function drawBombs() {
	// Draw Bombs, if any
	if ( num_Bombs_left < 3){
		for (i = 0; i <= bomb_posn_x.length - 1; i++) {
				// Draw green for bomb.
		ctx.fillStyle = green;
		ctx.beginPath();
		ctx.rect(bomb_posn_x[i], bomb_posn_y[i], 30, 30);
		ctx.closePath();
		ctx.fill();
          
		}    
	}
}


function drawCost(){
	// Draw cost on costboard.
	ctx2.clearRect(0, 0, 300, 300);
	ctx2.font = "20 point Ariel";
	ctx2.fillText("Cost", 30, 15);
	ctx2.fillText(cost, 100, 15);	
}



//  ### Helper Functions

function bang() {
	// You lose.
	alert("Game over! You hit an asteroid.");
	// Stop game.
	clearTimeout(gameLoop);
	window.removeEventListener('keydown', whatKey, true);
}
            
function youWin() {
	// You win.
	alert("Game over! You made it to home goal.");
	// Stop game.
	clearTimeout(gameLoop);
	window.removeEventListener('keydown', whatKey, true);
}

function addBomb() {
	if(num_Bombs_left > 0) {
		switch (direction) {
			case "D":
			bomb_posn_x.push(shipX); 
			bomb_posn_y.push(shipY + 30);
			break;
			
			case "U":
			bomb_posn_x.push(shipX); 
			bomb_posn_y.push(shipY - 30);
			break;
			
			case "L":
			bomb_posn_x.push(shipX - 30); 
			bomb_posn_y.push(shipY);
			break;
			
			case "R":
			bomb_posn_x.push(shipX + 30); 
			bomb_posn_y.push(shipY);
			break;
			
			default:
     	}     
	}
}
     
function collideTest() {

        // Collision detection. Get a clip from the screen.
        // See what the ship would move over.
        var clipWidth = 20;
        var clipDepth = 20;
        var clipLength = clipWidth * clipDepth;
        var clipOffset = 5;
        var whatColor = ctx.getImageData(shipX + clipOffset, shipY + clipOffset, clipWidth, clipDepth);

        // Loop through the clip and see if you find red or blue. 
        for (var i = 0; i < clipLength * 4; i += 4) {
          if (whatColor.data[i] == 255) {
            direction = "P";
            break;
          }
          // Second element is green but we don't care. 
          if (whatColor.data[i + 2] == 255) {
            direction = "B";
            break;
          }
          // Fourth element is alpha and we don't care. 
        }

        // Did we hit something?
        if (direction == "P") bang();
        if (direction == "B") youWin();
}

function whatKey(evt) {

        // Flag to put variables back if we hit an edge of the board.
        var flag = 0;

        // Get where the ship was before key process.
        oldShipX = shipX;
        oldShipY = shipY;
        oldBack = back;

        switch (evt.keyCode) {

          // Left arrow.
        case left:
          shipX = shipX - 30;
          if (shipX < 0) {
            // If at edge, reset ship position and set flag.
            shipX = 0;
            flag = 1;
          }
          direction = "L";
          break;

          // Right arrow.
        case right:
          shipX = shipX + 30;
          if (shipX > 270) {
            // If at edge, reset ship position and set flag.
            shipX = 270;
            flag = 1;
          }
          direction = "R";
          break;

          // Down arrow
        case down:
          shipY = shipY + 30;
          if (shipY > 270) {
            // If at edge, reset ship position and set flag.
            shipY = 270;
            flag = 1;
          }
          direction = "D";
          break;

          // Up arrow 
        case up:
          shipY = shipY - 30;
          if (shipY < 0) {
            // If at edge, reset ship position and set flag.
            shipY = 0;
            flag = 1;
          }
          direction = "U";
          break;

          // A key for drawing neutralizer field
        case a_key:
          if(num_Bombs_left > 0){
          
          // Using this increases your cost.
          cost = cost + 20;
          // The ship isn't moving.
          flag = 1;
          // Draw the bomb which will let you pass.
          addBomb();
          num_Bombs_left--;
          }
          
          break;

          // If any other keys were presssed
        default:
          flag = 1; // Don't move the ship.
          alert("Please only use the arrow keys.");

        }

        // If flag is set, the ship did not move.
        // Put everything back the way it was.
        // Reduce cost since the ship did not move.
        if (flag) {
          shipX = oldShipX;
          shipY = oldShipY;
          back = oldBack;
          cost = cost - 1;
        } else {
          // Otherwise, get background where the ship will go
          // So you can redraw background when the ship
          // moves again.
          back = ctx.getImageData(shipX, shipY, 30, 30);
        }

        // Increase cost.
        cost = cost + 1;

        // Did we collide?
        collideTest();

}