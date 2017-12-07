<template>
    <div>
      <div id="tool" style="display: inline-block;" ref="tools">
        <div id="bgselect">
          背景颜色
          <span data="#000" style="background:#000"></span>
          <span data="#fff" class="on" style="background:#fff"></span>
          <span data="#f00" style="background:#f00"></span>
          <span data="#00f" style="background:#00f"></span>
          <span data="#0f0" style="background:#0f0"></span>
          <span data="#333" style="background:#333"></span>
          <span data="#666" style="background:#666"></span>
          <span data="#999" style="background:#999"></span>
        </div>
        <div id="pensize" class="on">
          画笔
          <span id='size1' class="on"></span>
          <span id='size2'></span>
          <span id='size3'></span>
        </div>
        <div id="pencolor">
          画笔颜色
          <span data="#000" class="on" style="background:#000"></span>
          <span data="#fff" style="background:#fff"></span>
          <span data="#f00" style="background:#f00"></span>
          <span data="#00f" style="background:#00f"></span>
          <span data="#0f0" style="background:#0f0"></span>
          <span data="#333" style="background:#333"></span>
          <span data="#666" style="background:#666"></span>
          <span data="#999" style="background:#999"></span>
        </div>
        <div id="eraser">
          橡皮擦
          <span id='era1' class="on"></span>
          <span id='era2'></span>
          <span id='era3'></span>
        </div>
        <div id="reset">重置画布</div>
      </div>

      <div id="area">
        <canvas id="canvas"></canvas>
      </div>
    </div>
</template>

<style scoped="">
  #canvas{
    /*-webkit-box-shadow: 0px 0px 10px #ccc;
          box-shadow: -5px -5px 10px #ccc;*/
    border:1px solid #ccc;
    background: white;
  }
  #tool div{
    padding:10px; font-size: 14px; cursor: pointer;
  }
  #tool div.on{
    background: #e5e5e5;
  }
  #pensize span,#eraser span{
    border-radius: 50%; display: inline-block; margin-right: 5px; background: #fff; border:1px solid #000;
  }
  #pensize span:nth-child(1),#eraser span:nth-child(1){
    width:10px;height: 10px;
  }
  #pensize span:nth-child(2),#eraser span:nth-child(2){
    width:15px;height: 15px;
  }
  #pensize span:nth-child(3),#eraser span:nth-child(3){
    width:20px;height: 20px;
  }
  #pensize span.on,#eraser span.on{
    background: #000; border:none;
  }

  #bgselect span,#pencolor span{
    width: 20px; height:20px; border:1px solid #ccc; margin-right: 5px; display: inline-block;
  }
  #bgselect span.on,#pencolor span.on{
    border:2px solid #f00;
  }
</style>

<script>
    export default ({
        data() {
            return {}
        },
        mounted(){
          var canvas = document.getElementById('canvas');
          var ctx = canvas.getContext('2d');

          /* 画笔的样式 */
          var bgcolor='rgb(255,255,255)',
            pensizeval=10,
            erasize = 10,
            pencolorval='rgb(0,0,0)',
            ispen=1,
            iseraser=0,
            candraw = 0;


          // canvas.width = window.innerWidth;
          // canvas.height = window.innerHeight;
          canvas.width = 860;
          canvas.height = 500 - this.$refs.tools.offsetHeight;

          var touchStart,touchMove,touchEnd;
          touchStart = isMobile() ? 'touchstart' : 'mousedown';
          touchMove = isMobile() ? 'touchmove' : 'mousemove';
          touchEnd = isMobile() ? 'touchend' : 'mouseup';

          /* 绘画操作开始 */
          canvas.addEventListener(touchStart,function(){
            candraw = 1;
            //获取现在画笔的样式
            ctx.beginPath();
            if(iseraser == 1){
              ctx.lineWidth = erasize;
            }else if(ispen == 1){
              ctx.lineWidth = pensizeval;
            }

            if(iseraser == 1){
              ctx.strokeStyle = bgcolor;
            }else if(ispen == 1){
              ctx.strokeStyle = pencolorval;
            }

            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            var nowpos;

            if(isMobile()){
              event.preventDefault();
              var touch = event.targettouches[0];
              nowpos = getNowpos(canvas,touch.clientX,touch.clientY);
            }else{
              nowpos = getNowpos(canvas,event.clientX,event.clientY);
            }
            var x,y;

            x = nowpos.x;
            y = nowpos.y;

            ctx.moveTo(x,y);

          },false);

          canvas.addEventListener(touchMove,function(){

            if(candraw == 1){
              var nowpos2;
              if(isMobile()){
                event.preventDefault();
                var touch = event.touches[0];
                nowpos2 = getNowpos(canvas,touch.clientX,touch.clientY);
              }else{
                nowpos2 = getNowpos(canvas,event.clientX,event.clientY);
              }
              var x2,y2;

              x2 = nowpos2.x;
              y2 = nowpos2.y;

              ctx.lineTo(x2,y2);
              ctx.stroke();

              canvas.addEventListener(touchEnd,function(){
                candraw = 0;
                ctx.closePath();

              },false);
            }
          },false);

          /* 点击橡皮擦 */
          var eraser = document.getElementById('eraser'),
            era1=document.getElementById('era1'),
            era2=document.getElementById('era2'),
            era3=document.getElementById('era3');
          eraser.addEventListener(touchEnd,function(){
            divon('eraser');
            iseraser =  1;
            ispen = 0;
            ctx.globalCompositeOperation = "destination-out";
            switch(event.target.id){
              case 'era1':
                erasize = 10;
                era1.className = 'on';
                era2.className = '';
                era3.className = '';
                break;
              case 'era2':
                erasize = 15;
                era2.className = 'on';
                era1.className = '';
                era3.className = '';
                break;
              case 'era3':
                erasize = 20;
                era3.className = 'on';
                era1.className = '';
                era2.className = '';
                break;
            }

          });

          /* 点击背景颜色选择 */
          var bgselect = document.getElementById('bgselect');
          bgselect.addEventListener(touchEnd,function(){
            var color = event.target.getAttribute('data');
            if(color != null){
              bgcolor = color;
              // ctx.fillStyle = color;
              // ctx.fillRect(0,0,500,500);
              canvas.style.background = color;

              for(var b = 0; b < bgselect.getElementsByTagName('span').length;b++){
                bgselect.getElementsByTagName('span').item(b).className = '';
              }
              event.target.className = 'on';

            }
          });

          /* 点击画笔颜色选择 */
          var pencolor = document.getElementById('pencolor');
          pencolor.addEventListener(touchEnd,function(){
            var color = event.target.getAttribute('data');
            if(color != null){
              pencolorval = color;
              for(var b = 0; b < pencolor.getElementsByTagName('span').length;b++){
                pencolor.getElementsByTagName('span').item(b).className = '';
              }
              event.target.className = 'on';

            }
          });

          /* 点击重置画布 */
          var reset = document.getElementById('reset');
          reset.addEventListener(touchEnd,function(){
            divon('reset');
            ctx.clearRect(0,0,860,canvas.height);

            setTimeout(function(){
              bgcolor='rgb(255,255,255)';
              pensizeval=10,
                erasize = 10;
              pencolorval='rgb(0,0,0)',
                ispen=1,
                iseraser=0,
                candraw = 0;

              era1.className = 'on';
              era2.className = '';
              era3.className = '';

              size1.className = 'on';
              size2.className = '';
              size3.className = '';
            },300);
          });

          /* 点击画笔 */
          var pensize = document.getElementById('pensize'),
            size1=document.getElementById('size1'),
            size2=document.getElementById('size2'),
            size3=document.getElementById('size3');

          pensize.addEventListener(touchEnd,function(){
            divon('pensize');
            ispen =  1;
            iseraser = 0;
            ctx.globalCompositeOperation = "source-over";
            switch(event.target.id){
              case 'size1':
                pensizeval = 10;
                size1.className = 'on';
                size2.className = '';
                size3.className = '';
                break;
              case 'size2':
                pensizeval = 15;
                size2.className = 'on';
                size1.className = '';
                size3.className = '';
                break;
              case 'size3':
                pensizeval = 20;
                size3.className = 'on';
                size2.className = '';
                size1.className = '';
                break;
            }
          });


          function divon(objId){
            var tooldiv = document.getElementById('tool').getElementsByTagName('div');
            for(var i = 0; i < tooldiv.length; i++){
              tooldiv.item(i).className = '';
            }
            document.getElementById(objId).className = 'on';
          }



          /* 返回当前鼠标的坐标 */
          function getNowpos(canvas,x,y){
            var bbox = canvas.getBoundingClientRect();
            return {
              x : x - bbox.left*(canvas.width/bbox.width),
              y : y - bbox.top*(canvas.height/bbox.height)
            };
          }


          //判断是否为手机
          function isMobile(){
            var sUserAgent= navigator.userAgent.toLowerCase(),
              bIsIpad= sUserAgent.match(/ipad/i) == "ipad",
              bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os",
              bIsMidp= sUserAgent.match(/midp/i) == "midp",
              bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
              bIsUc= sUserAgent.match(/ucweb/i) == "ucweb",
              bIsAndroid= sUserAgent.match(/android/i) == "android",
              bIsCE= sUserAgent.match(/windows ce/i) == "windows ce",
              bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile",
              bIsWebview = sUserAgent.match(/webview/i) == "webview";
            return (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM);
          }
        }
    })
</script>
