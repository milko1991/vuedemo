<template>
	<div class="headerBar">
		<wearther></wearther>
		 <ul>
		 	<router-link to='/'><li>首页</li></router-link>
	    	<router-link to='/news'><li>新闻</li></router-link>
 	        <router-link to='/map'><li>地图</li>	</router-link>
	        <router-link to='/login'><li>登录</li>	</router-link>
	        <router-link to='/more'><li :class="{'btn-primary': moreshow}" @mouseenter="toggleShow()"><div v-text="moreText"></div></li></router-link>
    	</ul>
    	<div class="more-Show animated" :class="{'fadeIn': tofalse}" v-show="moreshow" @mouseleave="toggleShow()">
			<h4>更多产品</h4>
			<ul v-for="showlist in showitems">
				<li>
					<img :src="showlist.imgsrc" :title="showlist.comment">
					<span>{{ showlist.comment }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Wearther from '../components/wearther.vue'
export default {
//name: 'toHeader',
	data() {
		return {
			moreshow: false,
			tofalse: false,
			moreText: '更多产品'
		}
	},
	components: {
		'wearther': Wearther,
	},
	computed: {
		showitems() {
			return this.$store.state.list;
		}
	},
	methods: {
			toggleShow() {
				this.moreshow = !this.moreshow;
			}
	},
	watch: {
		moreshow(newVal) {
		 	newVal ? this.moreText = '欢迎查看' : this.moreText = '更多产品'
		}
	}
}
</script>
