/* Forumly — shared nav behaviour */
(function () {
  const nav       = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const links     = document.getElementById('navLinks');

  /* Sticky shadow */
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  /* Mobile toggle */
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      const open = links.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
    });
  }

  /* Close on link click (mobile) */
  if (links) {
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        hamburger && hamburger.classList.remove('open');
      });
    });
  }

  /* Scroll reveal */
  const ro = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        ro.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    ro.observe(el);
  });
})();
