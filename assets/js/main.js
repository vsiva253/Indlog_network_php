// Main JavaScript for INDLOG Website

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all functionality
  initSmoothScrolling();
  initScrollAnimations();
  initBackToTop();
  initNewsletterForm();
  initMobileMenu();
  initTableResponsive();
  initThemeToggle();
  initMemberPagination();
  initLatestMembersSlider();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Scroll animations for elements
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Add animation classes to elements
  const animatedElements = document.querySelectorAll(
    ".feature-card, .member-card, .section-header"
  );
  animatedElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
}

// Back to top button
function initBackToTop() {
  const backToTopBtn = document.createElement("button");
  backToTopBtn.className = "back-to-top";
  backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTopBtn.setAttribute("aria-label", "Back to top");
  document.body.appendChild(backToTopBtn);

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Newsletter form handling
function initNewsletterForm() {
  const newsletterForm = document.querySelector(".newsletter-form");
  if (!newsletterForm) return;

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = this.querySelector(".newsletter-input");
    const submitBtn = this.querySelector(".newsletter-btn");
    const email = emailInput.value.trim();

    // Validate email
    if (!isValidEmail(email)) {
      showFormMessage(
        emailInput,
        "Please enter a valid email address",
        "error"
      );
      return;
    }

    // Show loading state
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="loading"></div>';
    submitBtn.disabled = true;

    // Simulate API call (replace with actual implementation)
    setTimeout(() => {
      showFormMessage(emailInput, "Thank you for subscribing!", "success");
      emailInput.value = "";
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 1500);
  });
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show form messages
function showFormMessage(input, message, type) {
  // Remove existing messages
  const existingMessage = input.parentNode.querySelector(".form-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  // Add new message
  const messageEl = document.createElement("div");
  messageEl.className = `form-message form-${type}`;
  messageEl.textContent = message;
  input.parentNode.appendChild(messageEl);

  // Update input styling
  input.classList.remove("error", "success");
  input.classList.add(type);

  // Remove message after 5 seconds
  setTimeout(() => {
    messageEl.remove();
    input.classList.remove("error", "success");
  }, 5000);
}

// Mobile menu toggle functionality
function initMobileMenu() {
  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!mobileToggle || !navMenu) return;

  // Toggle mobile menu
  mobileToggle.addEventListener("click", function () {
    const isActive = this.classList.contains("active");

    this.classList.toggle("active");
    this.setAttribute("aria-expanded", !isActive);
    navMenu.classList.toggle("active");

    // Prevent body scroll when menu is open
    document.body.style.overflow = !isActive ? "hidden" : "";
  });

  // Close menu when clicking on nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileToggle.classList.remove("active");
      mobileToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
      mobileToggle.classList.remove("active");
      mobileToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Close menu on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      mobileToggle.classList.remove("active");
      mobileToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Handle window resize
  window.addEventListener(
    "resize",
    debounce(function () {
      if (window.innerWidth > 767) {
        mobileToggle.classList.remove("active");
        mobileToggle.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("active");
        document.body.style.overflow = "";
      }
    }, 250)
  );
}

// Make tables responsive
function initTableResponsive() {
  const tables = document.querySelectorAll(".table");
  tables.forEach((table) => {
    const wrapper = document.createElement("div");
    wrapper.className = "table-responsive";
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
}

// Theme toggle functionality
function initThemeToggle() {
  // Force light theme to maintain original design
  document.documentElement.setAttribute("data-theme", "light");
  document.body.classList.add("theme-light");

  // Theme toggle disabled to maintain original light design
  // const themeToggle = document.createElement('button');
  // themeToggle.className = 'theme-toggle';
  // themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  // themeToggle.setAttribute('aria-label', 'Toggle theme');

  // Add to header actions (optional)
  // const headerActions = document.querySelector('.header-actions');
  // if (headerActions) {
  //     headerActions.appendChild(themeToggle);

  //     themeToggle.addEventListener('click', function() {
  //         const currentTheme = document.documentElement.getAttribute('data-theme');
  //         const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  //         document.documentElement.setAttribute('data-theme', newTheme);
  //         localStorage.setItem('theme', newTheme);

  //         // Update icon
  //         const icon = this.querySelector('i');
  //         icon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
  //     });
  // }
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Performance optimization
window.addEventListener(
  "scroll",
  throttle(function () {
    // Throttled scroll events for better performance
  }, 16)
);

// Error handling
window.addEventListener("error", function (e) {
  console.error("JavaScript error:", e.error);
});

// Service Worker registration (for PWA features)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/sw.js")
      .then(function (registration) {
        console.log("ServiceWorker registration successful");
      })
      .catch(function (err) {
        console.log("ServiceWorker registration failed");
      });
  });
}

// Member cards pagination (dots)
function initMemberPagination() {
  // Skip latest-members slider containers
  const container = document.querySelector(".members-grid:not([data-slider])");
  const cards = container
    ? Array.from(container.querySelectorAll(".member-card"))
    : [];
  const dotsContainer = document.querySelector(
    ".pagination-dots:not([data-dots])"
  );
  if (!container || cards.length === 0 || !dotsContainer) return;

  const pageSize = 3; // adjust for how many cards should show per page
  const pageCount = Math.max(1, Math.ceil(cards.length / pageSize));

  // build dots dynamically so they match the number of pages
  dotsContainer.innerHTML = "";
  const dots = [];
  for (let i = 0; i < pageCount; i++) {
    const btn = document.createElement("button");
    btn.className = "dot" + (i === 0 ? " active" : "");
    btn.type = "button";
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-label", `Page ${i + 1}`);
    btn.setAttribute("aria-selected", i === 0 ? "true" : "false");
    btn.dataset.index = String(i);
    btn.tabIndex = i === 0 ? 0 : -1;
    dotsContainer.appendChild(btn);
    dots.push(btn);
  }

  function showPage(pageIndex) {
    const idx = Math.max(0, Math.min(pageIndex, pageCount - 1));
    cards.forEach((card, i) => {
      const cardPage = Math.floor(i / pageSize);
      if (cardPage === idx) {
        card.style.display = "";
        card.setAttribute("aria-hidden", "false");
      } else {
        card.style.display = "none";
        card.setAttribute("aria-hidden", "true");
      }
    });

    dots.forEach((dot, i) => {
      const isActive = i === idx;
      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-selected", isActive ? "true" : "false");
      dot.setAttribute("tabindex", isActive ? "0" : "-1");
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      const index = parseInt(this.dataset.index, 10) || 0;
      showPage(index);
    });

    dot.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const current = parseInt(this.dataset.index, 10) || 0;
        const prev = Math.max(0, current - 1);
        dots[prev].focus();
        dots[prev].click();
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const current = parseInt(this.dataset.index, 10) || 0;
        const next = Math.min(pageCount - 1, current + 1);
        dots[next].focus();
        dots[next].click();
      }
    });
  });

  // show first page by default
  showPage(0);
}

// Smooth slider for Latest Members
function initLatestMembersSlider() {
  const slider = document.querySelector(".latest-members [data-slider]");
  const track = slider ? slider.querySelector("[data-track]") : null;
  const slides = track
    ? Array.from(track.querySelectorAll("[data-slide]"))
    : [];
  const dotsContainer = document.querySelector(".latest-members [data-dots]");
  if (!slider || !track || slides.length === 0 || !dotsContainer) return;

  // Determine slides per view based on CSS breakpoints
  function getSlidesPerView() {
    if (window.innerWidth <= 767) return 1;
    if (window.innerWidth <= 1023) return 2;
    return 3;
  }

  let currentPage = 0;
  function getPageCount() {
    return Math.max(1, Math.ceil(slides.length / getSlidesPerView()));
  }

  function buildDots() {
    const pageCount = getPageCount();
    dotsContainer.innerHTML = "";
    for (let i = 0; i < pageCount; i++) {
      const btn = document.createElement("button");
      btn.className = "dot" + (i === 0 ? " active" : "");
      btn.type = "button";
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-label", `Page ${i + 1}`);
      btn.setAttribute("aria-selected", i === 0 ? "true" : "false");
      btn.dataset.index = String(i);
      btn.tabIndex = i === 0 ? 0 : -1;
      dotsContainer.appendChild(btn);
    }
  }

  function updateDots() {
    const dots = Array.from(dotsContainer.querySelectorAll(".dot"));
    dots.forEach((dot, i) => {
      const isActive = i === currentPage;
      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-selected", isActive ? "true" : "false");
      dot.setAttribute("tabindex", isActive ? "0" : "-1");
    });
  }

  function goToPage(index) {
    const pageCount = getPageCount();
    // wrap index to enable infinite looping
    currentPage = ((index % pageCount) + pageCount) % pageCount;
    const gap =
      parseFloat(getComputedStyle(track).columnGap || 0) ||
      parseFloat(getComputedStyle(track).gap || 0) ||
      0;
    const slidesPerView = getSlidesPerView();
    const sliderWidth = slider.clientWidth;
    const slideWidth =
      (sliderWidth - gap * (slidesPerView - 1)) / slidesPerView;
    // Align pages so the first card of each page sits flush left.
    // Step size is page width plus the single inter-page gap.
    const step = slidesPerView * (slideWidth + gap);
    const offset = currentPage * step;
    track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    updateDots();
    updateVisibleSlides();
  }

  function onDotClick(e) {
    const target = e.currentTarget;
    const index = parseInt(target.dataset.index, 10) || 0;
    goToPage(index);
  }

  function onKeyDown(e) {
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      goToPage(currentPage - 1);
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      goToPage(currentPage + 1);
    }
  }

  function attachDotEvents() {
    const dots = Array.from(dotsContainer.querySelectorAll(".dot"));
    dots.forEach((dot) => {
      dot.removeEventListener("click", onDotClick);
      dot.removeEventListener("keydown", onKeyDown);
      dot.addEventListener("click", onDotClick);
      dot.addEventListener("keydown", onKeyDown);
    });
  }

  function recalc() {
    buildDots();
    attachDotEvents();
    goToPage(currentPage);
  }

  function updateVisibleSlides() {
    const slidesPerView = getSlidesPerView();
    const startIndex = currentPage * slidesPerView;
    const endIndex = startIndex + slidesPerView - 1;
    slides.forEach((slide, i) => {
      const isVisible = i >= startIndex && i <= endIndex;
      slide.classList.toggle("is-visible", isVisible);
    });
  }

  // Initial
  recalc();

  // Recalculate on resize with debounce
  window.addEventListener("resize", debounce(recalc, 200));
}
