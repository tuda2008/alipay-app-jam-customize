//start.js
//home
var app = getApp();
Page({
    data: {
        carousels: [
          { 'url': '/images/home/carousel/p1.png' },
          { 'url': '/images/home/carousel/p2.png' },
          { 'url': '/images/home/carousel/p3.png' }
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 2000,
        customize: [
        {'image': '', 'id': 1, 'title': '定制a', 'intro': '定制描述a'},
        {'image': '', 'id': 2, 'title': '定制b', 'intro': '定制描述b'},
        {'image': '', 'id': 3, 'title': '定制c', 'intro': '定制描述c'},
        {'image': '', 'id': 4, 'title': '定制d', 'intro': '定制描述d'}
        ],
        partners: [
        {'id': 1, 'title': '深圳市旺科达光学有限公司', 'web_url': ''}
        ],
        item_interval: 5000,
        item_duration: 0
    },
    onLoad(){
        var self = this;
        my.setNavigationBar({
          title: '佳安美定制',
        });
        my.showToast({
          content: '玩命加载中...'
        });
        /**
         * 发起请求获取home信息
         */
        my.httpRequest({
          url: 'https://www.jiaanmei.com/home.json',
          success(res){
            //console.log(res);
            if (res.data.carousels.size > 0) {
              self.setData({
                carousels: res.data.carousels,
                customize: res.data.customize,
                partners: res.data.partners
              })
            } else {
              self.setData({
                customize: res.data.customize,
                partners: res.data.partners
              })
            }
            my.hideToast();
          }
        })
    },
	  goToCustomize:function(){
	    my.switchTab({
	      url: '/pages/customize/index/index',
	    });
	  },
    goToCustomizeProduct:function(e){
        console.log(e.currentTarget.dataset.id);
        my.navigateTo({
          url: '/pages/customize/show/show?id=' + e.currentTarget.dataset.id,
        });
    },
	  goToPartners:function(){
	    my.navigateTo({
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