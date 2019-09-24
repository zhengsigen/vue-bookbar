<template>
  <div class="advertisement">
      <div class="content">
          <div class="content-page">
              <div class="header">
                <div class="large">
                    <img :src="user.cover" alt="">
                </div>
              </div>
              <div class="main">
                  <div class="main-content">
                      <div class="left">
                          <img src="../../assets/img/left_text.png" alt="">
                      </div>
                      <div class="middle-content">{{user.wxName}}卖掉了她的「{{this.firthBook}}」,还记得大明湖畔的「Hello World」吗？</div>
                      <div class="right">
                          <img src="../../assets/img/right_text.png" alt="">
                      </div>
                  </div>
                  <div class="main-tips">
                      <img src="../../assets/img/center_text.png" alt="">
                  </div>
                  <div class="main-recommend">
                      推荐阅读《颈椎腰椎康复书》
                  </div>
              </div>
              <div class="share-qrcode">
                  书吧<br>轻松买卖二手书的循环商店
                  <div class="qrcode">
                      <img src="../../assets/img/qr309345336311291667.png" alt="">
                  </div>
              </div>
              <div class="holder"></div>
              <div class="footer">
                  <div class="order-hint">
                      你卖的书已经下单成功了
                  </div>
                  <div>
                    <router-link  tag="div" :to="{ path: '/order/'+orderId}">
                       <button class="button" style="width: 266px; height: 44px; border-radius: 100px; border: 1px solid rgb(51, 51, 51); background-color: rgb(214, 186, 140);">
                            查看订单
                        </button>
                    </router-link>
                  </div>
                 
              </div>
          </div>  
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "advertisement",
    data(){
        return{
            firthBook: null,
            orderId:null
        }
    },
     computed: {
        ...mapGetters(["user"])
    },
     //初始化订单书籍列表
    async created() {
        this.orderId = this.$route.params.orderId;
        let data = await this.$http.get("/order/"+this.orderId);
        if(data.code === 0){ 
            this.firthBook = data.data.orderBooksConditions[0].name;  
        }
    },
};
</script>
<style lang="scss" scoped>
    .advertisement{
        background-color: rgb(240, 232, 222);
        .content{
            position: relative;
            .content-page{
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: center;
                min-height: 100vh;
                padding-bottom: 30px;
                .header{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    width: 266px;
                    height: 50px;
                    background-image: url(../../assets/img/title_bg.png);
                    background-size: contain;
                    margin: 30px 0px 35px;
                    background-position: center center;
                    background-repeat: no-repeat;
                     .large{
                        width: 40px;
                        height: 40px;
                       img{
                            display: block;
                            width: 100%;
                            border-radius: 50%;
                        }
                    }                 
                }  
                .main{
                    box-sizing: border-box;
                    width: 310px;
                    border-width: 4px;
                    border-style: solid;
                    border-color: rgb(0, 0, 0);
                    border-image: initial;
                    .main-content{
                        display: flex;
                        flex-direction: row;
                        min-height: 162px;
                        .left{
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            flex-shrink: 0;
                            width: 44px;
                            border-right: 1px solid black;
                            img{
                                width: 50%;
                            }
                        }
                        .middle-content{
                            font-size: 18px;
                            font-weight: 500;
                            line-height: 1.56;
                            letter-spacing: 0.4px;
                            text-align: left;
                            color: rgb(35, 24, 21);
                            padding: 29px 19px;
                        }
                        .right{
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            flex-shrink: 0;
                            width: 44px;
                            border-left: 1px solid black;
                            img{
                                width: 50%;
                            }
                        }               
                    }
                    .main-tips{
                        height: 20px;
                        border-right: 1px solid black;
                        text-align: center;
                        background-color: black;
                        img{
                            height: 100%;
                        }
                    }
                    .main-recommend{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 75px;
                        font-size: 18px;
                        font-weight: 500;
                        line-height: 1.56;
                        letter-spacing: 0.4px;
                        text-align: left;
                        color: rgb(35, 24, 21);
                    }
                }  
                .share-qrcode{
                    box-sizing: border-box;
                    width: 310px;
                    margin-top: 10px;
                    padding-right: 80px;
                    position: relative;
                    font-size: 12px;
                    font-weight: normal;
                    line-height: 1.5;
                    text-align: right;
                    .qrcode{
                        width: 69px;
                        height: 69px;
                        position: absolute;
                        right: 0px;
                        top: -25px;
                        background-size: cover;
                        background-position: center center;
                        background-repeat: no-repeat;
                        img{
                            width: 100%;
                            height: 100%;
                            position: relative;
                        }
                    }
                    .qrcode:before{
                        content: "";
                        width: 69px;
                        height: 69px;
                        position: absolute;
                        left: -5px;
                        bottom: -5px;
                        background-color: rgb(214, 186, 140);
                    }
                } 
                .holder{
                    height: 110px;
                }
                .footer{
                    margin-top: 20px;
                    .order-hint{
                        margin-bottom: 11px;
                        font-size: 12px;
                        line-height: 1.5;
                        text-align: center;
                        font-weight: lighter;
                    }
                    .button{
                        display: inline-block;
                        box-sizing: border-box;
                        padding: 8px 1.5em 8px;
                        font-size: 18px;
                        text-align: center;
                        text-decoration: none;
                        border: .5px solid rgb(242, 242, 242);
                        border-radius: 999px;   
                        cursor: pointer;
                        font-weight: lighter;
                    }
                }  
            }
        }
    }     
    
</style>
