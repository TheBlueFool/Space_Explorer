// Space Explorer
// Richard Pavis
// Primary game loop for Space Explorer
	  
function canvasSpaceGame() {
	
	// Initialize main elements.	
	initializeGame();

	// Enter loop until the game is over.
	gameLoop = setInterval(doGameLoop, 16);
}

function doGameLoop() {
	
	// Paint it black.
	clearScreen();
	
	// Draw the starfield.
	drawStars();

	// Draw space ship.
	drawShip();	

	// Draw asteroids.
	drawAsteroids();

	// Draw Goal.
	drawGoal();	
	
	// Draw Bombs.
	drawBombs();
	
	// Draw Cost.
	drawCost();
	
}



      


