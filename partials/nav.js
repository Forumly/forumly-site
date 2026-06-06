(function () {
  var navHTML =
    '<nav class="site-nav" id="nav" role="navigation">' +
      '<div class="nav-inner">' +
        '<a href="index.html" class="nav-logo">Forumly<em>.</em></a>' +
        '<div class="nav-links" id="navLinks">' +
          '<a href="product.html">Product</a>' +
          '<a href="pricing.html">Pricing</a>' +
          '<a href="about.html">About</a>' +
          '<a href="faq.html">FAQ</a>' +
        '</div>' +
        '<div class="nav-right">' +
          '<a href="#" class="nav-login">Login</a>' +
          '<a href="#" class="btn btn-primary btn-sm">Book a Demo</a>' +
        '</div>' +
        '<button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>' +
    '</nav>';

  document.currentScript.insertAdjacentHTML('beforebegin', navHTML);

  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#navLinks a').forEach(function (a) {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();
