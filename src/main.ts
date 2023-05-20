import "./css/styles.scss";

/* menu button   */

const menuIcon = document.querySelector(".menu");
const themeIcon = document.querySelector(".theme__icon");

const navbarLinks = document.querySelectorAll(".scroll__link");

// const header = document.querySelector(".header");

const btnClose = document.querySelector(".btn--close");

const overlay = document.querySelector(".overlay");

/* navbar links */

// console.log(navbarLinks);
navbarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    overlay?.classList.remove("overlay__hide");

    // @ts-ignore
    const id = e.target.getAttribute("href")?.slice(1);
    const element = document.getElementById(id);
    //
    // console.log(element);

    // @ts-ignore
    let position = element.offsetTop - 62;
    // console.log(position);

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth",
    });
  });
});

/* navbar links end */

/* overlay  */

btnClose?.addEventListener("click", () => {
  overlay?.classList.remove("overlay__hide");
});

/* overlay end */

const newDate = document.querySelector(".date");

/* slide to top up */

const slideTop = document.querySelector(".slide__top");

slideTop?.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", function () {
  // if (window.pageYOffset > 10) {
  //   header?.classList.add("header__fixed");
  // } else {
  //   header?.classList.remove("header__fixed");
  // }
  if (window.pageYOffset > 80) {
    slideTop?.classList.add("slide__top__active");
  } else {
    slideTop?.classList.remove("slide__top__active");
  }
});
/* slide to top up  end */

/* const prefersColorScheme = window.matchMedia("(prefers-color-scheme : dark)");


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
}); */

menuIcon?.addEventListener("click", () => {
  overlay?.classList.add("overlay__hide");
});

/* get  current color */
function getCurrentColor() {
  let theme = window.matchMedia("(prefers-color-scheme : dark)").matches
    ? "dark"
    : "light";

  localStorage.getItem("theme")
    ? /* @ts-ignore */
      (theme = localStorage.getItem("theme"))
    : null;

  return theme;
}

window.addEventListener("DOMContentLoaded", () => {
  loadTheme(getCurrentColor());
});

/* @ts-ignore */

function loadTheme(theme) {
  const root = document.querySelector(":root");

  if (theme === "light") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }

  root?.setAttribute("color-scheme", `${theme}`);
}

themeIcon?.addEventListener("click", () => {
  // console.log("click");
  let theme = getCurrentColor();

  // console.log(theme);

  if (theme === "dark") {
    theme = "light";
  } else if (theme === "light") {
    theme = "dark";
  }
  themeIcon.classList.toggle("theme__icon__dark");
  localStorage.setItem("theme", theme);
  loadTheme(theme);
});

(newDate as HTMLElement).innerHTML = `${new Date().getFullYear()} `;
