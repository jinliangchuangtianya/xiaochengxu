// pages/finger-guessing/play/play.js
//获取应用实例
const base64src  = require("../../../utils/base64");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: "",
    height: "",
    appid: "wxef725f27400279ff",
    secret:"c54f3d2c492d8dbc3edc4fc5dceefddd",
    canvasUserPic: "/img/finger-guessing/bg2.png",
    canvasShowImg: "",
    canvasShowAvatarUrl:"",
    canvasUrl: "",
    ewmSrc : "",
    moveClass:"",
    lostMes:"敲木鱼200下",
    showCanvas:true,
    bgUrl: "http://192.168.11.47/playgame/res/img/bg2.png",
    userInfo: app.globalData.userInfo,
    isLogin:false,
    seleindex: 2,
    seleChecked :0,
    punishList:[
      {
        content: '敲木鱼200下'
      },
      {
        content: '内容'
      }, {
        content: '内容'
      }, {
        content: '内容'
      }, {
        content: '内容'
      }, {
        content: '内容'
      }, {
        content: '内容'
      }, {
        content: '内容'
      }, {
        content: '内容'
      }, {
        content: '内容'
      }, {
        content: '内容'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      mask: true
    })
    this.setData({
      isLogin: !!app.globalData.userInfo
    })
    let _this = this;
    wx.getSystemInfo({
      success: function (res) {
        wx.hideLoading();
        _this.setData({
          width: res.screenWidth,
          height: res.screenHeight
        })
      }
    })
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
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return false;
    return {
      title: "石头剪刀布",
      path: "/pages/finger-guessing/play/play",
      imageUrl: "http://192.168.11.47/playgame/res/img/paiming.png",
      success:function(res){

      }
    };
  },
  getUserInfo(res){
    if (app.globalData.userInfo){
      if (res.currentTarget.dataset.type){
        this.downUserUrl()
      }
    }
    else{
      if (res.detail.errMsg == "getUserInfo:ok") {
         app.globalData.userInfo = res.detail.userInfo;
        this.setData({
          isLogin: !!app.globalData.userInfo
        })
        if (res.currentTarget.dataset.type) {
          this.downUserUrl()
        }
      }
    }
  },
  downUserUrl(){
    if (this.data.seleChecked == 0){
      wx.showModal({
        content: "选择招式后才可以生成对战海报",
        showCancel: false
      })
      return;
    }
    wx.showLoading({
      title: '正在合成海报...',
      mask: true
    })
    this.setData({
      showCanvas: true
    });
    if(this.data.userInfo == null){
      this.setData({
        userInfo: app.globalData.userInfo
      })
      let _this = this;
      wx.downloadFile({
        url: this.data.userInfo.avatarUrl,
        success: function (res) {
          _this.setData({
            canvasShowAvatarUrl: res.tempFilePath
          });
          _this.createEwm();
        }
      })
    }
    else{
      this.createEwm();
    }
  },
  createEwm(){
    let _this = this;
    wx.request({
      // 获取token
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential',
      data: {
        appid: _this.data.appid,
        secret: _this.data.secret
      },
      success(res) {
        wx.request({
          // 调用接口C
          url: 'https://api.weixin.qq.com/wxa/getwxacode?access_token=' + res.data.access_token,
          method: 'POST',
          data: {
            "path": "pages/finger-guessing/play/play",
            "width": 200
          },
          responseType: 'arraybuffer',
          success(res) {
            // res是二进制流，后台获取后，直接保存为图片，然后将图片返回给前台
            // 后台二进制怎么转图片？我也不会后台，学会了再贴代码
            let base64 = wx.arrayBufferToBase64(res.data);
           
            base64src(base64).then(src=>{
              console.log(src)
              wx.getImageInfo({
                src,
                success:res=>{
                  _this.setData({
                    ewmSrc: res.path
                  })
                  _this.canvasDraw()
                }
              })
            })
          }
        })
      }
    })
  },
  canvasDraw() {
    let _this = this;
    const ctx = wx.createCanvasContext('mycanvas');
    //清空画布

    ctx.setFillStyle('white')
    ctx.fillRect(0, 0, this.data.width, this.data.height);

    let scale = this._scalingImage(750, 1334, this.data.width, this.data.height);
    ctx.drawImage(this.data.canvasUserPic, 0, 0, scale.width, scale.height);

    let scale2 = this._scalingImage(200, 200, this.data.width, this.data.width);
    ctx.drawImage(this.data.ewmSrc, scale.width * 0.1, scale.height * 0.78, 200 * scale2.width / 750, 200 * scale2.width / 750);
  
    let scale3 = this._scalingImage(170, 170, this.data.width, this.data.height);
    ctx.save()//保存当前的绘图上下文。
    ctx.beginPath()//开始创建一个路径
    ctx.arc(scale3.width / 1.955, scale3.height * 0.625, 170 * scale3.width / 750/2, 0, 2 * Math.PI, false)//画一个圆形裁剪区域
    ctx.clip()//裁剪
 
    ctx.drawImage(this.data.canvasShowAvatarUrl, scale3.width / 1.955 - 170 * scale3.width / 750 / 2, scale3.height * 0.513, 170 * scale3.width / 750, 170 * scale3.width / 750)//绘制图片
    ctx.restore()//恢复之前保存的绘图上下文

    ctx.setFontSize(20);
    ctx.setFillStyle("#ffffff");
    let str = this.data.userInfo.nickName + "发起了对战";
    let width = 200;
    let strMaxWidth = (ctx.measureText(str).width > width ? width : ctx.measureText(str).width);
    let lineHeight = 25;
    this._drawText(ctx, str, (scale.width - strMaxWidth) / 2, scale.height * 0.5, "", strMaxWidth, lineHeight)
  
    ctx.setFontSize(20);
    ctx.setFillStyle("#000000");
    let lostMes = "输了的要： " + this.data.lostMes;
    let lostMesWidth = 320;
    let lostMesMaxWidth = (ctx.measureText(lostMes).width > lostMesWidth ? lostMesWidth : ctx.measureText(lostMes).width);
    this._drawText(ctx, lostMes, (scale.width - lostMesMaxWidth) / 2, scale.height * 0.72, "", lostMesMaxWidth, lineHeight)

    ctx.setTextAlign('center');

    ctx.draw(true, this.saveImg);
  },
  _scalingImage(imgWidth, imgHeight, containerWidth, containerHeight, redc) {
    if (redc) {
      containerWidth -= redc;
    }
    var containerRatio = containerWidth / containerHeight;
    var imgRatio = imgWidth / imgHeight;

    if (imgRatio > containerRatio) {
      imgWidth = containerWidth;
      imgHeight = containerWidth / imgRatio;
    } else if (imgRatio < containerRatio) {
      imgHeight = containerHeight;
      imgWidth = containerHeight * imgRatio;
      
    } else {
      imgWidth = containerWidth;
      imgHeight = containerHeight;
    }

    return { width: imgWidth, height: imgHeight, imgRatio: imgRatio };
  },

  //文本换行 参数：1、canvas对象，2、文本 3、距离左侧的距离 4、距离顶部的距离 5、6、文本的宽度
  _drawText: function (ctx, str, leftWidth, initHeight, titleHeight, canvasWidth, lineHeight) {
    var lineWidth = 0;
    var lastSubStrIndex = 0; //每次开始截取的字符串的索引
    for (let i = 0; i < str.length; i++) {
      lineWidth += ctx.measureText(str[i]).width;
      if (lineWidth > canvasWidth) {
        ctx.fillText(str.substring(lastSubStrIndex, i), leftWidth, initHeight); //绘制截取部分
        initHeight += lineHeight; //lineHeight为字体的高度
        lineWidth = 0;
        lastSubStrIndex = i;
        titleHeight += 30;
      }
      if (i == str.length - 1) { //绘制剩余部分
        ctx.fillText(str.substring(lastSubStrIndex, i + 1), leftWidth, initHeight);
      }
    }
    // 标题border-bottom 线距顶部距离
    titleHeight = titleHeight + 10;
    return titleHeight
  },
  saveImg() {
    let _this = this;
    wx.hideLoading();
    wx.canvasToTempFilePath({
      canvasId: 'mycanvas',
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        _this.setData({
          canvasUrl: tempFilePath
        })
        if (tempFilePath !== '') {
          _this.setData({
            showCanvas: false
          });
          wx.hideLoading();
          wx.previewImage({
            current: _this.data.canvasUrl, // 当前显示图片的http链接  
            urls: [_this.data.canvasUrl], // 需要预览的图片http链接列表  
          })
        }
      },
      fail: function (res) {
        console.log(res);
      }
    });
  },
  showList(){
    this.setData({
      moveClass: "moveIn"
    })
  },
  closeList() {
    this.setData({
      moveClass: ""
    })
  },
  changeSelect(e){
    this.setData({
      seleindex: e.currentTarget.dataset.selectindex
    })
  },
  changeLostMes(e) {
    this.setData({
      lostMes: this.data.punishList[this.data.seleindex].content
    })
    this.setData({
      moveClass:""
    })
  },
  changChecked(e){
    this.setData({
      seleChecked: e.currentTarget.dataset.checkname
    })
  },
  showModal(){
    wx.showModal({
      content: "选择招式后才可以发起PK",
      showCancel: false
    })
  }
})