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
export default class store extends cc.Component {

    @property(cc.Prefab) //神水介紹
    readonly waterIntro: cc.Prefab = null;

    @property(cc.Prefab) //烈酒18番介紹
    readonly alcoholIntro: cc.Prefab = null;

    @property(cc.Prefab) //兵糧丸介紹
    readonly soldierIntro: cc.Prefab = null;

    @property(cc.Prefab) //飯糰介紹
    readonly riceIntro: cc.Prefab = null;

    @property(cc.Prefab) //咖哩介紹
    readonly curryIntro: cc.Prefab = null;

    @property(cc.Prefab) //御守介紹
    readonly deffendIntro: cc.Prefab = null;

    @property(cc.Prefab) //魔水介紹
    readonly magicIntro: cc.Prefab = null;

    @property(cc.Prefab) //9字介紹
    readonly nineIntro: cc.Prefab = null;

    @property(cc.Prefab) //神仙丸介紹
    readonly goldIntro: cc.Prefab = null;

    @property(cc.Prefab) //暴怒介紹
    readonly angryIntro: cc.Prefab = null;

    @property(cc.Prefab) //人參介紹
    readonly yellowIntro: cc.Prefab = null;

    @property(cc.Prefab) //萬用介紹
    readonly thousandIntro: cc.Prefab = null;

    //=======================================
    //=======================================
    //=======================================

    @property(cc.Prefab) //購買烈酒18番
    readonly pre_alcohol: cc.Prefab = null;

    @property(cc.Prefab) //購買暴怒
    readonly pre_angry: cc.Prefab = null;

    @property(cc.Prefab) //購買咖哩
    readonly pre_curry: cc.Prefab = null;

    @property(cc.Prefab) //購買御守
    readonly pre_deffend: cc.Prefab = null;

    @property(cc.Prefab) //購買神仙丸
    readonly pre_gold: cc.Prefab = null;

    @property(cc.Prefab) //購買魔水
    readonly pre_magic: cc.Prefab = null;

    @property(cc.Prefab) //購買9字
    readonly pre_nine: cc.Prefab = null;

    @property(cc.Prefab) //購買飯糰
    readonly pre_rice: cc.Prefab = null;

    @property(cc.Prefab) //購買兵糧丸
    readonly pre_soldier: cc.Prefab = null;

    @property(cc.Prefab) //購買萬用
    readonly pre_thousand: cc.Prefab = null;

    @property(cc.Prefab) //購買神水
    readonly pre_water: cc.Prefab = null;

    @property(cc.Prefab) //購買人參
    readonly pre_yellow: cc.Prefab = null;

    //=======================================
    //=======================================
    //=======================================

    @property(cc.Prefab) //
    readonly post_alcohol: cc.Prefab = null;

    @property(cc.Prefab) //
    readonly post_gold: cc.Prefab = null;

    @property(cc.Prefab) //
    readonly post_yellow: cc.Prefab = null;

    @property(cc.Prefab) //
    readonly post_magic: cc.Prefab = null;

    @property(cc.Prefab) //
    readonly post_nine: cc.Prefab = null;

    @property(cc.Prefab) //
    readonly post_angry: cc.Prefab = null;

    @property(cc.Prefab) //
    readonly post_soldier: cc.Prefab = null;

    @property(cc.Prefab) //
    readonly post_water: cc.Prefab = null;

    @property(cc.Prefab) //
    readonly post_rice: cc.Prefab = null;

    @property(cc.Prefab) //
    readonly post_thousand: cc.Prefab = null;

    @property(cc.Prefab) //
    readonly post_deffend: cc.Prefab = null;

    @property(cc.Prefab) //
    readonly post_curry: cc.Prefab = null;

    


    disable_button () { //跳出介紹道具視窗時，底層按鈕全部失效
        cc.find("Canvas/store/water").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/water_intro_btn").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/thousand").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/thousand_intro_btn").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/gold").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/gold_intro_btn").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/alcohol").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/alcohol_intro_btn").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/magic").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/magic_intro_btn").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/nine").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/nine_intro_btn").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/soldier").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/soldier_intro_btn").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/deffend").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/deffend_intro_btn").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/angry").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/angry_intro_btn").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/rice").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/rice_intro_btn").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/curry").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/curry_intro_btn").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/yellow").getComponent(cc.Button).interactable = false;
        cc.find("Canvas/store/yellow_intro_btn").getComponent(cc.Button).interactable = false;
    }

    enable_button () { 
        cc.find("Canvas/store/water").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/water_intro_btn").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/thousand").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/thousand_intro_btn").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/gold").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/gold_intro_btn").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/alcohol").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/alcohol_intro_btn").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/magic").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/magic_intro_btn").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/nine").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/nine_intro_btn").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/soldier").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/soldier_intro_btn").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/deffend").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/deffend_intro_btn").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/angry").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/angry_intro_btn").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/rice").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/rice_intro_btn").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/curry").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/curry_intro_btn").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/yellow").getComponent(cc.Button).interactable = true;
        cc.find("Canvas/store/yellow_intro_btn").getComponent(cc.Button).interactable = true;
    }

    clickWater () {
        this.disable_button();
        const water = cc.instantiate(this.waterIntro);
        water.parent = cc.find("Canvas/intro");

        water.getChildByName("close").on("click",()=>{
            //插入音效
            water.destroy();
            this.enable_button();
        })
    }

    clickAlcohol () {
        this.disable_button();
        const alcohol = cc.instantiate(this.alcoholIntro);
        alcohol.parent = cc.find("Canvas/intro");

        alcohol.getChildByName("close").on("click",()=>{
            //插入音效
            alcohol.destroy();
            this.enable_button();
        })
    }

    clickSoldier () {
        this.disable_button();
        const soldier = cc.instantiate(this.soldierIntro);
        soldier.parent = cc.find("Canvas/intro");

        soldier.getChildByName("close").on("click",()=>{
            //插入音效
            soldier.destroy();
            this.enable_button();
        })
    }

    clickRice () {
        this.disable_button();
        const rice = cc.instantiate(this.riceIntro);
        rice.parent = cc.find("Canvas/intro");

        rice.getChildByName("close").on("click",()=>{
            //插入音效
            rice.destroy();
            this.enable_button();
        })
    }

    clickCurry () {
        this.disable_button();
        const curry = cc.instantiate(this.curryIntro);
        curry.parent = cc.find("Canvas/intro");

        curry.getChildByName("close").on("click",()=>{
            //插入音效
            curry.destroy();
            this.enable_button();
        })
    }

    clickDeffend () {
        this.disable_button();
        const deffend = cc.instantiate(this.deffendIntro);
        deffend.parent = cc.find("Canvas/intro");

        deffend.getChildByName("close").on("click",()=>{
            //插入音效
            deffend.destroy();
            this.enable_button();
        })
    }

    clickMagic () {
        this.disable_button();
        const magic = cc.instantiate(this.magicIntro);
        magic.parent = cc.find("Canvas/intro");

        magic.getChildByName("close").on("click",()=>{
            //插入音效
            magic.destroy();
            this.enable_button();
        })
    }

    clickNine () {
        this.disable_button();
        const nine = cc.instantiate(this.nineIntro);
        nine.parent = cc.find("Canvas/intro");

        nine.getChildByName("close").on("click",()=>{
            //插入音效
            nine.destroy();
            this.enable_button();
        })
    }

    clickGold () {
        this.disable_button();
        const gold = cc.instantiate(this.goldIntro);
        gold.parent = cc.find("Canvas/intro");

        gold.getChildByName("close").on("click",()=>{
            //插入音效
            gold.destroy();
            this.enable_button();
        })
    }

    clickAngry () {
        this.disable_button();
        const angry = cc.instantiate(this.angryIntro);
        angry.parent = cc.find("Canvas/intro");

        angry.getChildByName("close").on("click",()=>{
            //插入音效
            angry.destroy();
            this.enable_button();
        })
    }

    clickYellow () {
        this.disable_button();
        const yellow = cc.instantiate(this.yellowIntro);
        yellow.parent = cc.find("Canvas/intro");

        yellow.getChildByName("close").on("click",()=>{
            //插入音效
            yellow.destroy();
            this.enable_button();
        })
    }

    clickThousand () {
        this.disable_button();
        const thousand = cc.instantiate(this.thousandIntro);
        thousand.parent = cc.find("Canvas/intro");

        thousand.getChildByName("close").on("click",()=>{
            //插入音效
            thousand.destroy();
            this.enable_button();
        })
    }

    //================================================================
    //================================================================
    //================================================================
    deal_12_time (x: string,info: string) {
            let inserting;
            if(info == "pre_alcohol") {
                cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) + 2000);
                inserting = cc.instantiate(this.pre_alcohol);
                cc.find("Canvas/data/i"+x).getComponent(cc.Label).string = "alcohol";
            }
            else if(info == "pre_angry") {
                cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) + 3000);
                inserting = cc.instantiate(this.pre_angry);
                cc.find("Canvas/data/i"+x).getComponent(cc.Label).string = "angry";
            }
            else if(info == "pre_curry") {
                cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) + 150);
                inserting = cc.instantiate(this.pre_curry);
                cc.find("Canvas/data/i"+x).getComponent(cc.Label).string = "curry";
            }
            else if(info == "pre_deffend") {
                cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) + 150);
                inserting = cc.instantiate(this.pre_deffend);
                cc.find("Canvas/data/i"+x).getComponent(cc.Label).string = "deffend";
            }
            else if(info == "pre_gold") {
                cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) + 14999);
                inserting = cc.instantiate(this.pre_gold);
                cc.find("Canvas/data/i"+x).getComponent(cc.Label).string = "gold";
            }
            else if(info == "pre_magic") {
                cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) + 7000);
                inserting = cc.instantiate(this.pre_magic);
                cc.find("Canvas/data/i"+x).getComponent(cc.Label).string = "magic";
            }
            else if(info == "pre_nine") {
                cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) + 14999);
                inserting = cc.instantiate(this.pre_nine);
                cc.find("Canvas/data/i"+x).getComponent(cc.Label).string = "nine";
            }
            else if(info == "pre_rice") {
                cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) + 200);
                inserting = cc.instantiate(this.pre_rice);
                cc.find("Canvas/data/i"+x).getComponent(cc.Label).string = "rice";
            }
            else if(info == "pre_soldier") {
                cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) + 6000);
                inserting = cc.instantiate(this.pre_soldier);
                cc.find("Canvas/data/i"+x).getComponent(cc.Label).string = "soldier";
            }
            else if(info == "pre_thousand") {
                cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) + 5600);
                inserting = cc.instantiate(this.pre_thousand);
                cc.find("Canvas/data/i"+x).getComponent(cc.Label).string = "thousand";
            }
            else if(info == "pre_water") {
                cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) + 600);
                inserting = cc.instantiate(this.pre_water);
                cc.find("Canvas/data/i"+x).getComponent(cc.Label).string = "water";
            }
            else if(info == "pre_yellow") {
                cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) + 10000);
                inserting = cc.instantiate(this.pre_yellow);
                cc.find("Canvas/data/i"+x).getComponent(cc.Label).string = "yellow";
            }
            
            if(x=="1") {
                inserting.x = 232;
                inserting.y = 130;
            }
            else if(x=="2") {
                inserting.x = 347;
                inserting.y = 130;
            }
            else if(x=="3") {
                inserting.x = 462;
                inserting.y = 130;
            }
            else if(x=="4") {
                inserting.x = 577;
                inserting.y = 130;
            }
            else if(x=="5") {
                inserting.x = 232;
                inserting.y = 15;
            }
            else if(x=="6") {
                inserting.x = 347;
                inserting.y = 15;
            }
            else if(x=="7") {
                inserting.x = 462;
                inserting.y = 15;
            }
            else if(x=="8") {
                inserting.x = 577;
                inserting.y = 15;
            }
            else if(x=="9") {
                inserting.x = 232;
                inserting.y = -100;
            }
            else if(x=="10") {
                inserting.x = 347;
                inserting.y = -100;
            }
            else if(x=="11") {
                inserting.x = 462;
                inserting.y = -100;
            }
            else if(x=="12") {
                inserting.x = 577;
                inserting.y = -100;
            }
            inserting.parent = cc.find("Canvas/possess");


            inserting.getChildByName("close").on("click",()=>{
                //插入音效
                inserting.destroy();
                cc.find("Canvas/data/i"+x).getComponent(cc.Label).string = "0";
                if(info == "pre_alcohol") cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) - 2000);
                else if(info == "pre_angry") cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) - 3000);
                else if(info == "pre_curry") cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) - 150);
                else if(info == "pre_deffend") cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) - 150);
                else if(info == "pre_gold") cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) - 14999);
                else if(info == "pre_magic") cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) - 7000);
                else if(info == "pre_nine") cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) - 14999);
                else if(info == "pre_rice") cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) - 200);
                else if(info == "pre_soldier") cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) - 6000);
                else if(info == "pre_thousand") cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) - 5600);
                else if(info == "pre_water") cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) - 600);
                else if(info == "pre_yellow") cc.find("Canvas/totalcost").getComponent(cc.Label).string = String(Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) - 10000);
            })
    }

    sure_to_buy () {
        if(Number(cc.find("Canvas/mymoney").getComponent(cc.Label).string) - Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) > 0) {
            cc.find("Canvas/mymoney").getComponent(cc.Label).string = String( Number(cc.find("Canvas/mymoney").getComponent(cc.Label).string) - Number(cc.find("Canvas/totalcost").getComponent(cc.Label).string) );
            cc.find("Canvas/totalcost").getComponent(cc.Label).string = "0";
            var loginUser = firebase.auth().currentUser;
            firebase.database().ref('users/' + loginUser.uid).update({
                i1: cc.find("Canvas/data/i1").getComponent(cc.Label).string,
                i2: cc.find("Canvas/data/i2").getComponent(cc.Label).string,
                i3: cc.find("Canvas/data/i3").getComponent(cc.Label).string,
                i4: cc.find("Canvas/data/i4").getComponent(cc.Label).string,
                i5: cc.find("Canvas/data/i5").getComponent(cc.Label).string,
                i6: cc.find("Canvas/data/i6").getComponent(cc.Label).string,
                i7: cc.find("Canvas/data/i7").getComponent(cc.Label).string,
                i8: cc.find("Canvas/data/i8").getComponent(cc.Label).string,
                i9: cc.find("Canvas/data/i9").getComponent(cc.Label).string,
                i10: cc.find("Canvas/data/i10").getComponent(cc.Label).string,
                i11: cc.find("Canvas/data/i11").getComponent(cc.Label).string,
                i12: cc.find("Canvas/data/i12").getComponent(cc.Label).string,
                money: cc.find("Canvas/mymoney").getComponent(cc.Label).string
            }).catch(function(error){
            });

            //改成已購買
            cc.find("Canvas/possess").removeAllChildren();
            for (let i = 0 ; i < 12 ; i++) {
                if(cc.find("Canvas/data/i"+String(i+1)).getComponent(cc.Label).string != "0") {
                    this.give_me_item(String(i+1));
                }
            }
        }
        else {
            //你錢不構!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        }
    }

    buyItem (event,customEventData) {
        if(cc.find("Canvas/data/i1").getComponent(cc.Label).string == "0") this.deal_12_time("1",customEventData);
        else if(cc.find("Canvas/data/i2").getComponent(cc.Label).string == "0") this.deal_12_time("2",customEventData);
        else if(cc.find("Canvas/data/i3").getComponent(cc.Label).string == "0") this.deal_12_time("3",customEventData);
        else if(cc.find("Canvas/data/i4").getComponent(cc.Label).string == "0") this.deal_12_time("4",customEventData);
        else if(cc.find("Canvas/data/i5").getComponent(cc.Label).string == "0") this.deal_12_time("5",customEventData);
        else if(cc.find("Canvas/data/i6").getComponent(cc.Label).string == "0") this.deal_12_time("6",customEventData);
        else if(cc.find("Canvas/data/i7").getComponent(cc.Label).string == "0") this.deal_12_time("7",customEventData);
        else if(cc.find("Canvas/data/i8").getComponent(cc.Label).string == "0") this.deal_12_time("8",customEventData);
        else if(cc.find("Canvas/data/i9").getComponent(cc.Label).string == "0") this.deal_12_time("9",customEventData);
        else if(cc.find("Canvas/data/i10").getComponent(cc.Label).string == "0") this.deal_12_time("10",customEventData);
        else if(cc.find("Canvas/data/i11").getComponent(cc.Label).string == "0") this.deal_12_time("11",customEventData);
        else if(cc.find("Canvas/data/i12").getComponent(cc.Label).string == "0") this.deal_12_time("12",customEventData);
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    }

    give_me_item (x: string) {
        let inserting;

        if(cc.find("Canvas/data/i"+x).getComponent(cc.Label).string == "alcohol") inserting = cc.instantiate(this.post_alcohol);
        else if(cc.find("Canvas/data/i"+x).getComponent(cc.Label).string == "gold") inserting = cc.instantiate(this.post_gold);
        else if(cc.find("Canvas/data/i"+x).getComponent(cc.Label).string == "deffend") inserting = cc.instantiate(this.post_deffend);
        else if(cc.find("Canvas/data/i"+x).getComponent(cc.Label).string == "curry") inserting = cc.instantiate(this.post_curry);
        else if(cc.find("Canvas/data/i"+x).getComponent(cc.Label).string == "soldier") inserting = cc.instantiate(this.post_soldier);
        else if(cc.find("Canvas/data/i"+x).getComponent(cc.Label).string == "thousand") inserting = cc.instantiate(this.post_thousand);
        else if(cc.find("Canvas/data/i"+x).getComponent(cc.Label).string == "water") inserting = cc.instantiate(this.post_water);
        else if(cc.find("Canvas/data/i"+x).getComponent(cc.Label).string == "rice") inserting = cc.instantiate(this.post_rice);
        else if(cc.find("Canvas/data/i"+x).getComponent(cc.Label).string == "yellow") inserting = cc.instantiate(this.post_yellow);
        else if(cc.find("Canvas/data/i"+x).getComponent(cc.Label).string == "nine") inserting = cc.instantiate(this.post_nine);
        else if(cc.find("Canvas/data/i"+x).getComponent(cc.Label).string == "angry") inserting = cc.instantiate(this.post_angry);
        else if(cc.find("Canvas/data/i"+x).getComponent(cc.Label).string == "magic") inserting = cc.instantiate(this.post_magic);

        //cc.log(inserting.name);

        if(x=="1") {
            inserting.x = 232;
            inserting.y = 130;
        }
        else if(x=="2") {
            inserting.x = 347;
            inserting.y = 130;
        }
        else if(x=="3") {
            inserting.x = 462;
            inserting.y = 130;
        }
        else if(x=="4") {
            inserting.x = 577;
            inserting.y = 130;
        }
        else if(x=="5") {
            inserting.x = 232;
            inserting.y = 15;
        }
        else if(x=="6") {
            inserting.x = 347;
            inserting.y = 15;
        }
        else if(x=="7") {
            inserting.x = 462;
            inserting.y = 15;
        }
        else if(x=="8") {
            inserting.x = 577;
            inserting.y = 15;
        }
        else if(x=="9") {
            inserting.x = 232;
            inserting.y = -100;
        }
        else if(x=="10") {
            inserting.x = 347;
            inserting.y = -100;
        }
        else if(x=="11") {
            inserting.x = 462;
            inserting.y = -100;
        }
        else if(x=="12") {
            inserting.x = 577;
            inserting.y = -100;
        }

        inserting.parent = cc.find("Canvas/possess");


        //測試中!!!!!!!!!!!!!!!!!!
        inserting.getChildByName("sell").on("click",()=>{
            //插入音效
            if(inserting.name == "post_rice_test") {
                cc.find("Canvas/mymoney").getComponent(cc.Label).string = String(Number(cc.find("Canvas/mymoney").getComponent(cc.Label).string) + 15);
                this.selling(x);
            }
            else if(inserting.name == "post_alcohol_test") {
                cc.find("Canvas/mymoney").getComponent(cc.Label).string = String(Number(cc.find("Canvas/mymoney").getComponent(cc.Label).string) + 200);
                this.selling(x);
            }
            else if(inserting.name == "post_soldier_test") {
                cc.find("Canvas/mymoney").getComponent(cc.Label).string = String(Number(cc.find("Canvas/mymoney").getComponent(cc.Label).string) + 200);
                this.selling(x);
            }
            else if(inserting.name == "post_water_test") {
                cc.find("Canvas/mymoney").getComponent(cc.Label).string = String(Number(cc.find("Canvas/mymoney").getComponent(cc.Label).string) + 40);
                this.selling(x);
            }
            else if(inserting.name == "post_curry_test") {
                cc.find("Canvas/mymoney").getComponent(cc.Label).string = String(Number(cc.find("Canvas/mymoney").getComponent(cc.Label).string) + 38);
                this.selling(x);
            }
            else if(inserting.name == "post_deffend_test") {
                cc.find("Canvas/mymoney").getComponent(cc.Label).string = String(Number(cc.find("Canvas/mymoney").getComponent(cc.Label).string) + 38);
                this.selling(x);
            }
            else if(inserting.name == "post_magic_test") {
                cc.find("Canvas/mymoney").getComponent(cc.Label).string = String(Number(cc.find("Canvas/mymoney").getComponent(cc.Label).string) + 1750);
                this.selling(x);
            }
            else if(inserting.name == "post_yellow_test") {
                cc.find("Canvas/mymoney").getComponent(cc.Label).string = String(Number(cc.find("Canvas/mymoney").getComponent(cc.Label).string) + 500);
                this.selling(x);
            }
            else if(inserting.name == "post_angry_test") {
                cc.find("Canvas/mymoney").getComponent(cc.Label).string = String(Number(cc.find("Canvas/mymoney").getComponent(cc.Label).string) + 750);
                this.selling(x);
            }
            else if(inserting.name == "post_nine_test") {
                cc.find("Canvas/mymoney").getComponent(cc.Label).string = String(Number(cc.find("Canvas/mymoney").getComponent(cc.Label).string) + 2500);
                this.selling(x);
            }
            else if(inserting.name == "post_thousand_test") {
                cc.find("Canvas/mymoney").getComponent(cc.Label).string = String(Number(cc.find("Canvas/mymoney").getComponent(cc.Label).string) + 1400);
                this.selling(x);
            }
            else if(inserting.name == "post_gold_test") {
                cc.find("Canvas/mymoney").getComponent(cc.Label).string = String(Number(cc.find("Canvas/mymoney").getComponent(cc.Label).string) + 2500);
                this.selling(x);
            }
            inserting.destroy();
        })
        //測試中!!!!!!!!!!!!!!!!!!
    }

    selling(x :string) {
        if(x == "1") {
            cc.find("Canvas/data/i1").getComponent(cc.Label).string = "0";
            var loginUser = firebase.auth().currentUser;
            firebase.database().ref('users/' + loginUser.uid).update({
                i1: cc.find("Canvas/data/i1").getComponent(cc.Label).string,
                money: cc.find("Canvas/mymoney").getComponent(cc.Label).string
            }).catch(function(error){
            });
        }
        else if(x == "2") {
            cc.find("Canvas/data/i2").getComponent(cc.Label).string = "0";
            var loginUser = firebase.auth().currentUser;
            firebase.database().ref('users/' + loginUser.uid).update({
                i2: cc.find("Canvas/data/i2").getComponent(cc.Label).string,
                money: cc.find("Canvas/mymoney").getComponent(cc.Label).string
            }).catch(function(error){
            });
        }
        else if(x == "3") {
            cc.find("Canvas/data/i3").getComponent(cc.Label).string = "0";
            var loginUser = firebase.auth().currentUser;
            firebase.database().ref('users/' + loginUser.uid).update({
                i3: cc.find("Canvas/data/i3").getComponent(cc.Label).string,
                money: cc.find("Canvas/mymoney").getComponent(cc.Label).string
            }).catch(function(error){
            });
        }
        else if(x == "4") {
            cc.find("Canvas/data/i4").getComponent(cc.Label).string = "0";
            var loginUser = firebase.auth().currentUser;
            firebase.database().ref('users/' + loginUser.uid).update({
                i4: cc.find("Canvas/data/i4").getComponent(cc.Label).string,
                money: cc.find("Canvas/mymoney").getComponent(cc.Label).string
            }).catch(function(error){
            });
        }
        else if(x == "5") {
            cc.find("Canvas/data/i5").getComponent(cc.Label).string = "0";
            var loginUser = firebase.auth().currentUser;
            firebase.database().ref('users/' + loginUser.uid).update({
                i5: cc.find("Canvas/data/i5").getComponent(cc.Label).string,
                money: cc.find("Canvas/mymoney").getComponent(cc.Label).string
            }).catch(function(error){
            });
        }
        else if(x == "6") {
            cc.find("Canvas/data/i6").getComponent(cc.Label).string = "0";
            var loginUser = firebase.auth().currentUser;
            firebase.database().ref('users/' + loginUser.uid).update({
                i6: cc.find("Canvas/data/i6").getComponent(cc.Label).string,
                money: cc.find("Canvas/mymoney").getComponent(cc.Label).string
            }).catch(function(error){
            });
        }
        else if(x == "7") {
            cc.find("Canvas/data/i7").getComponent(cc.Label).string = "0";
            var loginUser = firebase.auth().currentUser;
            firebase.database().ref('users/' + loginUser.uid).update({
                i7: cc.find("Canvas/data/i7").getComponent(cc.Label).string,
                money: cc.find("Canvas/mymoney").getComponent(cc.Label).string
            }).catch(function(error){
            });
        }
        else if(x == "8") {
            cc.find("Canvas/data/i8").getComponent(cc.Label).string = "0";
            var loginUser = firebase.auth().currentUser;
            firebase.database().ref('users/' + loginUser.uid).update({
                i8: cc.find("Canvas/data/i8").getComponent(cc.Label).string,
                money: cc.find("Canvas/mymoney").getComponent(cc.Label).string
            }).catch(function(error){
            });
        }
        else if(x == "9") {
            cc.find("Canvas/data/i9").getComponent(cc.Label).string = "0";
            var loginUser = firebase.auth().currentUser;
            firebase.database().ref('users/' + loginUser.uid).update({
                i9: cc.find("Canvas/data/i9").getComponent(cc.Label).string,
                money: cc.find("Canvas/mymoney").getComponent(cc.Label).string
            }).catch(function(error){
            });
        }
        else if(x == "10") {
            cc.find("Canvas/data/i10").getComponent(cc.Label).string = "0";
            var loginUser = firebase.auth().currentUser;
            firebase.database().ref('users/' + loginUser.uid).update({
                i10: cc.find("Canvas/data/i10").getComponent(cc.Label).string,
                money: cc.find("Canvas/mymoney").getComponent(cc.Label).string
            }).catch(function(error){
            });
        }
        else if(x == "11") {
            cc.find("Canvas/data/i11").getComponent(cc.Label).string = "0";
            var loginUser = firebase.auth().currentUser;
            firebase.database().ref('users/' + loginUser.uid).update({
                i11: cc.find("Canvas/data/i11").getComponent(cc.Label).string,
                money: cc.find("Canvas/mymoney").getComponent(cc.Label).string
            }).catch(function(error){
            });
        }
        else if(x == "12") {
            cc.find("Canvas/data/i12").getComponent(cc.Label).string = "0";
            var loginUser = firebase.auth().currentUser;
            firebase.database().ref('users/' + loginUser.uid).update({
                i12: cc.find("Canvas/data/i12").getComponent(cc.Label).string,
                money: cc.find("Canvas/mymoney").getComponent(cc.Label).string
            }).catch(function(error){
            });
        }
    }

    start () {
        var user = firebase.auth().currentUser;
        var ref2 = firebase.database().ref('/users/' + user.uid);

        ref2.once('value').then((snapshot) => {
            cc.find("Canvas/mymoney").getComponent(cc.Label).string = snapshot.val().money;
            cc.find("Canvas/data/i1").getComponent(cc.Label).string = snapshot.val().i1;
            cc.find("Canvas/data/i2").getComponent(cc.Label).string = snapshot.val().i2;
            cc.find("Canvas/data/i3").getComponent(cc.Label).string = snapshot.val().i3;
            cc.find("Canvas/data/i4").getComponent(cc.Label).string = snapshot.val().i4;
            cc.find("Canvas/data/i5").getComponent(cc.Label).string = snapshot.val().i5;
            cc.find("Canvas/data/i6").getComponent(cc.Label).string = snapshot.val().i6;
            cc.find("Canvas/data/i7").getComponent(cc.Label).string = snapshot.val().i7;
            cc.find("Canvas/data/i8").getComponent(cc.Label).string = snapshot.val().i8;
            cc.find("Canvas/data/i9").getComponent(cc.Label).string = snapshot.val().i9;
            cc.find("Canvas/data/i10").getComponent(cc.Label).string = snapshot.val().i10;
            cc.find("Canvas/data/i11").getComponent(cc.Label).string = snapshot.val().i11;
            cc.find("Canvas/data/i12").getComponent(cc.Label).string = snapshot.val().i12;
        })
        .then(()=>{
            if(cc.find("Canvas/data/i1").getComponent(cc.Label).string != "0") {
                this.give_me_item("1");
            }
            if(cc.find("Canvas/data/i2").getComponent(cc.Label).string != "0") {
                this.give_me_item("2");
            }
            if(cc.find("Canvas/data/i3").getComponent(cc.Label).string != "0") {
                this.give_me_item("3");
            }
            if(cc.find("Canvas/data/i4").getComponent(cc.Label).string != "0") {
                this.give_me_item("4");
            }
            if(cc.find("Canvas/data/i5").getComponent(cc.Label).string != "0") {
                this.give_me_item("5");
            }
            if(cc.find("Canvas/data/i6").getComponent(cc.Label).string != "0") {
                this.give_me_item("6");
            }
            if(cc.find("Canvas/data/i7").getComponent(cc.Label).string != "0") {
                this.give_me_item("7");
            }
            if(cc.find("Canvas/data/i8").getComponent(cc.Label).string != "0") {
                this.give_me_item("8");
            }
            if(cc.find("Canvas/data/i9").getComponent(cc.Label).string != "0") {
                this.give_me_item("9");
            }
            if(cc.find("Canvas/data/i10").getComponent(cc.Label).string != "0") {
                this.give_me_item("10");
            }
            if(cc.find("Canvas/data/i11").getComponent(cc.Label).string != "0") {
                this.give_me_item("11");
            }
            if(cc.find("Canvas/data/i12").getComponent(cc.Label).string != "0") {
                this.give_me_item("12");
            }
        })
    }

    // update (dt) {}
}
