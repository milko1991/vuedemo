<template>
  <div>
    <canvas id="space"></canvas>
    <div class="login panel-body">
      <div class="tit">
        Login Form
      </div>
      <div class="nav">
        <input type="text" v-model="username" placeholder="admin"/>
        <input type="password" @keyup.enter="submit" v-model="password" placeholder="admin"/>
        <input type="submit" @click="submit" class="submit" value="Sign In">
      </div>
    </div>
  </div>
</template>
<style scoped="">
  .login {
    width: 340px;
    border: 1px double rgba(156,39,176, .3);
    border-radius: 4px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 2px 2px 8px 0 #9c27b0;
  }
  button:hover {
    background: #ab47bc; transition: 0.3s;
  }
  .login .tit {width: 100%; line-height: 50px; font-size: 12px; color: white; background: rgba(156,39,176, .3); padding: 0 20px;}
  .login .nav {padding: 20px;}
  .login .nav input {width: 100%; background: rgba(156,39,176, .3); color: white; height: 40px; padding: 0 20px; line-height: 40px; margin-bottom: 15px; border: 1px double rgba(156,39,176, .3)}
  .submit {display: block; cursor: pointer; margin: 0 auto; background: rgba(156,39,176, .3) !important; color: white;  border-radius: 2px;}
  .submit:hover {
    background: #6a1b9a; transition: 0.5s;
  }
</style>

<script>
    export default ({
        data() {
            return {
              username: '',
              password: ''
            }
        },
        mounted(){
          window.requestAnimFrame = (function(){ return  window.requestAnimationFrame})();
          var canvas = document.getElementById("space");
          var c = canvas.getContext("2d");

          var numStars = 1900;
          var radius = '0.'+Math.floor(Math.random() * 9) + 1  ;
          var focalLength = canvas.width *2;
          var warp = 0;
          var centerX, centerY;

          var stars = [], star;
          var i;

          var animate = true;

          initializeStars();

          function executeFrame(){

            if(animate)
              requestAnimFrame(executeFrame);
            moveStars();
            drawStars();
          }

          function initializeStars(){
            centerX = canvas.width / 2;
            centerY = canvas.height / 2;

            stars = [];
            for(i = 0; i < numStars; i++){
              star = {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * canvas.width,
                o: '0.'+Math.floor(Math.random() * 99) + 1
              };
              stars.push(star);
            }
          }

          function moveStars(){
            for(i = 0; i < numStars; i++){
              star = stars[i];
              star.z--;

              if(star.z <= 0){
                star.z = canvas.width;
              }
            }
          }

          function drawStars(){
            var pixelX, pixelY, pixelRadius;
            // Resize to the screen
            if(canvas.width != window.innerWidth || canvas.width != window.innerWidth){
              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;
              initializeStars();
            }
            if(warp==0)
            {c.fillStyle = "rgba(0,10,20,1)";
              c.fillRect(0,0, canvas.width, canvas.height);}
            c.fillStyle = "rgba(209, 255, 255, "+radius+")";
            for(i = 0; i < numStars; i++){
              star = stars[i];

              pixelX = (star.x - centerX) * (focalLength / star.z);
              pixelX += centerX;
              pixelY = (star.y - centerY) * (focalLength / star.z);
              pixelY += centerY;
              pixelRadius = 1 * (focalLength / star.z);

              c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
              c.fillStyle = "rgba(209, 255, 255, "+star.o+")";
              //c.fill();
            }
          }
          executeFrame();
        },
        methods: {
          submit(){
            var names = this.$store.state.logins.userName;
            var words= this.$store.state.logins.passWord;
            if(this.username = names && this.password == words){
              this.setCookie('admin','admin',3);
              this.$router.push({path:'/home'})
            }else {
              alert('您输入的账号密码有误，请重新输入账号密码！');
              this.username = '';
              this.password = '';
            }
          },
        }
    })
</script>
