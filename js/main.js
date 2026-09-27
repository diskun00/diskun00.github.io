(function () {
  // Email is assembled at runtime so the address never appears in the HTML source.
  function addr() {
    return ['h', 'i'].join('') + String.fromCharCode(64) + ['me', 'diskun'].reverse().join('.');
  }
  document.querySelectorAll('[data-mail]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = 'mai' + 'lto:' + addr();
    });
    if (el.hasAttribute('data-mail-text')) el.textContent = addr();
  });

  // Accordion: only one project open at a time.
  var projects = document.querySelectorAll('details.project');
  projects.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) return;
      projects.forEach(function (other) {
        if (other !== d) other.open = false;
      });
    });
  });
})();
