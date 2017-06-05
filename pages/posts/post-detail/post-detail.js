var postsData = require('../../../data/posts-data.js');

Page({
    data: {

    },
    onLoad: function (option) {
        var postId = option.id;
        var postData = postsData.postList[postId];
        // this.data.postData = postData;
        // 如果在onLoad方法中，不是异步的去执行一个数据绑定
        // 则不需要使用this.setData方法
        // 只需要对this.data赋值即可实现数据绑定
        this.setData({
            postData
        });

        // var postsCollected = {
        //     1: 'true',
        //     2: 'false',
        //     2: 'true
        //     ...'
        // }

        var postsCollected = wx.getStorageInfoSync('postsCollected');
        if (postsCollected) {
            var postCollected = postsCollected[postId];
            this.setData({
                collected: postCollected
            });
        }
        else {
            var postCollected = {};
            postsCollected[postId] = false;
            wx.setStorageSync('posts_collected', postsCollected);  
        }
    },

    onCollectionTap: function (event) {

    }

});