var fs = require('fs');
var request = require("request");
var cheerio = require("cheerio");
var mkdirp = require('mkdirp');
var axios = require('axios')
//目标网址
var url = 'https://gank.io/api/data/福利/10/';

//本地存储目录
var dir = './images';

//创建目录
mkdirp(dir, function(err) {
  if(err){
    console.log(err);
  }
});

request(url, function(error, response, body) {
  console.log(response.statusCode )
  if(!error && response.statusCode == 200) {
    console.log(2)
    var $ = cheerio.load(body);
    $('.img img').each(function() {
      var src = $(this).attr('src');
      console.log('正在下载' + src);
      download(src, dir, Math.floor(Math.random()*100000) + src.substr(-4,4));
      console.log('下载完成');
    });
  }
});


//下载方法
var download = function(url, dir, filename){
  request.head(url, function(err, res, body){
    request(url).pipe(fs.createWriteStream(dir + "/" + filename));
  });
};

