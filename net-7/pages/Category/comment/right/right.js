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
        hig: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    attached() {
        const res = wx.getSystemInfoSync();
        console.log(res.screenHeight);
        this.setData({
            hig: res.screenHeight - 178
        })
    }
})