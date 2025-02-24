import GameEnv from './GameEnv.js';
import Background from './Background.js';

export class BackgroundParallax extends Background  {
    constructor(data = null, speed = 1) {
        super(data);
        this.speed = speed;
        this.offsetY = 0;
    }

    update() {
        this.offsetY += this.speed;
        if (this.offsetY >= this.image.height) {
            this.offsetY = 0;
        }
        this.draw();
    }

    draw() {
        const ctx = GameEnv.ctx;
        const width = GameEnv.innerWidth;
        const height = GameEnv.innerHeight;

        if (this.image) {
            ctx.drawImage(this.image, 0, -this.offsetY, width, height);
            ctx.drawImage(this.image, 0, height - this.offsetY, width, height);
        }
    }

}

export default BackgroundParallax;