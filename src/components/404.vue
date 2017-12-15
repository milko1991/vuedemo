<template>
    <div>
      <div class="error404">
        <img src="../assets/404.png" />
       <md-button @click="returnHome" class="md-raised md-auto md-accent">返回首页</md-button>
      </div>
    </div>
</template>

<style>
  .error404 {width: 800px; margin: 50px auto 0;}
  img {width: 100%;}
  .md-auto {margin: -50px auto; display: block}
</style>

<script>
    export default ({
        data() {
            return {}
        },
        methods : {
          returnHome(){
            this.$router.push('/index')
          }
        }
    })
</script>
