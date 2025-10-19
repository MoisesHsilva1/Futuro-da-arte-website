function showCurrentDate(className) {
  document.querySelectorAll(`.${className}`).forEach((content) => {
    content.textContent = new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date());
  });
}
