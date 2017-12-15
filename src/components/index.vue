<template>
    <div>
      <toheader></toheader>
      <div class="cantainer">
        <transition>
          <router-view></router-view>
        </transition>
      </div>
      <div @click="scrolTop" v-show="scrollShow" class="scrollTop animated fadeIn"></div>
    </div>
</template>

<style>
</style>

<script>
  import toHeader from '../components/toHeader.vue'
    export default ({
      data(){
        return {
          scrollShow : false,
          loginshow: false,
          dataBase : '',
        }
      },
      components:{'toheader': toHeader},
      mounted() {
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
        },
      }
    })
</script>
