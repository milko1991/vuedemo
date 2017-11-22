<template>
  <div class="circle">
    <canvas id="canvas_1" width="200" height="200"></canvas>
    <canvas id="canvas_2" width="200" height="200"></canvas>
  </div>
</template>

<style scoped="">
  .circle {
    width: 860px;
    height: 500px;
    position: relative;
  }

  canvas {
    display: block;
    margin: 0;
    position: absolute;
    background: white;
    top: 50%;
    left: 50%;
    margin: -100px 0 0 -100px;
  }

  #canvas_1 {
    z-index: 1
  }

  #canvas_2 {
    z-index: 2;
    background: transparent;
    transform: rotate(-90deg);
  }
</style>

<script>
  export default ({
    data() {
      return {}
    },
    mounted() {
      const percent = 90;
      const canvas_1 = document.getElementById('canvas_1');
      const canvas_2 = document.getElementById('canvas_2');

      const ctx_1 = canvas_1.getContext('2d');
      const ctx_2 = canvas_2.getContext('2d');

      ctx_1.lineWidth = 10;
      ctx_1.strokeStyle = "#ccc";

      //画底部的灰色圆环
      ctx_1.beginPath();
      ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
      ctx_1.closePath();
      ctx_1.stroke();

      if (parent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return;
      }

      ctx_2.lineWidth = 10;
      ctx_2.strokeStyle = "#f90";
      let angle = 0;
      let timer;

      (function draw() {
        timer = requestAnimationFrame(draw);
        ctx_2.clearRect(0, 0, canvas_2.width, canvas_2.height)
        //百分比圆环
        ctx_2.beginPath();
        ctx_2.arc(canvas_2.width / 2, canvas_2.height / 2, canvas_2.width / 2 - ctx_2.lineWidth / 2, 0, angle * Math.PI / 180, false);
        angle++;
        var percentAge = parseInt((angle / 360) * 100)
        if (angle > (percent / 100 * 360)) {
          percentAge = percent
          window.cancelAnimationFrame(timer);
        };
        ctx_2.stroke();
        ctx_2.closePath();
        ctx_2.save();
        ctx_2.beginPath();
        ctx_2.rotate(90 * Math.PI / 180)
        ctx_2.font = '30px Arial';
        ctx_2.fillStyle = 'red';
        var text = percentAge + '%';
        ctx_2.fillText(text, 80, -90);
        ctx_2.closePath();
        ctx_2.restore();
      })()

    }
  })
</script>
