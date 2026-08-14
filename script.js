/* ========================================
   RN PORTFOLIO - JAVASCRIPT
   ======================================== */


/* ========================================
   MOBILE MENU
   ======================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show-menu");

        if (navLinks.classList.contains("show-menu")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });

}


/* ========================================
   CLOSE MOBILE MENU
   ======================================== */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("show-menu");
        }

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }

    });

});


/* ========================================
   SLIDESHOW
   ======================================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;


function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active-slide");
    });

    dots.forEach(dot => {
        dot.classList.remove("active-dot");
    });


    if (slides[index]) {
        slides[index].classList.add("active-slide");
    }

    if (dots[index]) {
        dots[index].classList.add("active-dot");
    }

}


function nextSlide() {

    if (slides.length === 0) {
        return;
    }

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}


if (slides.length > 1) {

    setInterval(nextSlide, 4000);

}


/* ========================================
   SLIDESHOW DOTS
   ======================================== */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;

        showSlide(currentSlide);

    });

});


/* ========================================
   SCROLL ANIMATIONS
   ======================================== */

const animatedElements = document.querySelectorAll(
    ".skill-card, .slide, .project-card, .contact-card, .cta"
);


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show-animation");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    animatedElements.forEach(element => {

        element.classList.add("before-animation");

        observer.observe(element);

    });

}


/* ========================================
   CONTACT FORM
   ======================================== */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const service = document.querySelector("#service").value;
        const message = document.querySelector("#message").value.trim();

        if (!name || !email || !message) {

            alert("Please fill in all required fields.");

            return;
        }


        /* Create success message */

        const successMessage = document.createElement("div");

        successMessage.className = "form-success";

        successMessage.innerHTML = `
            <div class="success-icon">✓</div>

            <h3>Message Ready!</h3>

            <p>
                Thank you, ${name}!
            </p>

            <p>
                Your project enquiry has been prepared successfully.
                We will connect this form to your email when the website
                is hosted online.
            </p>
        `;


        /* Hide the form */

        contactForm.style.display = "none";


        /* Show success message */

        contactForm.parentElement.appendChild(successMessage);


        /* Reset form */

        contactForm.reset();

    });

}


/* ========================================
   MOBILE NAVIGATION
   ======================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show-menu");

    });


    /* Close menu when a link is clicked */

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show-menu");

        });

    });

}
/* ========================================
   PORTFOLIO SLIDESHOW
======================================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextButton = document.querySelector(".slide-next");
const prevButton = document.querySelector(".slide-prev");

let currentSlide = 0;
let slideTimer;


/* SHOW SLIDE */

function showSlide(index) {

    if (!slides.length) {
        return;
    }

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }


    slides.forEach(function(slide) {
        slide.classList.remove("active-slide");
    });


    dots.forEach(function(dot) {
        dot.classList.remove("active-dot");
    });


    slides[currentSlide].classList.add("active-slide");


    if (dots[currentSlide]) {
        dots[currentSlide].classList.add("active-dot");
    }
}


/* NEXT */

function nextSlide() {

    showSlide(currentSlide + 1);

    restartTimer();
}


/* PREVIOUS */

function previousSlide() {

    showSlide(currentSlide - 1);

    restartTimer();
}


/* BUTTONS */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        nextSlide
    );

}


if (prevButton) {

    prevButton.addEventListener(
        "click",
        previousSlide
    );

}


/* DOTS */

dots.forEach(function(dot, index) {

    dot.addEventListener("click", function() {

        showSlide(index);

        restartTimer();

    });

});


/* AUTOMATIC SLIDESHOW */

function startTimer() {

    slideTimer = setInterval(function() {

        showSlide(currentSlide + 1);

    }, 5000);

}


function restartTimer() {

    clearInterval(slideTimer);

    startTimer();

}


/* START */

if (slides.length) {

    showSlide(0);

    startTimer();

}
/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements =
    document.querySelectorAll(".reveal");

if (revealElements.length) {

    const revealObserver =
        new IntersectionObserver(
            function(entries) {

                entries.forEach(function(entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(function(element) {

        revealObserver.observe(element);

    });

}
