<template>
  <div class="orderInfo">
      <div class="content">
          <div class="sell-order">
            <div class="sell-order-info">
                <div class="sell-order-header">修改订单信息</div>
                <div class="sell-order-header update">只支持同一个省或直辖市内的地址修改</div>
                <div class="sell-order-content">
                <div class="item">
                    <span class="item-name">姓名：</span>
                    <input class="input" value="" v-model="form.name" >
                </div>
                <div class="item">
                    <span class="item-name">电话：</span>  
                    <input type="tel" class="input" value="" v-model="form.phone">  
                </div>
                <div class="item">
                    <span class="item-name" >地址：</span>  
                    <input class="input area" value="" v-model="value" @click="showArea()">
                </div>
                <div class="item">
                    <span class="item-name"></span>  
                    <textarea  class="input" placeholder="详细地址，街道、小区、单元、门牌号"  v-model="form.street"></textarea>
                </div>
                <div class="item" style="margin-bottom: 0px; background-color: rgb(255, 255, 255); border-top: 0.5px solid rgb(242, 242, 242); padding: 20px 0px;">
                    <span class="item-name">时间：</span>  
                    <div  class="timeRange-wrapper">
                      <input  class="input" readonly placeholder="快递上门时间" value="周六（8 月 10 日） 12:00 - 13:00">
                    </div>
                </div>
                </div>
            </div>
            <div>
                <div class="fixed" @click="submitOrder()">
                <div class="button">
                   确认修改
                </div>
                </div>
            </div> 
          </div>
      </div>
      <div class="bottom" v-if="show">
        <div class="areas" >
        <div class="header">
          <div class="header-left"  @click="showArea()">
            取消
          </div>
          <div class="header-title">
            选择城市
          </div>
          <div class="header-right" @click="updateArea()">
            确定
          </div>
        </div>
          <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
        </div>
     </div>
  </div>
</template>

<script>
import myaddress from "../../../address.json";
import { mapGetters } from "vuex";
export default {
  name: "orderInfo",
  data(){
    return{
      isShowAddress:false,
      myAddressSlots: [{
        　　　　　　　　　　flex: 1,
        　　　　　　　　　　defaultIndex: 1,
        　　　　　　　　　　values: Object.keys(myaddress), //省份数组
        　　　　　　　　　　className: 'slot1',
        　　　　　　　　　　textAlign: 'center'
        　　　　　　　　}, {
        　　　　　　　　　　divider: true,
        　　　　　　　　　　content: '-',
        　　　　　　　　　　className: 'slot2'
        　　　　　　　　}, {
        　　　　　　　　　　flex: 1,
        　　　　　　　　　　values: [],
        　　　　　　　　　　className: 'slot3',
        　　　　　　　　　　textAlign: 'center'
        　　　　　　　　},{
        　　　　　　　　　　divider: true,
        　　　　　　　　　　content: '-',
        　　　　　　　　　　className: 'slot4'
        　　　　　　　　},{
        　　　　　　　　　　flex: 1,
        　　　　　　　　　　values: [],
        　　　　　　　　　　className: 'slot5',
        　　　　　　　　　　textAlign: 'center'
        　　　　　　　　}],
      province:'',
      city:'',
      district:'',
      show:false,
      value:'',
      form: {},
      orderId:''
    }
  },
  //初始化地址
  async created() {
      this.orderId = this.$route.params.orderId;
      let data = await this.$http.get("/addr");
      if(data.code === 0){
        this.form = data.data; 
        console.info(this.form); 
        this.value =this.form.province+this.form.city+this.form.district
      }else{
        console.info(data.desc);
      } 
  },
  computed:{
      ...mapGetters({user: "user",}),
  },
  methods:{
    updateArea(){
      this.show = !this.show;
      this.value =this.province+this.city+this.district;
      this.form.province = this.province;
      this.form.city = this.city;
      this.form.district = this.district;
    },
　　onMyAddressChange(picker, values) {
　　　if(myaddress[values[0]]){
　　　　picker.setSlotValues(1,Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
　　　　picker.setSlotValues(2,myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
　　　　this.province = values[0];
　　　　this.city = values[1];
　　　　this.district = values[2];
　　　}
　　},
    showArea(){
      this.show = !this.show;
      for(let i = 0;i<this.myAddressSlots[0].values.length;i++){
        if(this.myAddressSlots[0].values[i] == this.form.province){
          this.myAddressSlots[0].defaultIndex = i;
          break;
        }
      }
      this.myAddressSlots[2].values =Object.keys(myaddress[this.form.province]);
      for(let i = 0;i<this.myAddressSlots[2].values.length;i++){
        if(this.myAddressSlots[2].values[i] == this.form.city){
          this.myAddressSlots[2].defaultIndex = i;
          break;  
        }
      }
      this.myAddressSlots[4].values =myaddress[this.form.province][this.form.city];
      for(let i = 0;i<this.myAddressSlots[4].values.length;i++){
        if(this.myAddressSlots[4].values[i] == this.form.district){
          this.myAddressSlots[4].defaultIndex = i;
          break;
        }
      }
    },
    async submitOrder(){
      if(this.form.name.trim().length < 2 || this.form.name.trim().length > 20){
        this.$message({
          message: '名字长度必须在2-20位之间',
          type: "error"
        });
        return;
      }
      if(!this.form.phone.match(/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/)){
        this.$message({
          message: '手机号码必须是11位,且以1开头',
          type: "error"
        });
        return;
      }
      if(this.form.street.length <= 0){
        this.$message({
          message: '请输入您所处的街道',
          type: "error"
        });
        return;
      }
      // let formData=this.form;
      // let user = JSON.stringify({
      //             "address":formData,
      //             "userId":this.user.id       
      // });
      // let account=JSON.parse(JSON.stringify(user));//需要转成json对象

        let data = await this.$http.put('/addr?orderId='+this.orderId,this.form,{
          headers:{'Content-Type': 'application/json;charset=UTF-8'}
        });

        if(data.code === 0){
          this.$router.push('/order/'+this.orderId);
        }else{
          console.info(data.desc);
        }
      },
    }
};
</script> 
<style lang="scss" scoped>
  .sell-order{
    padding-bottom: 232px;
    background-color: rgb(242, 242, 242);
    .sell-order-info{
      padding:15px 15px 0px;
      overflow: auto;
      background: rgb(255, 255, 255);
      .sell-order-header{
        font-size: 15px;
        text-align: left;
        line-height: 20.8px;
      }
      .update{
        color: rgb(201, 198, 197)
      }
      .sell-order-content{
        margin-top: 15px;
        padding-top: 15px;
        border-top: 0.5px solid rgb(242, 242, 242);
        .item{        
          .el-cascader{
            width: 100%;
          }
        }
        .item{
          display: flex;
          margin-bottom: 15px;
          align-items: center;
          .item-name{
            flex-shrink: 0;
            width: 52px;
          }
          .timeRange-wrapper{
            width: 293.2px;
          }
          .area{
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
      }
      
    }
    .fixed{
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 1;
      .button{
        display: block;
        width: 100%;
        height: 49px;
        color: #fff;
        background: rgb(24, 195, 170);
        border-color: rgb(24, 195, 170);
        box-sizing: border-box;
        padding: 8px 1.5em 8px;
        font-size: 18px;
        line-height: 30px;
        text-align: center;
        text-decoration: none;
        white-space: nowrap;
        
      }
    }
  }
  .bottom{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.4);
    .areas{
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      height:279px;
      background-color: white;
      .header{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ddd;
        .header-left{
          font-size: 17px;
          padding: 9px 15px;
          height: 42px;
          box-sizing: border-box;
          color: rgb(24, 195, 170);  
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .header-right{
          font-size: 17px;
          padding: 9px 15px;
          height: 42px;
          box-sizing: border-box;
          color: rgb(24, 195, 170);  
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .header-title{
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
</style>
