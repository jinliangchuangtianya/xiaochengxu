// pages/dice/dice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mark:false,
    diceSrc:[
      '/img/dice/one.png',
      '/img/dice/two.png',
      '/img/dice/three.png',
      '/img/dice/four.png',
      '/img/dice/five.png',
      '/img/dice/six.png'
    ],
    diceCount:3,
    diceLeng :[],
    addOpacity:true,
    redOpacity : true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    this.myaudio = wx.createInnerAudioContext();
    this.myaudio.src = 'http://192.168.11.47/playgame/res/music/dice.m4a';
    
    this.isRunIng = false;
    this.pos = wx.getSystemInfoSync();
  },
  onShow(){
    let _self = this;
    wx.onAccelerometerChange(function (res) {
      if ((Math.abs(res.x) + Math.abs(res.y) > 2 || Math.abs(res.z) > 6) && !this.isRunIng) {
        _self.hideMark();
        _self.goBack();
      }
    })
    let _sefl = this;
    this.myaudio.onCanplay(function () {
      wx.hideLoading();
      _sefl.init();
    })
    
  },
  onShareAppMessage: function () {
    return {
      title: "一起玩骰子",
      path: "/pages/dice/dice",
      imageUrl: "",
      success: function (t) { },
      fail: function (t) {
        console.log("fail", t);
      }
    };
  },
  init(){
    let arr = [];
    for (let i = 0; i < this.data.diceCount; i++) {
      let src = this.data.diceSrc[this.getRandom(0, this.data.diceSrc.length - 1)];
      let obj = {};
      obj.src = src;
      obj.target = { left: '120%', top: '45%'};
      arr[i] = obj;
      arr[i].animation = wx.createAnimation({
        duration: 0,
      })
      arr[i].animation.left(arr[i].target.left).top(arr[i].target.top).rotate(arr[i].target.rotate).step()
      
    }
    this.setData({
      diceLeng: arr
    })
    this.goBack();
  },
  getDiceLeng(){   //获取筛子的个数
   
    let arr = [];
    for (let i = 0; i < this.data.diceCount; i++){
      
       let src = this.data.diceSrc[this.getRandom(0, this.data.diceSrc.length-1)];
       let obj = {};
       obj.src = src;
       obj.target = this.getTagrget(arr);
       arr[i] = obj;
       arr[i].animation = wx.createAnimation({
         duration: 1000,
         timingFunction: "ease",
       })
       arr[i].animation.left(arr[i].target.left).top(arr[i].target.top).rotate(arr[i].target.rotate).step();
       arr[i].animation = arr[i].animation.export()
     }
     this.setData({
       diceLeng: arr
     })
    setTimeout(function () {
      this.isRunIng = false;
    }.bind(this), 1000)
  },
  getTagrget(arr){
    let left = this.getRandom(0, this.pos.windowWidth - 118/2);
    let top = this.getRandom(0, this.pos.windowHeight - 118 / 2);
    let rotate = this.getRandom(0, 180);
    rotate = (Math.random() > 0.5 ? '+' : '-') + rotate;

    if (arr.length >= 1){
      for (let i = 0; i < arr.length; i++){
        if(this.isOverlap(arr[i].target, {left, top})){
          return this.getTagrget(arr);
        }
       }
    }
    return { left, top, rotate};
    
  },
  getRandom(lowerValue, upperValue){
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
  },
  showMark(){
    this.setData({
      mark : true
    })
  },
  hideMark(){
    this.setData({
      mark: false
    })
    if (this.isRunIng) {
      return
    }
    this.init();
  },
  goBack(){
    if (this.isRunIng){
      return
    }
    this.isRunIng = true;
    for (let i = 0; i < this.data.diceLeng.length; i++) {
       let animation = wx.createAnimation({
        duration: 0,
      })
      let changeAnim = 'diceLeng[' + i + '].animation';
      animation.left('120%').top('45%').step()
      this.setData({
        [changeAnim]: animation.export()
      })
      
    }
    setTimeout(function(){
      this.myaudio.play()
    }.bind(this),290)
    
    setTimeout(()=> {
      this.getDiceLeng();
    }, 300)

  },
  isOverlap(rc1, rc2) {    //判断元素是否重叠
      let obj2top = rc2.top;
      let obj2left = rc2.left;

      let obj1top = rc1.top;
      let obj1left = rc1.left;

    let radius =  118/2;

    if ((obj1left + radius) < obj2left || (obj1top + radius) < obj2top || obj1top > (obj2top + radius) || obj1left > (obj2left + radius)) {
        return false;
      }
      else {
        console.log('碰上了')
        return true;
      }
    },
  changeDiceCount(e){   //设置骰子数量
    let even = e.currentTarget.dataset.even;
    let count;
    if (even == 'add'){
      count = this.data.diceCount + 1;
      if(count >= 6){
        count = 6;
      }
    }
    else if(even == 'reduce'){
      count = this.data.diceCount - 1;
      if (count <= 1) {
          count = 1;
      }
    }
    if (count == 1){
      this.setData({
        redOpacity: false
      })
    }
    else if (count == 6){
      this.setData({
        addOpacity: false
      })
    }
    else{
      this.setData({
        addOpacity: true,
        redOpacity : true
      })
    }
    this.setData({
      diceCount: count
    })
  }
})