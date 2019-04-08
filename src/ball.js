export default class Ball {
  constructor(gameWidth, gameHeight) {
    this.image = document.getElementById("img_ball");

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.width = 30;
    this.height = 20;

    this.maxSpeed = 6;
    this.speed = 0;

    this.position = {
      x: 10,
      y: 10
    };
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    ); // اعرض
  }

  update() {
    // if (!deltaTime) return;
    // this.position.x += 5 / deltaTime;
    this.position.x += 2;
    this.position.y += 2;

    if (this.position.x < 0) {
      this.position.x = 0;
    }
    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
    if (this.position.y < 0) {
      this.position.y = 0;
    }
    if (this.position.y + this.height > this.gameHeight) {
      this.position.y = this.gameHeight - this.height;
    }
  }
}
