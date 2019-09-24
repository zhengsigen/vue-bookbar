<template>
  <div>
    <div>
      <div class="orders">
        <div v-for="order in this.orderList" :key="order.id">
          <div class="orders-item" @click="clickJump(order.id)">
            <div class="orders-message">
              <div class="title">{{order.type == 0 ? "卖书订单":"买书订单"}}：{{order.id}}</div>
              <div
                class="status"
                v-if="order.type==0"
              >{{order.status >= orderEnum.status ?'已取消' : orderStatus[order.status+1]}}</div>
              <div
                class="status"
                v-if="order.type==1"
              >{{order.status >= orderEnum.status ?'已取消' : ordersStatus[order.status+1]}}</div>
            </div>
            <div class="orders-data">
              <div class="orders-number">{{order.orderBooksConditions.length}} 个商品</div>
              <div class="orders-circle"></div>
              <div class="orders-number">{{order.createTime | moment('YYYY-MM-DD')}}</div>
              <div class="orders-line"></div>
            </div>
            <div class="content">
              <img
                :src="book.cover"
                alt
                class="content-img"
                v-for="book in order.orderBooksConditions"
                :key="book.id"
              />
            </div>
          </div>
          <div class="bank"></div>
        </div>
      </div>
      <!-- <div class="orders orders-margin">
        <div class="orders-item">
          <div class="orders-message">
            <div class="title">买书订单：341988381946942018</div>
            <div class="status emphasis">待支付</div>
          </div>
          <div class="orders-data">
            <div class="orders-number">10 个商品</div>
            <div class="orders-circle"></div>
            <div class="orders-number">2019-8-5</div>
            <div class="orders-line"></div>
          </div>
          <div class="content">
            <div class="content-img"></div>
          </div>
          <div class="content-meta"></div>
          <div class="content-button">
            <div class="button-inner">取消订单</div>
            <div class="button-inner payment">微信支付</div>
          </div>
        </div>
         <div class="bank"></div>
      </div>-->
    </div>
    <div class="orders-bottom">
      <div class="orders-bottom-content">
        <div class="orders-bottom-left"></div>
        <svg
          width="12"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          class="orders-bottom-img"
        >
          <rect x="4" y="4" width="16" height="16" class />
        </svg>
        <div class="orders-bottom-right"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
const orderEnum = {
  status: 10
};
export default {
  data() {
    return {
      orderEnum,
      orderList: {},
      orderStatus: [
        "已取消",
        "已下单",
        "已审核",
        "已取件",
        "运输中",
        "已签收",
        "已校对",
        "已结算"
      ],
      ordersStatus: [
        "已取消",
        "已下单",
        "已付款",
        "已发货",
        "运输中",
        "已收货",
        "确认收货"
      ]
    };
  },
  //初始化订单书籍列表
  async created() {
    // let id = this.orderId;
    let data = await this.$http.get("/order");
    if (data.code === 0) {
      this.orderList = data.data;
      console.info(this.orderList);
    }
  },
  computed: {
    ...mapGetters({ user: "user" })
  },
  methods: {
    clickJump(id) {
      for (let i = 0; i < this.orderList.length; i++) {
        if (this.orderList[i].id == id) {
          if (this.orderList[i].type == 0) {
            this.$router.push("/order/" + id);
          } else {
            this.$router.push({
              path: "/buy/order",
              query: { id: this.orderList[i].id }
            });
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.orders {
  max-width: 600px;
  margin: 0px auto;
  .orders-item {
    display: block;
    padding: 15px;
    color: inherit;
    text-decoration: none;
    background: #fff;
    .orders-message {
      display: flex;
      line-height: 2;
      font-weight: 400;
      .title {
        flex-grow: 1;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0px;
        font: inherit;
        overflow: hidden;
      }
      .status {
        color: #aaa;
      }
      .emphasis {
        color: #f28181;
      }
    }
    .orders-data {
      color: rgb(170, 170, 170);
      font-size: 12px;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      .orders-circle {
        width: 2px;
        height: 2px;
        background-color: rgb(170, 170, 170);
        margin: 0px 8px;
      }
      .orders-line {
        margin-left: 8px;
        display: inline-block;
        height: 1px;
        flex: 1 1 0%;
        border-top: 0.5px solid rgb(242, 242, 242);
      }
    }
    .content {
      height: calc((((100vw - 30px) - 12px) / 7) * 1.42);
      margin-bottom: 17px;
      padding: 0px;
      display: flex;
      overflow: hidden;
      .content-img {
        width: calc(((100vw - 30px) - 12px) / 7);
        height: calc((((100vw - 30px) - 12px) / 7) * 1.42);
        background-size: cover;
        margin-right: 2px;
      }
      @media (min-width: 600px) {
        .content-img {
          width: calc(79.7143px);
          height: calc(113.194px);
          background-size: cover;
          margin-right: 2px;
        }
      }
    }
    @media (min-width: 600px) {
      .content {
        height: calc(113.194px);
        margin-bottom: 17px;
        padding: 0px;
        display: flex;
        overflow: hidden;
      }
    }
    .content-meta {
      padding: 0px 0 4px;
      border-top: 0.5px solid rgb(242, 242, 242);
    }
    .content-button {
      display: flex;
      justify-content: flex-end;
      padding-top: 12px;
      .button-inner {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        height: 32px;
        padding: 0 1em;
        font-size: 13px;
        border-color: rgb(217, 217, 217);
        border-radius: 3px;
        border: 0.5px solid rgb(242, 242, 242);
        margin-right: 10px;
      }
      .payment {
        color: #fff;
        background-color: rgb(242, 129, 129);
        border-color: rgb(242, 129, 129);
        transition: box-shadow 0.2s;
      }
    }
  }
}
.bank {
  height: 15px;
  background-color: rgb(245, 245, 249);
}
.orders-margin {
  margin-top: 15px;
}
.orders-bottom {
  display: flex;
  justify-content: center;
  height: 19px;
  color: rgb(102, 102, 102);
  font-size: 14px;
  line-height: 19px;
  padding: 30px 0px;
  .orders-bottom-content {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.1);
    .orders-bottom-left {
      content: "_____";
      width: 30px;
      height: 1px;
      background-color: rgba(0, 0, 0, 0.1);
    }
    .orders-bottom-img {
      transform: rotate(45deg);
      margin: 0px 9px;
    }
    .orders-bottom-right {
      content: "_____";
      width: 30px;
      height: 1px;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
a {
  display: flex;
}
</style>
