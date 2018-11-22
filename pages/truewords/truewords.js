// pages/truewords/truewords.js
let t = [{
  id: 1,
  title: "你的初吻是几岁，被谁夺取的？"
}, {
  id: 2,
  title: "你的初恋是几岁?"
}, {
  id: 3,
  title: "你的初恋对象是谁?"
}, {
  id: 4,
  title: "学到现在共挂过几门课？"
}, {
  id: 5,
  title: "亲吻过多少人？"
}, {
  id: 6,
  title: "现场所有人中，你看哪位异性同学最舒服？"
}, {
  id: 7,
  title: "果再给你一个机会，回到高中时代，最想对哪位异性说哪些话？"
}, {
  id: 8,
  title: "第一个喜欢的异性叫什么名字？"
}, {
  id: 9,
  title: "你曾经YY过在场的哪一位？如果过去没有的话，你现在会选哪一位作为YY对象？"
}, {
  id: 10,
  title: "你对自己的梦中情的要求是什么？"
}, {
  id: 11,
  title: "让你一直念念不忘的一位异性的名字？原因？"
}, {
  id: 12,
  title: "谈过几次恋爱？"
}, {
  id: 13,
  title: "每天睡觉前都会想起的人是谁？"
}, {
  id: 14,
  title: "你最怕的事情或东西是什么（说出三件）。"
}, {
  id: 15,
  title: "你会不会在意ta的过去，为什么？"
}, {
  id: 16,
  title: "打算什么时候结婚？"
}, {
  id: 17,
  title: "现在心里想念的异性叫什么名字？"
}, {
  id: 18,
  title: "第一次爱的人对你产生过什么影响？"
}, {
  id: 19,
  title: "你在意你的老婆（老公）不是处女（处男）吗？"
}, {
  id: 20,
  title: "你会为了爱情牺牲一切，包括生命吗？"
}, {
  id: 21,
  title: "结婚后想生男孩还是女孩，说出原因？"
}, {
  id: 22,
  title: "和多少异性有过非恋爱的暧昧关系？"
}, {
  id: 23,
  title: "你作弊使用过哪些手段？"
}, {
  id: 24,
  title: "做过最丢脸的事情？"
}, {
  id: 25,
  title: "异性知己有几个？"
}, {
  id: 26,
  title: "你最受不了别人对你做什么？"
}, {
  id: 27,
  title: "觉得失去什么最可怕？"
}, {
  id: 28,
  title: "表白过多少人？成功几率？"
}, {
  id: 29,
  title: "被表白过几次？接受过几人？"
}, {
  id: 30,
  title: "用四个字形容你现在的生活状态 "
}, {
  id: 31,
  title: "在座你最想打的人是谁？为什么？"
}, {
  id: 32,
  title: "你觉得自己最郁闷的外号是什么？"
}, {
  id: 33,
  title: "电脑收藏的小电影放在哪个盘？文件夹叫什么名字？"
}, {
  id: 34,
  title: "最欣赏自己哪个部位？对自己哪个部位最不满意？"
}, {
  id: 35,
  title: "想自己变成在场的哪一个谁？原因？"
}, {
  id: 36,
  title: "印象最深刻(期待、喜欢）的表白方式是什么？"
}, {
  id: 37,
  title: "在你洗澡时，有一个非常丑的异性冲了进来，你会怎么样？"
}, {
  id: 38,
  title: "你希望左边第3位异性是你的谁？"
}, {
  id: 39,
  title: "你觉得在座最帅或最漂亮的人是谁？"
}, {
  id: 40,
  title: "哭得最悲哀的是哪一次？为什么？"
}, {
  id: 41,
  title: "现在有人追求你吗？有几个？"
}, {
  id: 42,
  title: "现在有正在追求的人吗？简单介绍一下Ta。"
}, {
  id: 43,
  title: "丑但聪明和笨却美丽选哪一个？原因？"
}, {
  id: 44,
  title: "你认为异性什么时候最迷人？或者最关注异性什么部位？"
}, {
  id: 45,
  title: "如果有机会整容，最想整哪个部位 ?"
}, {
  id: 46,
  title: "用四个字形容自己的长相"
}, {
  id: 47,
  title: "你有多长时间没有被别人表白过了？"
}, {
  id: 48,
  title: "对另一半的要求、标准或期待是什么？"
}, {
  id: 49,
  title: "在自己喜欢的人面前做过最囧的事是什么？"
}], i = [{
  id: 1,
  title: "背一位异性绕场地n圈"
}, {
  id: 2,
  title: "唱《青藏高原》最后一句 "
}, {
  id: 3,
  title: "做一个大家都满意的鬼脸 "
}, {
  id: 4,
  title: "抱一位异性直到下一轮真心话大冒险结束 "
}, {
  id: 5,
  title: "向一位异性表白3分钟 "
}, {
  id: 6,
  title: "与一位异性十指相扣，对视10秒 "
}, {
  id: 7,
  title: "邀请一位异性为你唱情歌，或邀请一位异性与你情歌对唱 "
}, {
  id: 8,
  title: "做自己最性感、最妩媚的表情或动作 "
}, {
  id: 9,
  title: "吃下朋友给你夹的任何菜"
}, {
  id: 10,
  title: "跳草裙舞，尤其是在冬天 "
}, {
  id: 11,
  title: "蹲在凳子上作便秘状"
}, {
  id: 12,
  title: "亲***（这个人可以事先指定），或者亲一位异性，部位不限 "
}, {
  id: 13,
  title: "深情地吻墙10秒 "
}, {
  id: 14,
  title: "模仿古代特殊职业女子拉客 "
}, {
  id: 15,
  title: "模仿脑白金广告，边唱边跳 "
}, {
  id: 16,
  title: "到街上大喊“卖拖鞋啦～2块一双，买一送3”"
}, {
  id: 17,
  title: "抓着门喊“放我出去！”"
}, {
  id: 18,
  title: "对陌生人挤眉弄眼 "
}, {
  id: 19,
  title: "男的用胳膊从正面量女的胸围or女的量男的腰围（臀围...）"
}, {
  id: 20,
  title: "侧抱互相喂酒、喂吃的"
}, {
  id: 21,
  title: "一人先用嘴吸住一纸牌，另一人用嘴从另一面将纸牌吸住移走 "
}, {
  id: 22,
  title: "女生仰躺地上，男生撑在上面，做五下俯卧撑 "
}, {
  id: 23,
  title: "男生仰躺地上，女生撑在上面，坚持5秒钟 "
}, {
  id: 24,
  title: "男生坐着，女生躺下，将头枕男生腿上，对视10秒 "
}, {
  id: 25,
  title: "男生壁咚女生，两人深情对视10秒 "
}, {
  id: 26,
  title: "男生单腿下跪，女生伸手，男生亲女生手背"
}, {
  id: 27,
  title: "对外大喊“我是猪！我是猪！我真的是猪！”"
}, {
  id: 28,
  title: "公主抱左边第一位异性"
}, {
  id: 29,
  title: "用手纸当围巾，围脖子上持续一轮游戏"
}, {
  id: 30,
  title: "一边锤右边第一个男生的胸一边娇羞地说“你好讨厌哦~”"
}, {
  id: 31,
  title: "和右边第一个异性关在厕所里等一轮游戏"
}, {
  id: 32,
  title: "为右边第一个男生脱衣服，再为他穿上"
}, {
  id: 33,
  title: "屁股写自己名字，双手放在腰上，然后扭动臀部，就像用手在空中比划一样把字写出来，一边扭，一边要把写的笔画说出来"
}, {
  id: 34,
  title: "站到凳子上表演大猩猩捶胸呐喊动作"
}, {
  id: 35,
  title: "学超级名模走秀，绕桌子或室内一圈"
}, {
  id: 36,
  title: "来一段freestyle"
}, {
  id: 37,
  title: "右手捏住左耳垂，弯下腰，顺时针转10圈，再金鸡独立15秒不许倒"
}, {
  id: 38,
  title: "卖萌五连拍"
}, {
  id: 39,
  title: "用5种不同的方法抱一位异性"
}, {
  id: 40,
  title: "摆3个芙蓉姐姐S形"
}, {
  id: 41,
  title: "大喊三声“我是禽兽，我猪狗不如”"
}, {
  id: 42,
  title: "把左边第一位异性当作人肉钢管，跳一段钢管舞"
}, {
  id: 43,
  title: "拿一张纸巾挥舞绕场跑一周，边跑边说“有种初恋的感觉~”"
}, {
  id: 44,
  title: "学公鸡打鸣十声"
}, {
  id: 45,
  title: "发条朋友圈：不要再追求姐（哥）了，姐（哥）是同性恋！"
}, {
  id: 46,
  title: "挑一个在场的人亲自己脸颊"
}, {
  id: 47,
  title: "用手机软件拍摄一个表情包发出来供大家使用"
}, {
  id: 48,
  title: "跳一段扭脖子新疆舞"
}, {
  id: 49,
  title: "跟大家指定的陌生人搭讪并合照一张（不能说是因为大冒险）"
}, {
  id: 50,
  title: "绕场青蛙跳一圈"
}, {
  id: 51,
  title: "站起来并且单手举起，大喊：我是超人，我要回家了！然后以飞行的姿势绕场一圈"
}];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    words:t,
    risk:i,
    src:'/img/truewords/zxh-icon-start.png',
    myaudioSrc:'http://192.168.11.47/playgame/res/music/runmusic.mp3',
    move:false
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
    this.myaudio.src = this.data.myaudioSrc;
    this.myaudio.onCanplay(function () {
      wx.hideLoading();
    })

    Array.prototype.shuffle = function () {
      let m = this.length, i;
      while (m) {
        i = (Math.random() * m--) >>> 0;
        [this[m], this[i]] = [this[i], this[m]]
      }
      return this;
    }

    this.isRun = false;
    this.randomArr();
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

  onShareAppMessage: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
    return {
      title: "你选真心话还是大冒险呢？",
      path: "/pages/truewords/truewords",
      imageUrl: "http://192.168.11.47/playgame/res/img/paiming.png"
    };
  },
  move(){
    if (this.isRun) return;
    this.myaudio.play();
    this.isRun = true;
    this.setData({
      move: false,
      src: '/img/truewords/zxh-icon-stop.png'
    })
    this.setData({
      move:true,
      src: '/img/truewords/zxh-icon-stop.png'
    })
    this.randomArr();
    setTimeout(()=>{
      this.isRun = false;
      this.setData({
        src: '/img/truewords/zxh-icon-start.png'
      })
    },4500)
  },
  randomArr(){
    let newWords = this.data.words.shuffle();
    let newRisk = this.data.risk.shuffle();
    this.setData({
      words: newWords,
      risk: newRisk
    })  
  }
})