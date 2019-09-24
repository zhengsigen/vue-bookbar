<template>
    <div class="count">{{cartCount}}</div>
</template>
<script>
export default {
    name: "count",
    props: ["cartCount"]
}
</script>

<style lang="scss" scoped>
.count{
    margin-left: 4px;
    box-sizing: border-box;
    height: 18px;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    background: rgb(242, 129, 129);
    border-radius: 9px;
    transition: transform 0.2s;
    transform-origin: center;
    padding: 0 0.66em;

    // box-sizing: border-box;
    // height: 18px;
    // width: 18px;
    // color: #fff;
    // font-size: 12px;
    // font-weight: 400;
    // line-height: 18px;
    // text-align: center;
    // background: rgb(242, 129, 129);
    // border-radius: 9px;
    // transform-origin: center;
}
    

</style>
