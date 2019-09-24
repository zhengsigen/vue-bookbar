<template>
    <div class="qualityAudit">
          <div class="audit">
            
            <div class="title">书籍品相审核分级细则</div>
            <div class="rule">多抓鱼在收到书时会进行品相审核，这一步会把书籍的品相分为全新、品相良好、品相中等、品相不合格，其中品相中等的收购价比全新和品相良好的要低 20%，品相不合格的书会被拒收。</div>
            
            <div class="new-book">全新</div>
            <div class="new-book-rule">在多抓鱼收到时是全新且未拆封的。</div>
            
            <div class="condition-section">
                <div class="condition">品相良好</div>
                <div class="condition-rule">有不明显的使用痕迹或瑕疵（扉页/衬页存在少量文字或盖章也接受）。</div>
                
                <div class="toggle" v-if="conditions.includes('newCondition')" @click="upConditions('newCondition')">品相良好图片实例
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="Icon"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
                
                <div class="content" v-else>
                    <div class="new-condition-img">
                      
                    </div>
                    <div class="new-row">
                        <div class="new-item">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/liangpin06.jpg')+')'}">
                            </div>
                        </div>
                        <div class="new-item">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/liangpin07.jpg')+')'}"></div>
                        </div>
                    </div>
                    <div class="new-row">
                        <div class="new-item">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/liangpin08.jpg')+')'}"></div>
                        </div>
                        <div class="new-item">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/liangpin09.jpg')+')'}"></div>
                        </div>
                    </div>
                    <div class="toggle show" @click="upConditions('newCondition')">收起
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="Icon" style="transform: rotate(180deg);"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </div>
            </div>

            <div class="condition-section">
                <div class="condition">品相中等</div>
                <div class="condition-rule">有较明显的使用痕迹和轻度瑕疵，但不影响正常阅读。收购价比全新和品相良好要低 20%。</div>
                <div class="toggle" v-if="conditions.includes('mediumCondition')" @click="upConditions('mediumCondition')">品相中等图片实例
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="Icon"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>

                <div class="content" v-else>
                    <div class="new-row">
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/waifengpi.jpg')+')'}"></div>
                            <p class="medium-text">可拆卸外封套缺失</p>
                        </div>
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/jiaodai_biaoqian02.png')+')'}"></div>
                            <p class="medium-text">附着胶带或标签</p>
                        </div>
                    </div>
                    <div class="new-row">
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/huaxian_biaozhu4.png')+')'}"></div>
                            <p class="medium-text">有划线或标注</p>
                        </div>
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/huaxian_biaozhu3.jpg')+')'}"></div>
                            <p class="medium-text">有划线或标注</p>
                        </div>
                    </div>
                    <div class="new-row">
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/posun02.jpg')+')'}"></div>
                            <p class="medium-text">轻度磨损或破损</p>
                        </div>
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/posun01.jpg')+')'}"></div>
                            <p class="medium-text">轻度磨损或破损</p>
                        </div>
                    </div>
                    <div class="new-row">
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/mosun02.jpg')+')'}"></div>
                            <p class="medium-text">轻度磨损或破损</p>
                        </div>
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/mosun01.jpg')+')'}"></div>
                            <p class="medium-text">轻度磨损或破损</p>
                        </div>
                    </div>
                    <div class="new-row">
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/meidian01.jpg')+')'}"></div>
                            <p class="medium-text">轻度污渍</p>
                        </div>
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/meidian02.jpg')+')'}"></div>
                            <p class="medium-text">轻度污渍</p>
                        </div>
                    </div>
                    <div class="new-row">
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/wuzi03.jpg')+')'}"></div>
                            <p class="medium-text">轻度污渍</p>
                        </div>
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/wuzi04.jpg')+')'}"></div>
                            <p class="medium-text">轻度污渍</p>
                        </div>
                    </div>
                    <div class="new-row">
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/bianxing03.jpg')+')'}"></div>
                            <p class="medium-text">轻度变形</p>
                        </div>
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/bianxing02.jpg')+')'}"></div>
                            <p class="medium-text">轻度变形</p>
                        </div>
                    </div>
                    <div class="new-row">
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/fanhuang03.jpg')+')'}"></div>
                            <p class="medium-text">泛黄或褪色</p>
                        </div>
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/fanhuang04.jpg')+')'}"></div>
                            <p class="medium-text">泛黄或褪色</p>
                        </div>
                    </div>
                    <div class="new-row">
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/zhehen03.jpg')+')'}"></div>
                            <p class="medium-text">轻度折痕</p>
                        </div>
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/gaizhang.png')+')'}"></div>
                            <p class="medium-text">有划线或标注（切口盖章）</p>
                        </div>
                    </div>
                    <div class="toggle show" @click="upConditions('mediumCondition')">收起
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="Icon" style="transform: rotate(180deg);"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </div>
            </div>

            <div class="condition-section">
                <div class="condition">品相不合格</div>
                <div class="condition-rule">书籍品相已经影响书的下一位主人的使用和阅读体验，并且无法修复时，书将被拒收（首次免费取回），不会将其上架售卖。</div>
                <div class="toggle" v-if="conditions.includes('disqualification')" @click="upConditions('disqualification')">品相不合格图片实例
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="Icon"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>

                <div class="disqualification" v-else-if="!conditions.includes('disqualification')">
                    <div>品相不合格主要包括以下几种情况：</div>
                    <div class="disqualification-text">严重污渍：无法被清洁掉的大面积或让人产生明显不适的霉斑、油渍、水渍等；</div>
                    <div class="disqualification-text">含馆藏类印章或标签：书籍权属不明，不适宜循环售卖；如果你有能够证明权属关系的批量处理馆藏书籍的需求，请邮件联系多抓鱼 b2b 小组：b2b@duozhuayu.net</div>
                    <div class="disqualification-text">严重破损：影响正常阅读的封面破损、书脊破损、内页破损或开胶脱页；</div>
                    <div class="disqualification-text">划线或标注过多：导致正文辨识不清的划线或标注，和正文无关的大面积乱涂乱画；</div>
                    <div class="disqualification-text">习题册已做：做题后失去使用价值；</div>
                    <div class="disqualification-text">附件缺失：附件缺失后影响书籍使用和阅读，如解密卡；</div>
                    <div class="disqualification-text">漏印或错印：导致书籍无法完整阅读的漏印或错印；</div>
                    <div class="disqualification-text">严重变形：影响正常阅读的书籍变形；</div>
                    <div class="disqualification-text">严重异味：影响正常阅读的浓重霉味或其他让人产生明显不适的气味；</div>
                    <div class="disqualification-text">音像制品：磁带、光盘或以其为主体的商品。</div>
                </div>
                <div class="content" v-show="!conditions.includes('disqualification')">
                    <div class="new-row">
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/reject_huaxian.png')+')'}"></div>
                            <p class="medium-text">划线或标注过多拒收</p>
                        </div>
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/reject_posun1.png')+')'}"></div>
                            <p class="medium-text">严重破损拒收</p>
                        </div>
                    </div>
                    <div class="new-row">
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/reject_posun2.png')+')'}"></div>
                            <p class="medium-text">严重破损拒收</p>
                        </div>
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/reject_posun3.png')+')'}"></div>
                            <p class="medium-text">严重破损拒收</p>
                        </div>
                    </div>
                    <div class="new-row">
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/reject_library_stamp1.png')+')'}"></div>
                            <p class="medium-text">含馆藏类印章拒收</p>
                        </div>
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/reject_library_stamp2.png')+')'}"></div>
                            <p class="medium-text">含馆藏类印章拒收</p>
                        </div>
                    </div>
                    <div class="new-row">
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/reject_library_label.png')+')'}"></div>
                            <p class="medium-text">含馆藏类标签拒收</p>
                        </div>
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/reject_ownership.png')+')'}"></div>
                            <p class="medium-text">含馆藏类标签拒收</p>
                        </div>
                    </div>
                    <div class="new-row">
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/reject_wuzi1.png')+')'}"></div>
                            <p class="medium-text">严重污渍拒收</p>
                        </div>
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/reject_wuzi2.png')+')'}"></div>
                            <p class="medium-text">严重污渍拒收</p>
                        </div>
                    </div>
                    <div class="new-row">
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/reject_wuzi3.png')+')'}"></div>
                            <p class="medium-text">严重污渍拒收</p>
                        </div>
                        <div class="new-item medium">
                            <div class="new-item-img" :style="{'background-image': 'url('+require('../../../assets/img/reject_cuoyin.png')+')'}"></div>
                            <p class="medium-text">漏印或错印拒收</p>
                        </div>
                    </div>
                    
                    <div class="toggle show" @click="upConditions('disqualification')">收起
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="Icon" style="transform: rotate(180deg);"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </div>
            </div>    

            <div class="condition-section">
                <div class="condition">其他不合格原因</div>
                <div class="condition-rule">非卖品、盗版书、套装书缺册和非法出版物是会被拒收的。</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "qualityAudit",
    data() {
        return {
            conditions:["newCondition","mediumCondition","disqualification"]
        }
    },
    methods:{
        upConditions(val){
            if(this.conditions.includes(val)){
                this.conditions = this.conditions.filter(c => c != val);
            }else{
                this.conditions.push(val);
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.audit{
    max-width: 600px;
    margin: 0px auto;
    background-color: rgb(255, 255, 255);
    padding: 15px;
    text-align: left;
    .title{
        font-size: 20px;
        font-weight: 500;
    }
    .rule{
        font-size: 15px;
        font-weight: 300;
        line-height: 1.8;
        margin: 8px 0px 20px;
    }
    .new-book{
        font-size: 15px;
        font-weight: 500;
        line-height: 1.67;
    }
    .new-book-rule{
        font-size: 15px;
        line-height: 1.67;
        margin-bottom: 28px;
    }   
    .condition-section{
        margin-bottom: 28px;
        .condition{
            font-size: 15px;
            font-weight: 500;
            line-height: 1.67;
        }
        .condition-rule{
            font-size: 15px;
            font-weight: 300;
            line-height: 1.67;
        }
        .toggle{
            margin-top: 5px;
            font-size: 15px;
            font-weight: 300;
            line-height: 1.27;
            color: rgb(24, 195, 170);
            text-align: center;
        }
        .show{
            margin-top: 12px;
        }
        .Icon {
            width: 1.4em;
            vertical-align: -.3em;
        }
        .content{
            padding-top: 12px;
            .new-condition-img{
                margin-bottom: 12px;
                background-image: url('../../../assets/img/liangpin_group01.jpg');
                background-size: cover;
                padding-top: 47.8%;
            }
            .new-row{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                .new-item{
                    flex-grow: 1;
                    position: relative;
                    margin: 0px 13px 13px 0px;
                    .new-item-img{
                        background-size: cover;
                        padding-top: 100%;
                    }
                    .medium-text{
                        width: 100%;
                        margin-top: 2px;
                        position: absolute;
                        font-size: 12px;
                        font-weight: 300;
                        line-height: normal;
                        text-align: center;
                        color: rgb(51, 51, 51);
                    }
                }
                .medium{
                    margin: 0px 13px 33px 0px;
                }
            }
        }
        .disqualification{
            margin-bottom: 20px;
            .disqualification-text{
                margin-top: 15px;
                font-size: 15px;
                font-weight: 300;
                line-height: 1.67;
            }
        }
    } 
}
</style>