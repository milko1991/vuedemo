<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<style>
</style>

<script>
  export default ({
    data() {
      return {
        timer : ''
      }
    },
    beforeDestroy(){
      window.cancelAnimationFrame(this.timer);
    },
    mounted() {
      let canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        //w = document.body.clientWidth,
        //h = document.body.clientHeight - 60,
        w = 860,
        h = 500,
        Mx,
        My,
        loopOut = true,
        paused = true,
        arr = [],
        booms = [],
        boomks = []
      canvas.width = w;
      canvas.height = h;

      //鼠标移入，赋值创建图形
      canvas.onmousemove = function (e) {
        loopOut = true;
        const loc = canvasMove(e.clientX, e.clientY);
        Mx = loc.x;
        My = loc.y;
      };

      canvas.onmousedown = function () {
        createArry(Mx, My);
        paused = !this.paused;
      }

      //鼠标移出，arr数组不在接收新数据，并持续移除当前长度直至为0
      canvas.onmouseleave = function (e) {
        loopOut = false;
      }

      function createArry(a, b) {
        for (let i = 0; i < 40; i++) {
          booms[i] = {
            x: a,
            y: b,
            gravity: 0.3,
            speedX: Math.random() * 20 - 10,
            speedY: Math.random() * 15 - 7,
            radius: Math.random() * 15,
            color: Math.random() * 360,
            apc: 0.6
          };
          boomks.push(booms[i]);
          if (boomks.length > 300) {
            boomks.shift()
          }
        }
      }

      function loop1() {
        boomks.forEach(function (circle) {
          context.beginPath();
          context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
          context.fillStyle = "hsla(" + circle.color + ",100%,60%," + circle.apc + ")";
          context.fill();
          circle.x += circle.speedX;
          circle.speedY += circle.gravity;
          circle.y += circle.speedY;
          circle.apc -= 0.008
        })
      }

      function canvasMove(x, y) {
        const bbox = canvas.getBoundingClientRect();
        return {
          x: x - bbox.left * (canvas.width / bbox.width),
          y: y - bbox.top * (canvas.height / bbox.height)
        }
      }

      let that = this;
      fang()
      function fang() {
        that.timer = requestAnimationFrame(fang);
        context.clearRect(0, 0, canvas.width, canvas.height);
        loop1();
        loop();
      };

      function loop() {
        if (loopOut) {
          const circle = new createCircle(Mx, My);
          arr.push(circle);
        }
        for (let i = 0; i < arr.length; i++) {
          let ss = arr[i];
          ss.render(context);
          ss.update();
        }
        if (arr.length > 100) {
          arr.shift();
        }
      }

      function createCircle(x, y) {
        this.x = x;
        this.y = y;
        this.color = Math.random() * 360;
        this.radius = Math.random() * 25;
        this.xVel = Math.random() * 5 - 2;
        this.apc = 0.6;
        this.gravity = 0.02;
        this.yVel = Math.random() * 10 - 3;
        this.render = c => {
          c.beginPath();
          c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
          c.fillStyle = 'hsla(' + this.color + ',100%,60%,' + this.apc + ')';
          c.fill()
        };
        this.update = () => {
          if (!paused) {
            this.yVel += this.gravity;
            this.y += this.yVel;
          } else {
            this.y -= 5;
          }
          this.x += this.xVel;
          this.apc -= 0.01;
          if (this.radius > 1) {
            this.radius -= 0.4;
          }
        }
      }
    },
  })
</script>
