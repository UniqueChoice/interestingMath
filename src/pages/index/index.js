// index.js
// 获取应用实例
const app = getApp()
const selectListMap = require('../../utils/select-list')

Page({
    data: {
        currentPlayType: 0,
        currentPlayNum: 10,
        playTypeList: [],
        playNumList: []
    },
    // 事件处理函数
    onLoad: function () {
        const playTypeListTemp = []
        const playNumListTemp = []
        for (let listTypeKey of Object.keys(selectListMap)) {
            switch (listTypeKey) {
                case "playType":
                    let playTypeListMap = selectListMap[listTypeKey]
                    for (let playTypeKey of Object.keys(playTypeListMap)) {
                        playTypeListTemp.push({
                            key: playTypeKey,
                            ...playTypeListMap[playTypeKey]
                        })
                    }
                    break
                case "playNum":
                    let playNumListMap = selectListMap[listTypeKey]
                    for (let playNumKey of Object.keys(playNumListMap)) {
                        playNumListTemp.push({
                            key: playNumKey,
                            ...playNumListMap[playNumKey]
                        })
                    }
                    break
            }

        }
        this.setData({
            playTypeList: playTypeListTemp,
            playNumList: playNumListTemp
        })
    },

    onRadioChangePlayType: function (event) {
        this.setData({
            currentPlayType: event.detail.value
        })
    },

    onRadioChangePlayNum: function (event) {
        this.setData({
            currentPlayNum: event.detail.value
        })
    },

    onCommitSelected: function (event) {
        wx.navigateTo({
            url: '/pages/play-game/play-game?curPlayType=' + this.data.currentPlayType + '&curPlayNum' + this.data.currentPlayNum
        })
    }
})