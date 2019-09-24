<template>
    <div>
        <div class="grade-root">
            <div class="grade-roots">
                <div class="grade-head">
                    <h3 class="grade-title">给「 {{book.name}} 」评分</h3>
                    <div class="book-img">
                        <img :src="book.cover" alt="" style="width: 110px;height: 156px;">
                    </div>
                </div>
                <div class="grade-xingxing">
                    <div class="xingxing-tit">* 根据书的内容来打分哦 *</div>
                    <div class="xingxing">
                        <el-rate ></el-rate>
                    </div>
                </div>
                <div class="grade-pinglun">
                    <el-input
                        class="body-content"
                        name="reason"
                        type="textarea"
                        v-model="textarea"
                        maxlength="200"
                        show-word-limit
                        placeholder="一些阅读感受…"
                        style="height: 8em; background: transparent;"
                    ></el-input>
                </div>
                <div class="grade-intro">   
                    <div class="intro">
                        * 如果买到的书品相不符或疑似盗版，请联系客服处理。
                    </div>
                </div>
                
                <div class="grade-button">
                    <div class="button-div" @click="submitBookComment(book.id,textarea)">
                        <div class="button">
                            确定
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            textarea : '',
            book : []
        }
    },
    created(){
        this.$http.get("/book/"+this.$route.params.id).then(res => {
            console.info("res",res)     
            this.book = res.data
        })
    },
    methods:{
        submitBookComment(id,textarea){
            this.$http.post("/comment?bookId="+id+"&comment="+textarea)
            console.info("id",id)
            console.info("comment",textarea)
            this.$message({
                message: "评论成功",
                type: "success"
            });
            this.$router.push({
                path:
                "/book/" +
                this.$route.params.id 
            });
            this.$options.methods.location();
        },
        location(){
            console.info("无法定位")
            window.scrollTo(0,680)
        }
    }    
}
</script>
<style lang="scss" scoped>
.grade-root{
    padding: 0.8em;
    .grade-roots{
        display: block;
        margin-top: 0em;
        .grade-head{
            align-items: center;
            flex-direction: column;
            display: flex;
            .grade-title{
                font-size: 1.25em;
                font-weight: 400;
                margin-bottom: 20px;
                text-align: center;
            }
            .book-img{
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                width: 110px;
                height: 156px;
            }
        }
        .grade-xingxing{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 30px 0px 25px;
            .xingxing-tit{
                color: rgb(24, 195, 170);
                font-size: 15px;
                font-weight: normal;
                margin-bottom: 10px;
            }
            .xingxing{

            }
        }
        .grade-pinglun{
            .body-content {
                height: 8em;
                background: transparent;
                display: inline-block;
                box-sizing: border-box;
                width: 100%;
                margin: 0;
                padding: 9px;
                color: inherit;
                font: inherit;
                font-size: 14px;
                line-height: 20px;
                border: 1px solid rgb(247, 247, 247);
                border-radius: 5px;
                outline: none;
            }
        }
        .grade-intro{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 13px;
            margin-bottom: 30px;
            .intro{
                font-size: 12px;
                color: rgb(170, 170, 170);
            }
        }
        .grade-button{
            background-color: rgb(255, 255, 255);
            box-shadow: rgba(0, 0, 0, 0.08) 0px -1px 8px 0px;
            margin: 0px 0px -130px;
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: 1;
            .button-div{
                max-width: 600px;
                margin: 0px auto;
                .button{
                    text-align:center;
                    width: calc(100% - 106px);
                    font-size: 15px;
                    margin: 17px auto 147px;
                    pointer-events: none;
                    opacity: .3;
                    display: block;
                    color: #fff;
                    background: rgb(24, 195, 170);
                    border-color: rgb(24, 195, 170);

                    box-sizing: border-box;
                    padding: 8px 1.5em 8px;
                    text-align: center;
                    text-decoration: none;
                    white-space: nowrap;
                    border: .5px solid rgb(242, 242, 242);
                    border-radius: 999px;
                    cursor: pointer;
                }
                // Button{
                //     box-sizing: border-box;
                //     padding: 8px 1.5em 8px;
                //     text-align: center;
                //     text-decoration: none;
                //     white-space: nowrap;
                //     border: .5px solid rgb(242, 242, 242);
                //     border-radius: 999px;
                //     cursor: pointer;
                // }
            }
        }
    }
}

</style>