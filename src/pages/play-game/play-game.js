// pages/play-game/play-game.js

const selectListMap = require('../../utils/select-list')
let result = 0
let answer = 0
Page({

    /**
     * 页面的初始数据
     */
    data: {
        curNumber: 2,
        curOperator: '',
        curMax: 10,
        curCount: 0,
        curIndex: 0,
        computeItemList: [],
        curComputeItem: []
    },

    /**
     * 用户修改计算结果
     * @param event
     */
    onResultChange: function (event) {
        result = parseInt(event.detail.value)
    },
    /**
     * 用户提交
     * @param event
     */

    onClickCommit: function (event) {
        answer = this.data.curComputeItem[this.data.curComputeItem.length - 1].result
        if (result === answer) {
            wx.showModal({
                title: "提交",
                content: "计算正确！"
            })
        } else {
            wx.showModal({
                title: "提交",
                content: "计算错误！"
            })
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let curNumberTemp = options.curNumber
        let curOperatorTemp = options.curOperator
        let curCountTemp = options.curCount
        let curMaxTemp = options.curMax
        let curComputeItemTemp = []
        // 根据传入页面点前参数，生成{{curCount}}组{{curNumber}}个数的{{curOperator}}运算,且最大值不超过{{max}}实例数组
        this.createOperateNumArr(curCountTemp, curNumberTemp, curMaxTemp, curOperatorTemp)
        curComputeItemTemp.push(...(this.data.computeItemList[0].computeList))
        this.setData({
            curNumber: curNumberTemp,
            curOperator: curOperatorTemp,
            curMax: curMaxTemp,
            curCount: curCountTemp,
            curIndex: 0,
            curComputeItem: curComputeItemTemp
        })
    },

    /**
     * 生成生成{{curCount}}组{{curNumber}}个数的{{curOperator}}运算,且最大值不超过{{max}}实例数组
     */
    createOperateNumArr: function (count, number, max, operator) {
        const computeItemListTemp = []
        let temp = 0
        let numsTemp = []
        let resultTemp = 0
        let maxTemp = 0
        for (let i = 0; i < count; i++) {
            numsTemp[0] = Math.floor(Math.random() * (max - 1) + 1)
            numsTemp[1] = Math.floor(Math.random() * (max - 1) + 1)
            switch (operator) {
                case "+":
                case "-":
                    resultTemp = numsTemp[0] + numsTemp[1]
                    break
                case "×":
                case "÷":
                    resultTemp = numsTemp[0] * numsTemp[1]
                    break
                default:
                    resultTemp = numsTemp[0] + numsTemp[1]
            }
            maxTemp = Math.max(numsTemp[0], numsTemp[1], resultTemp)
            if (operator === "-" || operator === '÷') {
                temp = numsTemp[0]
                numsTemp[0] = resultTemp
                resultTemp = temp
            }
            computeItemListTemp.push({
                key: i,
                computeList: [
                    {
                        "part": numsTemp[0],
                        "display": 4
                    },
                    {
                        "part": operator,
                        "display": 3
                    },
                    {
                        "part": numsTemp[1],
                        "display": 2
                    },
                    {
                        "part": "=",
                        "display": 1
                    },
                    {
                        "result": resultTemp,
                        "display": 0
                    }
                ]
            })
        }
        this.setData({
            computeItemList: computeItemListTemp
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})