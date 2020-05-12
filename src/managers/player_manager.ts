import "phaser";
import Player from "../objects/player";

export default class PlayerManager {
    private player : Player;
    private scene : Phaser.Scene;

    private keyA : Phaser.Input.Keyboard.Key;
    private keyD : Phaser.Input.Keyboard.Key;
    private keySpace : Phaser.Input.Keyboard.Key;

    constructor(scene : Phaser.Scene) {
        this.player = new Player(scene, "Sprite", 0, 0);
        this.scene = scene;
    }

    init(){
        console.log("Initialized Player Manager");
        //Setup keyboard
        this.keyA = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keySpace = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);    
    }
    
    update(time : number, delta : number) : void {
        this.processInput(time, delta);
    }

    private processInput(time : number, delta : number) : void {
        var velocity = this.scene.registry.get("playerVelocity");

        //Horizontal movement
        if(this.keyA.isDown) {
            this.player.getSprite().body.velocity.x = -velocity;
        }
        else if(this.keyD.isDown) {
            this.player.getSprite().body.velocity.x = velocity;
        }
        else {
            this.player.getSprite().body.velocity.x = 0;
        }
    }
}