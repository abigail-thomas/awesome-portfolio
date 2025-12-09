<template>
     <!-- Projects Section -->
    <section class="projects" id="projects">
        <div class="container">
            <div class="section-header fade-in">
                
                <h2>Featured Projects</h2>
                <p>A collection of projects that showcase my skills in web development, game design, and programming.</p>
            </div>
            <div class="projects-grid">
                 <a href="https://github.com/FloridaSouthernCS/connections" target="_blank" class="project-card fade-in">
                    <div class="project-icon">
                        <i class="bi bi-robot"></i>
                    </div>
                    <h3>Connections AI Solver</h3>
                    <p>Summer 2025 Collaborative Research Project: Using Natural Language Processing Techniques to Solve Connections Puzzles.</p>
                    <span class="project-link">
                        View Code <i class="bi bi-github"></i>
                    </span>
                </a>
                <a href="https://github.com/abigail-thomas/flip-focus" target="_blank" class="project-card fade-in">
                    <div class="project-icon">
                        <span class="material-symbols-outlined">
                        school
                        </span>
                    </div>
                    <h3>Flip Focus</h3>
                    <p>Flashcard study application using PHP with Laravel. </p>
                    <span class="project-link">
                        View Code <i class="bi bi-github"></i>
                    </span>
                </a>
                 <a href="https://movie-catalog-3a599.web.app/" target="_blank" class="project-card fade-in">
                    <div class="project-icon">
                        <i class="bi bi-camera-reels"></i>
                    </div>
                    <h3>Movie Catalog</h3>
                    <p>React-based movie catalog app that integrates with an external API, allowing users to search films and manage a personalized favorites list.</p>
                    <span class="project-link">
                        Find Movies <i class="bi bi-arrow-right"></i>
                    </span>
                </a>

               

             
                 <a href="https://fsc-astronomy-club.web.app/" target="_blank" class="project-card fade-in">
                    <div class="project-icon">
                        <i class="bi bi-moon-stars-fill"></i>
                    </div>
                    <h3>FSC Astronomy Club</h3>
                    <p>Official website for Florida Southern College's Astronomy Club, featuring event information, member resources, and stargazing guides.</p>
                    <span class="project-link">
                        Visit Site <i class="bi bi-arrow-right"></i>
                    </span>
                </a>

              

               
                  <a href="https://github.com/abigail-thomas/sub-surge" target="_blank" class="project-card fade-in">
                    <div class="project-icon">
                        <i class="bi bi-water"></i>
                    </div>
                    <h3>Sub Surge</h3>
                    <p>An engaging underwater adventure game featuring dynamic obstacle avoidance mechanics and immersive gameplay experiences.</p>
                    <span class="project-link">
                        View Code <i class="bi bi-github"></i>
                    </span>
                </a>

                <a href="https://athomas5.itch.io/gravity-rift" target="_blank" class="project-card fade-in">
                    <div class="project-icon">
                        <i class="bi bi-controller"></i>
                    </div>
                    <h3>Gravity Rift</h3>
                    <p>Multi-level platformer game; winner of "People's Choice Award" and second runner-up for "Game of the Year" in 2025 QualCon Conference.</p>
                    <span class="project-link">
                        Play Game <i class="bi bi-arrow-right"></i>
                    </span>
                </a>

                <a href="https://github.com/abigail-thomas/asteroid-defender" target="_blank" class="project-card fade-in">
                    <div class="project-icon">
                        <i class="bi bi-rocket"></i>
                    </div>
                    <h3>Asteroid Defender</h3>
                    <p>A thrilling space defense game where players must navigate through asteroid fields and defend Earth from incoming threats.</p>
                    <span class="project-link">
                        View Code <i class="bi bi-github"></i>
                    </span>
                </a>

                 <a href="https://abigail-thomas.github.io/Trekker/" target="_blank" class="project-card fade-in">
                    <div class="project-icon">
                        <i class="bi bi-compass"></i>
                    </div>
                    <h3>Trekker</h3>
                    <p>A comprehensive travel planning application that helps users discover and plan their perfect adventures with interactive maps and personalized recommendations.</p>
                    <span class="project-link">
                        Explore Project <i class="bi bi-arrow-right"></i>
                    </span>
                </a>
                  <a href="https://pierrehmatisse.com/" target="_blank" class="project-card fade-in">
                    <div class="project-icon">
                        <i class="bi bi-palette"></i>
                    </div>
                    <h3>Matisse Gallery</h3>
                    <p>An elegant digital gallery showcasing Pierre Matisse's magnificent artworks and his complex and fascinating life story through the beauty of his brush.</p>
                    <span class="project-link">
                        Visit Gallery <i class="bi bi-arrow-right"></i>
                    </span>
                </a>

            </div>
        </div>
    </section>
</template>
<style>

     

      

      

        /* Projects Section */
        .projects {
            padding: 6rem 0;
            background: rgba(15, 20, 25, 0.8);
            backdrop-filter: blur(10px);
        }

        .section-header {
            text-align: center;
            margin-bottom: 4rem;
        }

        .section-header h2 {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 600;
            color: var(--white);
            margin-bottom: 1rem;
            text-shadow: 0 0 20px var(--glow);
        }

        .section-header p {
            font-size: 1.1rem;
            color: var(--light-blue);
            max-width: 600px;
            margin: 0 auto;
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .project-card {
            background: rgba(45, 74, 135, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 10px 30px var(--shadow), 0 0 30px rgba(74, 144, 226, 0.1);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            text-decoration: none;
            color: inherit;
            border: 1px solid rgba(74, 144, 226, 0.2);
        }

        .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(74, 144, 226, 0.1), transparent);
            transition: left 0.5s ease;
        }

        .project-card:hover::before {
            left: 100%;
        }

        .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px var(--shadow-hover), 0 0 60px rgba(74, 144, 226, 0.3);
            border-color: var(--accent-blue);
        }

        .project-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--primary-blue), var(--accent-blue));
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            color: var(--white);
            font-size: 1.5rem;
            box-shadow: 0 0 20px var(--glow);
        }

        .project-card h3 {
            font-size: 1.4rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--white);
        }

        .project-card p {
            color: var(--light-blue);
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }

        .project-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--accent-blue);
            font-weight: 600;
            text-decoration: none;
            transition: gap 0.3s ease;
        }

        .project-link:hover {
            gap: 1rem;
            color: var(--star-gold);
            text-shadow: 0 0 10px currentColor;
        }
          /* Responsive Design */
        @media (max-width: 768px) {
           
            .projects-grid {
                grid-template-columns: 1fr;
            }

        }

</style>