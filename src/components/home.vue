<template>
	<div>
		<nav id="navHome">
			<img src="../images/baidu.png" class="logo" />
			<div class="search-input">
				<input type="text" value="" placeholder="" v-model="searchInput" @keyup.enter="btnSearch" />
				<button @click="btnSearch">百度一下</button>
			</div>
		</nav>
    <div class="searchNav">
      <div class="scrollSearch animated" :class="{'fadeIn': scrollShow}" v-show="scrollShow">
        <img src="../images/baidu.png" width="150" />
      </div>
      <ul>
        <li v-for="value in myData">{{value}}</li>
      </ul>
    </div>
		<div class="pageList">
			<ul class="listUl">
				<li @click="toggleList(index,listview.view)" v-for="(listview,index) in pageList" :class="{active: active == index}">{{listview.title}}</li>
			</ul>
			<component-viewlist :props-home-list="currentView"></component-viewlist>
		</div>
	</div>
</template>

<style scoped="">
</style>

<script>
	import Componentviewlist from '../components/componentList.vue'
  import http from 'http'
	export default {
		data() {
			return {
				searchInput: '',
				toshow: '',
				scroll: '',
        myData:[],
        currentView: 'child2',
				scrollShow: false,
				active: 1,
				pageList: [{
					title: '我的工作',
					view: 'child1'
				}, {
					title: '推荐',
					view: 'child2'
				}, {
					title: '导航',
					view: 'child3'
				}]
			}
		},
    created(){
    },
		components: {
			'componentViewlist': Componentviewlist
		},
		mounted() {
			window.addEventListener('scroll', this.screenTop);
		},
		computed: {
			plan() {
				return this.$store.state.homeState.name;
			},
		},
		watch: {
			//防止多次重复执行
			scroll(val) {
				if(!this.timer) {
					this.screenTop = val
					this.timer = true
					let that = this
					setTimeout(function() {
						that.screenTop;
						that.timer = false;
					}, 400)
				}
			}
		},
		methods: {
			btnSearch() {
        this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+ this.searchInput,{
          jsonp:'cb',
        }).then(function(data){
          this.myData=data.data.s;
        },function(){

        })
      },
			screenTop() {
				this.scroll = document.documentElement.scrollTop;
				if(this.scroll >= 160) {
					$('.search-input').css({
						'position': 'fixed',
						'top': '20px'
					});
					this.scrollShow = true
				} else {
					$('.search-input').css('position', 'relative');
					this.scrollShow = false
				}
			},
			toggleList(i, v) {
				this.active = i;
				this.currentView = v;
			}
		}
	};
</script>
