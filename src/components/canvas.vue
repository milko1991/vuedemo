<template>
  <div class="pageList">
    <ul class="listUl">
      <li @click="toggleClass(index)" v-for="(listview,index) in simpleList" :class="{active : active == index}">{{listview}}</li>
    </ul>
    <div class="panel-body">
      <component :is="vueName"></component>
    </div>
  </div>
</template>

<style>
</style>

<script>
  import Moveffect from './simpleCanvas/movEffectt.vue'
  import Movecicle from './simpleCanvas/moveCicle.vue'
  import Movepercent from './simpleCanvas/movePercent.vue'
  export default ({
    data() {
      return {
        active: 0,
        vueName: 'movecicle',
        simpleList: [
          'movecicle','moveffect','movepercent'
        ]
      }
    },
    components: {
      'moveffect': Moveffect,
      'movecicle': Movecicle,
      'movepercent': Movepercent
    },
    updated(){
     //
    },
    methods: {
      toggleClass(i) {
        this.active = i;
        this.vueName = this.simpleList[i];

      }
    }
  })
</script>
