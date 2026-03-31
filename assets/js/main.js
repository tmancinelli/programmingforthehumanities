document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.remove('is-preload');
  const openers = document.querySelectorAll('#menu .opener');
  openers.forEach(function(opener) {
    const submenu = opener.nextElementSibling;
    if (submenu) submenu.style.display = 'none';
    opener.addEventListener('click', function() {
      if (submenu) submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      opener.classList.toggle('active');
    });
  });
});