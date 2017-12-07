<template>
  <div>
    <canvas id="nokey" width="860" height="500"></canvas>
  </div>
</template>

<style>
  canvas {
    background: black
  }
</style>

<script>
  export default ({
    data() {
      return {
        timer : ''
      }
    },
    mounted() {
      var canvas = document.getElementById('nokey'),
          w = 860,
          h = 500,
          t = 0,
          l = 0,
          ds = 5,
          startY = 0,
          paint = false,
          downs = false,
          ctx = canvas.getContext('2d');

      ctx.beginPath();
      ctx.arc(t,l,20,0,Math.PI * 2, false);
      ctx.fillStyle = "#FF0000";
      ctx.fill();

      canvas.onmousedown = function (e) {
        var getAddress =  getPosition(e.clientX, e.clientY);
        var xcicle = getAddress.x - l - 20;
        var ycicle = getAddress.y - t - 20;

        if(Math.hypot(xcicle,ycicle) < 20){
          paint = true;
          canvas.onmousemove = function (event) {
            if(paint){
              var getSub = getPosition(event.clientX, event.clientY);
              l = getSub.x - xcicle - 20;
              t = getSub.y - ycicle - 20;
              downs = false;
            }
          }
          canvas.onmouseup = function () {
            var getSub = getPosition(event.clientX, event.clientY);
            startY = getSub.y;
            paint = false;
            downs = true;
          }
          canvas.onmouseout = function () {
            paint = false;
            downs = true;
          }
        }
      }

      function getPosition(x,y) {
        const bbox = canvas.getBoundingClientRect();
        return {
          x: x - bbox.left * (canvas.width / bbox.width),
          y: y - bbox.top * (canvas.height / bbox.height)
        }
      }

      let that = this;
      createLinePath();
      function createLinePath() {
        that.timer = requestAnimationFrame(createLinePath);
        if(downs == true) {
          t += ds;
          if(t >= 460){
            ds *= -0.8;
            t = 460;
          }
          ds += 2;
        }
        if(t <= 0) t = 0;
        if(t >= 460) t = 460;
        if(l <= 0) l = 0;
        if(l >= 820) l = 820;
        ctx.clearRect(0,0,w,h);
        ctx.beginPath();
        ctx.arc(l + 20,t + 20,20,0,Math.PI * 2, false);
        ctx.fill();
      }
    }
  })
</script>
