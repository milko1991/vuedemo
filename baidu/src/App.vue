<template>
  <div id="app">
  	<toheader></toheader>
  	<div class="cantainer">
  		<router-view></router-view>
  	</div>
  </div>
</template>

<script>
	import toHeader from './components/toHeader.vue'
	
	export default {
	  components:{'toheader': toHeader}
	}
</script>
