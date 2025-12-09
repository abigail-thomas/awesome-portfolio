<template>
     <!-- Contact Section -->
    <section class="contact" id="contact">
        <div class="container">
            <div class="contact-content fade-in">
                <h2>Let's Connect!</h2>
                <p>I'm always excited to collaborate on innovative projects and discuss new opportunities. Feel free to reach out!</p>
                
                <div class="contact-links">
                    <a href="mailto:agthomas084@gmail.com" class="contact-link">
                        <i class="bi bi-envelope"></i>
                        Email Me
                    </a>
                    <a href="https://github.com/abigail-thomas" target="_blank" class="contact-link">
                        <i class="bi bi-github"></i>
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/abigail-thomas-275927274/" target="_blank" class="contact-link">
                        <i class="bi bi-linkedin"></i>
                        LinkedIn
                    </a>
                    <a href="AbigailThomas2025Resume.pdf" download="abigailthomasresume.pdf" class="contact-link">
                        <i class="bi bi-download"></i>
                        Resume
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
   /* Contact Section */
        .contact {
            padding: 6rem 0;
            background: var(--space-black);
            position: relative;
        }

        .contact::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--accent-blue), transparent);
            box-shadow: 0 0 20px var(--glow);
        }

        .contact-content {
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
        }

        .contact h2 {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--white);
            text-shadow: 0 0 20px var(--glow);
        }

        .contact p {
            font-size: 1.1rem;
            color: var(--light-blue);
            margin-bottom: 3rem;
        }

        .contact-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
        }

        .contact-link {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem 2rem;
            background: rgba(74, 144, 226, 0.1);
            backdrop-filter: blur(10px);
            border: 2px solid var(--accent-blue);
            border-radius: 50px;
            color: var(--white);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .contact-link:hover {
            background: var(--accent-blue);
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(74, 144, 226, 0.4), 0 0 30px var(--glow);
            color: var(--white);
        }
         /* Responsive Design */
        @media (max-width: 768px) {
           

            .contact-links {
                flex-direction: column;
                align-items: center;
            }

          
        }

</style>