import GameObject from "./GameObject.js";
import GameEnv from "./GameEnv.js";

// BackgroundObject class extending GameObject
class BackgroundObject extends GameObject {
    constructor(data) {
        super();
        this.name = data.name;
        this.src = data.src;
        this.pixels = data.pixels;
        this.position = data.INIT_POSITION || { x: 0, y: 0 };
        this.scaleFactor = data.SCALE_FACTOR

        if (data.src) {
            this.image = new Image();
            this.image.src = this.src;

            // Log image loading process
            this.image.onload = () => console.log(`BackgroundObject image loaded successfully: ${this.src}`);
            this.image.onerror = () => console.error(`Failed to load BackgroundObject image: ${this.src}`);
        } else {
            this.image = null;
        }

        GameEnv.gameObjects.push(this); // Add to game objects
    }

    draw() {
        const ctx = GameEnv.ctx;
        if (this.image && this.image.complete) {
            console.log(`Drawing BackgroundObject at (${this.position.x}, ${this.position.y}) with dimensions (${this.pixels.width}, ${this.pixels.height})`);
            ctx.drawImage(this.image, this.position.x, this.position.y, this.pixels.width, this.pixels.height);
        } else {
            console.error('Image not fully loaded or missing');
        }
    }

    update() {
        this.draw();
    }

    resize() {
        this.draw();
    }

    destroy() {
        const index = GameEnv.gameObjects.indexOf(this);
        if (index !== -1) {
            GameEnv.gameObjects.splice(index, 1);
        }
    }
}

export default BackgroundObject;