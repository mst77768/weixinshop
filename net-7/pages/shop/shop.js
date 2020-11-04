// pages/shop/shop.js
let { request } = require("../../utils/request")
let app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgs: [],
        shoplist: [],
        bg: 0,
        flag: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let that = this
            // console.log(options.goods_id)
        let url = app.globalData.url
        request(url + "goods/show", {
            goods_id: options.goods_id
        }, "post").then(rout => {
            console.log(rout.data)
            that.setData({
                imgs: rout.data.gallery_list,
                shoplist: rout.data
            })

            // gallery_list
        })
    },
    tab(e) {

        this.setData({
            flag: e.currentTarget.dataset.t
        })
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
    onPageScroll: function(e) {
        console.log(e.scrollTop)
        if (e.scrollTop > 20) {
            this.setData({
                bg: 1
            })
        } else {
            this.setData({
                bg: 0
            })
        }

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function(e) {
        console.log(e)
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