//show.js
//customize
var Wxmlify = require('../../../wxmlify/wxmlify.js');
var app = getApp();
Page({
    data: {
        customize: {
        'images': [
          { 'url': '/images/home/carousel/p1.png' },
          { 'url': '/images/home/carousel/p2.png' },
          { 'url': '/images/home/carousel/p3.png' }
        ], 'id': 1, 'title': '定制a', 'intro': '定制描述a', 'description': ''
        },
        customize_description: '',
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 2000,
        item_interval: 5000,
        item_duration: 0,
        customize_products: [
        {'image': '', 'id': 1, 'title': '定制a', 'intro': '定制描述a'},
        {'image': '', 'id': 2, 'title': '定制b', 'intro': '定制描述b'}
        ]
    },
    onLoad:function(options){
        var self = this;
        my.showToast({
          content: '玩命加载中...'
        });
        /**
         * 发起请求获取customize信息
         */
        my.httpRequest({
          url: 'https://www.jiaanmei.com/customizes/' + options.id + '.json',
          success(res){
            console.log('xxx App Show');
            self.setData({
              customize_products: res.data.customize_products,
              customize: res.data.customize,
              customize_description: res.data.customize.description
            });
            my.hideToast();
          }
        });
        var wxmlify = '';
        setTimeout(function() {
          var wxmlify = new Wxmlify(self.data.customize_description, self, {
            preserveStyles: ['fontSize', 'fontWeight', 'fontStyle', 'color', 'textDecoration', 'textAlign', 'backgroundColor', 'background'],
            dataKey: 'description',
            disableImagePreivew: false,
            onImageTap: function(e) {
              //console.log(e)
            }
          });
        }, 1000);
    },
    goToCustomize:function(){
	    my.switchTab({
	      url: '/pages/customize/index/index',
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