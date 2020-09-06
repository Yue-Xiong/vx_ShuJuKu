//获取数据库信息，数据库1和2的内容来自于同一个集合
const DB = wx.cloud.database().collection("ccwl")      //数据库1
const DB_2 = wx.cloud.database().collection("ccwl")    //数据库2
const DB_3 = wx.cloud.database().collection("ccwl")    //数据库3
Page({

//添加数据库数据请到“云开发”

//查询数据库1，用户使用
  getData() {
    DB.get({
      success: res => {
        console.log("查询成功",res.data)
        this.setData({
          ne: res.data
        })
      },
      fail(res) {
        console.log("查询失败", res)
      }
    })
  },

//拉起数据库1的数据
  del() {
    this.setData({
      ne: []
    })
  },

//查询数据库2，用户使用
  getData_2() {
    DB_2.get({
      success: res_2 => {
        console.log("查询成功", res_2.data)
        this.setData({
          ne_2: res_2.data
        })
      },
      fail(res_2) {
        console.log("查询失败", res_2)
      }
    })
  },

//拉起数据库2的数据
  del_2() {
    this.setData({
      ne_2: []
    })
  },

//查询数据库3，用户使用
  getData_3() {
    DB_3.get({
      success: res_3 => {
        console.log("查询成功", res_3.data)
        this.setData({
          ne_3: res_3.data
        })
      },
      fail(res_3) {
        console.log("查询失败", res_3)
      }
    })
  },

//拉起数据库3的数据
  del_3() {
    this.setData({
      ne_3: []
    })
  }
})
