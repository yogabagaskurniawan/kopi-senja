// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klick diluar slidebar untuk menghilangkan nav
const hamburgerIcon = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburgerIcon.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
