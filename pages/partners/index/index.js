//index.js
//partners
var app = getApp();
Page({
    data: {
        carousels: [
        {'url': '/images/partner/carousel/p1.png'}, 
        {'url': '/images/partner/carousel/p2.png'}
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 2000,
        partners: [
        {'id': 1, 'title': '明德电子', 'web_url': ''},
        {'id': 2, 'title': '高明光学', 'web_url': ''},
        {'id': 3, 'title': '兴标龙表业', 'web_url': ''}
        ],
    },
    onLoad(){
        var self = this;
        my.setNavigationBar({
          title: '合作伙伴',
        });
        my.showToast({
          content: '玩命加载中...'
        });
        /**
         * 发起请求获取partners信息
         */
        my.httpRequest({
          url: 'https://www.jiaanmei.com/partners.json',
          success(res){
            if (res.data.carousels.size > 0) {
              self.setData({
                carousels: res.data.carousels,
                partners: res.data.partners
              })
            } else {
              self.setData({
                partners: res.data.partners
              })
            }
            my.hideToast();
          }
        })
    },
	  goToPartners:function(){
	    my.switchTab({
	      url: '/pages/partners/index/index',
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