<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-container">
        <a href="#home" class="logo">Abigail Thomas</a>
        
        <ul class="nav-links" :class="{ open: menuOpen }">
          <li><a href="#home" @click="closeMenu">Home</a></li>
          <li><a href="#projects" @click="closeMenu">Projects</a></li>
          <li><a href="#about" @click="closeMenu">About</a></li>
          <li><a href="#contact" @click="closeMenu">Contact</a></li>
        </ul>
        
        <div class="menu-toggle" @click="toggleMenu" :class="{ active: menuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    
    <!-- Overlay for mobile menu -->
    <div class="menu-overlay" :class="{ active: menuOpen }" @click="closeMenu"></div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<style>
/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(11, 14, 20, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(74, 144, 226, 0.2);
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--accent-blue, #4a90e2);
  text-decoration: none;
  text-shadow: 0 0 10px var(--glow, rgba(74, 144, 226, 0.5));
  flex-shrink: 0;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  padding-top: 12px;
  margin-left: auto;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--accent-blue, #4a90e2);
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
}

.nav-links a:hover {
  color: var(--accent-blue, #4a90e2);
  text-shadow: 0 0 10px var(--glow, rgba(74, 144, 226, 0.5));
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-blue, #4a90e2);
  box-shadow: 0 0 10px var(--glow, rgba(74, 144, 226, 0.5));
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

/* Hamburger Menu */
.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  z-index: 1002;
}

.menu-toggle:hover {
  background: rgba(74, 144, 226, 0.1);
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--white, #ffffff);
  margin: 3px 0;
  transition: all 0.3s ease;
  border-radius: 2px;
  transform-origin: center;
}

/* Hamburger Animation */
.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Menu Overlay */


/* Enhanced Mobile Menu */
.nav-links.open {
  display: flex !important;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: linear-gradient(135deg, rgba(11, 14, 20, 0.98), rgba(20, 25, 35, 0.98));
  backdrop-filter: blur(20px);
  padding: 6rem 2rem 2rem;
  gap: 1.5rem;
  z-index: 1001;
  border-left: 1px solid rgba(74, 144, 226, 0.2);
  box-shadow: -5px 0 30px rgba(0, 0, 0, 0.3);
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-links.open {
  transform: translateX(0);
}

/* Mobile Menu Items */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .menu-toggle {
    display: flex;
  }
  
  .nav-links.open li {
    opacity: 0;
    transform: translateX(20px);
    animation: slideInFade 0.3s ease forwards;
  }
  
  .nav-links.open li:nth-child(1) { animation-delay: 0.1s; }
  .nav-links.open li:nth-child(2) { animation-delay: 0.15s; }
  .nav-links.open li:nth-child(3) { animation-delay: 0.2s; }
  .nav-links.open li:nth-child(4) { animation-delay: 0.25s; }
  
  .nav-links.open a {
    display: block;
    padding: 1rem 0;
    font-size: 1.1rem;
    border-bottom: 1px solid rgba(74, 144, 226, 0.1);
    transition: all 0.3s ease;
  }
  
  .nav-links.open a:hover {
    padding-left: 1rem;
    background: rgba(74, 144, 226, 0.1);
    border-radius: 8px;
    border-bottom-color: transparent;
  }
  
  .nav-links.open a::after {
    display: none;
  }
}

@keyframes slideInFade {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Desktop styles remain unchanged */
@media (min-width: 769px) {
  .nav-links {
    display: flex !important;
    position: static;
    background: none;
    padding: 0;
    gap: 2rem;
    transform: none;
    width: auto;
    height: auto;
    border: none;
    box-shadow: none;
  }
}
</style>