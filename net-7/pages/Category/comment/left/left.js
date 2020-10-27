// pages/Category/comment/left/left.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        shoplist: Array
    },

    /**
     * 组件的初始数据
     */
    data: {
        hig: 0,
        current: 1,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        tab(e) {
            // console.log(e.currentTarget.dataset.index);
            this.setData({
                current: e.currentTarget.dataset.index
            })
            let obj = {
                curr: e.currentTarget.dataset.id,
                img: e.currentTarget.dataset.img
            }
            this.triggerEvent("mydata", obj);
        }
    },
    attached() {
        const res = wx.getSystemInfoSync();
        console.log(res.screenHeight);
        this.setData({
            hig: res.screenHeight - 165
        })
    }
})