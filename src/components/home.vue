<template>
	<div>
		<nav id="navHome">
			<img src="../images/baidu.png" class="logo" />
			<div class="search-input">
				<input type="text" ref="inputs" value="" @keyup="get($event)" @onfus="closeData(true)" @keydown.down.prevent="changeDown" @keydown.up.prevent="changeUp" v-model='msg' />
				<button @click='open'>百度一下</button>
			</div>
      <ul v-show="myDataShows">
        <li @click="setSeachnav(value)" :data-list="ulsLi + index" @keyup.down="chooseDownLi(index)" v-for="(value,index) in messages">{{value}}</li>
      </ul>
		</nav>
    <div class="scrollSearch animated" :class="{'fadeIn': scrollShow}" v-show="scrollShow">
      <img src="../images/baidu.png" width="150" />
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
  #navHome {
    position: relative;
  }
  #navHome ul {
    width: 500px;
    height: auto;
    z-index: 1;
    ulsLi: 'ulsLi';
    border-left: 1px double #b8b8b8;
    border-right: 1px double #b8b8b8;
    position: absolute;
    background: white;
  }
  #navHome ul li {
    width: 100%;
    line-height: 35px;
    box-sizing: border-box;
    padding: 0 10px;
    border-bottom: 1px double #b8b8b8;
  }
  .active {
    background: #EEEEEE;
  }
</style>

<script>
	import Componentviewlist from '../components/componentList.vue'
  import http from 'http'
	export default {
		data() {
			return {
				toshow: '',
				scroll: '',
        msg:'',
        msg1:'',
        messages:[],
        now:-1,
        ulsLi: 'ulsLi',
        myDataShows: true,
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
      myData(){
        if( this.myData != ''){
          this.myDataShows = true;
        }
      },
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
      get:function(e){
        console.log(1)
        //保存输入框中输入的内容
        this.msg1=this.msg;
        if(e.keyCode == 38 || e.keyCode == 40){
          return;
        }
        if(e.keyCode == 13){
          window.open('https://www.baidu.com/s?wd='+this.msg);
          this.msg='';
          this.myDataShows = false;
          this.messages = [];
          return;
        }
        this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+ this.msg,{
          jsonp:'cb',
        }).then(function(data){
          this.messages=data.data.s;
          this.myDataShows = true;
        },function(){

        })
      },
      open:function(){
        window.open('https://www.baidu.com/s?wd='+this.msg);
        this.myDataShows = false;
        this.messages = [];
      },
      changeDown:function(){
        this.now++;
        if(this.now > this.messages.length){
          return this.now = this.messages.length;
        }
        $("li[data-list='" + this.ulsLi + this.now + "']").addClass('active').siblings().removeClass('active');
        this.msg=this.messages[this.now];
      },
      changeUp:function(){
        this.now--;
        if(this.now < -1){
         return this.now = 0;
        }
        $("li[data-list='" + this.ulsLi + this.now + "']").addClass('active').siblings().removeClass('active');
        this.msg=this.messages[this.now];
      },
      change:function(index){
        this.now=index;
        this.msg=this.messages[this.now];
      },
      setSeachnav(el){
        this.msg = el;
      },
      closeData(el){
        this.myDataShows = el;
      }
    },
    screenTop() {
				this.scroll = document.documentElement.scrollTop;
				if(this.scroll >= 160) {
          this.myDataShows = false;
					$('.search-input').css({
						'position': 'fixed',
						'top': '20px'
					});
					this.scrollShow = true
				} else {
					$('.search-input').css({'position': 'relative','top': '0'});
					this.scrollShow = false
				}
			},
			toggleList(i, v) {
				this.active = i;
				this.currentView = v;
			}
	}
</script>
