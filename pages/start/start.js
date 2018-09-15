//start.js
//welcome
var app = getApp();
Page({
  data: {
    remind: '加载中',
    angle: 0,
    userInfo: {}
  },
  gotoIndex:function(){
    my.switchTab({
      url: '/pages/home/index',
    });
  },
  onLoad(){
    var that = this;
    my.setNavigationBar({
      title: '佳安美定制',
    });
  },
  onReady(){
    var that = this;
    setTimeout(function(){
      that.setData({
        remind: ''
      });
    }, 1000);
    my.onAccelerometerChange(function(res) {
      var angle = -(res.x*30).toFixed(1);
      if(angle>14){ angle=14; }
      else if(angle<-14){ angle=-14; }
      if(that.data.angle !== angle){
        that.setData({
          angle: angle
        });
      }
    });
    setTimeout(function(){
      my.switchTab({
        url: '/pages/home/index',
      });
    }, 2000);
  }
});