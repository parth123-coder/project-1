document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        delay: 200,
        offset: 100,
        duration: 1000,
        once: true
    });

    // Hamburger menu functionality
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".heroul");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".heroli a").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
});