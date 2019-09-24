<template>
    <div class="sellingBooksList">
        <div v-if="this.books.length >  0">
            <div class="content">
                <div class="sellPage">
                    <div @click="showRule = true">
                        <div class="rule">
                            <span class="rule-text">规则更新：有馆藏类印章或标签的书拒收</span>
                            <div class="el-icon-arrow-right"></div>
                        </div>
                    </div>
                    <div class="sellPage-books">
                        <div class="root" v-for="book in this.books" :key="book.id">
                            <div class="root-image">
                                <img :src="book.cover"  style="width:50px;height=70px">
                            </div>
                            <div class="root-content">
                                <h2 class="title">{{book.name}}</h2>
                                <div class="description">
                                    {{book.author}}
                                </div>
                                <div class="footer">
                                    <div class="popover-wrap" @click="showIndexMethod(book.id)">
                                        <div class="variant-price-desc-wrap">
                                            <i  :class="showIndex === book.id ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
                                            <span class="variant-price-desc">品相好可买</span>
                                        </div>
                                        <router-link  tag="div" :to="{ path: '/audit' }">
                                            <div class="popover" v-if="showIndex === book.id">
                                                <i class="el-icon-caret-top"></i>
                                                <a>
                                                    <div class="popover-content">
                                                        <div class="price-unit">
                                                            <div class="price-condition">
                                                                品相良好或全新
                                                                <svg
                                                                    viewBox="0 0 24 24"
                                                                    fill="transparent"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    class="Icon"
                                                                    width="12"
                                                                    height="12"
                                                                    style="padding-left: 3px;"
                                                                    @click="jumpQualityAudit"
                                                                >
                                                                    <circle cx="12" cy="12" r="10" />
                                                                    <line x1="12" y1="16" x2="12" y2="12" />
                                                                    <line x1="12" y1="8" x2="12" y2="8" />
                                                                </svg>
                                                            </div>
                                                            <span class="price--normal">
                                                                ￥{{book.price * book.maxDiscount/10 | numeral('0,0.00')}}
                                                            </span>
                                                        </div>
                                                        <div class="price-unit">
                                                            <div class="price-condition">
                                                                品相中等
                                                                <svg
                                                                    viewBox="0 0 24 24"
                                                                    fill="transparent"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    class="Icon"
                                                                    width="12"
                                                                    height="12"
                                                                    style="padding-left: 3px;"
                                                                    @click="jumpQualityAudit"
                                                                >
                                                                    <circle cx="12" cy="12" r="10" />
                                                                    <line x1="12" y1="16" x2="12" y2="12" />
                                                                    <line x1="12" y1="8" x2="12" y2="8" />
                                                                </svg>
                                                            </div>
                                                            <span class="price--normal">
                                                                 ￥{{book.price * book.minDiscount/10 | numeral('0,0.00')}}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </router-link>  
                                    </div>
                                    <span class="price">
                                        ￥{{book.price * book.maxDiscount/10  | numeral('0,0.00')}}
                                    </span>
                                    <span class="discount">
                                        {{book.maxDiscount}} 折
                                    </span>
                                </div>
                            </div>
                            <div class="remove-btn" @click="deleBookById(book.id)">
                                <div class="close">
                                    <svg
                                    viewBox="19 19 22 22"
                                    stroke-linecap="round"
                                    width="10"
                                    height="10"
                                    stroke="rgb(170, 170, 170)"
                                    stroke-width="2"
                                >
                                    <g transform="translate(21.000000, 21.000000)">
                                    <path d="M0.333333333,0.333333333 L17.4148373,17.4148373" />
                                    <path
                                        d="M0.333333333,0.333333333 L17.4148373,17.4148373"
                                        transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000)"
                                    />
                                    </g>
                                </svg>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    <div class="sellPage-refusedBooks">
                        <div class="header">
                            <h3 class="header-text">以下书暂时不收</h3>
                            <span class="tip">收购时会通知你</span>
                        </div>
                        <div class="refuse-root">
                            <div>
                                <div class="root">
                                    <div class="root-image">
                                        <img src="../../assets/img/29f12cd66a2f11e7b98500163e063441.jpeg" alt="" style="width:50px;height=70px">
                                    </div>
                                    <div class="root-content">
                                        <h2 class="refuse-title">信号与系统</h2>
                                        <div class="refuse-description">
                                            刘树塘
                                        </div>
                                        <div class="refuse-footer">
                                            <div class="button--small">
                                                这本书应该收
                                            </div>
                                            <div class="button--small">
                                                加入
                                                <span class="refuse-free">free</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="remove-btn">
                                        <div class="close">
                                        <svg
                                            viewBox="19 19 22 22"
                                            stroke-linecap="round"
                                            width="10"
                                        height="10"
                                            stroke="rgb(170, 170, 170)"
                                            stroke-width="2"
                                        >
                                            <g transform="translate(21.000000, 21.000000)">
                                            <path d="M0.333333333,0.333333333 L17.4148373,17.4148373" />
                                            <path
                                            d="M0.333333333,0.333333333 L17.4148373,17.4148373"
                                                transform="translate(9.000000, 9.000000) scale(-1, 1) translate(-9.000000, -9.000000)"
                                                />
                                            </g>
                                        </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a> 
                        <div class="sell-rule">
                            <router-link  tag="div" :to="{ path: 'rules' }">
                                了解更多卖书规则
                                <div class="el-icon-arrow-right"> </div>
                            </router-link>  
                        </div>
                    </a>
                    <div class="fixed-bottom">
                        <div class="fixed-content">
                            <div class="scanButton" @click="scan">
                                <div class="button-inner">
                                    <i class="el-icon-full-screen"></i>
                                    扫码卖书
                                </div>
                            </div>
                            <div class="typeButton" @click="showISBM = true">
                                <div class="button-inner">
                                    <i class="el-icon-edit"></i>
                                    手动输入
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="bottom-content">
                                <div class="bottom-main">
                                    <div class="bottom-info">
                                        <span class="info-up">
                                            <span class="up-number">{{this.books.length}}</span>
                                            <span class="up-text">本 最高可卖</span>
                                            <span class="up-price">￥{{sellTotalPrice | numeral('0,0.00')}}</span>
                                        </span>
                                        <div class="pirice-estimate">
                                            预估价格区间<span class="price">￥{{sellMinPrice | numeral('0,0.00')}}</span>~<span class="price">￥{{sellTotalPrice | numeral('0,0.00')}}</span>
                                            <router-link  tag="div" :to="{ path: '/audit' }">  
                                              <div class="popover" style="margin: 3px 0px 0px 5px; z-index: 2;" >
                                                <div class="cat-svg">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="transparent"
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
                                             </router-link>  
                                        </div>
                                    </div>
                                    <div class="next-step">
                                        <div class="button-inner" @click.self.stop="showConfirm = true">下一步</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="commit-confirm" v-if="showConfirm" @click.self.stop="showConfirm = false">
                <div class="content">
                    <div class="content-main">
                        <div class="modal-main">
                            <div class="modal-header">
                                提交前请确认
                            </div>
                            <div class="modal-body">
                                <div class="contents">
                                    <p>以下几种情况会被拒收，请不要寄出：</p>
                                    <ul>
                                        <li>有馆藏类印章或标签的书</li>
                                        <li>被写过的习题册</li>
                                        <li>主要附件缺失的书</li>
                                        <li>音像制品</li>
                                        <li>品相差到影响阅读的书</li>
                                    </ul>
                                    <a>
                                        <router-link  tag="div" :to="{ path: '/audit' }">
                                            <span>查看更多审核规则</span>
                                            <i class="el-icon-arrow-right"></i>
                                        </router-link>
                                    </a>
                                </div>
                                <div class="operation">
                                    <div class="return" @click="showConfirm = false">返回</div>
                                    <div class="agree-button">
                                        <router-link  tag="div" :to="{ path: '/addr' }">确认下单</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="selling-books">
                <div class="">
                    <div class="rule">
                        <div class="rule-item" @click="showRule = true">
                            <span class="rule-content">规则更新：有馆藏类印章或标签的书拒收</span>
                            <div class="el-icon-arrow-right"></div>
                        </div>
                    </div>
                    <div class="flow">
                        <div class="flow-contents">
                            <div class="flow-item">
                                <img src="../../assets/img/sell_intro_1.png" style="height:130px;width:150px" />
                                <div class="flow-content-right">
                                    <div class="flow-content-item">
                                        <div class="flow-content">手机扫码</div>
                                        <div class="flow-content">看书购价</div>
                                        <div class="flow-content popup">
                                            <div class @click="isMsg = !isMsg">什么书不收
                                                <i :class="isMsg ? 'el-icon-arrow-up':'el-icon-arrow-down'"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hide" v-show="isMsg === true">
                                <ul class="hide-content item">
                                    <li class="hide-content">扫码提示不收或在安排快递前线上审核显示拒绝的就是暂时不收的。</li>
                                    <li class="hide-content">不收有影响阅读的破损、污渍、老化、异味的书。</li>
                                    <li class="hide-content">不收盗版、非卖品、非法出版物。</li>
                                </ul>
                            </div>
                        </div>
                        <div class="flow-contents">
                            <div class="flow-item">
                                <img src="../../assets/img/sell_intro_2.png" style="height:130px;width:150px" />
                                <div class="flow-content-right">
                                    <div class="flow-content-item">
                                        <div class="flow-content">快递免费</div>
                                        <div class="flow-content">上门取书</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flow-contents">
                            <div class="flow-item">
                                <img src="../../assets/img/sell_intro_3.png" style="height:130px;width:150px" />
                                <div class="flow-content-right">
                                    <div class="flow-content-item">
                                        <div class="flow-content">审核到账</div>
                                        <div class="flow-content">书款到账</div>
                                        <div class="flow-content popup">
                                            <div class @click="isShow = !isShow">什么是审核
                                                 <i :class="isShow ? 'el-icon-arrow-up':'el-icon-arrow-down'"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hide" v-show="isShow === true">
                                <ul class="hide-content item">
                                    <li class="hide-content">
                                    多抓鱼在收到书时会进行品相审核，这一步会把书籍
                                    的品相分为全新、品相良好、品相中等、品相不合格，
                                    其中品相中等的收购价比全新和品相良好的要低
                                    20%，品相不合格的书会被拒收。
                                    </li>
                                    <li class="hide-content">卖家可以自付运费取回被拒的书（首次取回免费）。</li>
                                </ul>       
                            </div>
                        </div>
                    </div>
                    <div class="selling-books-rule">
                        <router-link  tag="div" :to="{ path: '/rules' }">
                            了解更多卖书规则
                            <div class="el-icon-arrow-right"> </div>
                        </router-link>  
                    </div>
                    <div class="sell-book">
                        <div class="sell-book-item">
                            <button class="sell-book-button">
                            <div class="sell-book-content" @click="scan">扫码卖书</div>
                            </button>
                        </div>
                        <div class="sell-book-item">
                            <span class="sell-book-isbn"  @click="showISBM = true">手动输入 ISBN</span>
                        </div>  
                    </div>
                </div> 
            </div>
        </div>
        <div class="refuse-rule" v-if="showRule" @click.self.stop="showRule = false">
            <div class="content">
                <div class="content-main">
                    <div class="modal-main">
                        <div class="modal-header">
                            拒书规则更新
                        </div>
                        <div class="modal-body">
                            <div class="contents">
                                <p>新增了书籍拒收的类型：</p>
                                <ul>
                                    <li>馆藏类印章或标签会拒收</li>
                                    <li>被写过的习题册会拒收</li>
                                </ul>
                                <a>
                                    <router-link  tag="div" :to="{ path: '/audit' }">
                                        <span>查看更多审核规则</span>
                                        <i class="el-icon-arrow-right"></i>
                                    </router-link>
                                </a>
                            </div>
                            <div class="operation">
                                <div class="agree-button" @click="showRule = false">好的</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div class="backdrop" v-if="showISBM"  @click.self.stop="showISBM = false">
            <div class="middle">
                <div class="modal-mainWrapper">
                    <div class="modal-main">
                        <div class="modal-header"   >
                            手动输入条码号
                        </div>
                        <div class="modal-body">
                            <div class="add">
                                <div class="tip">
                                    <p>13 或 10 位 ISBN 条码，不含 - 符号</p>
                                    <p>或多抓鱼的 dzy 开头的条码</p>
                                </div>
                                <div class="add-shape-code">
                                    <div class="shape-code">
                                        <div class="bar-code-svg">
                                            <svg width="152px" height="83px" viewBox="0 0 279 150" version="1.1"><g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group-2"><rect id="Rectangle-20" fill="#FDEDAE" x="0" y="133" width="279" height="17"></rect><text id="9-781449-063665" font-family="HelveticaNeue-Light, Helvetica Neue" font-size="22" font-weight="300" letter-spacing="5.86000013" fill="#333333"><tspan x="1" y="149">9 781449 06366</tspan><tspan x="242.056002" y="149">5</tspan></text><g id="Group-13" transform="translate(19.000000, 0.000000)" fill-rule="nonzero" fill="#000000"><rect id="Rectangle-path" x="4.67484663" y="0" width="1.9751714" height="136.009995"></rect><rect id="Rectangle-path" x="0" y="0" width="1.9751714" height="136.009995"></rect><rect id="Rectangle-path" x="121.546012" y="0" width="1.9751714" height="136.009995"></rect><rect id="Rectangle-path" x="126" y="0" width="1.9751714" height="136.009995"></rect><rect id="Rectangle-path-Copy" x="240" y="0" width="1.9751714" height="136.009995"></rect><rect id="Rectangle-path-Copy" x="244" y="0" width="1.9751714" height="136.009995"></rect><rect id="Rectangle-path" x="12.4662577" y="0" width="10.5006794" height="124.362559"></rect><rect id="Rectangle-path" x="59.2147239" y="0" width="12.4346538" height="124.362559"></rect><rect id="Rectangle-path" x="109.079755" y="0" width="6.21847124" height="124.362559"></rect><rect id="Rectangle-path" x="29.607362" y="0" width="2.5519306" height="124.362559"></rect><rect id="Rectangle-path" x="49.8650307" y="0" width="2.5519306" height="124.362559"></rect><rect id="Rectangle-path" x="85.7055215" y="0" width="2.5519306" height="124.362559"></rect><rect id="Rectangle-path" x="77.9141104" y="0" width="2.55650805" height="124.362559"></rect><rect id="Rectangle-path" x="38.9570552" y="0" width="4.78801687" height="124.362559"></rect><rect id="Rectangle-path" x="98.1717791" y="0" width="4.78801687" height="124.362559"></rect><rect id="Rectangle-path" x="134.01227" y="0" width="10.5006794" height="124.362559"></rect><rect id="Rectangle-path" x="180.760736" y="0" width="12.4346538" height="124.362559"></rect><rect id="Rectangle-path" x="230.625767" y="0" width="6.21847124" height="124.362559"></rect><rect id="Rectangle-path" x="151.153374" y="0" width="2.5519306" height="124.362559"></rect><rect id="Rectangle-path" x="171.411043" y="0" width="2.5519306" height="124.362559"></rect><rect id="Rectangle-path" x="207.251534" y="0" width="2.5519306" height="124.362559"></rect><rect id="Rectangle-path" x="199.460123" y="0" width="2.55650805" height="124.362559"></rect><rect id="Rectangle-path" x="160.503067" y="0" width="4.78801687" height="124.362559"></rect><rect id="Rectangle-path" x="219.717791" y="0" width="4.78801687" height="124.362559"></rect></g></g></g></svg>
                                        </div>
                                    </div>
                                </div>
                                <input placeholder="在这输入..." class="input" v-model="ibNumber">
                                <div class="add-info" v-if="error">格式错误，ISBN 最后一位可以是字母 X。多抓鱼条码以 dzy 开头 13 位，请重新输入</div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div class="modal-footer-button" @click="getSellBook(ibNumber)">
                                确认
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-buttonWrapper">
                    <div class="modal-close"  @click="showISBM = false">
                        <i class="el-icon-close"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "sellingBooksList",
    data(){
        return{
            isMsg: false,
            isShow: false,
            code:false,
            showISBM:false,
            showConfirm:false,
            showRule:false,
            error:false,
            books: [],
            showIndex:-1,
            ibNumber:null
        }
    },
    //初始化用户列表
    created() {
        this.refresh();
    },
    methods:{
        async initJSApi(config) {
            var that = this;
            console.info(that);
            wx.error(function(res){
                console.error(res)
            });
            // 接口初始化完成
            wx.ready(function () {
                console.info("ready");
                wx.scanQRCode({
                    needResult: 1, 
                    scanType: ["qrCode","barCode"], 
                    success: function (res) {
                        var str=res.resultStr.split(",");
                        var result=str[1];
                        console.info(result);
                        that.$http.get("/sell/"+result)
                        .then(res => {
                            console.info(res);
                            if(res.code === 0){
                                that.$message({
                                    message: res.desc,
                                    type: "success"
                                });
                                that.refresh();
                            }else{
                                that.$message({
                                    message: res.desc,
                                    type: "error"
                                });
                            }
                        });
                    },
                    error: function (res) {
                        console.info(res)
                    },
                    fail: function () {
                        console.error("fail", arguments)
                    },
                    complete: function () {
                        console.info("complete", arguments)
                    },
                    trigger: function () {
                        console.info("trigger", arguments)
                    },
                    cancel: function () {
                        console.info("cancel", arguments)
                    }
                });
            });
            // 初始化接口
            wx.config({
                debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: config.appId, // 必填，公众号的唯一标识
                timestamp: config.timestamp, // 必填，生成签名的时间戳
                nonceStr: config.nonceStr, // 必填，生成签名的随机串
                signature: config.signature,// 必填，签名
                jsApiList: ['scanQRCode'] ,// 必填，需要使用的JS接口列表,
                error: function (res) {
                    console.info(res)
                },
                fail: function () {
                    console.error("fail", arguments)
                },
                complete: function () {
                    console.info("complete", arguments)
                },
                trigger: function () {
                    console.info("trigger", arguments)
                },
                cancel: function () {
                    console.info("cancel", arguments)
                },
                
            });
        },
        async scan(){
            await this.$http.get('/wx/interface/config')
            .then(res => {
                console.info(res);
                this.initJSApi(res);  
            })   
        },
        jumpQualityAudit(){
            this.$router.push('/audit');
        },
        showIndexMethod(id){
            if(this.showIndex != id){
                this.showIndex = id;     
            }else{
                this.showIndex = -1;
            }
        },
         //刷新
        async refresh() {
            let data = await this.$http.get("/sell");
            if(data.code === 0){
                this.books = data.data;            
            }else{
                console.info(data.desc);
            } 
        },
        //删除单个
        async deleBookById(id) {
            let data = await this.$http.delete("/sell?bookId="+id);
            if(data.code === 0){
                this.refresh();
            }
        }, 
        //扫码卖书
        async getSellBook(ibNumber){   
            var numReg = /^[0-9]+$/;
            var numRe = new RegExp(numReg);
            if(!numRe.test(ibNumber)){
                this.error = true;
            }else{
                let data = await this.$http.get("/sell/"+ibNumber);
                if(data.code === 0){
                    this.ibNumber = null;
                    this.showISBM = false;
                    this.error = false;
                    this.refresh();
                    this.$message({
                        message: data.desc,
                        type: "success"
                    });
                }else{
                    this.$message({
                        message: data.desc,
                        type: "error"
                    });
                    this.error = true;
                }
            } 
        }
    },
    computed:{
        // ...mapGetters({user: "user",}),
        sellTotalPrice(){
            let total = 0;
            for(let i=0;i<this.books.length;i++){
                total +=this.books[i].price * this.books[i].maxDiscount/10;
            }
            return total;
        },
        sellMinPrice(){
             let total = 0;
            for(let i=0;i<this.books.length;i++){
                total +=this.books[i].price * this.books[i].minDiscount/10;
            }
            return total;
        }
    }
};
</script>
<style lang="scss" scoped>
    .filter{
        width:100%;
        filter: blur(6px)
    }
    .content{
        position: relative;
        .sellPage{
            padding-bottom: 222px;
            background: #fff;
            .rule{
                display: flex;
                justify-content: space-between;
                background-color: rgba(242, 129, 129, 0.1);
                color: rgb(242, 129, 129);
                font-size: 14px;
                font-weight: normal;
                padding: 10px 18px;
                .rule-text{
                    height: 21.2px;
                }
            }
            .sellPage-refusedBooks {
                border-top: 22px solid rgb(242, 242, 242);
                .header{
                    display: flex;
                    justify-content: space-between;
                    padding: 12px;
                    .tip{
                        color: rgb(170, 170, 170);
                        margin-left: 8px;
                        font-size: 14px;
                    }
                    h3{   
                        margin: 0;
                        font: inherit;
                        height: 20.8px;
                        font-weight: lighter;
                        font-size: 15px;
                    }
                }
                .refuse-root{
                    .root{
                        .root-content{
                            .refuse-title{
                                height: 19.2px;
                                font-size: inherit;
                                font-weight:lighter;
                                margin: 0px 24px 2px 0px;
                                text-align: left;

                            }
                            .refuse-description{
                                height: 16.8px;
                                color: rgb(170, 170, 170);
                                font-size: 12px;
                                text-align: left;
                            }
                            .refuse-footer{
                                height: 32px;
                                display: flex;
                                justify-content: flex-end;
                                align-items: center;
                                .button--small{
                                    border: .5px solid rgb(242, 242, 242);
                                    border-radius: 999px;
                                    pointer-events: auto;
                                    height: 32px;
                                    padding: 0px 16px;
                                    line-height: 32px;
                                    color: rgb(102, 102, 102);
                                    font-weight: 300;
                                    font-size: 14px;
                                    .refuse-free{
                                        font-weight: bold;
                                    }
                                }
                                .button--small:last-child{
                                    margin-left: 6px;
                                }
                            }
                        }
                    }
                }
            }
            a {
                color: inherit;
                text-decoration: none;
                .sell-rule{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 18px 15px;
                    border-bottom: 1px solid rgb(247, 247, 247);
                    line-height: 21px;
                    font-weight: 100;
                    font-size: 15px;
                }
            }
            .fixed-bottom {
                position: fixed;
                bottom: 0;
                right: 0;
                left: 0;
                z-index: 1;
                .fixed-content{
                    display: flex;
                    justify-content: center;
                    margin-bottom: 14px;
                    .scanButton{
                        width: 130px;
                        height: 45px;
                        font-size: 16px;
                        color: #fff;
                        background: rgb(24, 195, 170);
                        border-color: rgb(24, 195, 170);
                        border-radius: 999px;
                        .button-inner{
                            display: flex;  
                            justify-content: center;
                            align-items: center;
                            height: 100%;
                        }
                    }
                    .typeButton{
                        margin-left: 15px;
                        color: rgb(102, 102, 102);
                        background: #fff;
                        border: .5px solid rgb(223, 223, 223);
                        box-shadow: 3px 4px 8px rgba(0, 0, 0, .08);
                        width: 130px;
                        height: 45px;
                        font-size: 16px;
                        border-radius: 999px;
                        .button-inner{
                            display: flex;  
                            justify-content: center;
                            align-items: center;
                            height: 100%;
                        }
                    }
                }
                .bottom-content{
                    background-color: rgb(247, 247, 247);
                    padding: 16px;
                    .bottom-main{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        .bottom-info{
                            display: flex;
                            flex-direction: column;
                            flex-grow: 1;
                            font-size: 14px;
                            .info-up {
                                display: flex;
                                align-items: center;
                                height: 20px;
                                .up-number {
                                    padding-right: .25em;
                                    padding-left: .25em;
                                }
                                .up-text {
                                    color: rgb(170, 170, 170);
                                }
                                .up-price {
                                    font-size: 18px;
                                    line-height: 1;
                                    color: rgb(242, 129, 129);
                                }
                            }
                            .pirice-estimate{
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                margin-top: 6px;
                                font-size: 12px;
                                font-weight: 300;
                                color: rgb(170, 170, 170);
                                height: 16.8px;
                            }
                        }
                        .next-step{
                            width: 100px;
                            height: 42px;
                            font-size: 18px;
                            border-radius: 3px;
                            color: #fff;
                            background: rgb(24, 195, 170); 
                            .button-inner { 
                                display: flex;  
                                justify-content: center;
                                align-items: center;
                                height: 100%;
                            }
                        }
                    }
                }
            }
        }
        .root{
            position: relative;
            display: flex;
            color: inherit;
            font-size: 14px;
            padding: 15px;
            text-decoration: none;
            border-bottom: 1px solid rgb(247, 247, 247);
            .root-image{
                width: 50px;
                height: 70px;
            }
            .root-content{
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-left: 15px;
                .title{
                    font-size: inherit;
                    font-weight: 400;
                    margin: 0px 24px 2px 0px;
                    line-height: 19.2px;
                    text-align: left;
                }
                .description{
                    color: rgb(170, 170, 170);
                    font-size: 12px;
                    height: 26.4px;
                    text-align: left;
                }
                .footer{
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    height: 22.40px;
                    .popover-wrap{
                        position: relative;
                        width: 79.6px;
                        text-align: right;
                        .variant-price-desc-wrap{
                            .el-icon-arrow-down{
                                font-size: 10px;
                            }
                            .el-icon-arrow-up{
                                font-size: 10px;
                            }
                            .variant-price-desc{
                                margin-left: 3px;
                                font-size: 12px;
                                font-weight: 300;
                                line-height: 1.83;
                                color: rgb(170, 170, 170);
                            }
                        }
                        .popover{
                            position: absolute;
                            top: 0px;
                            z-index: 1;
                            background-color: rgb(255, 255, 255);
                            box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 12px 0px;
                            border-radius: 6px;
                            top: 33px;
                            left: 50%;
                            transform: translateX(-50%);
                            .el-icon-caret-top{
                                position: absolute;
                                top: -13px;
                                z-index: 30;
                                left: 50%;
                                font-size: 20px;
                                transform: translateX(-50%);
                                color: #fff;
                            }
                            a {
                                color: inherit;
                                text-decoration: none;
                                .popover-content{
                                    display: flex;
                                    flex-direction: row;
                                    width: 255px;
                                    padding: 21px 0px;
                                    .price-unit{
                                        flex-grow: 1;
                                        font-size: 12px;
                                        font-weight: 300;
                                        line-height: 1.83;
                                        text-align: center;
                                         .price-condition{
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            font-size: 12px;
                                            font-weight: 300;
                                            line-height: 1.83;
                                            text-align: center;
                                            color: rgb(51, 51, 51);
                                        }
                                        .price--normal{
                                            display: block;
                                            font-size: 20px;
                                            line-height: normal;
                                            font-weight: normal;
                                        }
                                    }
                                    .price-unit:last-child{
                                            border-left: 0.5px solid rgb(242, 242, 242);
                                    }
                                }
                            }
                        }
                        .price{
                            display: flex;
                            justify-items: center;
                            align-items: center;
                            font-size: 15px;
                            font-weight: normal;
                            margin-left: 4px;
                            margin-right: 2px;
                            width: 56.05px;
                            height: 22.4px;
                        }
                        
                    }
                }
            }
            .remove-btn{
                position: absolute;
                right: 16px;
                top: 14px;
            }
        }
    }   
    .discount{
        margin-left: 5px;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        height: 18px;
        padding: 0 6px;
        color: rgb(214, 186, 140);
        font-size: 12px;
        font-weight: 400;
        border: .5px solid rgb(214, 186, 140);
        border-radius: 4px;
        white-space: nowrap;
    } 
    .backdrop {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        z-index: 2;
        background-color: rgba(0, 0, 0, .4);
        .middle {
            display: flex;
            height: 100%;
            margin: 0 1em;
            flex-direction: column;
            pointer-events: none;
            .modal-mainWrapper {
                flex-grow: 1;
                display: flex;   
                align-items: center;
                justify-content: center;
                height: 520px;
                .modal-main {
                    position: relative;
                    box-sizing: border-box;
                    width: 100%;
                    max-width: 340px;
                    background: #fff;
                    border-radius: 10px;
                    overflow-x: hidden;
                    pointer-events: auto;
                    .modal-header {
                        margin: 0 22px;
                        padding: 15px 0;
                        font-size: 20px;
                        font-weight: 100;    
                        text-align: center;
                        border-bottom: .5px solid rgb(242, 242, 242);
                    }
                    .modal-body {
                        padding: 0 22px;
                        margin: 27px 0;
                        text-align: center;
                        white-space: pre-wrap;
                        .add{
                            position: relative;
                            display: flex;
                            flex-direction: column;
                            align-items: stretch;
                            padding-bottom: 20px;
                            .tip{
                                margin-bottom: 14px;
                                p{
                                    margin: 0px;
                                    font-weight: 100;
                                    font-size: 15px;
                                }
                            }
                            .add-shape-code {
                                text-align: center;
                                margin-bottom: 10px;
                                height: 88.6px;
                            }
                            .input {
                                display: inline-block;
                                box-sizing: border-box;
                                width: 100%;
                                margin: 0;
                                padding: 9px;
                                color: inherit;
                                font-size: 14px;
                                font-weight: 100;
                                line-height: 20px;
                                background: rgb(247, 247, 247);
                                border: 1px solid rgb(247, 247, 247);
                                border-radius: 5px;
                                outline: none;
                            }
                            .add-info {
                                position: absolute;
                                left: 0;
                                right: 0;
                                bottom: -1.7em;
                                margin-top: .2em;
                                color: rgb(242, 129, 129);
                                font-size: .8em;
                                text-align: left;
                            }
                        }
                    }
                    .modal-footer {
                        display: flex;
                        justify-content: center;
                        padding: 0 22px;
                        margin: 27px 0;
                        .modal-footer-button{
                            width: 135px;
                            padding: 6px 0;
                            font-size: 15px;
                            line-height: 21px;
                            color: #fff;
                            background: rgb(24, 195, 170);
                            border-color: rgb(24, 195, 170);
                            border-radius: 999px;
                            text-align: center;
                        }
                    }
                }
            }
            .modal-buttonWrapper {
                flex-grow: 1;
                display: flex;   
                height: 147px;
                justify-content: center;
                .modal-close{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-shrink: 0;
                    width: 50px;
                    height: 50px;
                    pointer-events: auto;
                    border:1px solid #fff;
                    border-radius: 999px;
                    .el-icon-close{
                        font-size: 20px;
                        color: #fff;
                    }
                }
            }           
        }
    }
    .commit-confirm{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        z-index: 2;
        background-color: rgba(0, 0, 0, .4);
        .content{
            margin-left: 30px;
            margin-right: 30px;
            display: flex;
            height: 100%;
            flex-direction: column;
            pointer-events: none;
            .content-main{
                flex-grow: 1;    
                display: flex;
                align-items: center;
                justify-content: center;        
                .modal-main{
                    position: relative;
                    box-sizing: border-box;
                    width: 100%;
                    max-width: 340px;
                    background: #fff;
                    border-radius: 10px;
                    overflow-x: hidden;
                    pointer-events: auto;  
                    .modal-header {
                        margin: 0 22px;
                        padding: 15px 0;
                        font-size: 20px;
                        text-align: center;
                        border-bottom: .5px solid rgb(242, 242, 242);
                        height: 28px; 
                    }   
                    .modal-body {
                        text-align: center;
                        white-space: pre-wrap;
                        padding: 0px;
                        margin: 0px;
                        .contents{
                            font-size: 16px;
                            font-weight: 300;
                            line-height: 1.5;
                            text-align: left;
                            padding: 27px 23px 25px;
                            a{
                                text-decoration-line: none;
                                color: rgb(24, 195, 170);
                                .el-icon-arrow-right{
                                    font-weight: bold;
                                }
                            }
                            p{
                                margin: 0px;
                            }
                            ul{
                                list-style: none;
                                padding: 0px;
                                margin-top: 12px;
                                margin-bottom: 12px;
                                li{
                                   padding-left: 16px;
                                    position: relative;
                                    margin-bottom: 0px;
                                   
                                }
                                li:before {
                                    content: "";
                                    box-sizing: border-box;
                                    width: 5.25px;
                                    height: 5.25px;
                                    position: absolute;
                                    left: 0px;
                                    top: 9.975px;
                                    border-radius: 50%;
                                    background: rgb(24, 195, 170);
                                    border-width: 1px;
                                    border-style: solid;
                                    border-color: rgb(24, 195, 170);
                                    border-image: initial;
                                }
                            }
                        }
                        .operation{
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: center;
                            border-top: 1px solid rgb(247, 247, 247);
                            .return{    
                                flex-grow: 1;
                                flex-shrink: 0;
                                flex-basis: 0px;
                                height: 54px;
                                text-align: center;
                                color: rgb(170, 170, 170);
                                font-weight: normal;
                                border-right: 1px solid rgb(247, 247, 247);
                                line-height: 54px;
                            }
                            .agree-button{
                                flex-grow: 1;
                                flex-shrink: 0;
                                flex-basis: 0px;
                                height: 54px;
                                text-align: center;
                                color: rgb(170, 170, 170);
                                font-weight: normal;
                                color: rgb(24, 195, 170);
                                 line-height: 54px;
                            }
                        }
                    }  
                } 
            }
        }
    }
    .refuse-rule{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        z-index: 2;
        background-color: rgba(0, 0, 0, .4);
        .content{
            margin-left: 30px;
            margin-right: 30px;
            display: flex;
            height: 100%;
            flex-direction: column;
            pointer-events: none;
            .content-main{
                flex-grow: 1;    
                display: flex;
                align-items: center;
                justify-content: center;        
                .modal-main{
                    position: relative;
                    box-sizing: border-box;
                    width: 100%;
                    max-width: 340px;
                    background: #fff;
                    border-radius: 10px;
                    overflow-x: hidden;
                    pointer-events: auto;  
                    .modal-header {
                        margin: 0 22px;
                        padding: 15px 0;
                        font-size: 20px;
                        text-align: center;
                        border-bottom: .5px solid rgb(242, 242, 242);
                        height: 28px;
                    }   
                    .modal-body {
                        text-align: center;
                        white-space: pre-wrap;
                        padding: 0px;
                        margin: 0px;
                        .contents{
                            font-size: 16px;
                            font-weight: 300;
                            line-height: 1.5;
                            text-align: left;
                            padding: 27px 23px 25px;
                            a{
                                text-decoration-line: none;
                                color: rgb(24, 195, 170);
                                .el-icon-arrow-right{
                                    font-weight: bold;
                                }
                            }
                            p{
                                margin: 0px;
                            }
                            ul{
                                list-style: none;
                                padding: 0px;
                                margin-top: 12px;
                                margin-bottom: 12px;
                                li{
                                   padding-left: 16px;
                                    position: relative;
                                    margin-bottom: 0px;
                                }
                                li:before {
                                    content: "";
                                    box-sizing: border-box;
                                    width: 5.25px;
                                    height: 5.25px;
                                    position: absolute;
                                    left: 0px;
                                    top: 9.975px;
                                    border-radius: 50%;
                                    background: rgb(24, 195, 170);
                                    border-width: 1px;
                                    border-style: solid;
                                    border-color: rgb(24, 195, 170);
                                    border-image: initial;
                                }
                            }
                        }
                        .operation{
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: center;
                            border-top: 1px solid rgb(247, 247, 247);
                            .return{    
                                flex-grow: 1;
                                flex-shrink: 0;
                                flex-basis: 0px;
                                height: 54px;
                                text-align: center;
                                color: rgb(170, 170, 170);
                                font-weight: normal;
                                border-right: 1px solid rgb(247, 247, 247);
                                line-height: 54px;
                            }
                            .agree-button{
                                flex-grow: 1;
                                flex-shrink: 0;
                                flex-basis: 0px;
                                height: 54px;
                                text-align: center;
                                color: rgb(170, 170, 170);
                                font-weight: normal;
                                color: rgb(24, 195, 170);
                                 line-height: 54px;
                            }
                        }
                    }  
                } 
            }
        }
    }
    .selling-books {
        box-sizing: border-box;
        min-height: 100vh;
        padding-bottom: 222px;
        background: #fff;
        z-index: 1;
        .rule {
            width: 100%;
            background: #fef2f2;
            .rule-item {
                display: flex;
                justify-content: space-between;
                padding: 10px 18px;
                .rule-content {
                    color: rgb(242, 129, 129);
                    font-size: 14px;
                    font-weight: normal;
                }
                .el-icon-arrow-right{
                    color: rgb(242, 129, 129);
                     font-weight: bold;
                }
            }
        }
        .flow{
            .flow-contents {
                padding: 15px;
                border-bottom: 1px solid rgb(247, 247, 247);
                .flow-item {
                    display: flex;
                    .flow-content-right {
                        display: flex;
                        flex-grow: 1;
                        height: 130px;
                        justify-content: center;
                        align-items: center;
                        .flow-content-item {
                            font-size: 20px;
                            font-weight: 500;
                            line-height: 1.4;
                            margin-top: -18px;
                            letter-spacing: 2px;
                            .popup {
                                margin-top: 6px;
                                font-size: 14px;
                                font-weight: 300;
                                letter-spacing: 0px;
                                color: rgb(24, 195, 170);
                            }
                        }
                    }
                }
                .hide {
                    margin-top: 16px;
                    line-height: 1.8;
                    .item.hide-content {
                        font-size: 14px;
                        line-height: 1.8;
                        font-weight: 300;
                        text-align: left;
                        margin: 0px;
                        padding: 0px;
                        list-style: none;
                        .hide-content {
                            padding-left: 16px;
                            position: relative;
                            margin-bottom: 0px;
                        }
                        li.hide-content::before {
                            content: "";
                            box-sizing: border-box;
                            width: 5.25px;
                            height: 5.25px;
                            position: absolute;
                            left: 0px;
                            top: 9.975px;
                            border-radius: 50%;
                            background: rgb(24, 195, 170);
                            border-width: 1px;
                            border-style: solid;
                            border-color: rgb(24, 195, 170);
                            border-image: initial;
                        }
                    }
                }
            }
        }
        .selling-books-rule {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 18px 15px;
            border-bottom: 1px solid rgb(247, 247, 247);
        }
        .sell-book {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: 1;
            .sell-book-item {
                display: flex;
                justify-content: center;
                margin-bottom: 14px;
                .sell-book-button {
                    box-shadow: 3px 4px 8px rgba(24, 195, 170, 0.5);
                    width: 192px;
                    height: 52px;
                    padding: 0;
                    color: #fff;
                    background: rgb(24, 195, 170);
                    border-radius: 999px;
                    pointer-events: auto;
                    font: inherit;
                    border: none;
                    .sell-book-content {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                    }
                }
                .sell-book-isbn {
                    font-size: 13px;
                    color: rgb(170, 170, 170);
                    padding-bottom: 6px;
                }
            } 
        }
    }
</style>
