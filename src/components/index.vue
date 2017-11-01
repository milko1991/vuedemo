<template>
	<div>
		<nav class="clear" id="navHome">
			<img src="../images/baidu.png" width="270"/>
			<div class="search-input">
				<input type="text" value="" placeholder="" v-model="searchInput" />
				<button @click="btnSearch">百度一下</button>
			</div>
		</nav>
		<div class="scrollSearch animated" :class="{'fadeIn': scrollShow}" v-show="scrollShow">
			<img src="../images/baidu.png" width="150" />
		</div>
		<div class="pageList">
			<ul class="listUl">
				<li @click="toggleList(index,listview.view)" v-for="(listview,index) in pageList" :class="{active: active == index}">{{listview.title}}</li>
			</ul>
			<componentlist :propsList="currentView"></componentlist>
		</div>
	</div>
	
</template>

<script>
	import Componentlist from '../components/componentList.vue'
	export default{
		data() {
			return {
				searchInput : '',
				toshow : '',
				scroll : '',
				currentView : 'child2',
				scrollShow : false,
				active: 1,
				pageList : [
					{
						title: '我的关注',
						view: 'child1'
					},{
						title: '推荐',
						view: 'child2'
					},{
						title: '导航',
						view: 'child3'
					}
				]
			}
		},
		components: {
	  		'componentlist' : Componentlist,
	  	},
		mounted() {
				window.addEventListener('scroll', this.screenTop);
		},
		computed : {
			plan() {
				return this.$store.state.homeState.name;
			},
		},
		watch: {
			//防止多次重复执行
			scroll(val) {
				if (!this.timer) {
                    this.screenTop = val
                    this.timer = true
                    let that = this
                    setTimeout(function () {
                        that.screenTop
                        that.timer = false
                    }, 400)
                }
			}
		},
		methods : {
			btnSearch() {
				this.toshow = this.searchInput;
			},
			screenTop() {
				this.scroll = document.documentElement.scrollTop;
				if(this.scroll >= 160){
					$('.search-input').css({'position':'fixed','top': '20px'});
					this.scrollShow = true
				}else{
					$('.search-input').css('position','relative');
					this.scrollShow = false
				}
			},
			toggleList(i,v) {
				this.active = i;
				this.currentView = v;
			}
		}
	};
</script>

<style>
</style>