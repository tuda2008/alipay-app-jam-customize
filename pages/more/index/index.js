//index.js
//more
const app = getApp()
Page({
    data: {},
    onLoad() {
      var self = this;
      my.setNavigationBar({
        title: '更多',
      });
    },
    gotoAbout:function(){
        my.navigateTo({
            url: '/pages/more/about/about',
        });
    },
    gotoMap:function(){
        my.navigateTo({
            url: '/pages/more/map/map',
        });
    },
    gotoFactory:function(){
        my.getLocation({//获取当前经纬度
            type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
            success: function (res) {
                my.openLocation({//​使用微信内置地图查看位置。
                    latitude: 22.7429290000,//要去的纬度-地址
                    longitude: 113.8610920000,//要去的经度-地址
                    name: "深圳市佳安美智能科技有限公司",
                    address:'深圳市宝安区松岗芙蓉路9号A区7楼（桃花源科技园松岗分园）'
                })
            }
        })
    },
    onShareAppMessage:function(){
        return{
            title: "佳安美定制",
            desc: "专业定制APP、公众号、小程序、H5网站、智能锁",
            path: "/pages/index/index"
        }
    },
    callPhone:function(){
        my.makePhoneCall({
            number: app.globalData.mobile,
            success:function(){
                console.log("拨打电话成功！")
            },
            fail:function(){
                console.log("拨打电话失败！")
            }
        })
    }
})