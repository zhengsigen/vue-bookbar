<template>
  <div class="sellRules">
    <!-- 头部 -->
    <div class="head" style="position: fixed;width: 100%;"> 
      
      <div class="head-left" v-on:click="left" > <!-- v-if="heightS <= 765 " -->
        <span :class="shows == true ? 'head-left-inner' :'' " >买书</span> <!-- class="head-left-inner"  -->
      </div>
      
      <div class="head-right" v-on:click="right"  > <!-- v-if="heightS > 765"  -->
        <span :class="shows == false ? 'head-right-inner' :'' "  >卖书</span> <!-- class="head-right-inner" -->
      </div>

    </div>
    <!-- 剩下部分 -->
    <div class="selection">
      <section class="scroll" style="background-color: #fff; padding: 0px 15px;">
        <!-- 问答列表 -->
        <div class="scroll-list">
          <!-- 多余的 -->
          <div class="scroll-resules" style="height: 50px;">
            <!-- 显示部分 -->
            <div class="resules-xianshi" @click="updateState('0')">
              <div class="title"></div>

            </div>
            <!-- 隐藏部分 -->
            <div class="resules-yincang" v-if="conditions.includes('0')" @click="updateState('0')">
              <div class="content">
                <div class="text"></div>
              </div>
            </div>
          </div>

          <!-- 单个  / 点击跳转买书 -->
          <div class="scroll-resules">
            <!-- 显示部分 -->
            <div class="resules-xianshi" @click="updateState('1')">
              <div class="title">书会消毒吗？</div>
              <svg
                v-if="!conditions.includes('1')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <!-- 隐藏部分 -->
            <div class="resules-yincang" v-if="conditions.includes('1')" @click="updateState('1')">
              <div class="content">
                <div class="text">多抓鱼对上架售卖的书均进行清理、翻新、消毒和包装。</div>
              </div>
            </div>
          </div>

          <div class="scroll-resules" @click="updateState(2)">
          
            <div class="resules-xianshi" @click="updateState('2')">
              <div class="title">品相如何？</div>
              <svg
                v-if="!conditions.includes('2')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('2')" @click="updateState('2')">
              <div class="content">
                <div class="text">目前包括全新、良品、中品三个等级。良品总体较新，有轻微使用痕迹；中品是有明显使用痕迹或无法修复的瑕疵或问题。</div>
                <div class="link">

                    <router-link to="/condition">
                      <span class="colored">不同品相示例</span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                        class="Icon"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </router-link>

                </div>
              </div>
            </div>
          </div>

          <div class="scroll-resules" >
            <div class="resules-xianshi" @click="updateState('3')">
              <div class="title">何时发货？</div>
              <svg
                v-if="!conditions.includes('3')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('3')" @click="updateState('3')">
              <div class="content">
                <div class="text">17:00 前下单的当天发货，17:00 后下单的第二天发货。发货后，会通过多抓鱼公众号推送物流信息。</div>
              </div>
            </div>
          </div>

          <div class="scroll-resules" >
            <div class="resules-xianshi" @click="updateState('4')">
              <div class="title">使用什么快递？</div>
              <svg
                v-if="!conditions.includes('4')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
          
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('4')" @click="updateState('4')">
              <div class="content">
                <div class="text">统一使用中通快递，部分地区中通无法配送的会切换至 EMS / 顺丰，具体以发货通知显示的为准。暂不支持自选快递。</div>
              </div>
            </div>
          </div>

          <div class="scroll-resules" >
            <div class="resules-xianshi" @click="updateState('5')">
              <div class="title">多久送达？</div>
              <svg
                v-if="!conditions.includes('5')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('5')" @click="updateState('5')">
              <div class="content">
                <div class="text">根据不同地区距离多抓鱼仓库的远近，中通快递一般时效为 2-5 天，顺丰 / EMS 为 1-3 天，具体以实际情况为准。</div>
              </div>
            </div>
          </div>

           <div class="scroll-resules" >
            <div class="resules-xianshi" @click="updateState('6')">
              <div class="title">运费怎么计算？</div>
              <svg
                v-if="!conditions.includes('6')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('6')" @click="updateState('6')">
              <div class="content">
                <div class="text">满 99 元免运费。基础运费 5 元。
 
 偏远地区（甘肃、内蒙古、宁夏、青海、海南、新疆、西藏）：
 满 199 元免运费。基础运费 10 元，超过 3 本，每本增加 1.6 元运费。</div>
              </div>
            </div>
          </div>

          <div class="scroll-resules">
            <div class="resules-xianshi" @click="updateState('7')">
              <div class="title">运费参与哪些优惠？</div>
              <svg
                v-if="!conditions.includes('7')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('7')" @click="updateState('7')">
              <div class="content">
                <div class="text">买书包邮券可以减免运费。运费不参与买书抵扣券和满减券的优惠；不参与余额支付的优惠。</div>
              </div>
            </div>
          </div>

          <div class="scroll-resules" >
            <div class="resules-xianshi" @click="updateState('8')">
              <div class="title">买书订单可以取消吗？取消后如何退款？</div>
              <svg
                v-if="!conditions.includes('8')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('8')" @click="updateState('8')">
              <div class="content">
                <div class="text">在商品拣货前可以取消，开始拣货后无法取消。订单取消后，款项将原路退回。每天能取消的次数不超过 5 次（包括未支付、已支付和 30 分钟锁定期被动取消）。</div>
              </div>
            </div>
          </div>

          <div class="scroll-resules" >
            <div class="resules-xianshi" @click="updateState('9')">
              <div class="title">可以退换货吗？</div>
              <svg
                v-if="!conditions.includes('9')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('9')" @click="updateState('9')">
              <div class="content">
                <div class="text">非品相或质量问题，不可以退换货。多抓鱼提供的是循环服务，会对所有出库书籍进行翻新、消毒、再包装。因服务造成的品相不达标或其他质量问题，请在收到书的 15 日内联系客服退款处理。如订单超出 15 日售后时效，则无法申请售后。如有疑问，请与客服联系。</div>
              </div>
            </div>
          </div>

          <div class="scroll-resules" >
            <div class="resules-xianshi" @click="updateState('0')">
              <div class="title">到货提醒按什么规则发送？</div>
              <svg
                v-if="!conditions.includes('0')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('0')" @click="updateState('0')">
              <div class="content">
                <div class="text">每次有书上架时都会给标记过这本书「到货提醒」的用户发通知。当一本书被太多人标记了「到货提醒」时，通知是无法做到同时发送给所有人的。如果在发送过程中这本书已经被买走了，就不会继续给余下的人发送了，这会导致有时候书到货了却有部分用户没收到通知的情况。我们会用公平的轮换机制去安排每次书到货时的通知发送顺序。</div>
              </div>
            </div>
          </div>


          <div class="scroll-resules" >
            <div class="resules-xianshi" @click="updateState('11')">
              <div class="title">品相会影响收购价吗？</div>
              <svg
                v-if="!conditions.includes('11')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('11')" @click="updateState('11')">
              <div class="content">
                <div class="text">多抓鱼在收到书时会进行品相审核，这一步会把书籍的品相分为全新、品相良好、品相中等、品相不合格，其中品相中等的收购价比全新和品相良好的要低 20%，品相不合格的书会被拒收。</div>
              </div>
            </div>
          </div>

          <!-- 点击跳转卖书  -->
          <div class="scroll-resules" >
            <div class="resules-xianshi" @click="updateState('12')">
              <div class="title">书的收购价格是如何确定的？</div>
              <svg
                v-if="!conditions.includes('12')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('12')" @click="updateState('12')">
              <div class="content">
                <div class="text">图书价格会根据库存和市场情况动态调整，扫码后可获得该本书当前的预估收购价。</div>
              </div>
            </div>
          </div>


          <div class="scroll-resules">
            <div class="resules-xianshi" @click="updateState('13')">
              <div class="title">什么书不收？</div>
              <svg
                v-if="!conditions.includes('13')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('13')" @click="updateState('13')">
              <div class="content">
                <div class="text">扫码提示不收或在安排快递前线上审核显示拒绝的就是暂时不收的。有影响阅读及封面完整和美观的破损、污渍、老化、异味；非卖品和非法出版物。</div>
              </div>
            </div>
          </div>


          <div class="scroll-resules">
            <div class="resules-xianshi" @click="updateState('14')">
              <div class="title">品相会影响收购价吗？</div>
              <svg
                v-if="!conditions.includes('14')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('14')" @click="updateState('14')">
              <div class="content">
                <div class="text">多抓鱼在收到书时会进行品相审核，这一步会把书籍的品相分为全新、品相良好、品相中等、品相不合格，其中品相中等的收购价比全新和品相良好的要低 20%，品相不合格的书会被拒收。</div>
                <div class="link">
                 
                    <router-link to="/audit">
                      <span class="colored">品相审核分级细则</span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                        class="Icon"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                      </router-link>
             
                </div>
              </div>
            </div>
          </div>

          <div class="scroll-resules" >
            <div class="resules-xianshi" @click="updateState('15')">
              <div class="title">如何卖书？</div>
              <svg
                v-if="!conditions.includes('15')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('15')" @click="updateState('15')">
              <div class="content">
                <div class="text">扫描书背面的 ISBN 码或手动输入书的 ISBN 号，扫码书籍达到收购数量后，提交卖书订单。</div>
              </div>
            </div>
          </div>

          <div class="scroll-resules" >
            <div class="resules-xianshi" @click="updateState('16')">
              <div class="title">不经过扫码和下单，可以直接寄书过来卖吗？</div>
              <svg
                v-if="!conditions.includes('16')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('16')" @click="updateState('16')">
              <div class="content">
                <div class="text">强烈建议你把想卖的书扫码下单后再寄出，如果你把没有扫码的书直接寄过来，多抓鱼不一定会收这本书，并且也不能保证可以取回，请尽量走扫码流程卖书给多抓鱼哦。</div>
              </div>
            </div>
          </div>

          <div class="scroll-resules">
            <div class="resules-xianshi" @click="updateState('17')">
              <div class="title">如何收到卖书的钱？</div>
              <svg
                v-if="!conditions.includes('17')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('17')" @click="updateState('17')">
              <div class="content">
                <div class="text">快递签收后，我们会在 1-3 天内完成书籍的审核与打款。审核后，除去未收到的书以及审核拒绝的书，其余书费将即刻到你的多抓鱼账户，可以随时提现到微信零钱包或用来购买多抓鱼的其他商品。春节、促销活动等审核紧张时期，审核时间可能会延长，具体延时会在下单前通知。</div>
              </div>
            </div>
          </div>

          <div class="scroll-resules" >
            <div class="resules-xianshi" @click="updateState('18')">
              <div class="title">卖书订单可否取消？</div>
              <svg
                v-if="!conditions.includes('18')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('18')" @click="updateState('18')">
              <div class="content">
                <div class="text">在顺丰或京东上门取货前，可以取消。已经在运送途中的卖书订单，不能取消。</div>
              </div>
            </div>
          </div>

          <div class="scroll-resules" >
            <div class="resules-xianshi" @click="updateState('19')">
              <div class="title">卖书的物流费用谁承担？</div>
              <svg
                v-if="!conditions.includes('19')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('19')" @click="updateState('19')">
              <div class="content">
                <div class="text">卖书运费全部由多抓鱼承担，多抓鱼会安排顺丰或京东上门取件，选择「到付」即可。</div>
              </div>
            </div>
          </div>

          <div class="scroll-resules" >
            <div class="resules-xianshi" @click="updateState('23')">
              <div class="title">审核后被拒绝的书如何处理？</div>
              <svg
                v-if="!conditions.includes('23')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('23')" @click="updateState('23')">
              <div class="content">
                <div class="text">审核被拒绝的书籍不会再上架销售。收到拒书通知后 72 小时内可在卖书订单中申请取回，首次拒书取回免费，之后需支付运费取回。异常订单或异常用户的拒书，不享受首次免费取回服务。不想取回或者 72 小时内未申请取回的，将统一处理。</div>
              </div>
            </div>
          </div>

          <div class="scroll-resules" >
            <div class="resules-xianshi" @click="updateState('20')">
              <div class="title">卖书的实际收入与预计收入有差别？</div>
              <svg
                v-if="!conditions.includes('20')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('20')" @click="updateState('20')">
              <div class="content">
                <div class="text">多抓鱼会在收到书之后进行人工审核，包括确定书的原价，品相是否满足要求，是否有多寄、少寄、错寄等情况，以上均可能影响实际收入。如对审核结果有疑问，可在卖书订单完成后的 15 日内联系客服处理。对被拒绝的书有疑问则需在 72 小时的取回时效内联系客服处理。</div>
              </div>
            </div>
          </div>

          <div class="scroll-resules" >
            <div class="resules-xianshi" @click="updateState('21')">
              <div class="title">收购杂志吗？</div>
              <svg
                v-if="!conditions.includes('21')"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px;"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(170, 170, 170)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon"
                width="24"
                height="24"
                style="flex-shrink: 0; margin-left: 5px; transform: rotate(180deg);"
                v-else
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div class="resules-yincang" v-if="conditions.includes('21')" @click="updateState('21')">
              <div class="content">
                <div class="text">目前开放 5 种杂志的收购：《三联生活周刊》（2003 年以后）、《新视线》（2009 年以后）、《新知》、《中国国家地理》、《博物》，同一种杂志的每一期使用统一收购价，收购价可在扫码后获得。对于不在收购范围内的杂志，多抓鱼不会打款，也暂时不支持取回，请确认寄出的杂志在收购范围内。</div>
              </div>
            </div>
          </div>


          <!-- 用户协议 -->
          <div class="user-resules">
            <router-link :to="{ path: '/agreement' }" >
              <span>
                <div class="user-body">
                  <p class="user-text">多抓鱼用户协议</p>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgb(170, 170, 170)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    class="Icon"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </span>
            </router-link>
          </div>

          <div class="user-resules">
            <router-link :to="{ path: '/License' }" >
              <span>
                <div class="user-body">
                  <p class="user-text">营业执照 · 经营许可</p>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgb(170, 170, 170)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    class="Icon"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </span>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      conditions: [],
      shows : true,
      typefaceState : false,
      heightS : 765,
    };
  },
  methods: {
    updateState(val) {
      if (this.conditions.includes(val)) {
        this.conditions = this.conditions.filter(c => c != val);
      } else {
        this.conditions.push(val);
      }
    },
    left(){
      this.shows = true;
      window.scrollTo(2,0)
    }, 
    right(){
      this.shows = false;
      window.scrollTo(0,765)
    },

  },
};
</script>
<style lang="scss" scoped>
  .head {
    display: flex;
    padding: 0;
    justify-content: initial;
    height: 50px;
    font-size: 16px;
    font-weight: 400;
    background: #fff;
    border-bottom: 0.5px solid rgb(242, 242, 242);
    .head-left {
      display: flex;
      flex-grow: 1;
      
      text-decoration: none;
      justify-content: center;
      align-items: center;
      .head-left-inner {
        color: rgb(24, 195, 170);
        position: relative;
        align-self: stretch;
        display: inline-flex;
        align-items: center;
      }
      .head-left-inner::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        height: 3px;
        background-color: rgb(24, 195, 170);
        border-radius: 99px;
      }
    }
    .head-right {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: inherit;
      text-decoration: none;
    }
    .head-right-inner {
      color: rgb(24, 195, 170);
      align-self: stretch;
      display: inline-flex;
      align-items: center;
      position: relative;
    }
    .head-right-inner::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      height: 3px;
      background-color: rgb(24, 195, 170);
      border-radius: 99px;
    }
  }
  .user-body {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-bottom: 0.5px solid rgb(230, 230, 230);
    .user-text {
      // color: rgb(102, 102, 102);
      font-weight: 400;
      -webkit-box-flex: 1;
      flex-grow: 1;
    }
  }
  .scroll-resules{
    border-bottom: 0.5px solid rgb(230, 230, 230);
    .resules-xianshi {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      padding: 22px 0px;
      .title {
        font-size: 16px;
        font-weight: 500;
      }
        svg {
        fill: none;
        stroke: rgb(170, 170, 170);
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        width: 24;
        height: 24;
      }
      user agent stylesheet svg:not(:root),
      symbol,
      image,
      marker,
      pattern,
      foreignObject {
        overflow: hidden;
      }
      user agent stylesheet html|* > svg {
        transform-origin: 50% 50% 0px;
      }
    }
    .resules-yincang{
        .content{
          padding-bottom: 14px;
          .text{
              color: rgb(102, 102, 102);
              font-size: 15px;
              line-height: 1.5;
              white-space: pre-line;
          }
        }
    }
  }
  .colored {
      color: rgb(24, 195, 170);
    }
  a {
    color: inherit;
    text-decoration: none;
    background: transparent;
    outline: none;
    .Icon {
      width: 1.4em;
      vertical-align: -0.3em;
      color: #18c3aa;
    }
  }
</style>
