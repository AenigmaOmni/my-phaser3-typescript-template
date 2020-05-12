import 'phaser';
import BootScene from "./scenes/boot_scene";
import PlayScene from "./scenes/play_scene";

const config = {
    type: Phaser.AUTO,
    backgroundColor: "#f5cc69",
    width: 1024,
    height: 700,
    scene: [BootScene, PlayScene],
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    vsync: true,
};

const game = new Phaser.Game(config);
