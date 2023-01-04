class Mario {
    constructor(game) {
        Object.assign(this, {game});

        this.game.mario = this;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/mario.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0);
    };
};