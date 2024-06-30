// distortionEffect.js
class DistortionEffect {
  constructor(texturePath) {
      // Setup Three.js scene
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(this.renderer.domElement);

      // Create a plane geometry
      this.geometry = new THREE.PlaneGeometry(10, 10, 32, 32);

      // Create a material with a shader
      this.vertexShader = `
          varying vec2 vUv;
          void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
      `;

      this.fragmentShader = `
          varying vec2 vUv;
          uniform float time;
          void main() {
              vec2 uv = vUv;
              float freq = 10.0;
              float amp = 0.1;
              float distortion = sin(uv.y * freq + time) * amp;
              uv.x += distortion;
              vec4 color = texture2D( texture, uv );
              gl_FragColor = color;
          }
      `;

      this.texture = new THREE.TextureLoader().load(texturePath);

      this.material = new THREE.ShaderMaterial({
          uniforms: {
              time: { value: 0 },
              texture: { value: this.texture }
          },
          vertexShader: this.vertexShader,
          fragmentShader: this.fragmentShader
      });

      // Create mesh with geometry and material
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      this.scene.add(this.mesh);

      // Set camera position
      this.camera.position.z = 5;

      // Render loop
      this.animate();
  }

  animate() {
      requestAnimationFrame(() => this.animate());

      // Update shader uniform
      this.material.uniforms.time.value += 0.1;

      // Render the scene
      this.renderer.render(this.scene, this.camera);
  }

  attachToElement(elementId) {
      const element = document.getElementById(elementId);
      if (element) {
          element.appendChild(this.renderer.domElement);
      } else {
          console.error(`Element with id ${elementId} not found.`);
      }
  }
}

export default DistortionEffect;
