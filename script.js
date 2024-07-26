/* pages of menu hidden */
const navPages = document.querySelector(".pages");
const navClose = document.querySelector(".nav_close");
const navToggle = document.querySelector(".nav_toggle");

// Menu Show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navPages.classList.add("show_pages");
  });
}

// Menu HIdden
if (navClose) {
  navClose.addEventListener("click", () => {
    navPages.classList.remove("show_pages");
  });
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navPages = document.querySelector(".pages");
  // When we click on each nav__link, we remove the show-menu class
  navPages.classList.remove("show_pages");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// skills Accordion not working
const skillsContent = document.getElementsByClassName("skills_content"),
  skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
  let itemsClass = this.parentNode.className;
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skill_close";
  }
  if (itemsClass === "skills_content skill_close") {
    this.parentNode.className = "skills_content skill_open";
  }
}
skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});
// qualification tabs
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContents) => {
      tabContents.classList.remove("qualification_active");
    });
    target.classList.add("qualification_active");
    tab.forEach((tab) => {
      tab.classList.remove("qualification_active");
    });
    tab.classList.add("qualification_active");
  });
});
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
// Email Js-------------------------------------------------------

const contactForm = document.getElementById("contact_form");
const contactMessage = document.getElementById("contact_message");
const sendEmail = (e) => {
  e.preventDefault();
  // serviceID  "service_5jjhdur"- TEMPLATEID "template_hylspbj" - #contact_form - PUBLIC_KEY - "NA-yZFCTHiYwE0s2j"
  emailjs
    .sendForm(
      "service_5jjhdur",
      "template_hylspbj",
      "#contact_form",
      "NA-yZFCTHiYwE0s2j"
    )
    .then(
      () => {
        contactMessage.textContent = "message sent successfully :) ";

        // remove message after 5seconds
        setTimeout(() => {
          contactMessage.textContent = " ";
        }, 5000);
        contactForm.reset();
      },
      () => {
        // show error message
        contactMessage.textContent = "error in sending :( ";
      }
    );
};
contactForm.addEventListener("submit", sendEmail);

// ---------------- ACTIVE LINK ON CURRENT PAGE ---------------------
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".pages a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// --------------- SCROLL REVEAL ANIMATION ------------------ //
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset:true (animations repeat)
});
sr.reveal(".home_data,.home_social,.contact_container,.footer_container");
sr.reveal(".home_img", { origin: "bottom" });
sr.reveal(".about_img, .portfolio_content", { origin: "left" });
sr.reveal(".about_data", { origin: "right" });
