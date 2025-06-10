<template>
      <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text fade-in">
                    <h1>Hi, I'm <span class="highlight">Abigail</span>.<br>Developer & Lifelong Learner.</h1>
                    <p class="subtitle">Passionate about exploring the intersection of technology and creativity.</p>
                    <a href="#projects" class="cta-button">
                        View My Work
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </div>
                <div class="hero-image fade-in">
                    <img src="./imgs/me2.png" alt="Abigail Thomas - Software Developer">
                </div>
            </div>
        </div>
        <div class="scroll-indicator">
            <i class="bi bi-chevron-down" style="color: var(--accent-blue); font-size: 1.5rem;"></i>
        </div>
        
        
    </section>
</template>

<style>
  /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 6rem 0 4rem;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -30%;
            width: 60%;
            height: 120%;
            background: radial-gradient(circle, rgba(74, 144, 226, 0.1) 0%, transparent 70%);
            border-radius: 50%;
        }

        .hero-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
            position: relative;
            z-index: 2;
        }

        .hero-text h1 {
            font-family: 'Playfair Display', serif;
            font-size: 3.5rem;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 1rem;
            color: var(--white);
        }

        .hero-text .highlight {
            color: var(--accent-blue);
            position: relative;
            text-shadow: 0 0 20px var(--glow);
        }

        .hero-text .subtitle {
            font-size: 1.25rem;
            color: var(--light-blue);
            margin-bottom: 2rem;
            font-weight: 400;
        }

        .cta-button {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            background: linear-gradient(135deg, var(--primary-blue), var(--accent-blue));
            color: var(--white);
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(74, 144, 226, 0.4), 0 0 30px var(--glow);
            border: 1px solid var(--accent-blue);
        }

        .cta-button:hover {
            background: var(--accent-blue);
            transform: translateY(-2px);
            box-shadow: 0 6px 25px rgba(74, 144, 226, 0.6), 0 0 40px var(--glow);
            color: var(--white);
        }

        .hero-image {
            text-align: center;
            position: relative;
        }

        .hero-image img {
            width: 350px;
            height: 350px;
            object-fit: cover;
            border-radius: 50%;
            border: 8px solid rgba(74, 144, 226, 0.3);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 60px var(--glow);
            transition: transform 0.3s ease;
        }

        .hero-image img:hover {
            transform: scale(1.05);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4), 0 0 80px var(--glow);
        }
 /* Responsive Design */
        @media (max-width: 768px) {
           

            .hero-content {
                grid-template-columns: 1fr;
                text-align: center;
                gap: 2rem;
            }

            .hero-text h1 {
                font-size: 2.5rem;
            }

        }

</style>