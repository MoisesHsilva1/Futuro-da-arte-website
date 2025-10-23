document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("header nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
