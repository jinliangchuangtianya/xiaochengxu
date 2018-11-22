// pages/war-team/war-team.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemName:'米粉战队',
    currentClickNum:598,
    totalClickNum:1052,
    rank : 5,
    isDisabled:false,   //是否可以修改战队名称
    userList: [           //成员信息
        {
          nickName:'哈哈',
          avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
          total: 59
        },
        {
          nickName: '哈哈',
          avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
          total: 59
        },
        {
          nickName: '哈哈',
          avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
          total: 59
        }, {
          nickName: '哈哈',
          avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
          total: 59
        },
        {
          nickName: '哈哈',
          avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
          total: 59
        },
        {
          nickName: '哈哈',
          avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
          total: 59
        }
    ]        
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.isGetMore = true;
  },
  /**
   * 用户点击右上角分享
   */
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
  onblur(e){
    console.log(e.detail.value)
  },
  isChange(){  //是否有修改的权限
    if (this.data.isDisabled){
      wx.showModal({
        showCancel:false,
        content: '您无权修改群名称',
        success(res) {
          if (res.confirm) {
            // console.log('用户点击确定')
          }
        }
      })
    }
  },
  lower(){   //加载更多
    if (this.isGetMore){
      this.isGetMore = false;
      wx.showLoading({
        title: '加载中',
        mask: true
      })

      setTimeout(() => {
        let arr = [
          {
            nickName: '呵呵',
            avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
            total: '560',
          },
          {
            nickName: '呵呵',
            avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
            total: '560',
          },
          {
            nickName: '呵呵',
            avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
            total: '560',
          },
          {
            nickName: '呵呵',
            avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
            total: '560',
          },
          {
            nickName: '呵呵',
            avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
            total: '560',
          },
          {
            nickName: '呵呵',
            avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
            total: '560',
          },
          {
            nickName: '呵呵',
            avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
            total: '560',
          },
          {
            nickName: '呵呵',
            avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
            total: '560',
          }
        ];
        let newArr = this.data.userList.concat(arr);
        this.setData({
          userList: newArr
        })
        this.isGetMore = true;
        wx.hideLoading();
      }, 2000)
    }
  },
  changeItem(){
    wx.navigateTo({
      url: '/pages/attend-item/attend-item'
    })
  }
})