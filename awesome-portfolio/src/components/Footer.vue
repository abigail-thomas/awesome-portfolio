<template>
  <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Abigail Thomas. Crafted with passion.</p>
        </div>
    </footer>
</template>

<style>
       /* Footer */
        .footer {
            padding: 2rem 0;
            background: var(--space-black);
            border-top: 1px solid rgba(74, 144, 226, 0.2);
            text-align: center;
            color: var(--light-blue);
        }

        .scroll-indicator {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            animation: bounce 2s infinite;
        }
</style>