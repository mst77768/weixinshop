// pages/Category/Category.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [],
        imgsrc: "https://x.dscmall.cn/storage/data/touch_catads/15630384831872.jpg",
        shoplist: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let that = this
        wx.request({
            url: 'https://x.dscmall.cn/api/catalog/list',
            method: 'GET',
            success: (result) => {
                that.setData({
                    list: result.data.data
                })
                console.log(result.data.data)
            },
            fail: () => {},
            complete: () => {}
        });
        wx.request({
            url: `https://x.dscmall.cn/api/catalog/list/858`,
            success: (result) => {
                that.setData({
                    shoplist: result.data.data
                })
            }
        })
    },
    fn(data) { //监听孩子组件发来的数据
        console.log(data.detail);
        this.setData({
            imgsrc: data.detail.img
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