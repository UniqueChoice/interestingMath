/**

 * @author King

 * @date 2021-11-08 13:44

 */
module.exports = {
    "playType": {
        "10-add": {
            "type": "10以内的加法",
            "number": 2,
            "operator": "+",
            "max":10,
            "checked": true
        },
        "10-subtract": {
            "type": "10以内的减法",
            "number": 2,
            "operator": "-",
            "max":10,
            "checked": false
        },
        "10-add-add": {
            "type": "10以内的连加",
            "number": 3,
            "operator": "+",
            "max":10,
            "checked": false
        },
        "10-subtract-subtract": {
            "type": "10以内的连减",
            "number": 3,
            "operator": "-",
            "max": 10,
            "checked": false
        },
        "10-add-subtract": {
            "type": "10以内的加减",
            "number": 3,
            "operator": "+-",
            "max": 10,
            "checked": false
        },
        "100-multiply": {
            "type": "9*9乘法表",
            "number": 2,
            "operator": "×",
            "max": 10,
            "checked": false
        },
        "100-divide": {
            "type": "乘法表内的除法",
            "number": 2,
            "operator": "÷",
            "max": 10,
            "checked": false
        }
    },
    "playCount": {
        "5": {
            "count": 5,
            "checked": false
        },
        "10": {
            "count": 10,
            "checked": true
        },
        "20": {
            "count": 20,
            "checked": false
        }
    }
}