class Mario {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});

        this.game.mario = this;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/mario.png");
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0);
    };
};