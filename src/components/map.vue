<template>
	<div id="news">
    <div v-show="">
      <input v-model.number="number" type="number" step="20" />
      <p>{{ animatedNumber }}</p>
    </div>
    <vueSimple ></vueSimple>
	</div>
</template>

<script>
  import vueSimple from './simpleTest/index.vue'
	export default({
		data (){
			return {
				number: 0,
				animatedNumber: 0,
			}
		},
		watch: {
			number (newValue, oldValue) {
			    var vm = this;
			    function animate () {
			        if (TWEEN.update()) {
			            requestAnimationFrame(animate);
			      	}
			    };
			    new TWEEN.Tween({ tweeningNumber: oldValue })
			      	.easing(TWEEN.Easing.Quadratic.Out)
			       	.to({ tweeningNumber: newValue }, 500)
			       	.onUpdate(function () {
			        vm.animatedNumber = this.tweeningNumber.toFixed(0)
			       	})
			       	.start();

			    animate();
			}
		},
    methods: {

    },
    components: {
		  vueSimple
    }
	})
</script>

<style>
	#news input[type='number'] {width: 200px; height: 30px; border: 1px double #E0E0E0;}
</style>
