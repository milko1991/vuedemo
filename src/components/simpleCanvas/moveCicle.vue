<template>
  <div>
    <canvas id="canvas" width="860" height="500"></canvas>
  </div>
</template>

<style>

</style>

<script>
  export default ({
    data() {
      return {
        timer: '',
      }
    },
    beforeDestroy() {
      window.cancelAnimationFrame(this.timer);
//         clearInterval(this.timer);
    },
    methods: {},
    mounted() {
      var canvas = document.getElementById('canvas'),
        c = canvas.getContext("2d"),
        particles = [],
        particleNum = 50,
        gravity = 0.7;

// full screen
      function Particle() {
        this.posX = canvas.width / 2; // position X
        this.posY = canvas.height / 8; // position Y
        this.vx = Math.random() * 10 - 5; // velocity X
        this.vy = Math.random() * 10 - 5; // velocity Y
        this.width = 1; // particle width
        this.height = Math.random() * 6 - 3; // particle height

        particles.push(this);

        this.life = 0;
        this.death = 100;
        //random color
        this.colors = [
          "rgba(100, 100, 100," + (Math.random() + .5) + ")",
          "rgba(52, 152, 200," + (Math.random() + .5) + ")",
          "rgba(41, 128, 250," + (Math.random() + .5) + ")"];
        this.color = this.colors[Math.floor(Math.random() * 3)];
      }

// draw
      Particle.prototype.draw = function () {
        this.posX += this.vx;
        this.posY += this.vy;
        this.life++;

        if (this.life >= this.death) {
          particles.shift();
        }

        if (this.posY > (canvas.height - 5)) {
          this.vx *= 0.8;
          this.vy *= -0.5;
          this.posY = (canvas.height - 5);
        }

        this.vy += gravity;

        c.fillStyle = this.color;
        c.fillRect(this.posX, this.posY, this.width, this.height);
      }

      let that = this;
      draw()

      function draw() {
        that.timer = requestAnimationFrame(draw);
        c.fillStyle = "rgba(0,0,0,0.4)";
        c.fillRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < particleNum; i++) {
          new Particle();
        }
        for (var i in particles) {
          particles[i].draw();
        }
      };
    }
  })
</script>
