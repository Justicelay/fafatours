// script.js
document.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 80) {
    header.style.backgroundColor = "#f8f9fa";
  } else {
    header.style.backgroundColor = "#ffffff";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const readMoreButton = document.querySelector(".read-more-button");
  const hiddenText = document.querySelector(".hidden-text");

  readMoreButton.addEventListener("click", () => {
    if (
      hiddenText.style.display === "none" ||
      hiddenText.style.display === ""
    ) {
      hiddenText.style.display = "block";
      readMoreButton.textContent = "Read Less";
    } else {
      hiddenText.style.display = "none";
      readMoreButton.textContent = "Read More";
    }
  });
});

// Image Carousel
function setupCarousels() {
  const carousels = document.querySelectorAll(".image-carousel");

  carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll("img");
    let currentIndex = 0;

    setInterval(() => {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add("active");
    }, 3000);
  });
}

// Site Description Toggle
function setupSiteDescriptions() {
  const buttons = document.querySelectorAll(".site-read-more");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".site-card");
      const hiddenText = card.querySelector(".hidden-text");

      if (
        hiddenText.style.display === "none" ||
        hiddenText.style.display === ""
      ) {
        hiddenText.style.display = "block";
        button.textContent = "Read Less";
      } else {
        hiddenText.style.display = "none";
        button.textContent = "Read More";
      }
    });
  });
}

// Services Description Toggle
function setupServiceDescriptions() {
  const buttons = document.querySelectorAll(".service-read-more");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".service-card");
      const description = card.querySelector(".service-description");

      if (
        description.style.display === "none" ||
        description.style.display === ""
      ) {
        description.style.display = "block";
        button.textContent = "Read Less";
      } else {
        description.style.display = "none";
        button.textContent = "Read More";
      }
    });
  });
}

// WhatsApp Form Handling
function sendWhatsApp(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const text = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
  const url = `https://wa.me/233533072892?text=${text}`;

  window.open(url, "_blank");

  // Reset form
  document.getElementById("whatsappForm").reset();
}

// Clone testimonials for smooth infinite scroll
function setupTestimonials() {
  const track = document.querySelector(".testimonials-track");
  const testimonials = track.innerHTML;

  // Clone testimonials
  track.innerHTML = testimonials + testimonials;
}

// Improve mobile menu handling
function setupMobileMenu() {
  const header = document.querySelector(".header");
  let lastScroll = 0;

  window.addEventListener(
    "scroll",
    () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        header.classList.remove("scroll-up");
      }

      if (
        currentScroll > lastScroll &&
        !header.classList.contains("scroll-down")
      ) {
        header.classList.remove("scroll-up");
        header.classList.add("scroll-down");
      }

      if (
        currentScroll < lastScroll &&
        header.classList.contains("scroll-down")
      ) {
        header.classList.remove("scroll-down");
        header.classList.add("scroll-up");
      }

      lastScroll = currentScroll;
    },
    { passive: true }
  );
}

// Add touch support for testimonials carousel
function setupTouchCarousel() {
  const track = document.querySelector(".testimonials-track");
  let startX = 0;
  let scrollLeft = 0;

  track.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    },
    { passive: true }
  );

  track.addEventListener("touchmove", (e) => {
    e.preventDefault();
    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupCarousels();
  setupSiteDescriptions();
  setupServiceDescriptions();
  setupTestimonials();
  setupMobileMenu();
  setupTouchCarousel();
});
