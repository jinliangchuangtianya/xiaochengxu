//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    width:"",
    height:"",
    canvasUserPic:"",
    canvasShowImg :"",
    canvasUrl:""
  },
  
  // onLoad: function (options) {
  //   var that = this
  //   var scene_img = 'http://192.168.0.132/img/bg.jpg' //这里添加图片的地址
  //   that.setData({
  //     scene: scene_img
  //   })
  // },
  // previewImage: function (e) {
  //   wx.previewImage({
  //     current: 'http://192.168.0.132/img/bg.jpg', // 当前显示图片的http链接
  //     urls: ['http://192.168.0.132/img/bg.jpg'] // 需要预览的图片http链接列表
  //   })
  // }
  onLoad(){
    let _this = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        _this.setData({
          width: res.screenWidth,
          height: res.screenHeight
        })
        wx.downloadFile({
          url: 'http://192.168.0.132/img/bg.jpg',
          success: function (sres) {
            _this.setData({
              canvasUserPic: sres.tempFilePath
            });
            console.log(123)
            wx.downloadFile({
              url: 'http://192.168.0.132/img/b4.jpg',
              success: function (sres1) {
                console.log(456)
                _this.setData({
                  canvasShowImg: sres1.tempFilePath
                });
                _this.canvasDraw();
              }
            })
          }
        })
      },
    })
  },
  canvasDraw(){
    let _this =this;
    const ctx = wx.createCanvasContext('mycanvas');

    ctx.rect(0, 0, this.data.width, this.data.height)
    ctx.setFillStyle('red')
    ctx.fill()

    let scale = this._scalingImage(1024, 1024, this.data.width, this.data.width);
    console.log(scale)
    ctx.drawImage(this.data.canvasUserPic, 0, 0, scale.width, scale.height);
    
    let scale2 = this._scalingImage(860, 860, this.data.width, this.data.width, 150);
    ctx.drawImage(this.data.canvasShowImg, 75, scale.height - 150, scale2.width, scale2.height);

    ctx.save()//保存当前的绘图上下文。
    ctx.beginPath()//开始创建一个路径
    ctx.arc(this.data.width/2, 100, 50, 0, 2 * Math.PI, false)//画一个圆形裁剪区域
    ctx.clip()//裁剪
    ctx.drawImage(this.data.canvasUserPic, this.data.width / 2 - 50, 50, 100, 100)//绘制图片
    ctx.restore()//恢复之前保存的绘图上下文

    ctx.setFontSize(20);
    ctx.setFillStyle("black");
    // ctx.fillText('用户名称', (this.data.width - ctx.measureText('用户名称').width) / 2, scale.height / 3);
    let str = '用户名称用户名用户名称用户名用户名称用户名';
    let width = 200;
    let strMaxWidth = (ctx.measureText(str).width > width ? width : ctx.measureText(str).width);
    let lineHeight = 25;
    this._drawText(ctx, str, (this.data.width - strMaxWidth) / 2, scale.height / 3, "", strMaxWidth, lineHeight)


    ctx.setTextAlign('center')
    ctx.draw(true, this.saveImg);
  },
  _scalingImage(imgWidth, imgHeight, containerWidth, containerHeight, redc) {
    if (redc) {
      containerWidth -= redc;
    }
    var containerRatio = containerWidth / containerHeight;
    var imgRatio = imgWidth / imgHeight;

    if(imgRatio > containerRatio) {
     
      imgWidth = containerWidth;
      imgHeight = containerWidth / imgRatio;
    } else if (imgRatio < containerRatio) {
     
      imgHeight = containerHeight;
      imgWidth = containerHeight * imgRatio;
    } else {
      imgWidth = containerWidth;
      imgHeight = containerHeight;
    }

    return { width: imgWidth, height: imgHeight, imgRatio: imgRatio};
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
  saveImg(){
    let _this = this;
    setTimeout(function () {
      wx.canvasToTempFilePath({
        canvasId: 'mycanvas',
        success: function (res) {
          var tempFilePath = res.tempFilePath;
          _this.setData({
            canvasUrl: tempFilePath
          })
          if (tempFilePath !== '') {
            _this.setData({
              isShowCav: false
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
    }, 3000);
  }
})
