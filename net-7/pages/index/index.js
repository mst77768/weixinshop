Page({

    /**
     * 页面的初始数据
     */
    data: {
        current: 0, //默认打开第一页
        datallist: [],
        hight: 2200,
        color: "#E43124",
        num: 1,
        tabbtn: ["首页", "家用电器", "男装女装", "鞋靴箱包", "手机数码", "电脑办公", "家具家纺", "个人化妆"],
        tabbtn1: ["家用电器", "男装女装", "鞋靴箱包", "手机数码", "电脑办公", "家具家纺", "个人化妆"],
        imglist: ["https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978394783.jpg", "https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978396430.jpg", "https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978395241.jpg", "https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978395260.jpg", "https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978397105.jpg"],
        scrollleft: 0,
        toplist: [], //数据放这里
        pinpailist: [], //品牌展示的数据在这里
        flag: false,
        app: [0, 858, 6, 8, 3, 4, 5, 860],
        shoplist: [], //放商品的数组
    },
    //     btn(e){//绑定一个单击获取之定义属性的值
    // console.log(e.currentTarget.dataset.id)
    // let cid=e.currentTarget.dataset.id
    //  wx.navigateTo({//跳转页面的方法
    //     url: '../shoplist/shoplist?cid='+cid,
    //   })

    // },
    change(e) { //swip的事件逻辑改变背景颜色
        var color = ["#E43124", "#E43124", "#3C81FF", "#028379", "#4091FF"];

        wx.setNavigationBarColor({ //这个api是改变app的头部状态来的背景颜色
            frontColor: '#ffffff',
            backgroundColor: color[e.detail.current],
            animation: {
                duration: 300,
                timingFunc: 'easeIn'
            }
        })
        this.setData({
            color: color[e.detail.current],
        })
    },
    swiperchane(e) { //首页轮播图的索引更新改变触发的事件
        let that = this;
        this.setData({
            toplist: [],
            pinpailist: [],
            shoplist: [], //放商品的数组
            num: 1,
            flag: true
        })
        wx.pageScrollTo({
            scrollTop: 0
        })
        let index = e.detail.current; //获取轮播图的当前索引
        console.log(index)
        this.setData({
            "current": index
        });
        let id = this.data.app[index]
        wx.showLoading({ //当数据没请求过来显示这句话
            title: "数据拼命加载中。。。",
            mask: true
        });


        wx.request({ //ajax请求回来的数据
                url: `https://x.dscmall.cn/api/visual/visual_second_category?cat_id=${id}`,
                success(data) {
                    console.log(data.data.data)
                    wx.hideLoading();
                    that.setData({
                        toplist: data.data.data.category,
                        pinpailist: data.data.data.brand,
                    }, () => {
                        var query = wx.createSelectorQuery();
                        query.select(".shopmain").boundingClientRect(function(res) {
                            console.log(res)
                            that.setData({
                                hight: res.height
                            })
                        }).exec()
                    })
                }
            }),
            wx.request({
                url: "https://x.dscmall.cn/api/catalog/goodslist",
                method: "post",
                data: {
                    cat_id: id
                },
                success(res) {
                    console.log(res.data.data);
                    that.setData({
                        shoplist: res.data.data
                    }, () => {
                        var query = wx.createSelectorQuery();
                        query.select(".shopmain").boundingClientRect(function(res) {
                            console.log(res)
                            that.setData({
                                hight: res.height
                            })
                        }).exec()
                    })
                }

            });

        if (index >= 2) { //判断如果到了第三个就让tab栏跟着移动
            this.setData({
                "scrollleft": (index - 2) * 112,
            })
        }
    },
    clik(e) { //头部导航的单击事件
        wx.pageScrollTo({
            scrollTop: 0
        })
        this.setData({ //把点击的索引给赋值修改
            current: e.target.dataset.index,
            toplist: [], //数据放这里
            pinpailist: [], //品牌展示的数据在这里
            shoplist: [], //放商品的数组
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    // onReachBottom: function() {

    // },
    onReachBottom: function() {
        let id = this.data.app[this.data.current];
        let that = this;
        wx.showLoading({ //当数据没请求过来显示这句话
            title: "数据拼命加载中。。。",
            mask: true
        });
        let time = setTimeout(() => {
            wx.hideLoading();
            wx.showToast({
                title: "数据跑丢了！"
            })
        }, 4000)
        if (this.data.flag) {
            this.setData({
                flag: false,
                num: ++this.data.num
            });
            wx.request({
                url: "https://x.dscmall.cn/api/catalog/goodslist",
                method: "post",
                data: {
                    cat_id: id,
                    page: that.data.num
                },
                success(res) {
                    console.log(res.data.data);
                    clearTimeout(time);
                    that.setData({
                        shoplist: that.data.shoplist.concat(res.data.data)
                    }, () => {
                        var query = wx.createSelectorQuery();
                        query.select(".shopmain").boundingClientRect(function(res) {
                            console.log(res)
                            that.setData({
                                hight: res.height,
                                flag: true
                            })
                        }).exec()
                    })
                    wx.hideLoading(); //关闭弹窗！
                    if (res.data.data.length == 0) {
                        wx.showToast({
                            title: '已经到底了！',
                            duration: 2000
                        })
                    }
                }
            })
        }
    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})