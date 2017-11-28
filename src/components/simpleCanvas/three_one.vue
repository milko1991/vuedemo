<template>
  <div class="three-one">
    <div id="canvas-frame"></div>
  </div>
</template>

<style scoped="">
  div {
    height: auto;
    display: inline-block;
  }

  #canvas-frame {
    border: none;
    cursor: pointer;
    width: 860px;
    height: 500px;
  }

</style>

<script>
  export default ({
    data() {
      return {}
    },
    beforeDestroy() {
      window.cancelAnimationFrame(this.timer);
    },
    mounted() {
      //this.movePoint();
      this.rect();
      //this.three_line();
    },
    methods: {
      movePoint() {
        var renderer;
        var stats, width, height;
        function initThree() {
          width = document.getElementById('canvas-frame').clientWidth;
          height = document.getElementById('canvas-frame').clientHeight;
          renderer = new THREE.WebGLRenderer({
            antialias : true
          });
          renderer.setSize(width, height);
          document.getElementById('canvas-frame').appendChild(renderer.domElement);
          renderer.setClearColor(0xFFFFFF, 1.0);

          stats = new Stats();
          stats.domElement.style.position = 'absolute';
          stats.domElement.style.left = '0px';
          stats.domElement.style.top = '0px';
          document.getElementById('canvas-frame').appendChild(stats.domElement);
        }

        var camera;
        function initCamera() {
          camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
          camera.position.x = 0;
          camera.position.y = 0;
          camera.position.z = 600;
          camera.up.x = 0;
          camera.up.y = 1;
          camera.up.z = 0;
          camera.lookAt({
            x : 0,
            y : 0,
            z : 0
          });
        }

        var scene;
        function initScene() {
          scene = new THREE.Scene();
        }

        var light;
        function initLight() {
          light = new THREE.AmbientLight(0xFF0000);
          light.position.set(100, 100, 200);
          scene.add(light);
          light = new THREE.PointLight(0x00FF00);
          light.position.set(0, 0,300);
          scene.add(light);
        }

        var cube;
        var mesh;
        function initObject() {
          var geometry = new THREE.CylinderGeometry( 100,150,400);
          var material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
          mesh = new THREE.Mesh( geometry,material);
          mesh.position = new THREE.Vector3(0,0,0);
          scene.add(mesh);
        }
        threeStart();
        function threeStart() {
          initThree();
          initCamera();
          initScene();
          initLight();
          initObject();
          animation();

        }
        function animation()
        {
          //renderer.clear();
          //camera.position.x =camera.position.x +1;
          mesh.position.x-=1;
          renderer.render(scene, camera);
          requestAnimationFrame(animation);

          stats.update();
        }
      },
      rect() {
        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(75, 860 / 500, 0.1, 1000);

        var renderer = new THREE.WebGLRenderer();

        renderer.setSize(860, 500);

        $("#canvas-frame").append(renderer.domElement);
        var geometry = new THREE.CubeGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;

        function render() {
          requestAnimationFrame(render);
          cube.rotation.x += 0.1;
          cube.rotation.y += 0.1;
          renderer.render(scene, camera);
        }

        render();
      },

      three_line() {
        var renderer, width, height;
        threeStart();

        function initThree() {
          width = document.getElementById('canvas-frame').clientWidth;
          height = document.getElementById('canvas-frame').clientHeight;
          renderer = new THREE.WebGLRenderer({
            antialias: true
          });
          renderer.setSize(width, height);
          document.getElementById('canvas-frame').append(renderer.domElement);
          renderer.setClearColor(0xFFFFFF, 1.0);
        }

        var camera;

        function initCamera() {
          camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
          camera.position.x = 0;
          camera.position.y = 1000;
          camera.position.z = 0;
          camera.up.x = 0;
          camera.up.y = 0;
          camera.up.z = 1;
          camera.lookAt({
            x: 0,
            y: 0,
            z: 0
          });
        }

        var scene;

        function initScene() {
          scene = new THREE.Scene();
        }

        var light;

        function initLight() {
          light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
          light.position.set(100, 100, 200);
          scene.add(light);
        }

        var cube;

        function initObject() {

          var geometry = new THREE.Geometry();
          var material = new THREE.LineBasicMaterial({vertexColors: THREE.VertexColors});
          var color1 = new THREE.Color(0x444444), color2 = new THREE.Color(0xFF0000);

          // 线的材质可以由2点的颜色决定
          var p1 = new THREE.Vector3(-100, 0, 0);
          var p2 = new THREE.Vector3(100, 0, 0);
          geometry.vertices.push(p1);
          geometry.vertices.push(p2);
          geometry.colors.push(color1, color2);

          var line = new THREE.Line(geometry, material, THREE.LinePieces);
          scene.add(line);
        }

        function render() {
          //  renderer.clear();
          renderer.render(scene, camera);
          //  requestAnimationFrame(render);
        }

        function threeStart() {
          initThree();
          initCamera();
          initScene();
          //  initLight();
          initObject();
          render();
        }
      }
    }
  })
</script>
