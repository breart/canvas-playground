enum SnakeDirection {
  Up = 1,
  Down,
  Right,
  Left
}

class SnakeCell {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Snake {

  /**
   * Canvas context
   */
  ctx: CanvasRenderingContext2D;

  /**
   * Snake cells
   * @type {Array}
   */
  snake: Array<SnakeCell> = [];

  /**
   * Field's cell width and height
   * @type {number}
   */
  cellWidth: number = 10;
  cellHeight: number = 10;

  /**
   * Default snake width
   * @type {number}
   */
  snakeWidth: number = 8;

  /**
   * Color of the snake
   * @type {string}
   */
  color: string = '#19b726';

  /**
   * Direction of the snake
   */
  direction: SnakeDirection = SnakeDirection.Right;

  /**
   * Snake constructor
   * @param context
   */
  constructor(context: CanvasRenderingContext2D) {

    this.ctx = context;

    for (let i = 0; i < this.snakeWidth; i++) {
      this.snake.push(new SnakeCell(i, 0));
    }
  }

  /**
   * Draw an object
   */
  draw() {

    this.drawSnake();
    this.move();
  }

  /**
   * Redraw an object
   */
  drawSnake() {

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    for (let i = 0; i < this.snake.length - 1; i++) {
      let cell = this.snake[i];

      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(cell.x * this.cellWidth, cell.y * this.cellHeight, this.cellWidth, this.cellHeight);
    }
  }

  /**
   * Update an object position
   */
  move() {
    let head = this.snake[0];

    switch (this.direction) {
      case SnakeDirection.Left  : head.x--; break;
      case SnakeDirection.Right : head.x++; break;
      case SnakeDirection.Up    : head.y--; break;
      case SnakeDirection.Down  : head.y++;
    }

    // Out of bounds
    if(head.x > this.ctx.canvas.width / this.cellWidth) {
      head.x = 0;
    }
    else if(head.x < 0) {
      head.x = this.ctx.canvas.width / this.cellWidth;
    }
    else if(head.y > this.ctx.canvas.height / this.cellHeight) {
      head.y = 0;
    }
    else if(head.y < 0) {
      head.y = this.ctx.canvas.height / this.cellHeight;
    }

    let tail = this.snake.pop();
    tail.x = head.x;
    tail.y = head.y;

    this.snake.unshift(tail);
  }

  /**
   * Changes direction of the snake
   * @param direction
   */
  turn(direction: SnakeDirection) {
    this.direction = direction;
  }
}

export { Snake, SnakeDirection };