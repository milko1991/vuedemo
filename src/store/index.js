import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	numbers : [],
  logins : {
	  userName : 'admin',
    passWord : 'admin'
  },
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
		},{
			title: '众里寻他千百度众里寻他千百度',
		},{
			title: '众里寻他千百度众里寻他千百度',
		},{
			title: '众里寻他千百度',
		},{
			title: '众里寻他千百度',
		},{
			title: '众里寻他千百度',
		},{
			title: '众里寻他千百度众里寻他千百度',
		},{
			title: '众里寻他千百度众里寻他千百度',
		},{
			title: '众里寻他千百度',
		},{
			title: '众里寻他千百度',
		},{
			title: '众里寻他千百度',
		},{
			title: '众里寻他千百度众里寻他千百度',
		},{
			title: '众里寻他千百度众里寻他千百度',
		},{
			title: '众里寻他千百度',
		},{
			title: '众里寻他千百度',
		},{
			title: '众里寻他千百度',
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
      theMonth : '十一月份工作总结',
      datails : [{
        projects : '智能锅炉系统',
        work : [
          '实时壁温风险页面自定义化图谱制作',
          '实时状态报警页面tab切换数据异常bug调整',
          '累计超温风险页面tab切换数据异常bug调整',
          '多参数分析页面修改',
          '其它部分页面配合后端处理相应的问题'
        ]
      },{
        projects : '辅机在线',
        work : [
          '各页面以及图谱布局调整'
        ]
      },{
        projects : '巡点检',
        work : [
          'webuploader不能重复上传bug',
          '多选功能框功能调整',
          '其它部分页面配合后端处理相应的问题'
        ]
      }]
    }]
};

export default new Vuex.Store({
  state,
})
