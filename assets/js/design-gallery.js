document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.querySelectorAll('.carousel-container'); // Select all carousel containers

  carousels.forEach(carousel => {
    const carouselTrack = carousel.querySelector('.carousel-track'); // Track specific to this carousel
    const items = Array.from(carouselTrack.children); // Items specific to this carousel
    const nextButton = carousel.querySelector('.carousel-btn.next'); // Next button specific to this carousel
    const prevButton = carousel.querySelector('.carousel-btn.prev'); // Prev button specific to this carousel
    let itemWidth = items[0].getBoundingClientRect().width + 30; // Add the 30px for margin
    let currentIndex = 0;

    function updateCarouselPosition() {
      const offset = -currentIndex * itemWidth;
      carouselTrack.style.transform = `translateX(${offset}px)`;
    }

    nextButton.addEventListener('click', () => {
      // Scroll one item forward, but prevent overscrolling
      currentIndex = Math.min(currentIndex + 1, items.length - 1); 
      updateCarouselPosition();
    });

    prevButton.addEventListener('click', () => {
      // Scroll one item backward, but prevent overscrolling
      currentIndex = Math.max(currentIndex - 1, 0); 
      updateCarouselPosition();
    });

    // Adjust carousel on window resize
    window.addEventListener('resize', () => {
      itemWidth = items[0].getBoundingClientRect().width + 30; // Recalculate item width with margin
      updateCarouselPosition();
    });
  });
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
