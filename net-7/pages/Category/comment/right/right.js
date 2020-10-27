// pages/Category/comment/right/right.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        imgsrc: String,
        shoplist: Array
    },

    /**
     * 组件的初始数据
     */
    data: {
        hig: 0,
        y: 0,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        top() {
            console.log("到顶了");
            let str = 2;
            this.triggerEvent("right", str); //子传父通信的方法
            this.setData({
                y: 20
            })
        },
        botm() {
            console.log("到底了");
            let str = 1;
            this.triggerEvent("right", str); //子传父通信的方法
            this.setData({
                y: 11
            })
        },
        goshoplist(e) {
            let id = e.currentTarget.dataset.cid; //获取商品分类的id
            console.log(e.currentTarget.dataset.cid)
            wx.navigateTo({ //跳转商品页面的方法
                url: '../shoplist/shoplist?cid=' + id,
            })
        }
    },
    attached() {
        const res = wx.getSystemInfoSync();
        console.log(res.screenHeight);
        this.setData({
            hig: res.screenHeight - 178
        })
    }
})