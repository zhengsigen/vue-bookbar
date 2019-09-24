<template>
  <div class="all">
    <div class="balance">
      <div class="info">
        <span>账号余额</span>
      </div>
      <div class="money">{{userInfo.balance | numeral}}</div>
      <div class="withdrawal">
        <span class="withdrawal-btn">余额提现</span>
      </div>
      <div class="rule">
        <span>提现规则</span>
        <svg
          viewBox="0 0 24 24"
          fill="transparent"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          class="Icon"
          width="13"
          height="13"
          @click="mask = !mask"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="8" />
        </svg>
      </div>
      <span class="detail" @click="detail">余额明细</span>
    </div>
    <div class>
      <router-link to="/" tag="div">
        <div class="return-page">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
            <path
              fill="none"
              stroke="#fff"
              stroke-width="1.5"
              d="M19.022 10.252v7.64a3 3 0 0 1-3 3H5.66a3 3 0 0 1-3-3v-7.676C.582 9.8.393 8.267 2.424 6.429l4.212-3.814c2.378-2.153 6.226-2.16 8.612 0L19.46 6.43c2.088 1.89 1.825 3.466-.438 3.823zM7.76 20.865h6.364v-4.327c0-1.11-.711-2.005-1.59-2.005H9.35c-.878 0-1.59.898-1.59 2.005v4.327z"
            />
          </svg>
        </div>
      </router-link>
    </div>
    <div class="pop-up-rule" v-if="mask === true" @click="mask = !mask">
      <div class="pop-up-rule-item">
        <div class="pop-up-rule-items">
          <div class="pop-up-rule-content">
            <div
              class="pop-up-rule-body"
              style="padding: 0px; margin: 0px;"
              @click.stop.self="mask = !mask"
            >
              <div class="pop-up-rule-head">
                <p class="content">· 微信提现最小额度为 1 元</p>
                <p class="content">· 暂不支持部分提现</p>
              </div>
              <div class="pop-up-rule-button">
                <span class="rule-ensure" @click="mask = false">好的</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "mybalance",
  data() {
    return {
      mask: false,
      userInfo: {}
    };
  },
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    ...mapMutations(["updateUser"]),
    detail() {
      this.$router.push("/my/balance/detail");
    }
  },
  async created() {
    let data = await this.$http.get("/user/info");
    if (data.code === 0) {
      this.userInfo = data.data.user;
      this.updateUser(this.userInfo);
    } else {
      console.info(data.desc);
    }
  }
};
</script>

<style lang="scss" scoped>
.all {
  .balance {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    height: 218px;
    width: 100%;
    background: #f8f3ec;
    .info {
      color: #d6ba8c;
      font-size: 13px;
      padding-top: 46px;
      padding-bottom: 12px;
      span::before {
        position: relative;
        bottom: 7px;
        right: 15px;
        content: "_____";
        color: #d6ba8c;
        width: 30px;
        height: 1px;
        overflow: hidden;
      }
      span::after {
        position: relative;
        bottom: 7px;
        left: 15px;
        content: "_____";
        color: #d6ba8c;
        width: 30px;
        height: 1px;
      }
    }
    .money {
      font-size: 44px;
      line-height: 37px;
      font-weight: 100;
      font-family: BodoniSvtyTwoITCTT-Book;
    }
    .withdrawal {
      margin-top: 9px;
      .withdrawal-btn {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        color: #f9f5f0;
        background: #ebdfce;
        width: 250px;
        height: 40px;
        border: 0px;
        border-radius: 999px;
      }
    }
    .rule {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 20px;
      color: #aaa;
      span {
        font-size: 12px;
      }
      svg {
        width: 12px;
        height: 12px;
        padding-left: 6px;
      }
    }
    .detail {
      position: absolute;
      top: 10px;
      right: 10px;
      color: #aaa;
      font-size: 14px;
    }
  }
  .return-page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    position: fixed;
    bottom: 66px;
    right: 16px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px 0px;
    border-radius: 50%;
    background: rgba(102, 102, 102, 0.96);
  }
  .pop-up-rule {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.3);
    -webkit-tap-highlight-color: transparent;
    .pop-up-rule-item {
      display: flex;
      height: 100%;
      margin-left: 30px;
      margin-right: 30px;
      flex-direction: column;
      pointer-events: none;
      .pop-up-rule-items {
        flex-grow: 1;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        justify-content: center;
        .pop-up-rule-content {
          position: relative;
          box-sizing: border-box;
          width: 100%;
          max-width: 340px;
          background: #fff;
          border-radius: 10px;
          overflow-x: hidden;
          pointer-events: auto;
          .pop-up-rule-body {
            text-align: center;
            white-space: pre-wrap;
            font-size: 16px;
            .pop-up-rule-head {
              text-align: left;
              font-size: 14px;
              line-height: 2;
              padding: 32px 24px 24px;
              .content {
                margin: 0;
                font: inherit;
              }
            }
            .pop-up-rule-button {
              display: flex;
              flex-direction: row;

              border-top: 1px solid rgb(247, 247, 247);
              .rule-ensure {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-grow: 1;
                height: 54px;
                font-weight: normal;
                color: rgb(24, 195, 170);
                background-color: #fff;
                border-width: 0px 1px 0px 0px;
                border-right: 1px solid rgb(247, 247, 247);
              }
            }
          }
        }
      }
    }
  }
}
</style>

