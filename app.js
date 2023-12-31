// SEARCH ELEMENTS
const search = document.getElementById("search"),
  searchBtn = document.getElementById("search-btn"),
  searchClose = document.getElementById("search-close");

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

// LOGIN ELEMENTS
const login = document.getElementById("login"),
  loginBtn = document.getElementById("login-btn"),
  loginClose = document.getElementById("login-close");

// GRAB ALL NAVIGATION LINK
const navLinks = document.querySelectorAll(".nav-link");


// FUNCTIONALITY ------------------

/* Search show */
searchBtn.addEventListener("click", () => {
  search.classList.add("show-search");
  document.body.style.overflow = "hidden";
});

/* Search hidden */
searchClose.addEventListener("click", () => {
  search.classList.remove("show-search");
  document.body.style.overflow = "";
});
/* Login show */
loginBtn.addEventListener("click", () => {
  login.classList.add("show-login");
  document.body.style.overflow = "hidden";
});

/* Login hidden */
loginClose.addEventListener("click", () => {
  login.classList.remove("show-login");
  document.body.style.overflow = "";
});

/* Scroll to section */
function scrollToSection(event) {
  event.preventDefault();
  const targetId = this.getAttribute("href");
  const targetSection = document.querySelector(targetId);

  if (targetSection) {
    const targetOffsetTop = targetSection.offsetTop - 50;
    window.scrollTo({
      top: targetOffsetTop,
      behavior: "smooth",
    });

    /* Highlight the link immediately upon click */
    navLinks.forEach((link) => {
      link.classList.remove("active-link");
    });
    this.classList.add("active-link");
  }
}

/* Add click event listeners to navigation links */
navLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

/* change header background*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
