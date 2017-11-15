<template>
    <div class="vue-install">
      <h2 class="tx-c">install</h2>
      vue插件开发install
    </div>
</template>

<style>
</style>

<script>
    import Tost from '../../assets/script/tost.js'
    import Vue from 'vue';
    Vue.use(Tost);
    export default ({
        data() {
            return {}
        },
        mounted(){
          $('.vue-install').append('<p>组件测试输出： <h2>'+this.$msg+'</h2></p>')
        },
    })
</script>
