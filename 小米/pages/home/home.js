// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        none: true,
        height: "0",
        bg: 0,
        flag: true

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        if (wx.getStorageSync('tip')) { // //获取tip的本地存储的tip
            this.setData({
                none: false
            })
        }
        wx.getSystemInfo({
            success: (result) => {
                this.setData({
                    height: result.windowHeight
                })
            },
        });
    },
    close() {
        wx.setStorageSync('tip', false) //设置一个本地存储
        this.setData({
            none: false
        })
    },
    bindscroll(e) {
        console.log(e.detail.scrollTop)
        this.setData({
            bg: e.detail.scrollTop
        })
    },
    gobtn() {
        console.log("到底了！");
    },
    selall() {
        console.log(111);
        setTimeout(() => {
            this.setData({
                flag: false
            })
        }, 2000)
    },
    fuwei() {
        console.log("复位了");
        // wx.showToast({
        //     title: '页面刷新完成',
        //     icon: "success",
        //     image: '',
        //     duration: 1500,
        //     mask: false,
        //     success: (result) => {},
        //     fail: () => {},
        //     complete: () => {}
        // });
        wx.showModal({ //弹出模态框的
            title: '页面是否刷新了',
            content: '',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#000000',
            confirmText: '确定',
            confirmColor: '#3CC51F',
            success: (result) => {
                if (result.confirm) {
                    console.log("用户点击了确认！")
                } else {
                    console.log("用户点击了取消")
                }
            },

        });
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
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})