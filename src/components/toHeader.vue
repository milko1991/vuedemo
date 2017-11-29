<template>
	<div class="headerBar">
      <wearther></wearther>
      <ul class="headerList">
          <li :class="{'btn-primary': links.hrefLink == 'more','active' : $route.path == links.hrefLink}" v-for="links in toLink">
            <div v-if="links.hrefLink == '/more'">
              <div v-text="moreText" @mouseenter="toggleShow()"></div>
            </div>
            <span v-else>
              <router-link :class="{'active' : $route.path == 'links.hrefLink'}" :to="links.hrefLink">{{links.title}}</router-link>
            </span>
          </li>
      </ul>
      <div class="more-Show animated" :class="{'fadeIn': tofalse}" v-show="moreshow" @mouseleave="toggleShow()">
        <h4>欢迎查看</h4>
        <ul>
          <li v-for="showlist in showitems">
            <img :src="showlist.imgsrc" :title="showlist.comment">
            <span>{{ showlist.comment }}</span>
          </li>
        </ul>
      </div>
	</div>
</template>

<script>
	import Wearther from '../components/wearther.vue'
	export default {
		data() {
			return {
				moreshow: false,
				tofalse: false,
        toLink : [
          {
            title: 'HOME', hrefLink : '/'
          },{
            title: 'AXIOS', hrefLink : '/axios'
          },{
            title: 'VUE' , hrefLink : '/map'
          },{
            title: 'CANVAS' , hrefLink : '/canvas'
          },{
            title: 'VUEMATERIAL', hrefLink : '/vuematerial'
          },{
            title: 'MORE', hrefLink : '/more'
          }

        ],
				moreText: '更多产品'
			}
		},
		components: {
			'wearther': Wearther,
		},
		computed: {
			showitems() {
				return this.$store.state.homeState.list;
			}
		},
		methods: {
			toggleShow() {
				this.moreshow = !this.moreshow;
			}
		},
		watch: {
			moreshow(newVal) {
			 	newVal ? this.moreText = '欢迎查看' : this.moreText = '更多产品'
			}
		}
	}
</script>
