<template>
  <div
    class="pc-card-wrapper"
    @mousemove="handleMouseMove"
    @mouseleave="resetCard"
    :class="{ active: isActive }"
  >
    <div class="pc-card" :style="cardStyles">
      <!-- Sparkle effects -->
      <div class="sparkles">
        <div class="sparkle" v-for="n in 20" :key="n" :style="getSparkleStyle(n)"></div>
      </div>
      
      <div class="pc-shine"></div>
      <div class="content">
        <h2>Abigail Thomas</h2>
        <p>Full Stack Developer</p>
        <div class="image-wrapper" :style="imageStyles">
          <!-- Shadow/backdrop for depth -->
          <div class="image-shadow"></div>
          <!-- Floating image with enhanced depth -->
          <img src="./imgs/me5.png" alt="Abigail Thomas Avatar" class="floating-image">
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
    imageStyles() {
      // More pronounced parallax effect for the image
      const imageRotateX = (0.5 - this.pointerY) * 15;
      const imageRotateY = (this.pointerX - 0.5) * 15;
      const translateZ = this.isActive ? 50 : 30; // Lift the image higher when active
      
      return {
        '--image-rotate-x': `${imageRotateX}deg`,
        '--image-rotate-y': `${imageRotateY}deg`,
        '--image-translate-z': `${translateZ}px`,
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
    getSparkleStyle(index) {
      // Generate pseudo-random positions based on index
      const x = (index * 37) % 100;
      const y = (index * 73) % 100;
      const delay = (index * 0.3) % 4;
      const duration = 2 + (index % 3);
      const size = 2 + (index % 3);
      
      return {
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        width: `${size}px`,
        height: `${size}px`,
      };
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
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  background: #1B2951;
  transition: box-shadow 0.3s ease;
}

.pc-card-wrapper.active {
  box-shadow: 0 20px 40px #1B2951;
}

.pc-card {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #2D4A87, #1B2951);
  border-radius: 15px;
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out;
  transform:
    rotateX(var(--rotate-x, 0deg))
    rotateY(var(--rotate-y, 0deg));
  position: relative;
  overflow: hidden;
}

.sparkles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.sparkle {
  position: absolute;
  background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
  border-radius: 50%;
  animation: sparkle infinite ease-in-out;
  opacity: 0;
}

@keyframes sparkle {
  0%, 100% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
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
  will-change: background-position;
  z-index: 1;
}

.content {
  position: relative;
  color: white;
  padding: 2rem;
  z-index: 2;
  text-align: center;
  width: 100%; 
}

h2 {
  font-family: 'Playfair Display', serif;
}

.image-wrapper {
  position: relative;
  display: inline-block;
  transform-style: preserve-3d;
  transition: transform 0.2s ease-out;
  transform: 
    rotateX(var(--image-rotate-x, 0deg))
    rotateY(var(--image-rotate-y, 0deg))
    translateZ(var(--image-translate-z, 30px));
}

.image-shadow {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 90%;
  background: radial-gradient(ellipse 60% 40% at center, rgba(0,0,0,0.4), transparent 70%);
  filter: blur(15px);
  z-index: -1;
  opacity: 0.6;
  transition: all 0.2s ease-out;
}

.floating-image {
  display: block;
  margin: 1rem auto 0;
  height: 500px;
  filter: drop-shadow(0 15px 35px rgba(0,0,0,0.3)) drop-shadow(0 5px 15px rgba(0,0,0,0.2));
  transition: all 0.2s ease-out;
  transform-style: preserve-3d;
  position: relative;
  z-index: 2;
}

/* Enhanced floating effect on hover */
.pc-card-wrapper.active .image-wrapper {
  transform: 
    rotateX(var(--image-rotate-x, 0deg))
    rotateY(var(--image-rotate-y, 0deg))
    translateZ(var(--image-translate-z, 50px));
}

.pc-card-wrapper.active .floating-image {
  filter: drop-shadow(0 20px 45px rgba(0,0,0,0.4)) drop-shadow(25px 25px 25px rgba(0,0,0,0.3));
}

.pc-card-wrapper.active .image-shadow {
  opacity: 0.8;
  transform: translateX(-50%) scale(1.1);
  filter: blur(20px);
}

.instagram-link {
  position: absolute;
  bottom: 65px;
  right: 35px;
  z-index: 3;
  transition: transform 0.3s ease;
  transform: translateZ(20px);
}

.instagram-link:hover {
  transform: translateZ(20px) scale(1.1);
  color: #e4405f;
}

/* Subtle breathing animation for extra life */
@keyframes float {
  0%, 100% {
    transform: translateZ(30px) translateY(0px);
  }
  50% {
    transform: translateZ(35px) translateY(-5px);
  }
}

.image-wrapper {
  animation: float 4s ease-in-out infinite;
}

/* Pause animation on hover for better interaction */
.pc-card-wrapper.active .image-wrapper {
  animation-play-state: paused;
}
</style>