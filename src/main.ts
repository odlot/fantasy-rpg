import { Game } from "./game.ts";
import { loader } from "./resources.ts";
import { Player } from "./actors/player.ts";
import { Vector } from "excalibur";

const game = new Game();
game.start(loader).then(function () {
  game.currentScene.add(new Player(new Vector(256, 256)));
})
