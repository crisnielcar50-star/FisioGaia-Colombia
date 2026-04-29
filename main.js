// Nav scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// WhatsApp form
function agendarWA() {
  const nombre = document.querySelector('input[placeholder="Tu nombre"]').value || '';
  const tel = document.querySelector('input[placeholder="+57 300 000 0000"]').value || '';
  const servicio = document.querySelector('select').value || '';
  const molestia = document.querySelector('textarea').value || '';

  const msg = encodeURIComponent(
    `Hola FisioGaia, quiero agendar una cita.\n\n` +
    `👤 Nombre: ${nombre}\n` +
    `📞 Teléfono: ${tel}\n` +
    `🎯 Servicio: ${servicio}\n` +
    `💬 Molestia: ${molestia}`
  );
  window.open(`https://wa.me/573112372919?text=${msg}`, '_blank');
}

// Intersection observer for fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.servicio-card, .paso, .test-card, .filo-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(el);
});
