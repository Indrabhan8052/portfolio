
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