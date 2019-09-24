<template>
    <div class="choosetypeusers">
        <div class="header">
            <img :src="userInfo" />
            <span class="text">请选择新/老用户,如果您之前登录过,可以选择老用户绑定手机号</span>
            <div class="btn">
                <div class="new" @click="clickNew()">新用户</div>
                <div class="old" @click="clickOld()">老用户</div>
            </div>
        </div>
        
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    computed: { ...mapGetters(["userInfo"]),},
    created() {
        console.info(this.userInfo);
    },
    methods:{
        async clickNew(){
            console.info("新用户");
            console.info(this.$route.query.state === undefined ? '': this.$route.query.state)
            let data = await this.$http.post('/wx'); 
            if(data.code == 0 || data.code == 10074){
                this.$message({
                    message: data.desc,
                    type: "success"
                });
                this.$router.push("/my");
            }
        },
        async clickOld(){
            console.info("老用户");
            if(this.$route.query.state !== undefined){
                this.$router.push({
                path:"/login",
                query: {
                state: this.$route.query.state
                }});
                return
            }
            this.$message({
                message: "请绑定您的手机号",
                type: "success"
            });
            this.$router.push("/login");
        }
    }
}
</script>
<style lang="scss">
    .choosetypeusers{
        .header{
            position: absolute;
            display:flex;
            flex-direction: column;
            top:80px;
            width:100%;
            img{
                margin-left:135px;
                height:100px;
                width:100px;
            }
            .text{
                margin-top:10px;
                margin-left:30px;
                margin-right:30px;
                font-size:14px;
            }
            .btn{
                display:flex;
                padding:40px;
                .new{
                    width: 135px;
                    padding: 6px 0;
                    font-size: 15px;
                    line-height: 21px;
                    color: #fff;
                    background: rgb(24, 195, 170);
                    border-color: rgb(24, 195, 170);       
                    text-align: center;
                }
                .old{
                    margin-left:10px;
                    width: 135px;
                    padding: 6px 0;
                    font-size: 15px;
                    line-height: 21px;
                    color: #fff;
                    background: rgb(24, 195, 170);
                    border-color: rgb(24, 195, 170);       
                    text-align: center; 
                }
            }
        }
    }
</style>