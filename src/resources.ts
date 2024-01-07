import { ImageFiltering, ImageSource, Loader } from "excalibur";

const Images = {
  warriorSpriteSheet: new ImageSource("/sprites/tiny-swords/factions/knights/troops/warrior/warrior.png", false, ImageFiltering.Pixel)
}

const resources = { ...Images };

const loader = new Loader();
for (let resource of Object.values(resources)) {
  loader.addResource(resource);
}

export { loader, Images };