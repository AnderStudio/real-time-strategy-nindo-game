const {ccclass, property} = cc._decorator;

@ccclass
export default class Enemies2 extends cc.Component {

    @property({type: cc.Node})
    mapNode: cc.Node = null;

    @property({type: cc.Node})
    tmpPlayerNode: cc.Node = null;

    @property({type: cc.ParticleSystem})
    ninjutsuStart: cc.ParticleSystem = null;

    @property(cc.SpriteFrame)
    frog: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    KwanYienRight: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    KwanYienLeft: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    KwanYienUp: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    KwanYien: cc.SpriteFrame = null;

    @property enemyHP: number = 1000;

    private map: number[][]=[ // row: 9, col: 20
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    private path: cc.Vec2[] = [];

    //private enemyHP: number = 1000;

    private preHP: number = 1000;

    // States for enemy: 
    // 0: rest
    // 1: move
    // 2: hit
    // 3: recover
    // 4: 
    private enemyState: number = 0;
    
    private anim = null;

    private animateState = null;

    private playerX: number;

    private playerY: number;

    private px: number;

    private py: number;

    private ex: number;

    private ey: number;

    private cando: number = 1;

    private isMoving = false;

    private isPlayerOut = false;

    private timer: number = 0;

    onLoad(){
        this.anim = this.getComponent(cc.Animation);
        this.setMap();
        
    }

    start(){
        
        //let nowPos: cc.Vec2 = this.getNowPos();
        //this.getComponent("map").get_coordinateX(this.node.x);
        //this.getComponent("map").get_coordinateY(this.node.y);
        //this.anim = this.getComponent(cc.Animation);

        this.node.scaleX = -1;
        this.preHP = this.enemyHP;
        this.schedule(()=>{
            this.timer += 1;
            this.preHP = this.enemyHP;
            //if(!this.anim.getAnimationState("Kwan_hit").isPlaying) this.anim.play("Kwan_hit");
        }, 1);

        this.schedule(()=>{
            this.enemyHP -= 50;
            cc.log(this.enemyHP);
            this.cando *= -1;
            //if(!this.anim.getAnimationState("Kwan_hit").isPlaying) this.anim.play("Kwan_hit");
        }, 0.5);
        //this.moveToDes(68.75, 0);
        
        /*
        this.scheduleOnce(()=>{
            this.fireFrog();
        }, 5);
        */
    }

    update(dt){
        this.playerX = this.tmpPlayerNode.x;
        this.playerY = this.tmpPlayerNode.y;
        
        this.px = this.getMapPos('x', this.playerX);
        this.py = this.getMapPos('y', this.playerY);

        this.ex = this.getMapPos('x', this.node.x);
        this.ey = this.getMapPos('y', this.node.y);
        
        if(this.cando > 0) this.makeChoice();
        /*
        if(this.timer % 4 == 0 && !this.isMoving) {
            //this.isMoving = true;
            this.moveToDes(this.node.x, this.node.y + 65.5*3);
        }
        else if(this.timer % 4 == 1 && !this.isMoving) {
            //this.isMoving = true;
            this.moveToDes(this.node.x + 68.5*3, this.node.y);
        }
        else if(this.timer % 4 == 2 && !this.isMoving) {
            //this.isMoving = true;
            this.moveToDes(this.node.x, this.node.y - 65.5*3);
        }
        else if(this.timer % 4 == 3 && !this.isMoving) {
            //this.isMoving = true;
            this.moveToDes(this.node.x - 68.5*3, this.node.y);
        }
        */
    }

    getMapPos(dir :string, n: number){
        if(dir == 'x') return Math.floor(Number(n-60) /68.75);
        else return Math.floor(Number(n-255) /65.55);
        //return [r, c];
    }

    findPath(posX: number, posY: number){
        // DFS??
        let path_arr = [];
        let desC = Math.floor(Number(posX-60) /68.75);
        let desR = Math.floor(Number(posY-255) /65.55);
        //while(this.getEnemyPos() != [desR, desC]){

        //}
        return path_arr;
    }

    setMap(){
        // 從map1拿到map的資訊(包括障礙物位置等等)

    }

    moveToDes(posX: number, posY: number){
        this.isMoving = true;
        if(this.node.y < posY){
            this.getComponent(cc.Sprite).spriteFrame = this.KwanYienUp;
        }
        else if(this.node.y > posY){
            this.getComponent(cc.Sprite).spriteFrame = this.KwanYien;
        }
        else if(this.node.x < posX){
            this.getComponent(cc.Sprite).spriteFrame = this.KwanYienLeft;
        }
        else if(this.node.x > posX){
            this.getComponent(cc.Sprite).spriteFrame = this.KwanYienRight;
        }

        let action = cc.sequence(
            //cc.delayTime(1),
            cc.moveTo(0.3, posX, posY).easing(cc.easeInOut(2.0)),
            cc.delayTime(1)
            //cc.moveTo(0.3, -1 * posX, posY).easing(cc.easeInOut(2.0)),
            //cc.delayTime(1)
        );
        this.node.runAction(action);
        this.scheduleOnce(()=> { this.isMoving = false;}, 1);
    }

    makeChoice(){
        //if(this.isMoving) return;
        // 決定下一步要做甚麼
        if(this.enemyState == 0 && !this.isMoving){
            let waitTime = Math.floor(Math.random() * 10) % 5;
            this.scheduleOnce(()=>{
                if(this.enemyState == 0) this.enemyState = 1;
            }, waitTime);
        }
        // move to player nearby
        else if(this.enemyState == 1 && !this.isMoving){
            let dir = Math.floor(Math.random() * 10);
            
            let i;
            if(dir%3 == 0) i = 1;
            else if(dir%3 == 1) i = -1;
            else i = 0;

            if(this.px != this.ex && this.py != this.ey){
                if(dir % 2 == 0){
                    this.moveToDes(this.playerX + i*68.75, this.node.y);
                    //this.enemyState = 0;
                }
                else {
                    this.moveToDes(this.node.x, this.playerY + i*65.55);
                    //this.enemyState = 0;
                }
            }
            else if(this.px == this.ex || this.py == this.ey){
                this.enemyState = 2;
            }
        }
        // hit
        else if(this.enemyState == 2){
            if(this.px == this.ex){
                if(this.py > this.ey && this.py - this.ey <= 6){
                    this.getComponent(cc.Sprite).spriteFrame = this.KwanYienUp;
                    //this.node.scaleX = 1;
                    this.KwanYienHit('up');
                    
                }
                else if(this.py < this.ey && this.ey - this.py <= 6){
                    this.getComponent(cc.Sprite).spriteFrame = this.KwanYien;
                    //this.node.scaleX = -1;
                    this.KwanYienHit('down');
                }
            }
            else if(this.py == this.ey){
                if(this.px > this.ex && this.px - this.ex <= 6){
                    this.getComponent(cc.Sprite).spriteFrame = this.KwanYienRight;
                    this.node.scaleX = 1;
                    this.KwanYienHit('right');
                    
                }
                else if(this.px < this.ex && this.ex - this.px <= 6){
                    this.getComponent(cc.Sprite).spriteFrame = this.KwanYienLeft;
                    this.node.scaleX = -1;
                    this.KwanYienHit('left');
                }
            }
        }
        if(this.enemyHP < 250 && this.enemyState != 3 && !this.isMoving){ // 30% HP
            //if(this.preHP > this.enemyHP){
                //this.enemyState = 1;
            //}
            //else {
                this.enemyState = 3;
                this.enemyRecover();
            //}
        }
        
    }

    KwanYienHit(dir: string){
        if(dir == 'left' || dir == 'right'){
            if(!this.anim.getAnimationState("Kwan_hit").isPlaying) this.anim.play("Kwan_hit");
        }
        else if(dir == 'down'){
            if(!this.anim.getAnimationState("Kwan_hitdown").isPlaying) this.anim.play("Kwan_hitdown");
        }
        else {
            if(!this.anim.getAnimationState("Kwan_hitup").isPlaying) this.anim.play("Kwan_hitup");
        }
    }

    enemyRecover(){
        // 用回復忍術回復
        this.enemyHP += 100;
        this.enemyState = 0;
    }

    enemyDie(){

    }


    /*
    get_coordinateX(x) { //coco座標 換網格座標 (x)
        return Math.floor(Number(x-60) /68.75);
    }
    get_coordinateY(y) { //coco座標 換網格座標 (y)
        return Math.floor(Number(y-255) /65.55);
    }


    start () {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function(event){
            this.x = this.get_coordinateX(event.getLocationX());
            this.y = this.get_coordinateY(event.getLocationY());
            cc.log( this.x );
            cc.log( this.y );
        }, this);
    }

    

    // update (dt) {}
    */
}
