import { Actor, Animation, Color, Engine, ImageSource, Keys, Sprite, SpriteSheet, Vector } from "excalibur";
import { Images } from "../resources.ts";
import { WIDTH, HEIGHT } from "../constants.ts";
import { animationsList, animationsMap } from "./animations.ts";
import { DIRECTION } from "../utilities/direction.ts";

export class Player extends Actor {
  private movementSpeed: number = 100;
  private direction: DIRECTION;

  constructor(pos: Vector) {
    super({
      pos: pos,
      width: WIDTH,
      height: HEIGHT,
      color: Color.Red
    });
    this.graphics.use(animationsList.idleRight);
    this.direction = DIRECTION.RIGHT;
  }

  public onInitialize(engine: Engine): void {

  }

  public onPreUpdate(engine: Engine, delta: number): void {
    const keyboard = engine.input.keyboard;

    this.vel = Vector.Zero;
    if (keyboard.isHeld(Keys.ArrowUp)) {
      this.vel.y -= this.movementSpeed;
    }
    if (keyboard.isHeld(Keys.ArrowLeft)) {
      this.vel.x -= this.movementSpeed;
    }
    if (keyboard.isHeld(Keys.ArrowRight)) {
      this.vel.x += this.movementSpeed;
    }
    if (keyboard.isHeld(Keys.ArrowDown)) {
      this.vel.y += this.movementSpeed;
    }

    let direction: DIRECTION = this.direction;
    if (this.vel.x === 0 && this.vel.y === 0) {
      direction = this.direction;
    } else if (this.vel.x === 0 && this.vel.y < 0) {
      direction = DIRECTION.UP;
    } else if (this.vel.x < 0 && this.vel.y === 0) {
      direction = DIRECTION.LEFT;
    } else if (this.vel.x > 0 && this.vel.y === 0) {
      direction = DIRECTION.RIGHT;
    } else if (this.vel.x === 0 && this.vel.y > 0) {
      direction = DIRECTION.DOWN;
    } else if (this.vel.x < 0 && this.vel.y < 0) {
      direction = DIRECTION.UP_LEFT;
    } else if (this.vel.x > 0 && this.vel.y < 0) {
      direction = DIRECTION.UP_RIGHT;
    } else if (this.vel.x < 0 && this.vel.y > 0) {
      direction = DIRECTION.DOWN_LEFT;
    } else {
      direction = DIRECTION.DOWN_RIGHT;
    }

    let index: number;
    if (direction === DIRECTION.UP || direction === DIRECTION.DOWN) {
      index = (this.direction === DIRECTION.RIGHT || this.direction === DIRECTION.UP_RIGHT || this.direction === DIRECTION.DOWN_RIGHT) ? 0 : 1;
    } else {
      index = (direction === DIRECTION.RIGHT || direction === DIRECTION.UP_RIGHT || direction === DIRECTION.DOWN_RIGHT) ? 0 : 1;
    }

    this.direction = direction;

    if (this.vel.x === 0 && this.vel.y === 0) {
      this.graphics.use(animationsMap["IDLE"][index]);
    } else {
      console.log(direction);
      this.graphics.use(animationsMap["WALK"][index]);
    }

    if (keyboard.isHeld(Keys.Space)) {
      console.log("Swinging the sword!");
      this.graphics.use(animationsMap["SWING"][index]);
    }
  }
}