import '../css/main.css';
import { Snake, SnakeDirection } from './Snake';

class App {

  /**
   * Node of the <canvas> element
   */
  canvasElm: HTMLCanvasElement;

  /**
   * Canvas context
   */
  context: CanvasRenderingContext2D;

  /**
   * The Snake instance
   */
  snake: Snake;

  /**
   * App constructor
   *
   * @param canvasElm
   */
  constructor(canvasElm: HTMLCanvasElement) {
    this.canvasElm = canvasElm;
    this.context = canvasElm.getContext('2d');
    this.snake = new Snake(this.context);
  }

  /**
   * Initialize game
   */
  initialize() {

    setInterval(() => {
      this.snake.draw();
    }, 80);

    this.control();
  }

  /**
   * Initialize controls
   */
  control() {
    document.addEventListener('keydown', (e) => {
      let key = e.keyCode;

      switch (key) {
        case 37: this.snake.turn(SnakeDirection.Left); break;
        case 38: this.snake.turn(SnakeDirection.Up); break;
        case 39: this.snake.turn(SnakeDirection.Right); break;
        case 40: this.snake.turn(SnakeDirection.Down); break;
      }
    });
  }
}

let app = new App(<HTMLCanvasElement> document.getElementById('canvas'));
app.initialize();