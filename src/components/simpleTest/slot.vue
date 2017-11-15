<template>
    <div>
    <slotTest>
      <span slot="first">slot-1</span>
      <span slot="second">slot-2</span>

      <span slot="three" @click="slotBin">slot-3</span>
      <span slot="four">slot-4</span>
    </slotTest>


    </div>
</template>

<style>
</style>

<script>
  import slotTest from './slot-Test.vue'
  export default ({
        data() {
            return {
              items : [
                1,2,3,4,5,6
              ]
            }
        },
        props: {
          simplesContent : {
            type : String
          }
        },
        methods: {
          slotBin() {
            alert(1)
          }
        },
        render (createElement){
          if(this.items.length){
            return createElement('ul', this.items.map = (item) => {
              return createElement('li', item)
            })
          }else {
            return createElement('p', 'no items found')
          }
        },
        components: {
          'slotTest':slotTest
        }
  })
</script>
