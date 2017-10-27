<template>
	<div>
		<nav class="clear" id="navHome">
			<img src="../images/baidu.png" width="270"/>
			<div class="search-input">
				<input type="text" value="" placeholder="" v-model="searchInput" />
				<button @click="btnSearch">百度一下</button>
			</div>
		</nav>
		<div class="scrollSearch animated" :class="{'fadeIn': scrollShow}" v-show="scrollShow"></div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				searchInput : '',
				toshow : '',
				scroll : '',
				scrollShow : false
			}
		},
		mounted() {
				window.addEventListener('scroll', this.screenTop);
		},
		computed : {
			plan() {
				return this.$store.state.name;
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
		}
	};
</script>

<style>
</style>