//加载第三方库
var request = require('request'), //--->获取页面数据用的 请求
	iconv = require('iconv-lite'),  //--->处理编码用的 转码
	cheerio = require('cheerio'), //--->解析页面用的 用法类似于jquery
	async = require('async'); //--->异步流程控制
var progress = require('request-progress');


//加载标准库依赖
var path = require('path'),
	fs = require('fs');


//要抓取的url
// var url = 'http://www.socwall.com';
var count = 10;// 总共22页
var urlList = [];//地址容器
var arrIds = [];//详情容器
//处理抓取的url
for(var i = 0; i <= count; i++){
	urlList.push('http://www.socwall.com/wallpapers/page:' + i);
}
//查看要抓的链接地址
//console.log(urlList);
// return;

//注意 request 是异步操作
//async 控制异步操作
async.waterfall([getInfoList,getImageList], function(err){
	console.log('爬虫结束');
});

//根据地址容器获取详情页
function getInfoList(done){
	async.forEachLimit(urlList, 10, function(item, callback){
		//开始抓取

		request.get({
			url : item,
			encoding: null//让body 直接是buffer  -->目的是为了解决
		}, function(err, response, body){
			if(!err && response.statusCode == 200){

				var body = iconv.decode(body, 'gb2312');//返回的body 直接就是buffer 了...
				//解析页面
				var $ = cheerio.load(body);
				//拿到此页面的链接
				$('.wallpaper').find('.image').each(function(i){
					var url = $(this).find("img").attr('src');
					var idStr = url.split("-")[0];
					var id = idStr.substr(idStr.lastIndexOf('/')+1,idStr.length);

					//console.log(xiaohuaUrl);//打印这个页面要抓取的url地址

					/*
						经过抓取 发现格式不统一

						/p-1-146.html
						http://www.xiaohuar.com/p-1-584.html

						有这两种 那么就让他统一一下吧
					 */
					//xiaohuaUrl = xiaohuaUrl.replace('http://www.xiaohuar.com', '');
					//放入到容器里 准备用来抓取详情页的图片数据
					arrIds.push(id);
					//console.log(arrIds.length);
				});
				callback();
			}else{
				console.log('抓取失败');
				callback();
			}
		});
	}, function(err){
		if(err){
			//console.log('获取详情列表页失败');
			done();
		}else{
			//console.log('获取详情列表页结束');
			console.log(arrIds.length);
			done();
		}
	});
}


//根据详情页容器获取内容
function getImageList(done){
	async.forEachLimit(arrIds, 10, function(item, callback){
		//开始抓取
		console.log(item);
		request.get({
			url : 'http://www.socwall.com/desktop-wallpaper/' + item +'/wallpaper',
			encoding: null//让body 直接是buffer  -->目的是为了解决
		}, function(err, response, body){
			if(!err && response.statusCode == 200){
				var body = iconv.decode(body, 'gb2312');//返回的body 直接就是buffer 了...
				//解析页面
				var $ = cheerio.load(body);

				//正则获取图片链接
				// console.log(html);
				var photosr = $('.wallpaper').find("img").attr("src");
				console.log(photosr);
				//下载图片
				async.forEach(photosr, function(obj, cb){
					var imgsrc ="http://www.socwall.com"+photosr;
					var filename = parseUrlForFileName(imgsrc);
					downloadImg(imgsrc,filename,function(){
						//console.log(filename + ' done');
						cb();
					});
				}, function(){
					//console.log('某个妹子图片下载处理结束');
					callback();
				});
				callback();
			}else{
				//console.log('抓取失败');
				callback();
			}
		});
	}, function(err, result){
		if(err){
			//console.log('获取图片链接失败');
			done();
		}else{
			//console.log('获取图片链接结束');
			done();
		}
	});
}

//生成文件名
function parseUrlForFileName(address) {
	var filename = path.basename(address);
	return filename;
}



var downloadImg = function(uri,filename,callback){
	request.head(uri,function(err,res,body){
		if(err){
			console.log('err:'+err);
			return false;
		}
		//console.log('res:'+res);
	})
	request(uri).on("error",callback).pipe(fs.createWriteStream('images/'+filename)).on('close', callback);
}
