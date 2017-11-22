<template>
    <div class="vue-install">
      <button @click="refclick">点击</button>
      <div class="menu" ref="refContent">{{refsText.txt}}<span v-show="refsText.nameshow">{{' , ' + refsText.name}}</span></div>
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
            return {
              refsText : {
                txt : 'ref属性示例',
                nameshow : false
              }
            }
        },
        mounted(){
        },
        methods: {
          refclick() {
            // console.log(this.$refs.refContent.offsetTop)
            this.$set(this.refsText, 'name', 'milko');
            this.$set(this.refsText, 'nameshow', true);
            //console.log(this.refsText[0].name)
            this.$refs.refContent.onmousemove = function(){alert(1)}
            // debugger
          }
        }
    })
</script>
