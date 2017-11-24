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
  import Movedrawpen from './simpleCanvas/moveDrawpen.vue'
  import ThreeOne from './simpleCanvas/three_one.vue'
  import Snow from './simpleCanvas/snow.vue'
  export default ({
    data() {
      return {
        active: 5,
        vueName: 'threeOne',
        simpleList: [
          'movecicle','moveffect','movepercent','movedrawpen','snow','threeOne'
        ]
      }
    },
    components: {
      'moveffect': Moveffect,
      'movecicle': Movecicle,
      'movepercent': Movepercent,
      'movedrawpen': Movedrawpen,
      'snow': Snow,
      'threeOne':ThreeOne
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
