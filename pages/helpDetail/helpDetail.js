const app = getApp();
const url = app.globalData.url;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    HelpMessage:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://applets.cwp.cool/api/user/showinfo',
      method:'POST',
      data:{
        id:options.id
      },
      success:(res) => {
        console.log(res);
        console.log(1);
        this.setData({
          HelpMessage:res.data.data[0]
        })
      }
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},
})