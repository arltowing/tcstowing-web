// Request → fake logger (no external posting in this package)
const form = document.getElementById('bookingForm');
const statusBox = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    statusBox.textContent = 'Thanks — dispatch will contact you shortly to confirm the quote and deposit before dispatch.';
    statusBox.classList.remove('hidden');
    form.reset();
  });
}
