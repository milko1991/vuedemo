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
      <div class="items" v-for="items in content">
        <h3>{{items.tits}}</h3>
        <ul class="item-grid">
          <li v-for="imgsrc in items.arr">
            <a target="_blank" class="Link" :href="imgsrc.href">
              <i :style="imgsrc.img"></i>
              <b>{{imgsrc.title}}</b>
              {{imgsrc.subtitle}}
            </a>
          </li>
        </ul>
      </div>
		</div>
	</div>
</template>
<style scoped="">
  .item-grid li a.Link b {
    display: block;
    color: #30333C;
    font-weight: bold;
    transition: .2s;
  }
  a {
    color: #30333C;
    text-decoration: none;
    transition: .2s;
  }
  .panel-body {
    display: inline-block;
    width: 100%;
  }
  h3 {
    margin: 0 12px;
    height: 56px;
    font-size: 12px;
    font-weight: bold;
    line-height: 54px;
    border-bottom: 1px rgba(0,0,0,.05) solid;
    color: #30333c;
  }
  .items {
    margin-bottom: 24px;
    max-width: 100%;
    background: #fff;
    border-radius: 4px;
    padding: 0 12px;
    overflow: hidden;
  }
  .item-grid li a.Link i {
    float: left;
    width: 32px;
    height: 32px;
    display: block;
    margin: 2px 16px 0 0;
    border-radius: 4px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 32px;
  }
  .item-grid li:hover {
    background: #e0e0e0;
  }
  .item-grid li a.Link:hover b {
    color: #4588FF;
  }
  a:hover {
    text-decoration: none;
  }
  .item-grid li {
    position: relative;
    transition: .2s;
    float: left;
    width: calc(25% - 24px);
    overflow: hidden;
    border-radius: 4px;
    background: rgba(0,0,0,.02);
    margin: 24px 12px 0 12px;
  }
  .item-grid {
    margin: 0px;
    padding: 0px;
    font-family: "PingFangSC-Regular", "Helvetica Neue", "Microsoft Yahei", "微软雅黑";
    word-wrap: break-word;
    table-layout: fixed;
    word-break: break-all;
    box-sizing: border-box;
    font-size: 12px;
  }
  .item-grid li a.Link {
    display: block;
    height: 64px;
    line-height: 18px;
    padding: 14px 16px;
    color: #A1A7B7;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
<script>
  import http from 'http'
  import iconv from 'iconv-lite'
  import cheerio from 'cheerio'
	export default({
		data() {
			return {
        content: ''
			}
		},
    mounted(){
      this.fetchData();
    },
		props: {
		  propsHomeList: {
		    type: String,
		    required: true,
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
		},
    methods: {
      fetchData() {
        const url = '/ndn';
        let obj = [];
        http.get(url, function (sres) {
          var chunks = [];
          sres.on('data', function (chunk) {
            chunks.push(chunk);
          });
          sres.on('end', function () {
            var html = iconv.decode(Buffer.concat(chunks), 'utf-8');
            var $ = cheerio.load(html, {
              decodeEntities: false
            });
            var tit = '', arr = [];
            $('.item-grid ul li').each(function (idx, element) {
              var $element = $(element);
              var sub = $(element).find(">a").text();
              var src = $element.find("i").attr('style');
              src == undefined ?  src = "background-image:url('/images/Icon-No-Link.png')" : src = src;

              if(tit == ''){
                tit = $element.parents('ul').siblings('h3').text()
              }else{
                if($element.parents('ul').siblings('h3').text() != tit){
                  obj.push({
                    'tits': tit,
                    'arr': arr
                  })
                  tit = $element.parents('ul').siblings('h3').text()
                  arr = []
                }
              }
              arr.push({
                'title': $element.find('b').text(),
                'subtitle': sub.replace($element.find('b').text(), ''),
                'img': src.split("'")[0] + "'http://www.niudana.com" + src.split("'")[1] + "'",
                'href': 'http://www.niudana.com' + $element.find('a').attr('href')
              })
            })
          });
        });
        this.content = obj;
      },
    }
	})
</script>

<style>
</style>
