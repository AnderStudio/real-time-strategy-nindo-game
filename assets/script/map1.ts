// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class map1 extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    private x:number;
    private y:number;

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
}
