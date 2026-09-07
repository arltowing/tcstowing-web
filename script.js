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


// Responsive navigation
addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.topbar');
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobileMenu');
  if (!header || !toggle || !menu) return;
  const closeMenu = () => {
    header.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  };
  toggle.addEventListener('click', () => {
    const open = !header.classList.contains('menu-open');
    header.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  addEventListener('resize', () => { if (innerWidth > 900) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
});
