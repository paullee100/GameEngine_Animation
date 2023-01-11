const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

// spritesheets
ASSET_MANAGER.queueDownload("./sprites/mario.png");
ASSET_MANAGER.queueDownload("./sprites/mario_attack.png");
ASSET_MANAGER.queueDownload("./sprites/mario_attack_left.png");
ASSET_MANAGER.queueDownload("./sprites/mario_background.png");

// music
ASSET_MANAGER.queueDownload("./music/default_music.mp4");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	ASSET_MANAGER.autoRepeat("./music/default_music.mp4");

	gameEngine.init(ctx);

	gameEngine.addEntity(new Mario(gameEngine));
	gameEngine.addEntity(new Background(gameEngine));

	gameEngine.start();
});
