
    <template>
  <div
    class="pc-card-wrapper"
    @mousemove="handleMouseMove"
    @mouseleave="resetCard"
    :class="{ active: isActive }"
  >
    <div class="pc-card" :style="cardStyles">
      <div class="pc-shine"></div>
      <div class="content">
        <h2>Abigail Thomas</h2>
        <p>Full Stack Developer</p>
        <div class="image-wrapper">
  <img src="./me5.png" alt="Abigail Thomas Avatar">
  <a
    href="https://www.instagram.com/ag_thomas04"
    target="_blank"
    rel="noopener noreferrer"
    class="instagram-link"
    aria-label="Instagram Profile"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="white"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.5-3a1 1 0 110 2 1 1 0 010-2z" />
    </svg>
  </a>
</div>

      </div>
    </div>
  </div>
</template>

  
<script>
export default {
  data() {
    return {
      pointerX: 0.5,
      pointerY: 0.5,
      isActive: false,
    };
  },
  computed: {
    cardStyles() {
      const px = `${this.pointerX * 100}%`;
      const py = `${this.pointerY * 100}%`;

      // Rotation based on pointer relative to center
      const rotateX = (0.5 - this.pointerY) * 20; // degrees
      const rotateY = (this.pointerX - 0.5) * 20;

      return {
        '--pointer-x': px,
        '--pointer-y': py,
        '--rotate-x': `${rotateX}deg`,
        '--rotate-y': `${rotateY}deg`,
      };
    },
  },
  methods: {
    handleMouseMove(e) {
      const rect = e.currentTarget.getBoundingClientRect();
      let x = (e.clientX - rect.left) / rect.width;
      let y = (e.clientY - rect.top) / rect.height;

      // clamp between 0 and 1
      x = Math.min(Math.max(x, 0), 1);
      y = Math.min(Math.max(y, 0), 1);

      this.pointerX = x;
      this.pointerY = y;
      this.isActive = true;
    },
    resetCard() {
      this.pointerX = 0.5;
      this.pointerY = 0.5;
      this.isActive = false;
    },
  },
};
</script>

<style scoped>
.pc-card-wrapper {
  perspective: 1000px;
  width: 420px;
  height: 580px;
  margin: 3rem auto;
  cursor: pointer;
  /* Optional styling */
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  background: #1B2951;
  transition: box-shadow 0.3s ease;
}

.pc-card-wrapper.active {
    box-shadow: 0 20px 40px #1B2951;
}
/*
--primary-blue: #2D4A87;
--dark-blue: #1B2951;
--accent-blue: #4A90E2;
*/
.pc-card {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #2D4A87, #1B2951);
  border-radius: 15px;
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out;
  /* Use CSS variables for rotation */
  transform:
    rotateX(var(--rotate-x, 0deg))
    rotateY(var(--rotate-y, 0deg));
  position: relative;
  overflow: hidden;
}

.pc-shine {
  position: absolute;
  top: 0;
  left: 0;
  width: 300%;
  height: 300%;
  background: radial-gradient(circle at var(--pointer-x, 50%) var(--pointer-y, 50%), rgba(255,255,255,0.25), transparent 80%);
  pointer-events: none;
  transition: background-position 0.1s ease-out;
  transform: translate(-50%, -50%);
  /* center the shine effect */
  will-change: background-position;
}

.content {
  position: relative;
  color: white;
  padding: 2rem;
  z-index: 1;
  text-align: center;
  width: 100%; 
}

h2 {
    font-family: 'Playfair Display', serif;

}
img {
  display: block;
  margin-left: 0px;
  margin-right: auto;
  margin-top: 1rem;
  height: 500px;
  
}
.image-wrapper {
  position: relative;
  display: inline-block;
}



.instagram-link {
  position: absolute;
  bottom: 65px;
  right: 35px;
  z-index: 2;
  transition: transform 0.3s ease;
}

.instagram-link:hover {
  transform: scale(1.1);
  color: #e4405f;
}


</style>
