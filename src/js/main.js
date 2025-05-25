// Quantity Counter
function handleQuantity() {
  const minusButton = document.querySelector(".counter-minus");
  const plusButton = document.querySelector(".counter-plus");
  const quantity = document.querySelector(".counter-quantity");
  let count = 1;

  if (!minusButton || !plusButton || !quantity) return;

  minusButton.addEventListener("click", () => {
    count = count > 1 ? count - 1 : 1;
    quantity.textContent = count;
  });

  plusButton.addEventListener("click", () => {
    count++;
    quantity.textContent = count;
  });
}

// Radio Button Logging
function initRadioButtons() {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", function () {
      if (this.checked) {
        console.log("Selected value: " + this.value);
      }
    });
  });
}

// "Added to Cart" Animation
function initCartAnimation() {
  const cartButton = document.querySelector(".cart-button");
  const bagIcons = document.querySelectorAll(".shopping-bag");

  function animateAddToCart(
    buttonElement,
    animationClass = "animate",
    messageClass = "show-message",
    duration = 1000
  ) {
    if (!buttonElement) return;

    buttonElement.classList.add(animationClass, messageClass);

    bagIcons.forEach((bag) => {
      bag.classList.add("bag-bounce");
      setTimeout(() => bag.classList.remove("bag-bounce"), duration);
    });

    setTimeout(() => {
      buttonElement.classList.remove(animationClass, messageClass);
    }, duration);
  }

  if (cartButton) {
    cartButton.addEventListener("click", () => {
      animateAddToCart(cartButton);
    });
  }
}

// Accordion Toggle
function initAccordion() {
  const accordion = document.getElementsByClassName("accordion-title");

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", !isExpanded);
      this.classList.toggle("minus");

      const content = this.nextElementSibling;
      if (content) {
        content.style.display = isExpanded ? "none" : "block";
        content.setAttribute("aria-hidden", isExpanded.toString());
      }
    });
  }
}

// Carousel Navigation
function initCarousel() {
  const container = document.querySelector(".carousel-container");
  const prevBtn = document.querySelector(".carousel-button.prev");
  const nextBtn = document.querySelector(".carousel-button.next");

  function getSlideWidth() {
    const slide = container?.querySelector(".carousel-slide");
    return slide ? slide.offsetWidth : 0;
  }

  if (container && prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      container.scrollBy({ left: -getSlideWidth(), behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
      container.scrollBy({ left: getSlideWidth(), behavior: "smooth" });
    });
  }
}

// Init All on DOM Ready
document.addEventListener("DOMContentLoaded", function () {
  handleQuantity();
  initRadioButtons();
  initCartAnimation();
  initAccordion();
  initCarousel();
});
