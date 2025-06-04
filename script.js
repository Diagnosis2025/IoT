// Menu Toggle para móviles
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-times');
    this.querySelector('i').classList.toggle('fa-bars');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.menu-toggle i').classList.remove('fa-times');
        document.querySelector('.menu-toggle i').classList.add('fa-bars');
    });
});

// Efecto smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll('.animate-up, .animate-zoom');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // para que no se repita
      }
    });
  }, {
    threshold: 0.2
  });

  animatedElements.forEach(el => observer.observe(el));
});
