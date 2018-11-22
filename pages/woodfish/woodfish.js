// pages/woodfish/woodfish.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score : 0,
    isloading : false,
    teamTitle:'呵呵',
    teamMember: 200,
    messageTotal : 100,
    toggle: 'mesHide',
    mesToggle : 'showMes',  //切换留言是否显示的类名
    showMesList:[],
    mesList : [
      {
        nickName: '不知道',
        avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
        mes: '弧度撒谎对撒还不愤怒ID是不浮动收',
        time: '2天前'
      },
      {
        nickName: '不知道',
        avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
        mes: '弧度撒谎对撒还不愤怒ID是不浮动收',
        time: '2天前'
      },
      {
        nickName: '不知道',
        avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
        mes: '弧度撒谎对撒还不愤怒ID是不浮动收',
        time: '2天前'
      },
      {
        nickName: '不知道',
        avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
        mes: '弧度撒谎对撒还不愤怒ID是不浮动收',
        time: '2天前'
      },
      {
        nickName: '不知道',
        avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
        mes: '弧度撒谎对撒还不愤怒ID是不浮动收',
        time: '2天前'
      },
      {
        nickName: '不知道',
        avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
        mes: '弧度撒谎对撒还不愤怒ID是不浮动收',
        time: '2天前'
      },
      {
        nickName: '不知道',
        avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
        mes: '弧度撒谎对撒还不愤怒ID是不浮动收',
        time: '2天前'
      },
      {
        nickName: '不知道',
        avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
        mes: '弧度撒谎对撒还不愤怒ID是不浮动收',
        time: '2天前'
      },
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.isGetMoremesList = true;  //是否可以加载更多留言信息
    this.timer = null;
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      isloading : true
    })
    wx.showLoading({
      title: '加载中',
    })
    this.setData({
      myaudioSrc: app.globalData.musicUrl
    })
    this.animation = wx.createAnimation({
      duration: 150
    })
    this.animation2 = wx.createAnimation({
      duration: 150,
      timingFunction: 'ease-in'
    })
    this.animationEnd = wx.createAnimation({
      duration: 0,
    })
    this.myaudio = wx.createInnerAudioContext();
    this.myaudio.src = this.data.myaudioSrc;
    let _self = this;
    this.myaudio.onCanplay(function(){
      wx.hideLoading();
      _self.setData({
        isloading: false
      })
    })
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
      complete:function(res){
        console.log(res);
      }
    }
  },
  addScore(){
    if(this.data.isloading) return;
    let score = this.data.score + 1
    this.setData({
      score: score
    })
    this.runAnimation();
    this.prevTapTime = this.nowTapTime;
    this.myaudio.play();
    clearTimeout(this.timer);
    this.timer = setTimeout(()=>{
      this.myaudio.stop();
    },500)
  },
  runAnimation(){
    this.animation.translate(0, -280).scale(0.2, 0.2).opacity(0).step()
    this.setData({ animation: this.animation.export() })
    setTimeout(function () {
      this.animationEnd.translate(0, 0).scale(1, 1).opacity(1).step()
      this.setData({ animation: this.animationEnd.export() })
    }.bind(this), 150)
  },
  changeMusic(){
    this.myaudio.stop();
    wx.navigateTo({
      url: '/pages/musicList/musicList'
    })
  },
  gotoPage(e){
    let page = e.currentTarget.dataset.page;
    if (page == 'index'){
      wx.reLaunch({
        url: '/pages/' + page + '/' + page
      })
    }
    else{
      wx.navigateTo({
        url: '/pages/' + page + '/' + page
      })
    }
  },
  forward(){
    this.onShareAppMessage();
  },
  showMes(){
    this.setData({ toggle: 'mesShow' })
    this.animation2.translateY(0).step()
    this.setData({ animation2: this.animation2.export() })
    
  },
  closeMessBoard(){
    this.animation2.translateY('100%').step()
    this.setData({ animation2: this.animation2.export() })
    setTimeout(function () {
      this.setData({ toggle: 'mesHide' })
    }.bind(this), 150)
  },
  /**
   * 加载更多留言数据
   */
  getMoremesList(){  
    if (this.isGetMoremesList){
      wx.showLoading({
        title: '加载中',
        mask:true
      })
      this.isGetMoremesList = false;
      setTimeout(()=>{
        let arr = [
          {
            nickName: '呵呵',
            avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
            mes: '弧度撒谎对撒还不愤怒ID是不浮动收',
            time: '2天前'
          },
          {
            nickName: '哈哈',
            avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
            mes: '弧度撒谎对撒还不愤怒ID是不浮动收',
            time: '2天前'
          },
          {
            nickName: '111',
            avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
            mes: '弧度撒谎对撒还不愤怒ID是不浮动收',
            time: '2天前'
          },
          {
            nickName: '222',
            avatarUrl: 'http://192.168.11.47/playgame/res/img/avatar.jpeg',
            mes: '弧度撒谎对撒还不愤怒ID是不浮动收',
            time: '2天前'
          }
        ];
        let newArr = this.data.mesList.concat(arr);
        this.setData({
          mesList: newArr
        })
        let showMes = this.data.mesList.slice(-5);
        this.setData({
          showMesList: showMes
        })
        this.isGetMoremesList = true;
        wx.hideLoading();
      },2000)
    }
  },
  toggleShowMes(e){  //切换留言板显示隐藏
    if(e.detail){
      this.setData({
        mesToggle: 'showMes'
      })
    }
    else{
      this.setData({
        mesToggle: 'hideMes'
      })
    }
  }
})