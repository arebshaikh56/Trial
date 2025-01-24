document.querySelectorAll('.product').forEach((product) => {
    const slides = product.querySelector('.carousel-slides');
    const slide = product.querySelectorAll('.carousel-slide');
    const prevBtn = product.querySelector('.carousel-button.prev');
    const nextBtn = product.querySelector('.carousel-button.next');
    const dots = product.querySelectorAll('.carousel-dot');
    const exploreMoreBtn = product.querySelector('.explore-more-btn');
    const getQuoteBtn = product.querySelector('.get-quote-btn');
    const exploreMoreSection = product.querySelector('.explore-more-section');
    const quoteSection = product.querySelector('.quote-section');

    let currentIndex = 0;

    function updateCarousel() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function showPrevSlide() {
        currentIndex = (currentIndex === 0) ? slide.length - 1 : currentIndex - 1;
        updateCarousel();
    }

    function showNextSlide() {
        currentIndex = (currentIndex === slide.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    }

    prevBtn.addEventListener('click', showPrevSlide);
    nextBtn.addEventListener('click', showNextSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Button event listeners
    exploreMoreBtn.addEventListener('click', () => {
        exploreMoreSection.style.display = exploreMoreSection.style.display === 'block' ? 'none' : 'block';
        quoteSection.style.display = 'none';
    });

    getQuoteBtn.addEventListener('click', () => {
        quoteSection.style.display = quoteSection.style.display === 'block' ? 'none' : 'block';
        exploreMoreSection.style.display = 'none';
    });

    // Initialize carousel
    updateCarousel();
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
