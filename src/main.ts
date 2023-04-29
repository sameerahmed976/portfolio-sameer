import "./css/styles.scss";

/* menu button   */

const menuIcon = document.querySelector(".menu");
const themeIcon = document.querySelector(".theme__icon");
const navbarLinks = document.querySelector(".navbar__links");

const btnClose = document.querySelector(".btn--close");

const overlay = document.querySelector(".overlay");

btnClose?.addEventListener("click", () => {
  overlay?.classList.remove("overlay__hide");
});

const links = document.querySelectorAll(".navbar__links li");

const newDate = document.querySelector(".date");
const header = document.querySelector(".header");

const slideTop = document.querySelector(".slide__top");

slideTop?.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    slideTop?.classList.add("slide__top__active");
    header?.classList.add("header__fixed");
  } else {
    slideTop?.classList.remove("slide__top__active");
    header?.classList.remove("header__fixed");
  }
});

links.forEach((link) => {
  link.parentElement?.addEventListener("click", () => {
    // console.log(link.parentElement?.parentElement);

    link.parentElement?.parentElement?.classList.remove("overlay__hide");

    menuIcon?.classList.remove("active");
  });
});

const prefersColorScheme = window.matchMedia("(prefers-color-scheme : dark)");

menuIcon?.addEventListener("click", () => {
  overlay?.classList.add("overlay__hide");
});

const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.toggle("dark__theme");
} else if (currentTheme === "light") {
  document.body.classList.toggle("light__theme");
}

themeIcon?.addEventListener("click", () => {
  if (prefersColorScheme.matches) {
    document.body.classList.toggle("light__theme");
    themeIcon.classList.toggle("theme__icon__dark");
    if (document.body.classList.contains("light__theme")) {
      var theme = "light";
    } else {
      var theme = "dark";
    }
  } else {
    document.body.classList.toggle("dark__theme");
    themeIcon.classList.toggle("theme__icon__dark");

    if (document.body.classList.contains("dark__theme")) {
      var theme = "dark";
    } else {
      var theme = "light";
    }
  }

  localStorage.setItem("theme", theme);
});

/* date  */

(newDate as HTMLElement).innerHTML = `${new Date().getFullYear()} `;
