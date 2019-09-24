<template>
  <div class="carriage">
    <div class="carriage-items">
      <div class="carriage-body">
        <div class="carriage-content">
          <h1 class="title">运费怎么计算？</h1>
          <p class="content">满 99 元免运费。基础运费 5 元。<br />
            偏远地区（甘肃、内蒙古、宁夏、青海、海南、新疆、西藏）：
            满 199 元免运费。基础运费 10 元，超过 3 本，每本增加 1.6 元运费。
          </p>
        </div>
        <div class="carriage-content">
          <h1 class="title">运费参与哪些优惠？</h1>
          <p class="content" style="margin: 0px;">买书包邮券可以减免运费。
            运费不参与买书抵扣券和满减券的优惠；不参与余额支付的优惠。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.carriage {
  max-width: 600px;
  margin: 0px auto;
  .carriage-items {
    position: relative;
    min-height: 100vh;
    .carriage-body {
      box-sizing: border-box;
      background-color: rgb(255, 255, 255);
      min-height: 100vh;
      padding: 15px;
      .carriage-content {
        margin-bottom: 20px;
        .title {
          font-size: 20px;
          font-weight: 400;
          margin-bottom: 8px;
        }
        .content {
          line-height: 1.8;
          white-space: pre-line;
        }
      }
    }
  }
}
</style>