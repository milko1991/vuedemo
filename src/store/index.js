import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
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
	recomendList: [{
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
	}]
    
};

export default new Vuex.Store({
  state,
})