// Scroll reveal
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

// Nav active highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  navLinks.forEach(a => { a.style.color = a.getAttribute('href') === '#' + cur ? '#5b8af7' : ''; });
});

// Certificate modal
function openModal(imgSrc, altText) {
  const modal = document.getElementById('cert-modal');
  const img = document.getElementById('cert-modal-img');
  img.src = imgSrc;
  img.alt = altText;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeCertModal() {
  document.getElementById('cert-modal').style.display = 'none';
  document.getElementById('cert-modal-img').src = '';
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeCertModal();
});
