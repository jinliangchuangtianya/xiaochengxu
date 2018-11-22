// pages/attend-item/attend-item.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onShareAppMessage: function (res) {
    let _self = this;
    wx.showShareMenu({
      withShareTicket: true
    })
    return {
      title: '转发时显示的标题',
      path: '/pages/woodfish/woodfish',
      complete: function (res) {
        console.log(res);
      }
    }
  },
})