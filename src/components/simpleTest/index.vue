<template>
  <div class="pageList" style="width: 1200px">
    <ul class="listUl">
      <li @click="toggleClass(index)" v-for="(listview,index) in simpleList" :class="{active : active == index}">{{listview}}</li>
    </ul>
    <div class="panel-body">
      <component :is="vueName"></component>
    </div>
    <div style="white-space: pre; display: inline-block">
      <div style="width: 400px; float: left; overflow: auto; border-right: 1px solid #E0E0E0">
        <div class="tx-c">工厂模式：</div>
        function createPerson(name, age, job){
          var o = new Object();
          o.name = name;
          o.age = age;
          o.job = job;
          o.sayName = function(){
          alert(this.name);
          };
          return o;
        }
        var person1 = createPerson("Nicholas", 29, "Software");
        var person2 = createPerson("Greg", 27, "Doctor");
      </div>
      <div style="width: 400px; float: left; overflow: auto; border-right: 1px solid #E0E0E0">
        <div class="tx-c">构造函数模式：</div>
        function Person(name, age, job){
          this.name = name;
          this.age = age;
          this.job = job;
          this.sayName = function(){
            alert(this.name);
          };
        }
        var person1 = new Person("Nicholas", 29, "Software");
        var person2 = new Person("Greg", 27, "Doctor");
      </div>
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
              active : 2,
              vueName : 'filters',
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
