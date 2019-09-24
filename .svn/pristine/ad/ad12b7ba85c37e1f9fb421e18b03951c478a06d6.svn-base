<template>
  <div class="Map">
    <div class="info">
      <h4 id="status"></h4>
      <hr />
      <p id="result"></p>
      <hr />
      <p id="info"></p>
    </div>

    <div class="input-card" style="width:28rem;">
      <label style="color:grey">逆地理编码，根据经纬度获取地址信息</label>
      <div class="input-item">
        <div class="input-item-prepend">
          <span class="input-item-text">地址</span>
        </div>
        <input id="address" type="text" disabled />
      </div>
    </div>
  </div>
</template>
 
<script type="text/javascript">
var map = new AMap.Map("container", {
  resizeEnable: true
});
AMap.plugin("AMap.Geolocation", function() {
  var geolocation = new AMap.Geolocation({
    enableHighAccuracy: true, //是否使用高精度定位，默认:true
    timeout: 10000, //超过10秒后停止定位，默认：5s
    buttonPosition: "RB", //定位按钮的停靠位置
    buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
    zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
  });
  map.addControl(geolocation);
  geolocation.getCurrentPosition(function(status, result) {
    if (status == "complete") {
      onComplete(result);
    } else {
      onError(result);
    }
  });
});
//解析定位结果
function onComplete(data) {
  document.getElementById("status").innerHTML = "定位成功";
  var str = [];
  str.push("定位结果：" + data.position);
  str.push("定位类别：" + data.location_type);
  if (data.accuracy) {
    str.push("精度：" + data.accuracy + " 米");
  } //如为IP精确定位结果则没有精度信息
  str.push("是否经过偏移：" + (data.isConverted ? "是" : "否"));
  document.getElementById("result").innerHTML = str.join("<br>");
  regeoCode(data);
}
//解析定位错误信息
function onError(data) {
  document.getElementById("status").innerHTML = "定位失败";
  document.getElementById("result").innerHTML =
    "失败原因排查信息:" + data.message;
}
function regeoCode(data) {
  AMap.plugin("AMap.Geocoder", function() {
    var geocoder = new AMap.Geocoder({
      city: "010", //城市设为北京，默认：“全国”
      radius: 1000 //范围，默认：500
    });
    var lnglat = [data.position.lng, data.position.lat];
    geocoder.getAddress(lnglat, function(status, result) {
      if (status === "complete" && result.regeocode) {
        var address = result.regeocode.formattedAddress;
        document.getElementById("address").value = address;
      } else {
        console.info(result)
        log.error("根据经纬度查询地址失败");
      }
    });
  });
}
export default {
  name: "app"
};
</script>
 
<style scoped>
.map {
  width: 400px;
  height: 400px;
  position: absolute;
  z-index: 100;
}
.amap-wrapper {
  width: 500px;
  height: 500px;
}
</style>