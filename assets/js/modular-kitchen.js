document.querySelectorAll('.product').forEach((product, index) => {
  console.log(`Initializing carousel for product ${index + 1}`);

  const slides = product.querySelector('.carousel-slides');
  const slide = product.querySelectorAll('.carousel-slide');
  const prevBtn = product.querySelector('.carousel-button.prev');
  const nextBtn = product.querySelector('.carousel-button.next');
  const dots = product.querySelectorAll('.carousel-dot');
  const exploreMoreBtn = product.querySelector('.explore-more-btn');
  const getQuoteBtn = product.querySelector('.get-quote-btn');
  const exploreMoreSection = product.querySelector('.explore-more-section');
  const quoteSection = product.querySelector('.quote-section');

  // Check if the required elements exist
  if (!slides || slide.length === 0 || !prevBtn || !nextBtn) {
      console.error(`Carousel elements missing for product ${index + 1}`);
      return;
  }

  let currentIndex = 0;

  // Function to update carousel
  function updateCarousel() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, dotIndex) => {
          dot.classList.toggle('active', dotIndex === currentIndex);
      });
  }

  // Show previous slide
  function showPrevSlide() {
      currentIndex = (currentIndex === 0) ? slide.length - 1 : currentIndex - 1;
      updateCarousel();
  }

  // Show next slide
  function showNextSlide() {
      currentIndex = (currentIndex === slide.length - 1) ? 0 : currentIndex + 1;
      updateCarousel();
  }

  // Attach event listeners for carousel buttons
  prevBtn.addEventListener('click', showPrevSlide);
  nextBtn.addEventListener('click', showNextSlide);

  // Attach event listeners for dots
  dots.forEach((dot, dotIndex) => {
      dot.addEventListener('click', () => {
          currentIndex = dotIndex;
          updateCarousel();
      });
  });

  // Button event listeners for additional sections
  if (exploreMoreBtn && exploreMoreSection) {
      exploreMoreBtn.addEventListener('click', () => {
          exploreMoreSection.style.display = exploreMoreSection.style.display === 'block' ? 'none' : 'block';
          if (quoteSection) quoteSection.style.display = 'none';
      });
  }

  if (getQuoteBtn && quoteSection) {
      getQuoteBtn.addEventListener('click', () => {
          quoteSection.style.display = quoteSection.style.display === 'block' ? 'none' : 'block';
          if (exploreMoreSection) exploreMoreSection.style.display = 'none';
      });
  }

  // Initialize carousel
  updateCarousel();
});

// Responsive menu toggle
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
