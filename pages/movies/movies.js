
var app = getApp();

Page({
    // RESTFul API JSON
    // SOAP XML
    //粒度 不是 力度

    onLoad: function () {
        // 正在热映url
        var inTheatersUrl = app.globalData.doubanBase + "/v2/movie/in_theaters" + "?start=0&count=3";
        // 即将上映url
        var comingSoonUrl = app.globalData.doubanBase + '/v2/movie/coming_soon' + "?start=0&count=3";
        // Top250url
        var top250Url = app.globalData.doubanBase + '/v2/movie/top250' + "?start=0&count=3";

        this.getMovieListData(inTheatersUrl);
        this.getMovieListData(comingSoonUrl);
        this.getMovieListData(top250Url);

    },

    getMovieListData: function (url) {
        wx.request({
            url: url,
            method: 'GET',
            header: {
                "Content-Type": "json"
            },
            success: function (res) {
                processDoubanData(res.data);
                // console.log(res);
            },
            fail: function (error) {
                // fail
                console.log(error)
            }

        })
    },

    processDoubanData: function (moviesDouban) {
        var movies = [];
    }

});