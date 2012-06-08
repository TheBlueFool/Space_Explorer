// Space Explorer
//	Richard Pavis
// Global Variables for Space Explorer

// ### Global variables

// Game Variables
	var canvas; // canvas
	var ctx; // context
	var shipX = 0; // X position of ship
	var shipY = 0; // Y position of ship
	var num_Bombs_left = 3;

	var back = new Image(); // storage for new background piece
	var oldBack = new Image(); // storage for old background piece
	var ship = new Image(); // ship
	var bomb = new Image(); // bomb
	var shipX = 0; // current ship position X
	var shipY = 0; // current ship position Y
	var oldShipX = 0; // old ship position Y
	var oldShipY = 0; // old ship position Y
	var direction = "R"; // direction of ship movement
	var cost = 0; // cost
      
// Asteroids positions
	var asteroid_posn_x = new Array(20);
	var asteroid_posn_y = new Array(20);

// Star positions
	var star_posn_x = new Array(50);
	var star_posn_y = new Array(50);

// Bomb positions
	var bomb_posn_x = new Array(5);
	var bomb_posn_y = new Array(5);

// ### Global Constants
 
//Color Values      
	var blue = "#0000FF";
	var red = "red";
	var grey = "#808080";
	var purple = "#800080";
	var yellow = "#FFFF00";
	var green = "#00FF00";
	var white ="#EEEEEE" ;

// Key Values
	var left = 37;
	var right = 39;
	var down = 40;
	var up = 38;
	var a_key = 65; 
      
      