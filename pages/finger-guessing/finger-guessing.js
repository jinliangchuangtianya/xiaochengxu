// pages/finger-guessing/finger-guessing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:100,
    nickName:"大王叫我来巡汕",
    avatarUrl:'/img/finger-guessing/banner_finger_zq.png',
    list:[
      {
        title:'无人应战',
        avatarUrl:'/img/finger-guessing/banner_finger_zq.png',
        mes:"敲木鱼200下",
        time:'11:02',
        style:'',
        x: 0
      },
      {
        title: '呵呵',
        avatarUrl: '/img/finger-guessing/banner_finger_zq.png',
        mes: "敲木鱼200下",
        time: '11:02',
        style: '',
        x: 0
      },
      {
        title: '来呀',
        avatarUrl: '/img/finger-guessing/banner_finger_zq.png',
        mes: "敲木鱼200下",
        time: '11:02',
        style: '',
        x: 0
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.startX = 0;
    this.isRun = false;
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  touchstart(e){
    if (e.touches.length == 1 && !this.isRun){
      this.startX = e.touches[0].pageX;
      this.index = e.currentTarget.dataset.index;

      let list = this.data.list;
      list[this.index].style = "";
    }
  },
  touchmove(e){
    if (e.touches.length == 1 && !this.isRun) {
      let style = "";
      let moveX = e.touches[0].pageX;
      let disX = this.data.list[this.index].x + (this.startX - moveX);
      if (disX <= 0){
        disX = 0
      }
      if (disX >= 115){
        disX = 115;
      }
      let list = this.data.list;
      list[this.index].x = disX;
      list[this.index].style = "left:-" + list[this.index].x + "rpx";
      this.setData({
        list: list
      })
    }
  },
  touchend(e){
    if (this.isRun) return;
    this.isRun = true;
    setTimeout(()=>{
      this.isRun = false;
    },100)
    let list = this.data.list;
    let x = list[this.index].x;
    if (x >= 115/2){
      list[this.index].style = "transition: .1s; left:-115rpx;";
      list[this.index].x = 115;
    }
    else{
      list[this.index].style = "transition: .1s; left: 0rpx;";
      list[this.index].x = 0;
    }
    this.setData({
      list: list
    })
  },
  dele(e){
    let index = e.currentTarget.dataset.index;
    let list = this.data.list;
    list.splice(index, 1);
    this.setData({
      list: list
    })
  },
  gotoPlay(){
    console.log(1111111)
    wx.navigateTo({
      url: "/pages/finger-guessing/play/play",
    })
  }
})