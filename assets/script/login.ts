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
export default class login extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        let btnLogin_loca = "Canvas/signup/l";
        let btnLogin = cc.find(btnLogin_loca).getComponent(cc.Button);

        let btnSignup_loca = "Canvas/signup/s";
        let btnSignup = cc.find(btnSignup_loca).getComponent(cc.Button);

        let txtEmail_loca = "Canvas/signup/account";
        let txtEmail:string;

        let txtPassword_loca = "Canvas/signup/password";
        let txtPassword:string;


        btnLogin.node.on(cc.Node.EventType.MOUSE_UP, function(event){
            txtEmail = cc.find(txtEmail_loca).getComponent(cc.EditBox).string;
            txtPassword = cc.find(txtPassword_loca).getComponent(cc.EditBox).string;

            if(txtEmail != "" && txtPassword != ""){
                //音效?
                firebase.auth().signInWithEmailAndPassword(txtEmail, txtPassword).then(function(result) {
                    cc.director.loadScene("store");
                }).catch(function(error) {
                    cc.find(txtEmail_loca).getComponent(cc.EditBox).string = "";
                    cc.find(txtPassword_loca).getComponent(cc.EditBox).string = "";
                    alert("Error!");
                });
            }
            else{
                //音效?
                alert("Error!");
            }
        },this);



        btnSignup.node.on(cc.Node.EventType.MOUSE_UP, function(event){
            txtEmail = cc.find(txtEmail_loca).getComponent(cc.EditBox).string;
            txtPassword = cc.find(txtPassword_loca).getComponent(cc.EditBox).string;

            if(txtEmail != "" && txtPassword != ""){
                //cc.audioEngine.playEffect(this.button,false); 

                firebase.auth().createUserWithEmailAndPassword(txtEmail, txtPassword).then(function(result) {
                
                    
                    var loginUser = firebase.auth().currentUser;
                    firebase.database().ref('users/' + loginUser.uid).set({
                        email: loginUser.email,
                        money: 1000000,
                        //武器
                        //技能
                        i1: "0",
                        i2: "0",
                        i3: "0",
                        i4: "0",
                        i5: "0",
                        i6: "0",
                        i7: "0",
                        i8: "0",
                        i9: "0",
                        i10: "0",
                        i11: "0",
                        i12: "0"
                    }).catch(function(error){
                        //console.error("寫入使用者資訊錯誤",error);
                    });
                    
                    
                    cc.find(txtEmail_loca).getComponent(cc.EditBox).string = "";
                    cc.find(txtPassword_loca).getComponent(cc.EditBox).string = "";
                    //create_alert("success", result);
                }).catch(function(error) {
                    cc.find(txtEmail_loca).getComponent(cc.EditBox).string = "";
                    cc.find(txtPassword_loca).getComponent(cc.EditBox).string = "";
                    alert("Error!");
                });  
            }
            else{
                //cc.audioEngine.playEffect(this.errors,false);
                alert("Error!");
            }
        },this);
    }

    /*start () {

    }*/

    // update (dt) {}
}
