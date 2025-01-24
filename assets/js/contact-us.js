document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
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
