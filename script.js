document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.menu-toggle');

  toggles.forEach(toggle => {
    const controls = toggle.getAttribute('aria-controls');
    const menu = controls ? document.getElementById(controls) : null;
    if (!menu) return;

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      toggle.classList.toggle('is-open');
      menu.classList.toggle('open');
    });
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-links').forEach(menu => menu.classList.remove('open'));
      document.querySelectorAll('.menu-toggle').forEach(btn => {
        btn.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  });
});
