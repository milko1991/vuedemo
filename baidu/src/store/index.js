import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
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
};


export default new Vuex.Store({
  state,
})