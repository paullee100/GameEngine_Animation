class Mario {
    constructor(game) {
        Object.assign(this, {game});

        this.game.mario = this;
        this.velocity = {x: 0, y: 0};
        this.facing = 0; // right = 0, left = 1
        this.state = 1; // idle = 0, walking = 1, running = 2, spinning = 3
        this.spritesheet = [];

        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/mario.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/mario_attack.png"));
        this.spritesheet.push(ASSET_MANAGER.getAsset("./sprites/mario_attack_left.png"));

        // spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop
        this.animation = [];
        this.animation.push(new Animator(this.spritesheet[0], 0, 5, 24, 32, 4, 2, 15, false, true));
        this.animation.push(new Animator(this.spritesheet[1], 2, 2, 33.5, 46, 6, 0.14, 6.5, false, true));
        this.animation.push(new Animator(this.spritesheet[2], 2, 2, 33.5, 46, 6, 0.14, 6, false, true));
    
    };

    update() {
        let WALK = 4.453125;

        // this.velocity.x += WALK;
        
        if (this.velocity.x > 700) {
            this.facing = 1;
        } else if (this.velocity.x < 0) {
            this.facing = 0;
        }

        if (this.facing == 0) {
            this.velocity.x += WALK;
        } else if (this.facing == 1) {
            this.velocity.x -= WALK;
        }
    };

    draw(ctx) {
        for (let i = 0; i < 20; i++) {
            this.animation[0].drawFrame(this.game.clockTick, ctx, 10 + (50 * i), 10, 3, 3);
        }

        for (let i = 0; i < 20; i++) {
            this.animation[0].drawFrame(this.game.clockTick, ctx, 10 + (50 * i), 610, 3, 5);
        }

        for (let i = 1; i < 6; i++) {
            this.animation[0].drawFrame(this.game.clockTick, ctx, 10, 10 + 100 * i, 3, 3);
        }

        for (let i = 1; i < 6; i++) {
            this.animation[0].drawFrame(this.game.clockTick, ctx, 960, 10 + 100 * i, 3, 3);
        }

        if (this.facing == 0) {
            this.animation[1].drawFrame(this.game.clockTick, ctx, 100 + this.velocity.x, 200, 3, 3);
        } else if (this.facing == 1) {
            this.animation[2].drawFrame(this.game.clockTick, ctx, 100 + this.velocity.x, 200, 3, 3);
        }
        // this.animation.drawFrame(this.game.clockTick, ctx, 10, 10, 3);
        // this.animation.drawFrame(this.game.clockTick, ctx, 60, 10, 3);
    };
};