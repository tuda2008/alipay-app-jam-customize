//index.js
//customize
var app = getApp();
Page({
    data: {
        carousels: [
          { 'url': '/images/home/carousel/p2.png' },
          { 'url': '/images/home/carousel/p1.png' },
          { 'url': '/images/home/carousel/p3.png' }
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 2000,
        item_interval: 5000,
        item_duration: 0,
        customize: [
        {'image': '', 'id': 1, 'title': '定制a', 'intro': '定制描述a'},
        {'image': '', 'id': 2, 'title': '定制b', 'intro': '定制描述b'},
        {'image': '', 'id': 3, 'title': '定制c', 'intro': '定制描述c'},
        {'image': '', 'id': 4, 'title': '定制d', 'intro': '定制描述d'}
        ]
    },
    onLoad(){
        var self = this;
        my.setNavigationBar({
          title: '定制中心',
        });
        my.showToast({
          content: '玩命加载中...'
        });
        /**
         * 发起请求获取customizes信息
         */
        my.httpRequest({
          url: 'https://www.jiaanmei.com/customizes.json',
          success(res){
            console.log(res.data);
            if (res.data.carousels.size > 0) {
              self.setData({
                carousels: res.data.carousels,
                customize: res.data.customize
              })
            } else {
              self.setData({
                customize: res.data.customize
              })
            }
            my.hideToast();
          }
        })
    },
  	goToCustomize:function(){
  	    my.switchTab({
  	      url: '/pages/customize/show/index',
  	    });
  	},
    goToCustomizeProduct:function(e){
        my.navigateTo({
          url: '/pages/customize/show/show?id=' + e.currentTarget.dataset.id,
        });
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