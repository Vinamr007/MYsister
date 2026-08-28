document.getElementById('current-year').textContent = new Date().getFullYear();

document.querySelectorAll('.memory-button').forEach((button) => {
  button.addEventListener('click', () => {
    const memory = button.nextElementSibling;
    const isOpen = memory.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));
    button.querySelector('span').textContent = isOpen ? '−' : '+';
    button.firstChild.textContent = isOpen ? 'Close the memory ' : 'Open a little memory ';
  });
});