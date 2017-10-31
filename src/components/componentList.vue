<template>
	<div class="panel-body">
		<div v-if="propsList == 'child1'" >
			child1
		</div>
		<div class="recommend" v-if="propsList == 'child2'" >
			<div class="nav-left">
				<div class="tit"><span>以下信息根据您的兴趣推荐</span></div>
				<ul>
					<li v-for="recod in recomList">
						<div v-if="recod.imgList.length == 1">
							<div class="pull-right">
								<span>
									{{recod.comment}}
									<div class="dress">{{recod.dress + " "+ recod.time}}</div>
								</span>
							</div>
							<div class="inline-block">
								<img :src="recod.imgList" />
							</div>
						</div>
						<div v-else>
							<span>{{recod.comment}}</span>
							<div class="inline-block">
								<img v-for="tagimg in recod.imgList" :src="tagimg" />
							</div>
							<div class="dress">{{recod.dress + " "+ recod.time}}</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="nav-right">
				111
			</div>
			
		</div>
		<div v-if="propsList == 'child3'" >
			child3
		</div>
	</div>
</template>

<script>
	export default({
		data() {
			return {
				
			}
		},
		props: ['propsList'],
		computed : {
			recomList() {
				console.log(this.$store.state.recomendList)
				return this.$store.state.recomendList;
			}
		}
	})
</script>

<style>
</style>