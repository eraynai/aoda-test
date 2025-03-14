// JavaScript Document

const menuButton = document.getElementById('menu-toggle');
const primaryNav = document.getElementById('primary-nav');

menuButton.addEventListener('click', function() {
  const isExpanded = this.getAttribute('aria-expanded') === 'true';
  
  this.setAttribute('aria-expanded', String(!isExpanded));
  primaryNav.hidden = isExpanded;
});



const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("modal");
const overlay = document.getElementById("modal-overlay");

const focusableElementsSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
let focusableElements, firstFocusableElement, lastFocusableElement;


openModal.addEventListener("click", () => {
    modal.classList.add("active");
    overlay.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

   
    focusableElements = modal.querySelectorAll(focusableElementsSelector);
    firstFocusableElement = focusableElements[0];
    lastFocusableElement = focusableElements[focusableElements.length - 1];


    firstFocusableElement.focus();

 
    document.addEventListener("keydown", trapFocus);
});


const closeModalFunction = () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");

    openModal.focus();
    document.removeEventListener("keydown", trapFocus); 
};


closeModal.addEventListener("click", closeModalFunction);
overlay.addEventListener("click", closeModalFunction);


const trapFocus = (e) => {
    if (e.key === "Tab") {
        if (focusableElements.length === 0) return;

        if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
                e.preventDefault();
                lastFocusableElement.focus();
            }
        } else { 
            if (document.activeElement === lastFocusableElement) {
                e.preventDefault();
                firstFocusableElement.focus();
            }
        }
    }

    if (e.key === "Escape") {
        closeModalFunction();
    }
};
