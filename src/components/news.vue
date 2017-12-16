<template>
  <div style="width: 1200px; margin: 0 auto;">
    <ul class="getJsonDemo">
      <li v-for="article in articles">
        <h4 class="tx-c" v-text="article.title"></h4>
        <img :src="getImage(article.images.medium)"/>
      </li>
    </ul>
    <!--<a href="#/map">111</a>-->
    <span style="margin: 10px 20px 10px 20px" v-for="titles in moviesTitle">
      {{titles.title}}
    </span>
    <br/>
    <p style="white-space: pre">
      1. 赋值: let [a,b,c] = [1,2,3]
      2. 循环遍历字符串 for(let i of 'abc'){console.log(i)}; //'a','b','c'
      3. 返回字符串给定位置的字符 'abc'.charAt(0) //'a'
      4. 确定一个字符串是否包含在另一个字符串中
          let s = 'hello world';
          s.startsWith('hello') //true
          s.endsWith('i') //true
          s.includes('o') //true
          这三个方法支持第二个参数，表示开始搜索的位置
          s.startsWidth('world', 6); //true
          s.endsWith('hello', 5); //true
          s.includes('hello', 6); //false
      5. repeat方法范湖一个新字符串，表示将原字符串重复n次,如果是小数，则会被取整，如果为负数，则会被报错
          'x'.repeat(3) //'xxx'
      6. 字符串补全长度功能，该常见用途是为数值补全指定位数。
          '12'.padStart(10, '0') //0000000012
         另一个用途是提示字符串格式.
          '12'.padStart(10, 'YYYY-MM-DD');
      7. 模板字符串
          $("#result").append(`
            There are &lt;b&gt;${basket.count}&lt;/b&gt; items in your basket
          `);
      8. 模板编译
          let template = `
            &lt;ul&gt;
                  <% for(let i=0; i < data.supplies.length; i++) { %>
                        &lt;li&gt;<%= data.supplies[i] %>&lt;/li&gt;
                  <% } %>
            &lt;/ul&gt;
          `;
      9. Number.isInteger()用来判断一个值是否为整数,返回true或者false
         Number.parseInt('12.14') //12
         Number.parseFloat('123.45#') //123.45
      10. Math.sign()方法用来判断一个数到底是正数，负数，还是零。正数、true为1，负数为-1，零、false、null为0
      11. Math.chrt()方法用来计算一个数的立方根 Math.cbrt(8) //2
      12. Math.hypot() 方法范湖所有参数的平方和的平方根。 Math.hypot(3,4); //5
      13. 为函数设置默认值，即直接写在参数定义的后面。
          function logs(x, y = 'world'){
            console.log(x,y)
          };
          logs('hello') //hello world
          logs('hello','china') //hellow china
    </p>
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
      var html = '';
      for(let i = 0; i < 10; i++){
        for(let y = 0; y <= i; y ++){
          if(y == i){
            html += i + " * " + y + " = " + ( i * y );
          }else {
            html += i + " * " + y + " = " + ( i * y ) + ',  ';
          }
        }
        html +="\n"
      }
      console.log('啦啦啦，乘法口诀表\n' + html)

      //链接外网网址取得页面数据
      this.fetchData();
      //获取本地Json数据
      this.showLocaljson();
      //获取外网Json数据
      this.douBanJson();
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
      getImage(url){
        if(url !== undefined){
          var srcUrl = url.split('/');
          srcUrl = '/static/images/' + srcUrl[srcUrl.length - 1];
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
          //console.log(response)
          this.articles = response.data.subjects;
        }, response => {
          // error callback
        })
      },
      getPromise(){
        const promise = new Promise(function (resolve, reject) {
          const image = new Image();
          image.onload = function () {
            resolve(image)
          };
          image.onerror = function () {
            reject(new Error('could not load image'))
          }
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
