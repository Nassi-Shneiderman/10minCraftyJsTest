//////////////////////////////////////////////////////////////////
var GAME_VERSION = "None";
var ENGINE_VERSION = Crafty.getVersion();
var GAME_WIDTH = 1000;
var GAME_HEIGHT = 800;
var GROUND_SPRITE_HEIGHT = 32;
var PLAYER_SPRITE_HEIGHT = 92;
var PLAYER_SPRITE_WIDTH = 66;
//////////////////////////////////////////////////////////////////
Crafty.init(GAME_WIDTH, GAME_HEIGHT, document.getElementById('game'));
Crafty.background('url(./img/bg.png) repeat center center');
//////////////////////////////////////////////////////////////////
Crafty.sprite(PLAYER_SPRITE_WIDTH,PLAYER_SPRITE_HEIGHT,"./img/player.png", {player:[0,0]});
Crafty.sprite(PLAYER_SPRITE_WIDTH,PLAYER_SPRITE_HEIGHT,"./img/explosion-sprites.png", {explode:[0,0]});
//////////////////////////////////////////////////////////////////
var ground = Crafty.e('Canvas, 2D, Color, Floor, Image');
var player = Crafty.e('Canvas, 2D, Color, Gravity, Twoway, SpriteAnimation, player');
//////////////////////////////////////////////////////////////////
ground.attr({
    x: 0,
    h: GROUND_SPRITE_HEIGHT,
    y: GAME_HEIGHT - GROUND_SPRITE_HEIGHT,
    w: GAME_WIDTH
});
ground.image('./img/ground.png','repeat');
//////////////////////////////////////////////////////////////////
player.gravity('Floor');
player.twoway(3);
player.reel('idle', 100, 0, 0, 3);
//player.reel('PlayerRunning', 375, 0, 0, 3);
player.animate('PlayerRunning', -1);
//////////////////////////////////////////////////////////////////
console.log("Game version: "+GAME_VERSION);
console.log("Engine version: "+"CraftyJS "+ENGINE_VERSION);
console.log("Ready to use");