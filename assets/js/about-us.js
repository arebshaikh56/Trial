document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for internal links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Lazy load images for better performance
    const lazyImages = document.querySelectorAll('img');
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    observer.unobserve(img);
                }
            });
        },
        { rootMargin: '0px 0px 200px 0px' }
    );
    lazyImages.forEach(img => observer.observe(img));
});

//responsive

const menuToggle = document.querySelector('.menu-toggle');
const navbarNav = document.querySelector('.navbar-nav');

menuToggle.addEventListener('click', () => {
  navbarNav.classList.toggle('active');
  menuToggle.textContent = navbarNav.classList.contains('active') ? '✖' : '☰';
});

// Toggle submenus
const submenuToggles = document.querySelectorAll('.toggle-submenu');

submenuToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const dropdownMenu = toggle.parentElement.querySelector('.dropdown-menu');

    // Check if the current submenu is already active
    const isActive = dropdownMenu.classList.contains('active');

    // Close all other dropdown menus and reset their toggle buttons
    document.querySelectorAll('.dropdown-menu').forEach((menu) => {
      menu.classList.remove('active');
    });
    document.querySelectorAll('.toggle-submenu').forEach((btn) => {
      btn.textContent = '+';
    });

    // If the clicked submenu was not active, open it and set the toggle to '-'
    if (!isActive) {
      dropdownMenu.classList.add('active');
      toggle.textContent = '-';
    } else {
      // If the clicked submenu was active, close it and reset the toggle
      dropdownMenu.classList.remove('active');
      toggle.textContent = '+';
    }
  });
});
