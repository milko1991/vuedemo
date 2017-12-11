<template>
  <div id="app">
  	<toheader></toheader>
  	<div class="cantainer">
  		<router-view></router-view>
  	</div>
    <div @click="scrolTop" v-show="scrollShow" class="scrollTop animated fadeIn"></div>
  </div>
</template>
<script>
	import toHeader from './components/toHeader.vue'
	export default {
	  data(){
	    return {
        scrollShow : false
      }
    },
	  components:{'toheader': toHeader},
    mounted(){
      window.addEventListener('scroll', this.scrollY);
    },
    methods: {
      scrollY (){
        if ($(window).scrollTop() > 1000){
          this.scrollShow = true
        }
        else{
          this.scrollShow = false
        }
      },
      scrolTop(){
        $('html, body').animate({scrollTop: 0}, 1000);
      }
    }
	}
</script>
