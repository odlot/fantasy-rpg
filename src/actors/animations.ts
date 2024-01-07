import { Images } from "../resources.ts";
import { Animation, ImageSource, SpriteSheet, Sprite } from "excalibur";

const warriorSpriteSheet = SpriteSheet.fromImageSource({
  image: Images.warriorSpriteSheet as ImageSource,
  grid: {
    spriteWidth: 192,
    spriteHeight: 192,
    rows: 8,
    columns: 6
  },
  spacing: {
    originOffset: { x: 16, y: 16 },
    margin: { x: 0, y: 0 }
  }
});

const idleRight = new Animation({
  frames: [
    { graphic: warriorSpriteSheet.getSprite(0, 0) as Sprite, duration: 100 },
    { graphic: warriorSpriteSheet.getSprite(1, 0) as Sprite, duration: 100 },
    { graphic: warriorSpriteSheet.getSprite(2, 0) as Sprite, duration: 100 },
    { graphic: warriorSpriteSheet.getSprite(3, 0) as Sprite, duration: 100 },
    { graphic: warriorSpriteSheet.getSprite(4, 0) as Sprite, duration: 100 },
    { graphic: warriorSpriteSheet.getSprite(5, 0) as Sprite, duration: 100 }
  ]
});

const idleLeft = idleRight.clone();
idleLeft.flipHorizontal = true;

const walkRight = new Animation({
  frames: [
    { graphic: warriorSpriteSheet.getSprite(0, 1) as Sprite, duration: 100 },
    { graphic: warriorSpriteSheet.getSprite(1, 1) as Sprite, duration: 100 },
    { graphic: warriorSpriteSheet.getSprite(2, 1) as Sprite, duration: 100 },
    { graphic: warriorSpriteSheet.getSprite(3, 1) as Sprite, duration: 100 },
    { graphic: warriorSpriteSheet.getSprite(4, 1) as Sprite, duration: 100 },
    { graphic: warriorSpriteSheet.getSprite(5, 1) as Sprite, duration: 100 },
  ]
});

const walkLeft = walkRight.clone();
walkLeft.flipHorizontal = true;

const swingRight = new Animation({
  frames: [
    { graphic: warriorSpriteSheet.getSprite(0, 2) as Sprite, duration: 100 },
    { graphic: warriorSpriteSheet.getSprite(1, 2) as Sprite, duration: 100 },
    { graphic: warriorSpriteSheet.getSprite(2, 2) as Sprite, duration: 100 },
    { graphic: warriorSpriteSheet.getSprite(3, 2) as Sprite, duration: 100 },
    { graphic: warriorSpriteSheet.getSprite(4, 2) as Sprite, duration: 100 },
    { graphic: warriorSpriteSheet.getSprite(5, 2) as Sprite, duration: 100 },
  ]
});

const swingLeft = swingRight.clone();
swingLeft.flipHorizontal = true;

export const animationsList = {
  idleRight,
  idleLeft,
  walkRight,
  walkLeft
};

export const animationsMap = {
  IDLE: [idleRight, idleLeft],
  WALK: [walkRight, walkLeft],
  SWING: [swingRight, swingLeft]
};