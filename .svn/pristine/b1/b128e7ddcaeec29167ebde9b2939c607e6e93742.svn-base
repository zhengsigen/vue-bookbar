<template>
    <div class="backgrounddim" @click.self="close()">
        <div class="conditionclose">
            <div class="conditionHeight">
                <div class="contents">
                    <div class="contents-test">
                        <div>
                            <h2 class="head-name">{{cart.book.name}}</h2>
                            <p class="contents-intro" style="font-size: 13px;color: rgb(170, 170, 170);">
                                多个品相的书可以购买
                                <span class="contents-issue" style="color: rgb(51, 51, 51);">
                                    不同品相有何区别？
                                </span>
                                <i class="el-icon-arrow-right" @click.stop="close()"></i>
                            </p>
                        </div>
                        <div class="chose-multi">
                            <div class="condition-template" v-for="sku in skus" :key="sku.id" :class="{'selected':selectCondition === sku.condition}"  @click.stop="checkSku(sku.condition)" >
                                <span class="condition-price">￥{{cart.book.price*sku.discount/10 | numeral}}</span>
                                <span class="condition-title">
                                    <span class="title"></span>
                                    <!-- @click="style='border-color: rgb(242, 129, 129);'" -->
                                    <!-- 选中框改变颜色 -->
                                    {{conditions[sku.condition]}}
                                </span>
                            </div>
                        </div>
                        <div class="confirm" @click.stop="selectShopToCart()">
                            <div class="confirm-title" >确定</div>
                        </div>
                        <i class="el-icon-close" @click="close()"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';

export default {
    name: "selectCondition",
    props: {
        cart: {
            type: Object,
            default: {}
        }
    },
    data () {
        return {
            conditions: ["品相良好", "品相中等"],
            selectCondition: null
        }
    },
    created () {
        this.selectCondition = this.cart.condition;
    },
    methods: {
        close() {
            console.info("关闭选择");
            this.$emit("close-conditions");
        },
        //切换品相
        checkSku(condition) {
            console.info(condition)
            this.selectCondition = condition;
        },
        //选择品相提交
        async selectShopToCart() {
            let bookId = this.cart.id;
            let condition = this.selectCondition;
            let cartId = this.cart.id;
      
            //品相不变则不修改
            if(this.cart.condition !== condition){
                let data = await this.$http.patch("/cart",{bookId,condition,id:cartId});
                if(data.code === 0){
                    this.$emit("refresh");
                }
            }
            this.close();
        }
    },
    computed: {
        ...mapGetters(["skus"])
    }
}
</script>

<style lang="scss" scoped>
.backgrounddim {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.3);
    .conditionclose {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 1;
        .conditionHeight {
            // max-width: 600px;
            margin: 0px auto;
            .contents {
                position: relative;
                padding: 20px;
                background: rgb(255, 255, 255);
                border-radius: 10px 10px 0px 0px;
                .contents-test {
                    position: relative;
                    box-sizing: border-box;
                    width: 100%;
                    .head-name {
                        margin-right: 30px;
                        font-size: 18px;
                        font-weight: 500;
                        margin-top: 0px;
                        color: rgb(51, 51, 51);
                        .contents-intro {
                            margin-top: 2px;
                            line-height: 1.46;
                            font-size: 13px;
                            color: rgb(170, 170, 170);
                            .contents-issue {
                                margin-left: 5px;
                                font-size: 13px;
                                line-height: 1.46;
                                color: rgb(51, 51, 51);
                            }
                        }
                    }
                    .chose-multi {
                        margin-top: 16px;
                        margin-bottom: 12px;
                        // overflow: scroll;
                        .condition-template {
                            border-color: rgb(242, 242, 242);
                            border-width: 2px;
                            padding: 0px 12px 0px 17px;
                            display: flex;
                            box-sizing: border-box;
                            height: 72px;
                            margin-bottom: 12px;
                            flex-direction: row;
                            align-items: center;
                            border-radius: 4px;
                            border-style: solid;
                            border-image: initial;
                            .condition-price {
                                font-weight: 500;
                                line-height: 1.2;
                                font-size: 22px;
                            }
                            .condition-title {
                                margin-left: 7px;
                                line-height: 0;
                                color: rgb(170, 170, 170);
                                .title {
                                    line-height: 1.31;
                                    font-size: 13px;
                                }
                            }
                            &.selected {
                                border-color: rgb(242, 129, 129);
                            }
                        }
                        .free {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            margin-top: 17px;
                            .free-sion {
                                position: relative;
                                .free-sions {
                                    display: flex;
                                    flex-direction: row;
                                    align-items: center;
                                    justify-content: center;
                                    width: 52px;
                                    height: 22px;
                                    background-color: rgb(24, 195, 170);
                                    border-radius: 4px;
                                }
                            }
                            .free-price {
                                position: relative;
                                .prices {
                                    margin-left: 8px;
                                    font-size: 12px;
                                    font-weight: 300;
                                    line-height: 1.5;
                                    color: rgb(170, 170, 170);
                                }
                            }
                            .top-right {
                                color: rgb(24, 195, 170);
                                top: 0px;
                                right: 0px;
                                position: absolute;
                                display: inline-block;
                                font-size: 0.8em;
                                margin: -8px -8px -8px -4px;
                            }
                        }
                    }
                    .confirm {
                        border-color: rgb(242, 129, 129);
                        background-color: rgb(242, 129, 129);
                        box-shadow: none;
                        display: block;
                        height: 40px;
                        font-size: 15px;
                        padding: 0 1em;
                        border-radius: 3px;
                        // width: 90%;
                        .confirm-title {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100%;
                        }
                    }
                    .el-icon-close{
                        position: absolute;
                        top: 0;
                        right: 0;
                    }
                }
            }
        }
    }
}
</style>