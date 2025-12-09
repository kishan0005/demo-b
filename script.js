document.querySelectorAll('.thumbnail-image').forEach(img => {
  img.addEventListener('mouseenter', () => img.style.transform = 'scale(1.05)');
  img.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');
});


const btn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
