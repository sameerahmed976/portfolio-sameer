import "./css/styles.scss";

/* menu button   */

const menuIcon = document.querySelector(".menu");
const themeIcon = document.querySelector(".theme__icon");
const navbarLinks = document.querySelector(".navbar__links");

const links = document.querySelectorAll(".navbar__links li");

links.forEach((link) => {
  link.parentElement?.addEventListener("click", () => {
    link.parentElement?.classList.remove("navbar__links__active");

    menuIcon?.classList.remove("active");
  });
});

const prefersColorScheme = window.matchMedia("(prefers-color-scheme : dark)");

menuIcon?.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navbarLinks?.classList.toggle("navbar__links__active");
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
