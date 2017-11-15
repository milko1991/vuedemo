<template>
    <div>
      <h2 class="tx-c">filter过滤器</h2>
       字母前后转换：<span>{{message | reverse}}</span>
    </div>
</template>

<style>
</style>

<script>
    import Vue from 'vue'
//    Vue.filter('reverse', function (value) {
//      return value.toUpperCase();
//    })
    export default ({
        data() {
            return {
              message : 'abcdefg'
            }
        },
        filters : {
          reverse (value){
            return value.split('').reverse().join('');
          }
        }
    })
</script>
