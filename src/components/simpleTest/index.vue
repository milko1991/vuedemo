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
  import vueSlot from './slot.vue'
  import vueInstall from './install.vue'
  import vueFllter from './filter.vue'
    export default ({
        data() {
            return {
              active : 0,
              vueName : 'slots',
              simpleList : [
                'slots','install','filters'
              ]
            }
        },
        components: {
          'slots':vueSlot,
          'install': vueInstall,
          'filters': vueFllter
        },
        methods: {
          toggleClass(i) {
            this.active = i;
            this.vueName = this.simpleList[i];
          }
        }
    })
</script>
