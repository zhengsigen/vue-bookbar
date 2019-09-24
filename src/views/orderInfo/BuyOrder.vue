<template>
  <div class="orderInfo" style="position: relative;">
    <div class="content">
      <div class="sell-order">
        <div class="sell-order-info">
          <div class="sell-order-header">填写收件人信息</div>
          <div class="sell-order-content">
            <div class="sell-order-address" @click="rules">使用中通 / EMS 等快递发货，了解具体发货规则？</div>
            <div class="item">
              <span class="item-name">姓名：</span>
              <input class="input" value v-model="form.name" />
            </div>
            <div class="item">
              <span class="item-name">电话：</span>
              <input type="tel" class="input" value v-model="form.phone" />
            </div>
            <div class="item">
              <span class="item-name">地址：</span>
              <input class="input area" value v-model="value" @click="showArea()" />
              <!-- <li
                class="J_icon_id_1306465"
                p-id="4199"
                id="mx_n_1567994777493"
                style="text-align: center;
                width: 50px;
                list-style-type: none;"
                @click="getLocation()"
              >
                <div class="icon-twrap" p-id="4200">
                  <svg
                    class="icon"
                    style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="4202"
                  >
                    <path
                      d="M511.588175 1022.287674l-32.382474-36.392352c-36.016651-40.47448-351.879433-401.175644-351.879433-600.202865C127.326268 173.804727 299.70767 1.416101 511.588175 1.416101c211.88773 0 384.269131 172.381401 384.269131 384.276356 0 199.019996-315.870006 559.728385-351.886658 600.202865l-32.382473 36.392352z m0-934.164284c-164.072645 0-297.561843 133.489198-297.561843 297.576292 0 126.372568 191.896141 379.890778 297.561843 505.107345 105.672927-125.216567 297.569068-378.734777 297.569068-505.107345 0-164.087095-133.481973-297.576293-297.569068-297.576292z"
                      fill="#000000"
                      p-id="4203"
                    />
                    <path
                      d="M511.588175 553.551005c-85.341763 0-154.766838-69.432301-154.766839-154.774063 0-85.334538 69.425076-154.759613 154.766839-154.759613s154.766838 69.425076 154.766838 154.759613c0 85.341763-69.425076 154.774063-154.766838 154.774063z m0-222.833613c-37.533902 0-68.066775 30.532872-68.066775 68.05955 0 37.533902 30.540097 68.066775 68.066775 68.066775s68.066775-30.540097 68.066775-68.066775c0-37.526677-30.532872-68.05955-68.066775-68.05955z"
                      fill="#000000"
                      p-id="4204"
                    />
                  </svg>
                </div>
                <span class="icon-name" title="定位" p-id="4205">
                  <span p-id="4206">定位</span>
                </span>
                <div class="icon-cover" p-id="4207">
                  <span
                    mx-click="car({id:1306465,index:16})"
                    data-spm-click="gostr=/alimama.30;locaid=ddfb588f4"
                    title="添加入库"
                    class="cover-item iconfont cover-item-line icon-gouwuche1"
                    p-id="4208"
                  ></span>
                  <span
                    data-login
                    mx-click="toggleFavor({id:1306465,index:16})"
                    data-spm-click="gostr=/alimama.30;locaid=d3a0b439c"
                    title="收藏"
                    class="cover-item iconfont cover-item-line icon-shoucang1"
                    p-id="4209"
                  ></span>
                  <span
                    data-login="true"
                    mx-click="downloadIcon({id:1306465,index:16})"
                    data-spm-click="gostr=/alimama.30;locaid=dac7baec5"
                    title="下载图标"
                    class="cover-item iconfont cover-item-line icon-xiazai"
                    p-id="4210"
                  ></span>
                </div>
              </li> -->
            </div>
            <div class="item" @click="searchSwitch = true">
              <span class="item-name"></span>
              <textarea class="input" placeholder="详细地址，街道、小区、单元、门牌号" v-model="street"></textarea>
            </div>
            <div class="address" v-show="searchAddress.length > 0">
              <div
                class="address-name"
                v-for="sd in searchAddress"
                :key="sd.id"
                @click="upStreet(sd)"
              >
                {{sd.name}}
                <span class="address-name-span">{{sd.district}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="anonymity">
          <div class="anonymity-info">
            <div class="anonymity-desc">
              <div class="title">匿名买书</div>
              <div class="tip">开启后其他人不会知道你买了这些</div>
            </div>
            <div class="checkbox" @click="isAnonymity = !isAnonymity" v-if="!isAnonymity"></div>
            <i class="el-icon-success" @click="isAnonymity = !isAnonymity" v-if="isAnonymity"></i>
          </div>
        </div>

        <div class="sell-books-info">
          <div>
            <div class="sell-info" v-for="c in cart" :key="c.id">
              <div class="sell-items">
                <div class="sell-name">
                  <span class="text">{{c.book.name}}</span>
                </div>
                <div class="sell-price">
                  <span class="price">￥{{(c.book.price * c.discount)/10 |numeral('0,0.00')}}</span>
                </div>
              </div>
            </div>
            <div class="sell-info">
              <div class="sell-items">
                <div class="sell-name">
                  <span class="text">总价</span>
                </div>
                <div class="sell-price">
                  <span class="price">￥{{buyTotalPrice |numeral('0,0.00')}}</span>
                </div>
              </div>
              <div class="sell-items">
                <div class="sell-name">
                  <span class="text">运费（不参与优惠）</span>
                  <div class style="margin-left: 6px;" @click="carriage">
                    <svg
                      viewBox="0 0 24 24"
                      fill="#fff"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      class="Icon"
                      width="14"
                      height="14"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12" y2="8" />
                    </svg>
                  </div>
                </div>
                <div class="sell-price">
                  <span
                    class="price"
                    v-if="this.buyTotalPrice<99"
                  >￥{{freight.charge |numeral('0,0.00')}}</span>
                  <span class="price" v-else>满99包邮</span>
                </div>
              </div>

              <div class="discount-coupon" v-show="discounts.length > 0">
                <div class="coupon" @click="coupon=true">
                  <div class="content">
                    <span class="text">优惠卷</span>
                  </div>
                  <div class="desc" style="color: #f28181;" v-if="judging ">
                    可用券{{discounts.length}}张
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                  <div class="desc" style="color: #f28181;" v-else>
                    {{pitchs}}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="sell-footer">
              <div>
                下单支付：
                <span class="max-price">
                  <span class="price">￥{{price |numeral}}</span>
                  <!-- <span class="price" v-else>￥{{this.total |numeral}}</span> -->
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="fixed">
          <div style="max-width: 600px;margin: 0px auto;" @click="submitOrder">
            <div style="padding: 20px;background: rgb(247, 247, 247);">
              <div class="button">去支付</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pay" v-if="mask">
      <div class="pay-layer">
        <div class="pay-item">
          <div class="pay-body">
            <div class="header">
              <h2 class="title" style="margin-top: 0px;">支付</h2>
              <div class="desc">请在 30 分钟内完成支付</div>
            </div>
            <div class="middle">
              <div class="pay-middle" @click="cancel=false">
                <div class="pay-middle-info">
                  <div class="pay-middle-row">
                    <div class="pay-middle-png">
                      <img src="../../assets/img/logo_small.png" alt style="width:28px;height:16px" />
                    </div>
                    <div class="pay-balance-info">
                      <div class="pay-balance-title">
                        <span class="pay-method-title">余额支付</span>
                        <span class="label" style="margin-left: 8px;">8.8 折</span>
                      </div>
                      <!-- <div class="user-balance">账户余额 ￥0.00</div> -->
                    </div>
                    <!-- <div class="balance-inactive">余额不足，卖书可得余额</div> -->
                    <div class="el-icon-check" v-if="!cancel"></div>
                  </div>
                </div>
              </div>
              <div class="pay-middle" @click="cancel=true">
                <div class="pay-middle-info">
                  <div class="pay-middle-row">
                    <div class="pay-middle-png">
                      <svg width="26px" height="26px" viewBox="0 0 26 26">
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="微信支付"
                            transform="translate(1.000000, 2.000000)"
                            fill="#09BB07"
                            fill-rule="nonzero"
                          >
                            <path
                              d="M8.71607143,13.3526786 C8.60625,13.4089286 8.49375,13.4357143 8.35714286,13.4357143 C8.05178571,13.4357143 7.80267857,13.2696429 7.66339286,13.0205357 L7.60714286,12.9107143 L5.41875,8.14285714 C5.39196429,8.08660714 5.39196429,8.03303571 5.39196429,7.97678571 C5.39196429,7.75446429 5.55803571,7.58839286 5.78035714,7.58839286 C5.86339286,7.58839286 5.94642857,7.61517857 6.02946429,7.67142857 L8.60625,9.50089286 C8.79910714,9.61071429 9.02142857,9.69375 9.27053571,9.69375 C9.40982143,9.69375 9.54642857,9.66696429 9.68571429,9.61071429 L21.76875,4.23482143 C19.6071429,1.68482143 16.0339286,0.0214285714 11.9866071,0.0214285714 C5.39196429,0.0214285714 0.0160714286,4.48392857 0.0160714286,9.99642857 C0.0160714286,12.9883929 1.62321429,15.7044643 4.14375,17.5339286 C4.33660714,17.6732143 4.47589286,17.9223214 4.47589286,18.1714286 C4.47589286,18.2544643 4.44910714,18.3375 4.41964286,18.4205357 C4.22678571,19.1678571 3.89196429,20.3892857 3.89196429,20.4428571 C3.86517857,20.5258929 3.83571429,20.6357143 3.83571429,20.7482143 C3.83571429,20.9705357 4.00178571,21.1366071 4.22410714,21.1366071 C4.30714286,21.1366071 4.39017857,21.1098214 4.44642857,21.0535714 L7.05,19.5294643 C7.24285714,19.4196429 7.46517857,19.3366071 7.6875,19.3366071 C7.79732143,19.3366071 7.93660714,19.3633929 8.04642857,19.3928571 C9.26517857,19.7517857 10.5964286,19.9473214 11.9544643,19.9473214 C18.5491071,19.9473214 23.925,15.4848214 23.925,9.97232143 C23.925,8.30892857 23.4267857,6.73125 22.5669643,5.34375 L8.79910714,13.2964286 L8.71607143,13.3526786 L8.71607143,13.3526786 Z"
                              id="Path"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div class="pay-balance-info">
                      <div class="pay-balance-title">
                        <span class="pay-method-title">微信支付</span>
                      </div>
                    </div>

                    <div class="el-icon-check" v-if="cancel"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="fixed">
              <div style="max-width: 600px;margin: 0px auto;">
                <div style="padding: 20px;background: rgb(247, 247, 247);">
                  <div
                    class="button"
                    @click="jump"
                    v-if="cancel"
                  >微信支付￥{{(this.total)|numeral('0,0.00')}}</div>
                  <div
                    class="button"
                    @click="balance"
                    v-else
                  >余额支付￥{{(this.total)*0.88|numeral('0,0.00')}}</div>
                </div>
              </div>
            </div>
            <button class="close-btn" @click="mask=false">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 12 12"
                stroke="rgb(170, 170, 170)"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  transform="translate(1 1)"
                >
                  <path d="M10 0L0 10M0 0L10 10" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom" v-if="show">
      <div class="areas">
        <div class="header">
          <div class="header-left" @click="showArea()">取消</div>
          <div class="header-title">选择城市</div>
          <div class="header-right" @click="updateArea()">确定</div>
        </div>
        <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
      </div>
    </div>
    <div class="counpons" v-if="coupon===true">
      <div class="counpons-layer">
        <div class="counpons-item">
          <div class="counpons-body">
            <div class="body">
              <div class="heade">
                <h2 class="counpons-title">{{discounts.length}} 张优惠券</h2>
              </div>
              <div class="middle">
                <div class="content" v-for="tem in discounts" @click="coupons(tem)" :key="tem.id">
                  <div class="left">
                    <div class="name">{{tem.amount}}元 {{tem.name}}</div>
                    <div class="desc">
                      <div class="date">{{tem.expirationDate}} 到期</div>
                      <div class="dot"></div>
                      <div class="rule">满{{tem.perLimit}}减{{tem.amount}}</div>
                    </div>
                  </div>
                  <div class="right">
                    <span class="counpons-desc">{{pitch[tem.type]}}</span>
                  </div>
                </div>
              </div>
            </div>
            <button class="close-btn" @click="coupon=false">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 12 12"
                stroke="rgb(170, 170, 170)"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  transform="translate(1 1)"
                >
                  <path d="M10 0L0 10M0 0L10 10" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import myaddress from "../../../address.json";
import { constants } from "crypto";
import WeChatPayVue from "./WeChatPay.vue";
import axios from "axios";
export default {
  name: "orderInfo",
  data() {
    return {
      isAnonymity: false,
      isShowAddress: false,
      myAddressSlots: [
        {
          flex: 1,
          defaultIndex: 0,
          values: Object.keys(myaddress), //省份数组
          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot4"
        },
        {
          flex: 1,
          values: [],
          className: "slot5",
          textAlign: "center"
        }
      ],
      province: "",
      city: "",
      district: "",
      show: false,
      error: {},
      books: [],
      form: {},
      cart: {},
      freight: {},
      value: "",
      street: "",
      mask: false,
      coupon: false,
      cancel: false,
      address: {},
      charge: 0,
      order: 0,
      total: 0,
      Object: {},
      searchAddress: [],
      searchSwitch: false,
      discounts: [],
      discountId: null,
      totals: 0,
      pitch: ["折扣券", "运费券"],
      judging: true,
      pitchs: ""
    };
  },
  methods: {
    upStreet(sd) {
      this.street = sd.name;
      this.searchAddress = [];
      this.value = sd.district;
      this.searchSwitch = false;
    },
    getLocation() {
      let seft = this;
      AMap.plugin("AMap.Geolocation", function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          useNative: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 100
        });
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);
        function onComplete(data) {
          // data是具体的定位信息
          console.log("定位成功信息：", data);
          seft.form.province = data.addressComponent.province;
          seft.$http.get("/freight/" + seft.form.province).then(res => {
            seft.freight = res.data;
          });
          seft.form.city = data.addressComponent.city;
          seft.form.district = data.addressComponent.district;
          seft.value =
            data.addressComponent.province +
            data.addressComponent.city +
            data.addressComponent.district;
          seft.street = data.addressComponent.township;
        }

        function onError(data) {
          // 定位出错
          console.log("定位失败错误：", data);
        }
      });
    },
    updateArea() {
      this.show = !this.show;
      this.value = this.province + this.city + this.district;
      this.form.province = this.province;
      this.form.city = this.city;
      this.form.district = this.district;
      this.flag();
    },
    onMyAddressChange(picker, values) {
      if (myaddress[values[0]]) {
        picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
        picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
        this.province = values[0];
        this.city = values[1];
        this.district = values[2];
      }
    },
    showArea() {
      this.show = !this.show;
      if (this.value == "") {
        this.myAddressSlots[0].defaultIndex = 0;
        return;
      }
      for (let i = 0; i < this.myAddressSlots[0].values.length; i++) {
        if (this.myAddressSlots[0].values[i] == this.form.province) {
          this.myAddressSlots[0].defaultIndex = i;
          break;
        }
      }
      this.myAddressSlots[2].values = Object.keys(
        myaddress[this.form.province]
      );
      this.flag();
      for (let i = 0; i < this.myAddressSlots[2].values.length; i++) {
        if (this.myAddressSlots[2].values[i] == this.form.city) {
          this.myAddressSlots[2].defaultIndex = i;
          break;
        }
      }
      this.myAddressSlots[4].values =
        myaddress[this.form.province][this.form.city];
      for (let i = 0; i < this.myAddressSlots[4].values.length; i++) {
        if (this.myAddressSlots[4].values[i] == this.form.district) {
          this.myAddressSlots[4].defaultIndex = i;
          break;
        }
      }
    },
    jump() {
      if (
        navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )
      ) {
        //手机端跳转
        // let money  = "money="+this.fee;
        //     console.info(this.fee)
        let temp = { orderId: this.order, payType: 1 };
        let orderPay = JSON.stringify(temp);
        let router = this.$router;
        let xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("POST", "/dzy/order/pay?equipment=1");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
          console.info("预支付：" + xhr.response); // 预支付id
          // let data = xhr.response;
          function onBridgeReady() {
            WeixinJSBridge.invoke(
              "getBrandWCPayRequest",
              xhr.response.data,
              function(res) {
                if (res.err_msg == "get_brand_wcpay_request:ok") {
                  router.push({
                    path: "/buy/order",
                    query: { id: temp.orderId }
                  });
                }
              }
            );
          }

          if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
              document.addEventListener(
                "WeixinJSBridgeReady",
                onBridgeReady,
                false
              );
            } else if (document.attachEvent) {
              document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
              document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
            }
          } else {
            onBridgeReady();
          }
        };
        xhr.send(orderPay);
      } else {
        //电脑端跳转
        this.$http
          .post("/order/pay?equipment=" + 0, {
            orderId: this.order,
            payType: 1
          })
          .then(res => {
            this.Object = {
              orderId: this.order,
              total: this.total,
              WeChat: res.data.img
            };
            this.$router.push({ path: "/pay", query: { Object: this.Object } });
          })
          .catch(res => {
            console.info(res);
          });
      }
    },

    balance() {
      if (
        navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )
      ) {
        //手机端跳转
        this.$http
          .post("/order/pay?equipment=" + 0, {
            orderId: this.order,
            payType: 0
          })
          .then(res => {
            console.info(res);
            if (res.data == null) {
              this.$router.push({
                path: "/buy/order",
                query: { id: this.order }
              });
            } else {
              let temp = { orderId: this.order, payType: 0 };
              let orderPay = JSON.stringify(temp);
              let router = this.$router;
              let xhr = new XMLHttpRequest();
              xhr.responseType = "json";
              xhr.open("POST", "/dzy/order/pay?equipment=1");
              xhr.setRequestHeader("Content-Type", "application/json");
              xhr.onload = function() {
                console.info("预支付：" + xhr.response); // 预支付id
                // let data = xhr.response;
                function onBridgeReady() {
                  WeixinJSBridge.invoke(
                    "getBrandWCPayRequest",
                    xhr.response.data,
                    function(res) {
                      if (res.err_msg == "get_brand_wcpay_request:ok") {
                        router.push({
                          path: "/buy/order",
                          query: { id: temp.orderId }
                        });
                      }
                    }
                  );
                }

                if (typeof WeixinJSBridge == "undefined") {
                  if (document.addEventListener) {
                    document.addEventListener(
                      "WeixinJSBridgeReady",
                      onBridgeReady,
                      false
                    );
                  } else if (document.attachEvent) {
                    document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
                    document.attachEvent(
                      "onWeixinJSBridgeReady",
                      onBridgeReady
                    );
                  }
                } else {
                  onBridgeReady();
                }
              };
              xhr.send(orderPay);
            }
          })
          .catch(res => {
            console.info(res);
          });
      } else {
        //电脑端跳转
        this.$http
          .post("/order/pay?equipment=" + 0, {
            orderId: this.order,
            payType: 0
          })
          .then(res => {
            console.info(res);
            if (res.data.img != undefined) {
              this.$message({
                message: "余额不足请微信支付",
                type: "error"
              });
              this.Object = {
                orderId: this.order,
                total: this.total,
                WeChat: res.data.img
              };
              this.$router.push({
                path: "/pay",
                query: { Object: this.Object }
              });
            } else {
              console.info(res);
              this.$router.push({
                path: "/buy/order",
                query: { id: this.order }
              });
            }
          })
          .catch(res => {
            console.info(res);
          });
      }
    },
    carriage() {
      this.$router.push("/carriage");
    },
    rules() {
      this.$router.push("/rules");
    },
    in(timeout, val) {
      if (timeout !== null) clearTimeout(timeout);
      if (val == this.street) {
        axios
          .get(
            "http://restapi.amap.com/v3/assistant/inputtips?key=4771c3e9da26cd402892560bd030605c&keywords=" +
              val +
              "&city=" +
              this.form.city
          )
          .then(res => (this.searchAddress = res.data.tips));
      }
    },
    coupons(discount) {
      if (this.freight.charge != undefined) {
        this.total = this.buyTotalPrice;
      }

      if (this.total < discount.perLimit) return;

      this.pitchs = discount.perLimit + "元" + discount.name;
      this.total -= discount.amount;
      this.coupon = false;
      this.judging = false;
      this.discountId = discount.id;
    },
    create() {
      let cartIds = [];
      for (let i = 0; i < this.cart.length; i++) {
        cartIds[i] = this.cart[i].id;
      }
      this.form.street = this.street;
      this.$http
        .post("/purchase/", {
          address: this.form,
          cartIds: cartIds,
          couponId: this.discountId,
          freightId: this.freight.id
        })
        .then(res => {
          this.order = res.data;
          console.info(res.data);
        })
        .catch(res => {
          console.info(res);
        });
    },

    flag() {
      this.$http
        .get("/freight/" + this.form.province)
        .then(res => {
          this.freight = res.data;
          console.info(res.data);
        })
        .catch(res => {
          console.info(res);
        });
    },
    submitOrder() {
      if (
        this.form.name.trim().length < 2 ||
        this.form.name.trim().length > 20
      ) {
        this.$message({
          message: "名字长度必须在2-20位之间",
          type: "error"
        });
        return;
      }
      if (!this.form.phone.match(/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/)) {
        this.$message({
          message: "手机号码必须是11位,且以1开头",
          type: "error"
        });
        return;
      }
      if (this.value == "") {
        this.$message({
          message: "请输入您所在的地址",
          type: "error"
        });
        return;
      }
      if (this.street.length <= 0) {
        this.$message({
          message: "请输入您所处的街道",
          type: "error"
        });
        return;
      }
      this.mask = true;
      this.create();
      // let formData = this.form;
      // let data = await this.$http.post("/order", formData, {
      //   headers: {
      //     "Content-Type": "application/json;charset=UTF-8"
      //   }
      // });
    }
  },
  computed: {
    buyTotalPrice() {
      let total = 0;
      for (let i = 0; i < this.cart.length; i++) {
        total += (this.cart[i].book.price * this.cart[i].discount) / 10;
      }
      return total;
    },
    price() {
      if (this.buyTotalPrice >= 99) {
        return (this.total = this.buyTotalPrice);
      }
      if (this.freight.charge != undefined) {
        console.info(this.freight.charge);
        this.total = this.buyTotalPrice + this.freight.charge;
      }
      return this.total;
    }
  },
  async created() {
    this.$http
      .get("/cart/checkout")
      .then(res => {
        this.cart = res.data;
        if (this.cart == 0) {
          this.$router.push("/");
        }
      })
      .catch(res => {
        console.info(res);
      });

    let addrData = await this.$http.get("/addr");
    if (addrData.code === 0) {
      this.form = addrData.data || {
        name: "",
        phone: "",
        street: "",
        province: "",
        city: "",
        district: ""
      };
      this.value = this.form.province + this.form.city + this.form.district;
      this.street = this.form.street;
    } else {
      this.getLocation();
    }

    this.$http
      .get("/freight/" + this.form.province)
      .then(res => {
        this.freight = res.data || {
          charge: ""
        };
      })
      .catch(res => {
        console.info(res);
      });

    this.$http.get("/coupon").then(res => {
      this.discounts = res.data;
    });
  },
  watch: {
    street: function(val) {
      let timeout = null;
      timeout = setTimeout(() => {
        if (this.searchSwitch) {
          this.in(timeout, val);
        }
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.sell-order {
  padding-bottom: 51px;
  background-color: rgb(242, 242, 242);
  .sell-order-info {
    padding: 15px 15px 0px;
    overflow: auto;
    background: rgb(255, 255, 255);
    .sell-order-header {
      font-size: 15px;
      text-align: left;
      line-height: 20.8px;
    }
    .sell-order-content {
      margin-top: 15px;
      padding-top: 15px;
      border-top: 0.5px solid rgb(242, 242, 242);
      .sell-order-address {
        margin-bottom: 15px;
        padding: 0.4em;
        color: rgb(242, 129, 129);
        font-size: 13px;
        line-height: 17.6px;
        text-align: center;
        background: rgba(242, 129, 129, 0.1);
        border-radius: 5px;
      }
      .item {
        .el-cascader {
          width: 100%;
        }
      }
      .error {
        color: red;
        margin-left: 53px;
        font-size: 13px;
      }
      .item {
        display: flex;
        margin-bottom: 15px;
        align-items: center;
        .item-name {
          flex-shrink: 0;
          width: 52px;
        }
        .timeRange-wrapper {
          width: 293.2px;
        }
        .area {
          text-align: left;
        }
        .input {
          display: inline-block;
          box-sizing: border-box;
          width: 100%;
          margin: 0;
          padding: 9px;
          color: inherit;
          font: inherit;
          font-size: 14px;
          line-height: 20px;
          background: rgb(247, 247, 247);
          border: 1px solid rgb(247, 247, 247);
          border-radius: 5px;
          appearance: none;
          outline: none;
        }
      }
      .address {
        position: absolute;
        top: 334px;
        left: 64px;
        z-index: 1024;
        background-color: #fefefe;
        width: 100%;
        border: 1px solid #d1d1d1;
        .address-name {
          white-space: nowrap;
          font-size: 12px;
          cursor: pointer;
          padding: 4px;
          .address-name-span {
            color: #c1c1c1;
            padding-left: 4px;
          }
        }
      }
    }
  }
  .anonymity {
    height: 64px;
    margin: 15px 0px;
    padding: 0px 15px;
    background: rgb(255, 255, 255);
    .anonymity-info {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: space-between;
      .anonymity-desc {
        .title {
          margin: 0;
          font: inherit;
        }
        .tip {
          font-size: 12px;
          line-height: 1.8;
          color: rgb(170, 170, 170);
        }
      }
      .checkbox {
        width: 25px;
        height: 25px;
        background: #fff;
        border: 1px solid rgb(24, 195, 170);
        border-radius: 999px;
      }
      .el-icon-success {
        font-size: 32px;
        color: rgb(24, 195, 170);
      }
    }
  }
  .progress-bar {
    margin: 15px 0px;
    padding: 14px 15px 20px;
    background: rgb(255, 255, 255);
    .title {
      display: flex;
      align-items: center;
      margin-bottom: 14px;
      h3 {
        margin: 0px;
        font: inherit;
      }
    }
    .progress {
      width: 98%;
      margin-left: 2px;
      .progress-feature {
        position: relative;
        height: 40px;
        max-height: 6vh;
        img {
          width: 42px;
          height: 40px;
          left: -3%;
          z-index: 1;
        }
      }
      .bar {
        position: relative;
        width: 100%;
        height: 8px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(230, 230, 230);
        border-image: initial;
        border-radius: 99px;
        overflow: hidden;
      }
    }
  }
  .sell-books-info {
    padding: 0px 15px;
    background: white;
    margin-bottom: 50px;
    .sell-info {
      padding: 14px 0px;
      border-bottom: 0.5px solid rgb(242, 242, 242);
      .sell-items:first-child {
        margin-top: 0px;
      }
      .sell-items {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 7.5px;
        .sell-name {
          display: flex;
          flex-grow: 1;
          flex-direction: row;
          align-items: center;
          margin-right: 1em;
          overflow: hidden;
          .name {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }

        .sell-price {
          flex-shrink: 0;
          font-weight: 400;
          line-height: 1;
        }
      }
      .discount-coupon {
        margin-top: 14px;
        padding-top: 14px;
        border-top: 0.5px solid rgb(242, 242, 242);
        .coupon {
          margin-top: 0px;
          display: flex;
          flex-direction: row;
          align-items: center;
          .content {
            display: flex;
            flex-grow: 1;
            flex-direction: row;
            align-items: center;
            margin-right: 1em;
            overflow: hidden;
            .text {
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
          .desc {
            flex-shrink: 0;
            font-weight: 400;
            line-height: 1;
            color: rgb(170, 170, 170);
            .icon {
              width: 1.4em;
              vertical-align: -0.3em;
            }
          }
        }
      }
    }
    .sell-footer {
      display: flex;
      justify-content: flex-end;
      padding: 14px 0px;
      border-bottom: none;
      .max-price {
        font-size: 1.33em;
        font-weight: 400;
        color: rgb(242, 129, 129);
      }
    }
    .estimate-price {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      margin-top: -10px;
      padding-bottom: 20px;
      font-size: 12px;
      color: rgb(170, 170, 170);
    }
  }
  .fixed {
    position: fixed;
    bottom: 0px;
    right: 0;
    left: 0;
    z-index: 0;
    .button {
      display: block;
      width: 100%;
      height: 43px;
      color: #fff;
      background-color: rgb(242, 129, 129);
      border-radius: 999px;
      box-sizing: border-box;
      padding: 8px 1.5em 8px;
      font-size: 18px;
      line-height: 30px;
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
    }
  }
  .mask {
    display: none;
  }
}
.pay {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);
  .pay-layer {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    .pay-item {
      max-width: 600px;
      margin: 0px auto;
      .pay-body {
        position: relative;
        padding: 20px;
        background: rgb(255, 255, 255);
        border-radius: 10px 10px 0px 0px;
        .header {
          padding-bottom: 16px;
          border-bottom: 0.5px solid rgb(230, 230, 230);
          .title {
            font-size: 18px;
            font-weight: 500;
          }
          .desc {
            font-size: 12px;
            font-weight: 400;
            color: rgb(170, 170, 170);
          }
        }
        .middle {
          margin: 0px;
          padding: 0px;
          margin-bottom: 60px;
          .pay-middle {
            height: 64px;
            display: flex;
            flex-direction: row;
            align-items: center;
            border-bottom: 0.5px solid rgb(230, 230, 230);
            .pay-middle-info {
              flex-grow: 1;
              .pay-middle-row {
                display: flex;
                flex-direction: row;
                align-items: center;
                .pay-middle-png {
                  width: 28px;
                  line-height: 0;
                  text-align: center;
                  padding: 0px 10px 0px 5px;
                }
                .pay-balance-info {
                  flex-grow: 1;
                  .pay-balance-title {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    .pay-method-title {
                      font-size: 16px;
                      font-weight: 400;
                    }
                    .label {
                      color: rgb(242, 129, 129);
                      border-color: rgb(242, 129, 129);
                      box-sizing: border-box;
                      display: inline-flex;
                      align-items: center;
                      height: 18px;
                      padding: 0 6px;
                      font-size: 12px;
                      font-weight: 400;
                      border: 0.5px solid rgb(214, 186, 140);
                      border-radius: 4px;
                      white-space: nowrap;
                    }
                  }
                  .user-balance {
                    font-size: 12px;
                    color: rgb(214, 186, 140);
                  }
                }
                .el-icon-check {
                  width: 18px;
                  height: 18px;
                  font-weight: 999;
                  font-size: 20px;
                  color: rgb(24, 195, 170);
                }
                .balance-inactive {
                  font-size: 13px;
                  text-align: right;
                  color: rgb(170, 170, 170);
                }
              }
            }
          }
        }
        .fixed {
          position: fixed;
          bottom: 0px;
          right: 0;
          left: 0;
          z-index: 1;
          .button {
            display: block;
            width: 100%;
            height: 43px;
            color: #fff;
            background-color: rgb(242, 129, 129);
            border-radius: 999px;
            box-sizing: border-box;
            padding: 8px 1.5em 8px;
            font-size: 18px;
            line-height: 30px;
            text-align: center;
            text-decoration: none;
            white-space: nowrap;
          }
        }
        .close-btn {
          width: 50px;
          height: 50px;
          position: absolute;
          right: 0px;
          top: 0px;
          background: #fff;
          border: 0px;
        }
      }
    }
  }
}
.bottom {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4);
  .areas {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: 279px;
    background-color: white;
    .header {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ddd;
      .header-left {
        font-size: 17px;
        padding: 9px 15px;
        height: 42px;
        box-sizing: border-box;
        color: rgb(24, 195, 170);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .header-right {
        font-size: 17px;
        padding: 9px 15px;
        height: 42px;
        box-sizing: border-box;
        color: rgb(24, 195, 170);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .header-title {
        flex: 1;
        text-align: center;
        font-size: 17px;
        padding: 9px 15px;
        height: 42px;
        box-sizing: border-box;
        color: rgb(51, 51, 51);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
.counpons {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
  .counpons-layer {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 888;
    .counpons-item {
      max-width: 600px;
      margin: 0px auto;
      .counpons-body {
        position: relative;
        padding: 20px;
        background: rgb(255, 255, 255);
        border-radius: 10px 10px 0px 0px;
        .body {
          box-sizing: border-box;
          width: 100%;
          .heade {
            .counpons-title {
              margin-right: 30px;
              margin-bottom: 20px;
              font-size: 18px;
              font-weight: 500;
              color: rgb(51, 51, 51);
            }
          }
          .middle {
            max-height: 276px;
            margin-top: 16px;
            margin-bottom: 12px;
            overflow: scroll;
            .content {
              border-color: rgb(214, 186, 140);
              border-width: 2px;
              padding: 0px;
              margin-bottom: 0px;
              display: flex;
              box-sizing: border-box;
              height: 72px;
              flex-direction: row;
              align-items: center;
              background-color: rgba(214, 186, 140, 0.06);
              border-radius: 4px;
              border-style: solid;
              border-image: initial;
              .left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 67%;
                height: 100%;
                padding: 0px 10px 0px 17px;
                border-right: 1px solid rgba(214, 186, 140, 0.2);
                overflow: hidden;
                .name {
                  font-size: 15px;
                  font-weight: normal;
                }
                .desc {
                  display: flex;
                  align-items: center;
                  font-size: 12px;
                  color: rgb(170, 170, 170);
                  margin-top: 3px;
                  .dot {
                    width: 2px;
                    height: 2px;
                    background-color: rgb(170, 170, 170);
                    margin: 0px 6px;
                  }
                }
              }
              .right {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 33%;
                color: rgb(214, 186, 140);
                overflow: hidden;
                .counpons-desc {
                  font-size: 16px;
                  font-weight: normal;
                }
              }
            }
          }
          .bottoms {
            border-color: rgb(242, 129, 129);
            box-shadow: none;
            height: 40px;
            font-size: 15px;
            border-radius: 3px;
            width: 100%;
            color: #fff;
            background-color: rgb(242, 129, 129);
            .buttons-inner {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
            }
          }
        }
        .close-btn {
          width: 55px;
          height: 79px;
          position: absolute;
          right: 0px;
          top: 0px;
          background: #fff;
          border: 0px;
        }
      }
    }
  }
}
</style>
