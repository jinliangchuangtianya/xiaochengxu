// components/messageBoard/messageBoard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      mesList:{
        type:Array,
        value: []
      },
  },

  /**
   * 组件的初始数据
   */
  data: {
    mesList: [1, 2, 31, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,],
    isShowMes:true
  },
  created(){
    
  }, 
  /**
   * 组件的方法列表
   */
  methods: {
    lower(){
      this.triggerEvent('getMoremesList');  //加载更多
    },
    close(){
      this.triggerEvent('closehandle')  // 将num通过参数的形式传递给父组件
    },
    toggleShowMes(){   //显示和关闭留言
      this.setData({
        isShowMes : !this.data.isShowMes
      })
      this.triggerEvent('toggleShowMes', this.data.isShowMes);
    }
  }
})
