// index.js
// 获取应用实例
const app = getApp()
const selectListMap = require('../../utils/select-list')

Page({
    data: {
        curNumber: 0,
        curOperator: "",
        curMax: 10,
        curCount: 10,
        playTypeList: [],
        playCountList: []
    },
    // 事件处理函数
    onLoad: function () {
        const playTypeListTemp = []
        const playCountListTemp = []
        let curNumberTemp = 0
        let curOperatorTemp = ''
        let curMaxTemp = 10
        let curCountTemp = 0
        for (let listTypeKey of Object.keys(selectListMap)) {
            switch (listTypeKey) {
                case "playType":
                    let playTypeListMap = selectListMap[listTypeKey]
                    for (let playTypeKey of Object.keys(playTypeListMap)) {
                        if(playTypeListMap[playTypeKey].checked){
                            curNumberTemp = playTypeListMap[playTypeKey].number
                            curOperatorTemp = playTypeListMap[playTypeKey].operator
                            curMaxTemp = playTypeListMap[playTypeKey].max
                        }
                        playTypeListTemp.push({
                            key: playTypeKey,
                            ...playTypeListMap[playTypeKey]
                        })
                    }
                    break
                case "playCount":
                    let playCountListMap = selectListMap[listTypeKey]
                    for (let playCountKey of Object.keys(playCountListMap)) {
                        if(playCountListMap[playCountKey].checked){
                            curCountTemp = playCountListMap[playCountKey].count
                        }
                        playCountListTemp.push({
                            key: playCountKey,
                            ...playCountListMap[playCountKey]
                        })
                    }
                    break
            }

        }
        this.setData({
            playTypeList: playTypeListTemp,
            playCountList: playCountListTemp,
            curNumber: curNumberTemp,
            curOperator: curOperatorTemp,
            curMax: curMaxTemp,
            curCount: curCountTemp
        })
    },

    onRadioTapPlayType: function (event) {
        this.setData({
            curNumber: event.currentTarget.dataset["number"],
            curOperator: event.currentTarget.dataset["operator"],
            curMax: event.currentTarget.dataset["max"]
        })
    },

    onRadioTapPlayCount: function (event) {
        this.setData({
            curCount: event.currentTarget.dataset["count"]
        })
    },

    onCommitSelected: function (event) {
        wx.navigateTo({
            url: '/pages/play-game/play-game?curNumber=' + this.data.curNumber + '&curOperator=' + this.data.curOperator + '&curMax=' + this.data.curMax + '&curCount=' + this.data.curCount
        })
    }
})