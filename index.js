const moveToTopBtn = document.getElementById('moveToTopBtn');

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

moveToTopBtn.addEventListener('click', scrollToTop)