 <script>
    import ProfileCard from './ProfileCard.vue';
    
export default {
  components: {
    ProfileCard
  }
};
</script>

<template>
     <!-- About Section -->
    <section class="about" id="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text fade-in">
                    <h2>About Me</h2>
                    <p>Hello! I'm Abigail Thomas, a passionate computer science student who loves a little bit of everything. I specialize in developing efficient, user-centered applications and have experience across multiple programming languages and frameworks.</p>
                    
                    <p>When I'm not coding or exploring new technologies, you'll find me rock climbing, stargazing, painting, or engulfed in a new book. I believe that the best software combines technical excellence with thoughtful user experience and creativity.</p>
                    
                    <div class="skills-grid">
                        <div class="skill-item">
                            <i class="bi bi-person skill-icon"></i>
                            <span>Communication & Collaboration</span>
                        </div>
                        <div class="skill-item">
                            <i class="bi bi-layout-text-window skill-icon"></i>
                            <span>Web Development</span>
                        </div>
                        <div class="skill-item">
                            <i class="bi bi-database skill-icon"></i>
                            <span>Database Management</span>
                        </div>
                        <div class="skill-item">
                            <i class="bi bi-palette skill-icon"></i>
                            <span>UI/UX Design</span>
                        </div>
                        <div class="skill-item">
                            <i class="bi bi-code-slash skill-icon"></i>
                            <span>Software Engineering</span>
                        </div>
                        <div class="skill-item">
                            <i class="bi bi-joystick skill-icon"></i>
                            <span>Game Development & Design</span>
                        </div>
                    </div>
                </div>

                <ProfileCard/>
                <div class="about-visual fade-in">
                    <div class="stats-card">
                        <div class="stat-item">
                            <span class="stat-number">20+</span>
                            <span class="stat-label">Projects Completed</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">3+</span>
                            <span class="stat-label">Years of Experience</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">5+</span>
                            <span class="stat-label">Technologies Mastered</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   

</template>

<style>
  /* About Section */
        .about {
            padding: 6rem 0;
            background: rgba(27, 41, 81, 0.3);
            backdrop-filter: blur(10px);
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .about-text h2 {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 600;
            color: var(--white);
            margin-bottom: 2rem;
            text-shadow: 0 0 20px var(--glow);
        }

        .about-text p {
            font-size: 1.1rem;
            color: var(--light-blue);
            margin-bottom: 1.5rem;
            line-height: 1.8;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin-top: 2rem;
        }

        .skill-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem;
            background: rgba(74, 144, 226, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(74, 144, 226, 0.2);
            border-radius: 10px;
            font-weight: 500;
            color: var(--white);
            transition: all 0.3s ease;
        }

        .skill-item:hover {
            background: rgba(74, 144, 226, 0.2);
            border-color: var(--accent-blue);
            box-shadow: 0 0 20px rgba(74, 144, 226, 0.3);
        }

        .skill-icon {
            width: 20px;
            height: 20px;
            color: var(--accent-blue);
        }

        .about-visual {
            position: relative;
            width: 200%;
        }

        .stats-card {
            background: rgba(45, 74, 135, 0.2);
            backdrop-filter: blur(15px);
            padding: 2rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px var(--shadow), 0 0 40px rgba(74, 144, 226, 0.2);
            text-align: center;
            position: relative;
            z-index: 2;
            border: 1px solid rgba(74, 144, 226, 0.3);
        }

        .stat-item {
            margin-bottom: 1.5rem;
        }

        .stat-number {
            font-size: 2rem;
            font-weight: 700;
            color: var(--accent-blue);
            display: block;
            text-shadow: 0 0 20px var(--glow);
        }

        .stat-label {
            color: var(--light-blue);
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
         /* Responsive Design */
        @media (max-width: 768px) {
           

            .about-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

        

            .skills-grid {
                grid-template-columns: 1fr;
            }
            .about-visual {
                position: relative;
                width: 100%;
        }
        }
</style>
