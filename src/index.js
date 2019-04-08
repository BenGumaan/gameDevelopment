import Paddle from "/src/paddle";
import InputHandler from "/src/input";
import Ball from "/src/ball";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// to update the screen and remove what was previously there!
ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle);

// paddle.draw(ctx);

let lastTime = 0;

// images

// let imgBall = document.getElementById("img_ball");

// timestamp is a must here!
function gameloop(timestamp) {
  let deltaTime = timestamp - lastTime; // deltaTime = progress
  lastTime = timestamp;
  ctx.clearRect(0, 0, 800, 600); // هيي
  paddle.update(); // حدث
  paddle.draw(ctx); // اعرض

  ball.update();
  ball.draw(ctx);
  // ctx.drawImage(imgBall, 10, 10, 30, 20); // اعرض

  requestAnimationFrame(gameloop);
}

requestAnimationFrame(gameloop);
