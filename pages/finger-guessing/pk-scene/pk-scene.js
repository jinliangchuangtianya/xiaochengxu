// pages/finger-guessing/pk-scene/pk-scene.js
var wxApi = require('../../../utils/wxApi')
var wxRequest = require('../../../utils/wxRequest')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSixe:{
      width:"142",
      height:"142"
    },
    imgsrc:"/img/finger-guessing/fg-punish-add-img.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  upimg(){
    let wxChooseImage = wxApi.wxChooseImage;
    wxChooseImage(1).then(res=>{
      let imgsrc = res.tempFilePaths[0];
      this.getimgInfo(imgsrc)
    })
  },
  getimgInfo(tempFilePaths){
    let wxGetImageInfo = wxApi.wxGetImageInfo;
    wxGetImageInfo(tempFilePaths)
    .then(res=>{
        let width = "", height = "";
        var str = res.width / res.height;//图片的宽高比
        if (str > 1) {//横版图片
          width = 142;//图片的显示高度为400
          height = res.height * (142 / res.width); //图片的宽度 = 宽高比 * 图片的显示高度

        } else {//竖版图片
          height = 142;//图片的显示高度为400
          width = res.width * (142 / res.height); //图片的宽度 = 宽高比 * 图片的显示高度
        }
        this.setData({
          imgSixe: {
            width,
            height,
          },
          imgsrc: tempFilePaths
        })
    })
  }
})