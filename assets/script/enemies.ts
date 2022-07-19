const {ccclass, property} = cc._decorator;

@ccclass
export default class Enemies extends cc.Component {

    @property({type: cc.Node})
    mapNode: cc.Node = null;

    @property({type: cc.Node})
    tmpPlayerNode: cc.Node = null;

    @property({type: cc.ParticleSystem})
    ninjutsuStart: cc.ParticleSystem = null;

    @property(cc.SpriteFrame)
    frog: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    enemyPic1: cc.SpriteFrame = null;

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

    private enemyHP: number = 500;

    // States for enemy: 
    // 0: Initial
    // 1: 
    // 2: 
    // 3: 
    // 4: 
    private enemyState: number = 0;
    
    private playerInfo : any = null;
    
    private anim = null;

    private animateState = null;

    private playerX: number;

    private playerY: number;

    private isFrog = false;

    private isMoving = false;

    private isPlayerOut = false;

    private timer: number = 0;

    onLoad(){
        //this.anim = this.getComponent(cc.Animation);
        this.setMap();
        
    }

    start(){
        
        //let nowPos: cc.Vec2 = this.getNowPos();
        //this.getComponent("map").get_coordinateX(this.node.x);
        //this.getComponent("map").get_coordinateY(this.node.y);
        this.anim = this.getComponent(cc.Animation);

        this.schedule(()=>{
            this.timer += 1;
        }, 1);
        //this.moveToDes(68.75, 0);
        
        /*
        this.scheduleOnce(()=>{
            this.fireFrog();
        }, 5);
        */
    }

    update(dt){
        //if(this.isMoving) return;
        this.playerX = this.tmpPlayerNode.x;
        this.playerY = this.tmpPlayerNode.y;

        if(this.enemyHP <= 0){
            this.enemyDie();
        }

        if(this.isPlayerOut){
            this.scheduleOnce(()=>{

                let a, b;
                a = Math.floor(Math.random() * 100) % 20;
                b = Math.floor(Math.random() * 100) % 9;
                this.tmpPlayerNode.x = 60 + a * 68.5;
                this.tmpPlayerNode.y = 255 + b * 65.5;
                this.tmpPlayerNode.getComponent(cc.Sprite).enabled = true;
            }, 3);
            this.isPlayerOut = false;
        }

        // player 在地圖上哪一格
        let px = this.getMapPos('x', this.playerX);
        let py = this.getMapPos('y', this.playerY);

        // enemy 在地圖上哪一格
        let ex = this.getMapPos('x', this.node.x);
        let ey = this.getMapPos('y', this.node.y);

        if(!this.isMoving){
            if(px == ex && py != ey){
                this.moveToDes(this.node.x, this.playerY);
            }
            else if(py == ey && px != ex){
                this.moveToDes(this.playerX, this.node.y);
            }
            else if(px != ex && py != ey){
                let randomNum = Math.floor(Math.random() * 100);
                if(randomNum % 2){
                    if(px > ex){
                        randomNum %= 20;
                        if(ex + randomNum < 20) this.moveToDes(this.node.x + randomNum*68.75, this.node.y);
                        else this.moveToDes(this.tmpPlayerNode.x, this.node.y);
                    }
                    else if(px < ex){
                        randomNum %= 20;
                        if(ex > randomNum) this.moveToDes(this.node.x - randomNum*68.75, this.node.y);
                        else this.moveToDes(this.tmpPlayerNode.x, this.node.y);
                    }
                }
                else {
                    if(py > ey){
                        randomNum %= 9;
                        if(ey + randomNum < 9) this.moveToDes(this.node.x, this.node.y + randomNum*65.5);
                        else this.moveToDes(this.node.x, this.tmpPlayerNode.y);
                    }
                    else if(py < ey){
                        if(ey - randomNum > 0) this.moveToDes(this.node.x, this.node.y - randomNum*65.5);
                        else this.moveToDes(this.node.x, this.tmpPlayerNode.y);
                    }
                }
            }
            else if(px == ex && py == ey && !this.isPlayerOut){
                this.isPlayerOut = true;
                this.tmpPlayerNode.getComponent(cc.Sprite).enabled = false;
            }
    /*
                // 找path
                if(this.path.length == 0){
                    this.path = this.findPath(this.playerX, this.playerY);
                }
    
                // 找出path之後依序移動到path的每個點
                var i = 0, pl = this.path.length;
                for(i = 0; i < pl; i++){
                    cc.log(pl, i);
                    this.moveToDes(this.path[i].x, this.path[i].y);
                    if(i == pl-1) this.path = [];
                }
    */       
           
         
            
            // 如果不是火蛙就要變火蛙
            if(!this.isFrog){
                this.fireFrog();
            }
        }
        
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

    fireFrog(){
        this.isFrog = true;
        this.ninjutsuStart.resetSystem();
        if(!this.anim.getAnimationState("fireFrog_anim").isPlaying){
            this.animateState = this.anim.play("fireFrog_anim");
        }
        this.scheduleOnce(()=> { this.ninjutsuStart.stopSystem()}, 2);
        this.scheduleOnce(()=> {
            this.getComponent(cc.Sprite).spriteFrame = this.enemyPic1;
            this.node.scaleX = 0.1;
            this.node.scaleY = 0.1;
            this.isFrog = false;
        }, 12);
        //this.ninjutsuStart.getComponent(cc.ParticleSystem).
    }

    setMap(){
        // 從map1拿到map的資訊(包括障礙物位置等等)

    }

    moveToDes(posX: number, posY: number){
        this.isMoving = true;
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

    
    

    makeCoice(){

        // 決定下一步要做甚麼
        if(this.enemyHP > 250){ // half HP up
            if(/*self is attacked*/1){
                if(/*skill available*/1){

                }
                // attack;
            }
            else if(/*player in attack range*/1){
                // attack
            }
        }
        else {
            if(/*self is attacked*/1){
                // run away
            }
            else /*recovery*/;
        }
        
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
