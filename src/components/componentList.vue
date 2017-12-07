<template>
	<div class="panel-body">
		<div class="myWorkList" v-if="propsHomeList == 'child1'" >
			<dl v-for="(monthList,indexs) in homeOneList">
				<dt>{{homeOneList[indexs].theMonth}}</dt>
				<dd v-for="(list,index) in homeOneList[indexs].datails">
					<h4>{{(index + 1 ) + "、" + list.projects}}</h4>
					<span v-for="(work,index) in list.work">{{(index + 1) + "、" + work}}</span>
				</dd>
			</dl>
		</div>
		<div class="recommend" v-if="propsHomeList == 'child2'" >
			<div class="nav-left">
				<div class="tit"><span>以下信息根据您的兴趣推荐</span></div>
				<ul>
					<li v-for="recod in recomLeftList">
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
				<strong>实时热点</strong>
				<ul>
					<li v-for="list in recomRightList"><a :href="list.href">{{list.title}}</a></li>
				</ul>
			</div>
		</div>
		<div v-if="propsHomeList == 'child3'" >
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
		props: {
		  propsHomeList: {
		    type: String,
		    required: true,
//		    validator: function (value) {
//		      return [
//		        'propsList'
//		      ].indexOf(value) !== -1
//		    }
		  }
		},
		computed : {
			recomLeftList() {
				return this.$store.state.recomendList[0];
			},
			recomRightList() {
				return this.$store.state.recomendList[1];
			},
			homeOneList() {
				return this.$store.state.homeOneList;
			}
		}
	})
</script>

<style>
</style>
