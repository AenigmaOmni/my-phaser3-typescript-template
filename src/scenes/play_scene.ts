import "phaser";
import Player from "../objects/player";
import PlayerManager from "../managers/player_manager";

export default class PlayScene extends Phaser.Scene
{
    private playerManager : PlayerManager;
    private text : Phaser.GameObjects.Text;

    constructor ()
    {
        super("PlayScene");
    }

    create ()
    {
        console.log("Switched to Play Scene");
        this.playerManager = new PlayerManager(this);  
        
        this.playerManager.init();
        let theText : string = "Press w or d to move!";
        this.text = this.add.text(0, Number(this.game.config.height) - 100, theText, { fontSize: '32px', fill: '#000' });
    }

    update(time: number, delta: number) {
        this.playerManager.update(time, delta);
    }
}