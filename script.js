document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  const statusEl = document.getElementById('formStatus');

  function openWhatsApp(number, message) {
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const get = (k) => (data.get(k) || '').toString().trim();

    const msg =
`Hi TCS, I need assistance.

Name: ${get('name')}
Phone: ${get('phone')}
Service: ${get('service')}
Vehicle: ${get('vehicle')}
Pickup: ${get('pickup')}
Destination: ${get('destination') || '—'}
Preferred time: ${get('time') || '—'}
Notes: ${get('notes') || '—'}

Sent from tcstowing.co.za`;

    // Primary WhatsApp number
    openWhatsApp('27813097308', msg);

    if (statusEl) {
      statusEl.classList.remove('hidden');
      statusEl.textContent = 'Opening WhatsApp with your request… If it did not open, please allow pop-ups or use the WhatsApp buttons above.';
    }
  });
});
