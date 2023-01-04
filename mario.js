class Mario {
    constructor(game) {
        Object.assign(this, {game});

        this.game.mario = this;
        this.state = 0; // idle = 0, walking = 1, spinning = 3

        this.animation = new Animator(this.spritesheet, 248, 76, 16, 32, 2, 0.5, 14, false, true);

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/mario.png");
    };

    update() {

    };

    draw(ctx) {
        //ctx.drawImage(this.spritesheet, 208, 76, 16, 32, 0, 0, 48, 96);
        this.animation.drawFrame(this.game.clockTick, ctx, 0, 0, 3);s
    };
};