//map.js
//map
const app = getApp()
Page({
    data: {
      latitude: 22.6628860000,
      longitude: 114.0018390000,
      name: '深圳市旺科达光学有限公司',
      address: '深圳市龙华区大浪街道大浪三合新一村高创德工业区7号A栋2楼',
      markers: [{
        iconPath: "../../../images/home/location.png",
        id: 0,
        latitude: 22.6628860000,
        longitude: 114.0018390000,
        width: 48,
        height: 48
      }],
    },
    gotoFactory:function(){
        var self = this;
        my.getLocation({//获取当前经纬度
            type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
            success: function (res) {
                wx.openLocation({
                    latitude: self.data.latitude,
                    longitude: self.data.longitude,
                    name: self.data.name,
                    address: self.data.address
                })
            }
        })
    },
    onLoad(){
      var self = this;
  	  my.openLocation({
        latitude: self.data.latitude,
        longitude: self.data.longitude,
        name: self.data.name,
        address: self.data.address
      })
    }
})