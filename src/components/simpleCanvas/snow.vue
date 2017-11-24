<template>
  <div>
    <canvas id='canimg' width="860" height="500"></canvas>
    <canvas id='canv' width="860" height="500" @click="changeSnow"></canvas>
    <!--<h2>Midnight Snow</h2>-->
  </div>
</template>

<style scoped="">
  @import url(https://fonts.googleapis.com/css?family=Molle:400italic&subset=latin,latin-ext);

  body {
    margin: 0px;
    overflow: hidden;
    font-family: 'Molle', cursive;
  }

  #canv {
    background: transparent;
    position: absolute;
    top: 20px;
    left: 20px;
  }

  h2 {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 3em;
    color: hsla(255, 255%, 255%, .1);
  }
</style>

<script>
  export default ({
    data() {
      return {
        imgsrc: '../../static/snow1.jpg',
        timer: ""
      }
    },
    beforeDestroy() {
      window.cancelAnimationFrame(this.timer);
    },
    methods: {
      changeSnow() {
        window.cancelAnimationFrame(this.timer);
      },
      canvasBack() {
        var c1 = document.getElementById('canimg'), $2 = c1.getContext("2d");
        $2.clearRect(0, 0, c1.width, c1.height)
        var imgs = new Image();
        var imgs1 = new Image();
        imgs.src = this.imgsrc;
        imgs1.src = '../../static/snowMan.png';
        let that = this;
        imgs.onload = function () {
          $2.drawImage(imgs, 0, 0, 860, 500);
          $2.drawImage(imgs1, 300, 200, 381, 300)
          // debugger
          that.canvasInit();
        }
      },
      canvasInit() {
        var c = document.getElementById('canv'), $ = c.getContext("2d");
        var w = c.width,
          h = c.height,
          f;
        let that = this;

        Snowy();
        function Snowy() {
          var snow, arr = [];
          var num = 600, tsc = 1, sp = 1;
          var sc = 1.3, t = 0, mv = 20, min = 1;
          for (var i = 0; i < num; ++i) {
            snow = new Flake();
            snow.y = Math.random() * (h + 50);
            snow.x = Math.random() * w;
            snow.t = Math.random() * (Math.PI * 2);
            snow.sz = (100 / (10 + (Math.random() * 100))) * sc;
            snow.sp = (Math.pow(snow.sz * .8, 2) * .15) * sp;
            snow.sp = snow.sp < min ? min : snow.sp;
            arr.push(snow);
          }
          go();
          function go() {
            that.timer = requestAnimationFrame(go);
            $.clearRect(0, 0, w, h);

            for (var i = 0; i < arr.length; ++i) {
              f = arr[i];
              f.t += .05;
              f.t = f.t >= Math.PI * 2 ? 0 : f.t;
              f.y += f.sp;
              f.x += Math.sin(f.t * tsc) * (f.sz * .3);
              if (f.y > h + 50) f.y = -10 - Math.random() * mv;
              if (f.x > w + mv) f.x = -mv;
              if (f.x < -mv) f.x = w + mv;
              f.draw();
            }
          }

          function Flake() {
            this.draw = function () {
              this.g = $.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz);
              this.g.addColorStop(0, 'hsla(255,255%,255%,1)');
              this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
              $.moveTo(this.x, this.y);
              $.fillStyle = this.g;
              $.beginPath();
              $.arc(this.x, this.y, this.sz, 0, Math.PI * 2, true);
              $.fill();
            }
          }
        }
      }
    },
    mounted() {
      this.canvasBack();
    }
  })
</script>
