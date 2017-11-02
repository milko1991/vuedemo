import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	numbers : [],
	homeState : {
		name: 'milko',
		age: '25',
		sex: '男',
		address: '武汉',
	  	list: [{
	  		imgsrc : require('../images/bdbri.png'),
		    comment : '糯米'
		},{
			imgsrc : require('../images/music.png'),
		    comment : '音乐'
		},{
			imgsrc : require('../images/image.png'),
		    comment : '图片'
		},{
			imgsrc : require('../images/zhidao.png'),
		    comment : '知道'
		},{
			imgsrc : require('../images/wenku.png'),
		    comment : '文库'
		}]
	},
	recomendList: [[{
		comment : 'iPhone X国行版入手：有人模仿我的脸？',
		imgList : [
			require('../images/groom/apple1.jpg'),
			require('../images/groom/apple2.jpg'),
			require('../images/groom/apple3.jpg'),
			],
			dress : "苹果官网",
			time : '10-31 12:31'
		},{
			comment : 'iPhone X国行版入手：有人模仿我的脸？',
			imgList : [
				require('../images/groom/apple1.jpg'),
			],
			dress : "苹果官网",
			time : '10-31 12:31'
		},{
			comment : 'iPhone X国行版入手：有人模仿我的脸？',
			imgList : [
				require('../images/groom/apple1.jpg'),
				require('../images/groom/apple1.jpg'),
			],
			dress : "苹果官网",
			time : '10-31 12:31'
		},{
			comment : 'iPhone X国行版入手：有人模仿我的脸？',
			imgList : [
			],
			dress : "苹果官网",
			time : '10-31 12:31'
		},{
			comment : 'iPhone X国行版入手：有人模仿我的脸？',
			imgList : [
				require('../images/groom/apple1.jpg'),
				require('../images/groom/apple2.jpg'),
				require('../images/groom/apple3.jpg'),
			],
			dress : "苹果官网",
			time : '10-31 12:31'
		},{
			comment : 'iPhone X国行版入手：有人模仿我的脸？',
			imgList : [
				require('../images/groom/apple1.jpg'),
				require('../images/groom/apple2.jpg'),
				require('../images/groom/apple3.jpg'),
			],
			dress : "苹果官网",
			time : '10-31 12:31'
		},{
			comment : 'iPhone X国行版入手：有人模仿我的脸？',
			imgList : [
				require('../images/groom/apple1.jpg'),
				require('../images/groom/apple2.jpg'),
				require('../images/groom/apple3.jpg'),
			],
			dress : "苹果官网",
			time : '10-31 12:31'
		}],[{
			title: '众里寻他千百度',
			href : 'http://www.baidu.com/'
		},{
			title: '众里寻他千百度众里寻他千百度',
			href : 'http://www.baidu.com/'
		},{
			title: '众里寻他千百度众里寻他千百度',
			href : 'http://www.baidu.com/'
		},{
			title: '众里寻他千百度',
			href : 'http://www.baidu.com/'
		},{
			title: '众里寻他千百度',
			href : 'http://www.baidu.com/'
		},{
			title: '众里寻他千百度',
			href : 'http://www.baidu.com/'
		},{
			title: '众里寻他千百度众里寻他千百度',
			href : 'http://www.baidu.com/'
		},{
			title: '众里寻他千百度众里寻他千百度',
			href : 'http://www.baidu.com/'
		},{
			title: '众里寻他千百度',
			href : 'http://www.baidu.com/'
		},{
			title: '众里寻他千百度',
			href : 'http://www.baidu.com/'
		},{
			title: '众里寻他千百度',
			href : 'http://www.baidu.com/'
		},{
			title: '众里寻他千百度众里寻他千百度',
			href : 'http://www.baidu.com/'
		},{
			title: '众里寻他千百度众里寻他千百度',
			href : 'http://www.baidu.com/'
		},{
			title: '众里寻他千百度',
			href : 'http://www.baidu.com/'
		},{
			title: '众里寻他千百度',
			href : 'http://www.baidu.com/'
		},{
			title: '众里寻他千百度',
			href : 'http://www.baidu.com/'
		}]
	],
    homeOneList : [{
    	theMonth : '十月份工作总结',
    	datails : [{
    		projects : '智能锅炉系统',
    		work : [
    			'超温记录页面调整，图谱页面放大功能展示',
    			'超温记录页面相应谱图绘制和数据绑定',
    			'多参数分析页面调整、参数查询功等功能完善',
    			'多Y轴不规则数据点多折线图谱绘制以及数据绑定',
    			'其它部分页面配合后端处理相应的问题'
    			]
    		},{
	    		projects : '精密点检项目',
	    		work : [
	    			'精密诊断、诊断报告页面调整'
	    		]
    		},{
	    		projects : '巡点检',
	    		work : [
	    			'监督检查任务页面树显示bug调整',
	    			'协助后端进行部分图谱调整'
	    		]
    		}
    	]
    },{
    //	theMonth : '十一月份工作总结',
    }]
};

export default new Vuex.Store({
  state,
})