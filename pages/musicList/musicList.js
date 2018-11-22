//获取应用实例
const app = getApp()
Page({
  data: {
    selectIndex: app.globalData.selectIndex,
    musicList:[
      {
        name: '木鱼原声',
        url: 'http://192.168.11.47/playgame/res/music/muyu.mp3'
      },
      {
        name:'忐忑',
        url: 'http://192.168.11.47/playgame/res/music/tante.mp3'
      },
      {
        name: '盗将行',
        url: 'http://192.168.11.47/playgame/res/music/daojiangxing.flac'
      },
      {
        name: '卡路里',
        url: 'http://192.168.11.47/playgame/res/music/kaluli.flac'
      },
      {
        name: '起风了',
        url: 'http://192.168.11.47/playgame/res/music/qifengl.mp3'
      },
      {
        name: '晴天',
        url: 'http://192.168.11.47/playgame/res/music/qingtian.mp3'
      },
      {
        name: '小跳蛙',
        url: 'http://192.168.11.47/playgame/res/music/xiaotiaowa.flac'
      }
    ]
  },
  onLoad(){
    this.setData({
      selectIndex: app.globalData.selectIndex,
    })
  },
  SelectMusic(e){
    let index = e.currentTarget.dataset.url;
    let url = this.data.musicList[index].url;
    app.globalData.selectIndex = index;
    app.globalData.musicUrl = url;
    wx.navigateBack()
  }
})
