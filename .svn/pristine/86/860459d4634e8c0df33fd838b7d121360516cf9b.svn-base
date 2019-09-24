<template>
    <div class="scanlogin">
        <div v-if="pc">
            <img :src="QRcode" class="image">
            <div class="text">请使用微信扫一扫登录</div>
            <div class="msg">{{msg}}</div>
        </div> 
        <div v-if="phone" >
            <div class="userState">{{text}}</div>
            <a href=""  class="link" @click="intoLink" v-if="link">点击进入项目</a>
            <a href=""  class="btn" @click="close">关闭页面</a>
        </div>  
    </div>
    
</template>
<script>
import { mapMutations } from "vuex";
export default {
    data(){
        return{
           QRcode:null,
           phone:false,
           pc:false,
           msg:null,
           state:null,
           text:null,
           link:false
        }
    },
    created(){
        this.indexs();
        var code = this.getUrlParame('code');
        var state = this.getUrlParame('state');
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            this.phone = true;
            this.$http.get('/wx/login?code=' + code+"&state="+state) 
            .then(res => {
                console.info(res);
                if(res.code == 0){
                    this.link = true;
                    this.text = res.desc;
                }else if(res.code == 1){
                    this.updateUserInfo(res.data);
                    this.$router.push("/choosetypeusers")      
                }else{
                    this.text = res.desc;
                }
            })
        }else{
            this.pc = true;
            if (!code) {
                this.$http.get("/wx/address") 
                .then(res => {
                    console.info(res);
                    this.state = res.data.state;
                    console.info(this.state);
                    if (res.code == 0) {
                        this.QRcode = res.data.img;
                    }
                })
            }
        }
    },
    methods: {
        intoLink(){
            this.$router.push("/");
        },
        close(){
            WeixinJSBridge.call('closeWindow');
        },
        indexs(){
            var that = this;
            var timer = setTimeout(function() {   
                let a = setInterval(function() {
                    that.$http.get("/wx/state?state="+that.state) 
                    .then(res => {
                        console.info(res);
                        if (res.code == 0) {
                            that.$router.push("/my");
                            clearInterval(a);
                        }else if(res.code == 1017){
                            that.msg = res.desc;
                            clearInterval(a);
                        }else if(res.code != 0 && res.code != 1017){
                            that.msg = res.desc;
                        }
                    })
                   
                }, 3000);
            }, 100);
        },
        ...mapMutations(["updateUserInfo"]),
        // 截取code
        getUrlParame (parameName) {
            console.info("parameName:"+parameName);
            // 获取url中跟在问号后面的部分
            var parames = window.location.search  
            console.info(window.location.search);
            // 检测参数是否存在
            if (parames.indexOf(parameName) > -1) {
                var parameValue = ''
                parameValue = parames.substring(parames.indexOf(parameName), parames.length)
                console.info("parameValue1:"+parameValue);
                // 检测后面是否还有参数
                if (parameValue.indexOf('&') > -1) {
                    // 去除后面多余的参数, 得到最终 parameName=parameValue 形式的值
                    parameValue = parameValue.substring(0, parameValue.indexOf('&'))
                    // 去掉参数名, 得到最终纯值字符串
                    parameValue = parameValue.replace(parameName + '=', '')
                    return parameValue
                }else{
                    parameValue = parameValue.replace(parameName + '=', '')
                    console.info("parameValue2:"+parameValue);
                    return parameValue 
                }
                return ''
            }
        },
    },
}
</script>
<style lang="scss">
    .scanlogin{
        .image{
            position: relative;
            top: 50%;
            left: 50%;
            height: 300px;
            width: 300px;
            margin-left:-150px;
            margin-top:100px; 
        }
        .text{
            text-align: center;
        }
        .msg{
            text-align: center;
        }
        .userState{
            position: relative;
            margin-top: 60%;
            text-align: center;
        }
        .link{
            position: absolute;
            margin-top: 10%;
            margin-left: 35%;
            text-align: center; 
        }
        .btn{
            position: absolute;
            margin-top: 50%;
            margin-left: 40%;
            text-align: center;
        }
    }
  
</style>