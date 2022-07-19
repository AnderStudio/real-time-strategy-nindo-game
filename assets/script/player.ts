const { ccclass, property } = cc._decorator;

@ccclass
export default class Mario extends cc.Component {

    @property()
    playerSpeed: number = 10;//應該非必要，因為他會在一秒內到達那個地方，無論距離多遠

    @property(cc.AudioClip)
    dieSoundClip = null;

    // 0up, 1right, 2down, 3left
    private dir: number = 2;

    private mouseDown: boolean = false;
    private mouseLastDownPos: cc.Vec2;
    private curMousePos: cc.Vec2;

    public isDead: boolean = false;

    private anim = null;
    private animState = null;

    private fps: number = 60;
    private secsToChargeToMax: number = 10;
    private energyMax: number = this.secsToChargeToMax * this.fps;
    private curEnergy: number = 0;

    private blockSpanX: number = 68.75;
    private blockSpanY: number = 65.55;

    private rightBound: number = 1435;
    private leftBound: number = 60;
    private upBound: number = 845;
    private downBound: number = 255;

    //給角色切換sprite用
    @property(cc.SpriteFrame)
    private spriteLeftRight: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    private spriteUp: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    private spriteDown: cc.SpriteFrame = null;

    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2(); // 如果希望重力加速度为 0，可以这样设置

        this.anim = this.node.getComponent(cc.Animation);
    }

    start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onMouseDown, this);
        cc.find("Canvas").on(cc.Node.EventType.TOUCH_MOVE, this.onMouseMove, this);
        cc.find("Canvas").on(cc.Node.EventType.TOUCH_END, this.onMouseUp, this);

        //如果mouseDown，需要定時加能量
        this.schedule(() => { this.calculateEnergy(0); }, 0.25);

    }

    update(dt) {//dt單位是fps分之一。所以一秒會有60次。假設一個dt加1個能量，一秒就加60個能量。如果使用者能量滿需要10秒，總共能量最大值就是600。
        if (!this.isDead) {
            this.handleMove(dt);
            this.handleAnimation();

            //需要根據方向來挑選角色照片
            this.changeToProperSprite();
            cc.log(this.curEnergy);
        }
    }

    handleMove(dt) {
        // if(this.d_Down || this.a_Down) {              
        //     var now_x_speed = this.node.getComponent(cc.RigidBody).linearVelocity.x;
        //     if(now_x_speed >= 0 && now_x_speed < this.playerSpeed)
        //         this.node.getComponent(cc.RigidBody).applyForceToCenter(new cc.Vec2(this.playerSpeed*this.moveDir, 0), true);
        //     else if(now_x_speed < 0 && now_x_speed > -1 * this.playerSpeed)
        //         this.node.getComponent(cc.RigidBody).applyForceToCenter(new cc.Vec2(this.playerSpeed*this.moveDir, 0), true);
        // }

        // var mario_picture = this.node.getChildByName("Mario picture");
        // if(this.moveDir == 1 && mario_picture.scaleX < 0){
        //     mario_picture.scaleX *= -1;
        // }
        // else if(this.moveDir == -1 && mario_picture.scaleX > 0){
        //     mario_picture.scaleX *= -1;
        // }
    }

    handleAnimation() {
        // if(this.animState != null){
        //     switch (this.animState.name) {  
        //         case "small_idle" : {
        //             if(this.space_Down)
        //                 this.animState = this.anim.play("small_jump");
        //             else if(this.a_Down || this.d_Down)
        //                 this.animState = this.anim.play("small_move");
        //             break;
        //         }                
        //         case "small_move" : {
        //             if(this.space_Down)
        //                 this.animState = this.anim.play("small_jump");
        //             else if(!this.a_Down && !this.d_Down)
        //                 this.animState = this.anim.play("small_idle");
        //             break;
        //         }             
        //         default : this.animState = this.anim.play("small_idle");
        //     }
        // }
        // else {
        //     this.animState = this.anim.play("small_idle");
        // }

    }

    public playerDie() {
        // this.isDead = true;
        // if(this.animState.name != "small_die") { 
        //     //cc.find("Canvas/level 1 map").getComponent(cc.AudioSource).mute = true;
        //     cc.audioEngine.playEffect(this.dieSoundClip, false);               
        //     this.node.getComponent(cc.RigidBody).enabledContactListener = false;
        //     this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, this.jump_Velocity);
        // }
    }




    onMouseDown(ev) {
        //cc.log('Mouse Down!');
        //cc.log(ev);

        this.mouseDown = true;
        this.mouseLastDownPos = ev.getLocation();
    }
    onMouseMove(ev) {
        //cc.log('Mouse Move!');
        //cc.log(ev);

        var curCursorPos = ev.getLocation();//onMouseMove這個function的local變數
        this.curMousePos = ev.getLocation();//global變數，來判斷是否可以加能量用。如果滑鼠不在人物位置，就不能加能量。
        var cursorDisplacement = curCursorPos.sub(this.mouseLastDownPos);

        // 忍者只能往四個方向移動，所以要判斷cursorDisplacement在四個方向中的哪個
        // cocos的座標系統和數學的笛卡兒座標方向一樣
        var displacementUnitVector = cursorDisplacement.normalize();
        //先考慮滑鼠位移剛好在xy軸上
        if (displacementUnitVector.x == 0) {
            if (displacementUnitVector.y > 0)
                this.dir = 0;
            else
                this.dir = 2;
        }
        else if (displacementUnitVector.y == 0) {
            if (displacementUnitVector.x > 0)
                this.dir = 1;
            else
                this.dir = 3;
        }
        //再來考慮如果滑鼠不是在xy軸，而是在四個象限裡
        else if (cursorDisplacement.x > 0 && cursorDisplacement.y > 0) {
            if (this.distance(displacementUnitVector, new cc.Vec2(0, 1)) < this.distance(displacementUnitVector, new cc.Vec2(1, 0)))
                this.dir = 0;
            else
                this.dir = 1;
        }
        else if (cursorDisplacement.x < 0 && cursorDisplacement.y > 0) {
            if (this.distance(displacementUnitVector, new cc.Vec2(0, 1)) < this.distance(displacementUnitVector, new cc.Vec2(-1, 0)))
                this.dir = 0;
            else
                this.dir = 3;
        }
        else if (cursorDisplacement.x < 0 && cursorDisplacement.y < 0) {
            if (this.distance(displacementUnitVector, new cc.Vec2(0, -1)) < this.distance(displacementUnitVector, new cc.Vec2(-1, 0)))
                this.dir = 2;
            else
                this.dir = 3;
        }
        else if (cursorDisplacement.x > 0 && cursorDisplacement.y < 0) {
            if (this.distance(displacementUnitVector, new cc.Vec2(0, -1)) < this.distance(displacementUnitVector, new cc.Vec2(1, 0)))
                this.dir = 2;
            else
                this.dir = 1;
        }

    }
    onMouseUp(ev) {
        cc.log('Mouse Up!');
        cc.log(ev);


        this.moveWithAnime(ev.getLocation());

        this.mouseDown = false;
    }

    private distance(a: cc.Vec2, b: cc.Vec2): number {
        var deltaX = a.x - b.x;
        var deltaY = a.y - b.y;

        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }

    private changeToProperSprite() {
        var sprite = this.node.getComponent(cc.Sprite);

        this.node.scaleX = 1;
        if (this.dir == 0)
            sprite.spriteFrame = this.spriteUp;
        else if (this.dir == 2)
            sprite.spriteFrame = this.spriteDown;
        else {
            sprite.spriteFrame = this.spriteLeftRight;

            if (this.dir == 3) this.node.scaleX = -1;
        }

    }

    private calculateEnergy(numOfBlock: number = 0/*如果沒填寫這項，就是每個dt的加能量時間。如果有，就是要移動要扣能量。*/) {
        if (numOfBlock != 0) {
            cc.log("Need To Cost: " + Math.floor(numOfBlock * this.fps));
            this.curEnergy -= Math.floor(numOfBlock * this.fps);
            return;
        }

        if (this.mouseDown && this.distance(this.curMousePos/*目前鼠標位置*/, this.mouseLastDownPos/*人物位置*/) <= 20)
            this.curEnergy += 75;

        if (this.curEnergy > this.energyMax)
            this.curEnergy = this.energyMax;
    }

    private moveWithAnime(mouseUpPos: cc.Vec2) {
        //因為最多有this.secsToChargeToMax * this.fps個能量（目前是600），而我們寬20格高9格，所以假設能量滿的話，一次可以走10格，所以走一格要扣60能量，相當於fps

        //如果碰到障礙物要另外處理，但我還沒處理
        var mouseUpPosBackUp = mouseUpPos;
        var mouseLastDownPosBackUp = this.mouseLastDownPos;

        var cursorDisplacement = mouseUpPos.sub(this.mouseLastDownPos);
        //因為只能朝上下左右去移動，所以一樣要依照滑鼠位置去判斷dir。但好在剛剛在他還沒放開滑鼠左鍵之前，我就已經把dir處理完畢，所以就只要依照dir去算他能走幾格，再換算成x或y的移動變量即可。
        var numOfBlockWantToMoveX = Math.floor(Math.abs(cursorDisplacement.x) / this.blockSpanX);
        var numOfBlockWantToMoveY = Math.floor(Math.abs(cursorDisplacement.y) / this.blockSpanY);
        var REALnumOfBlockToMoveX;
        var REALnumOfBlockToMoveY;
        var destX;
        var destY;

        if (this.dir == 1 || this.dir == 3) { // 想要左右移動，所以用到的是x (numOfBlockWantToMoveX)
            //開始計算REALnumOfBlockToMoveX
            if (numOfBlockWantToMoveX * this.fps <= this.curEnergy)  // 如果玩家的能量夠
                REALnumOfBlockToMoveX = numOfBlockWantToMoveX;
            else //如果玩家能量不夠
                REALnumOfBlockToMoveX = Math.floor(this.curEnergy / this.fps);
            //但是，目前的REALnumOfBlockToMoveX還不是真正的REALnumOfBlockToMoveX！因為我們還沒有判定是否會超出邊界
            cc.log(REALnumOfBlockToMoveX);

            var sign = (this.dir == 1) ? 1 : -1;//用dir來判斷等下的加減號
            destX = (REALnumOfBlockToMoveX * this.blockSpanX * sign + this.mouseLastDownPos.x < this.rightBound) ?
                ((REALnumOfBlockToMoveX * this.blockSpanX * sign + this.mouseLastDownPos.x > this.leftBound) ? REALnumOfBlockToMoveX * this.blockSpanX * sign + this.mouseLastDownPos.x : this.leftBound) : this.rightBound;
            REALnumOfBlockToMoveX = Math.floor(Math.abs(destX - this.mouseLastDownPos.x) / this.blockSpanX);
            //終於把真正的REALnumOfBlockToMoveX(其實更準確講，是真正會到的位置a.k.a. destX)算好了！

            //計算真正花費後的剩餘能量
            cc.log("Costing Energy!!!");
            this.calculateEnergy(REALnumOfBlockToMoveX);

            //真正的物理移動
            this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(REALnumOfBlockToMoveX * this.blockSpanX * sign/*一秒跑到定點*/, 0);

            //製造跑步的動畫
            if (sign == 1) {//往右跑
                this.animState = this.anim.play("ninjaRightRun");
                this.scheduleOnce(() => {
                    this.animState = this.anim.play("ninjaRightStill");

                    this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0/*一秒後，速度要馬上歸零*/, 0);
                }, 1);
            }
            else {
                this.animState = this.anim.play("ninjaLeftRun");
                this.scheduleOnce(() => {
                    this.animState = this.anim.play("ninjaLeftStill");

                    this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0/*一秒後，速度要馬上歸零*/, 0);
                }, 1);
            }
        }
        else { // 想要上下移動，所以用到的是y (numOfBlockWantToMoveY)
            //開始計算REALnumOfBlockToMoveY
            if (numOfBlockWantToMoveY * this.fps <= this.curEnergy)  // 如果玩家的能量夠
                REALnumOfBlockToMoveY = numOfBlockWantToMoveY;
            else //如果玩家能量不夠
                REALnumOfBlockToMoveY = Math.floor(this.curEnergy / this.fps);
            //但是，目前的REALnumOfBlockToMoveY還不是真正的REALnumOfBlockToMoveY！因為我們還沒有判定是否會超出邊界
            cc.log(REALnumOfBlockToMoveY);

            var sign = (this.dir == 0) ? 1 : -1;//用dir來判斷等下的加減號
            destY = (REALnumOfBlockToMoveY * this.blockSpanY * sign + this.mouseLastDownPos.y < this.upBound) ?
                ((REALnumOfBlockToMoveY * this.blockSpanY * sign + this.mouseLastDownPos.y > this.downBound) ? REALnumOfBlockToMoveY * this.blockSpanY * sign + this.mouseLastDownPos.y : this.downBound) : this.upBound;
            REALnumOfBlockToMoveY = Math.floor(Math.abs(destY - this.mouseLastDownPos.y) / this.blockSpanY);
            //終於把真正的REALnumOfBlockToMoveY(其實更準確講，是真正會到的位置a.k.a. destY)算好了！

            //計算真正花費後的剩餘能量
            cc.log("Costing Energy!!!");
            this.calculateEnergy(REALnumOfBlockToMoveY);

            //真正的物理移動
            this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, REALnumOfBlockToMoveY * this.blockSpanY * sign/*一秒跑到定點*/);

            //製造跑步的動畫
            if (sign == 0) {//往上跑
                this.animState = this.anim.play("ninjaUpRun");
                this.scheduleOnce(() => {
                    this.animState = this.anim.play("ninjaUpStill");

                    this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0/*一秒後，速度要馬上歸零*/);
                }, 1);
            }
            else {
                this.animState = this.anim.play("ninjaDownRun");
                this.scheduleOnce(() => {
                    this.animState = this.anim.play("ninjaDownStill");

                    this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0/*一秒後，速度要馬上歸零*/);
                }, 1);
            }
        }


    }



    onBeginContact(contact, self, other) {

    }
}
