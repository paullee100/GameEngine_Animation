class Mario {
    constructor(game) {
        Object.assign(this, {game});

        this.game.mario = this;
        this.state = 0; // idle = 0, running = 1, flying = 2

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/mario.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 208, 76, 16, 32, 0, 0, 48, 96);
    };
};