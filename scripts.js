const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => obs.observe(el));

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
    navLinks.forEach(a => { a.style.color = a.getAttribute('href') === '#' + cur ? '#5b8af7' : ''; });
  });

function openModal(id) {
  const m = document.getElementById(id);
  m.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('[id^="modal-"]').forEach(m => {
      m.style.display = 'none';
    });
    document.body.style.overflow = '';
  }
});