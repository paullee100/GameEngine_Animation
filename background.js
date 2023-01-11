class Background {
    constructor(game) {
        Object.assign(this, {game});

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/mario_background.png");

    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 45, 50, 950, 600);
    }
}