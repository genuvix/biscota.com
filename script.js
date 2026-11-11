// Current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Close the mobile menu after a link is tapped
document.querySelectorAll('#mainNav .nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    var menu = document.getElementById('mainNav');
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
