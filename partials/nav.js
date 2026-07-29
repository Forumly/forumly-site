(function () {
  var navHTML =
    '<nav class="site-nav" id="nav" role="navigation">' +
      '<div class="nav-inner">' +
        '<a href="/" class="nav-logo">Forumly<em>.</em></a>' +
        '<div class="nav-links" id="navLinks">' +
          '<a href="/product">Product</a>' +
          '<a href="/pricing">Pricing</a>' +
          '<a href="/about">About</a>' +
          '<a href="/faq">FAQ</a>' +
        '</div>' +
        '<div class="nav-right">' +
          '<a href="" onclick="Calendly.initPopupWidget({url:\'https://calendly.com/nathan-tryforumly/30min?primary_color=fe7f2d\'});return false;" class="btn btn-primary btn-sm">Book a Demo</a>' +
        '</div>' +
        '<button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>' +
    '</nav>';

  document.currentScript.insertAdjacentHTML('beforebegin', navHTML);

  var page = window.location.pathname.replace(/(index)?\.html$/, '').replace(/\/$/, '') || '/';
  document.querySelectorAll('#navLinks a').forEach(function (a) {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();
