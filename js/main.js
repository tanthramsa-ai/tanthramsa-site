// Footer year
document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

// Ledger ticker — signature element. Duplicated once for a seamless loop.
const tickerData = [
  { tag: 'disbursed', label: 'DISBURSED', detail: 'Loan #LH-10234 · Coimbatore branch', amt: '₹85,000' },
  { tag: 'collected', label: 'COLLECTED', detail: 'Agent R. Iyer · daily route', amt: '₹2,400' },
  { tag: 'overdue',   label: 'OVERDUE',   detail: 'Loan #LH-10199 · 3 days', amt: 'flagged' },
  { tag: 'disbursed', label: 'DISBURSED', detail: 'Loan #LH-10241 · Ambattur branch', amt: '₹1,20,000' },
  { tag: 'collected', label: 'COLLECTED', detail: 'Agent S. Bala · offline sync', amt: '₹4,150' },
  { tag: 'overdue',   label: 'OVERDUE',   detail: 'Loan #LH-10188 · 1 day', amt: 'flagged' },
  { tag: 'collected', label: 'COLLECTED', detail: 'Agent K. Meena · weekly route', amt: '₹6,800' },
  { tag: 'disbursed', label: 'DISBURSED', detail: 'Loan #LH-10247 · Trichy branch', amt: '₹45,000' },
];

const track = document.getElementById('tickerTrack');
if (track) {
  const renderOnce = () => tickerData.map(t => `
    <div class="ticker-item">
      <span class="tag ${t.tag}">${t.label}</span>
      <span>${t.detail}</span>
      <b>${t.amt}</b>
    </div>`).join('');
  track.innerHTML = renderOnce() + renderOnce();
}

// Pricing billing-period toggle (monthly/yearly)
const billingToggle = document.querySelector('.billing-toggle');
if (billingToggle) {
  const toggleBtns = billingToggle.querySelectorAll('.toggle-btn');
  const priceEls = document.querySelectorAll('.tier-price');
  const setPeriod = (period) => {
    toggleBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.period === period));
    priceEls.forEach(el => {
      el.querySelector('.price-amount').textContent = el.dataset[period + 'Amount'];
      el.querySelector('.price-unit').textContent = el.dataset[period + 'Unit'];
    });
  };
  toggleBtns.forEach(btn => btn.addEventListener('click', () => setPeriod(btn.dataset.period)));
}

// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.display = open ? 'none' : 'flex';
    navLinks.style.cssText += open ? '' : 'position:absolute; top:76px; left:0; right:0; background:var(--paper); flex-direction:column; padding:20px 28px; border-bottom:1px solid var(--rule-dark);';
  });
}

// One-page nav: highlight the link for the section currently in view,
// and close the mobile menu after tapping an anchor link.
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const sections = Array.from(navAnchors)
  .map(a => document.getElementById(a.getAttribute('href').slice(1)))
  .filter(Boolean);
if (navAnchors.length && sections.length) {
  navAnchors.forEach(a => a.addEventListener('click', () => {
    if (navLinks && window.getComputedStyle(hamburger).display !== 'none') {
      navLinks.style.display = 'none';
    }
  }));

  const setActive = (id) => {
    navAnchors.forEach(a => {
      if (a.getAttribute('href') === `#${id}`) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  };

  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter(e => e.isIntersecting);
    if (visible.length) {
      const top = visible.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b));
      setActive(top.target.id);
    }
  }, { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] });

  sections.forEach(section => observer.observe(section));
}
