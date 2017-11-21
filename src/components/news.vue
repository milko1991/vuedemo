<template>
  <div style="width: 1200px; margin: 0 auto;">
    <ul class="getJsonDemo">
      <li v-for="article in articles">
        <h4 class="tx-c" v-text="article.title"></h4>
        <img :src="getImage(article.images.medium)"/>
      </li>
    </ul>
    <span style="margin: 10px 20px 10px 20px" v-for="titles in moviesTitle">
      {{titles.title}}
    </span>
  </div>
</template>

<script>
  import cheerio from 'cheerio'
  import http from 'http'
  import iconv from 'iconv-lite'
  import axios from 'axios'
  export default ({
    data() {
      return {
        articles: [],
        moviesTitle : [],
      }
    },
    created() {
    },
    mounted() {
      //链接外网网址取得页面数据
      this.fetchData();
      //获取本地Json数据
      this.showLocaljson();
      //获取外网Json数据
      this.douBanJson();
      console.log(this.moviesTitle)
    },
    methods: {
      fetchData() {
        const url = '/ygdy';
        let titles = [];
        http.get(url + '/html/gndy/dyzz/index.html', function (sres) {
          var chunks = [];
          sres.on('data', function (chunk) {
            chunks.push(chunk);
          });
          // chunks里面存储着网页的 html 内容，将它zhuan ma传给 cheerio.load 之后
          // 就可以得到一个实现了 jQuery 接口的变量，将它命名为 `$`
          // 剩下就都是 jQuery 的内容了
          sres.on('end', function () {
            //由于咱们发现此网页的编码格式为gb2312，所以需要对其进行转码，否则乱码
            //依据：“<meta http-equiv="Content-Type" content="text/html; charset=gb2312">”
            var html = iconv.decode(Buffer.concat(chunks), 'gb2312');
            var $ = cheerio.load(html, {
              decodeEntities: false
            });
            $('.co_content8 .ulink').each(function (idx, element) {
              var $element = $(element);
              titles.push({
                title: $element.text()
              })
            })
          });
        });
        this.moviesTitle = titles;
      },
      getImage(srcUrl){
        if(srcUrl !== undefined){
          var srcUrl = srcUrl.replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p');
          return srcUrl;
        }
      },
      showLocaljson() {
        axios.get('/static/json/index.json').then(response => {
        }, response => {
          // error callback
        })
      },
      douBanJson() {
        const apiUrl = '/api';
        axios.get(apiUrl + '/movie/top250?count=10').then(response => {
          console.log(response)
          this.articles = response.data.subjects;
        }, response => {
          // error callback
        })
      }
    }
  })
</script>
<style scoped="">
  .getJsonDemo {
    display: flex;
    flex-direction: row;
  }
  .getJsonDemo li {
    margin: 30px 5px 0 5px;
  }
  .getJsonDemo li img {
    width: 100%;
  }
</style>
