(() => {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
  const year = document.querySelector('[data-year]');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const setMenuState = (isOpen) => {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('is-open', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
  };

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      setMenuState(toggle.getAttribute('aria-expanded') !== 'true');
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setMenuState(false);
        toggle.focus();
      }
    });

    document.addEventListener('click', (event) => {
      if (
        toggle.getAttribute('aria-expanded') === 'true' &&
        !nav.contains(event.target) &&
        !toggle.contains(event.target)
      ) {
        setMenuState(false);
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 860) setMenuState(false);
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        navLinks.forEach((link) => {
          const isCurrent = link.getAttribute('href') === `#${visible.target.id}`;
          link.classList.toggle('is-active', isCurrent);
          if (isCurrent) {
            link.setAttribute('aria-current', 'location');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      },
      { rootMargin: '-28% 0px -58%', threshold: [0, 0.15, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
  }
})();
