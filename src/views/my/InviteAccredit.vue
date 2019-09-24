<template>
  <div class="accredit">
    <div class="content">
      <p>
        <i class="el-icon-loading"></i>
        正在登录中....
      </p>
    </div>
    <div class="loading"></div>
  </div>
</template>
// <script>
import { mapMutations } from "vuex";
export default {
  created() {
    var code = this.getUrlParame("code");
    var state = this.$route.query.state;
    if (!code) {
      window.location.href =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0f0a4bbe2fc2fc3a&redirect_uri=https://wx.panqingshan.cn/zsg/inviteAccredit&response_type=code&scope=snsapi_userinfo&state=" +
        state +
        "#wechat_redirect";
    } else {
      console.info(state);
      this.$http
        .get("/wx/login?code=" + code + "&state=" + state) //如果有code，说明用户点击了授权  将获取到的code传递给后台
        .then(res => {
          if (res.code === 1) {
            this.updateUserInfo(res.data);
            this.$router.push("/choosetypeusers");
          } else {
            this.$router.push("/invitation?state=" + state);
          }
          // this.updateUserInfo(res.data);
          // if (res.code == 1) {
          //   this.$router.push("/choosetypeusers")
          // }else if(res.code == 0){
          //   this.$router.push("/my")
          // }
        });
    }
  },
  methods: {
    ...mapMutations(["updateUserInfo"]),
    // 截取code
    getUrlParame(parameName) {
      // 获取url中跟在问号后面的部分
      var parames = window.location.search;
      console.info(window.location.search);
      // 检测参数是否存在
      if (parames.indexOf(parameName) > -1) {
        var parameValue = "";
        parameValue = parames.substring(
          parames.indexOf(parameName),
          parames.length
        );
        // 检测后面是否还有参数
        if (parameValue.indexOf("&") > -1) {
          // 去除后面多余的参数, 得到最终 parameName=parameValue 形式的值
          parameValue = parameValue.substring(0, parameValue.indexOf("&"));
          // 去掉参数名, 得到最终纯值字符串
          parameValue = parameValue.replace(parameName + "=", "");
          return parameValue;
        }
        return "";
      }
    }
  }
};
</script>
<style lang="scss">
.accredit {
  .content {
    position: absolute;
    top: 40%;
    left: 60px;
    height: 50px;
    width: 200px;
    border: 1px solid rgb(68, 66, 69);
    background-color: rgb(68, 66, 69);
    border-radius: 10px;
    color: white;
    p {
      margin-left: 41px;
    }
    .el-icon-loading {
      font-size: 20px;
    }
  }
  .loading {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: black;
    opacity: 0.4;
  }
}
</style>