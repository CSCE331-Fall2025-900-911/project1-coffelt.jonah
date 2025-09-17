const tooltip = document.getElementById("nav-title");
const buttons = document.querySelectorAll(".nav-button");
const pages = document.querySelectorAll(".page");

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        tooltip.textContent = btn.dataset.tooltip;
        tooltip.style.opacity = 1;
    });
    btn.addEventListener("mouseleave", () => {
        tooltip.style.opacity = 0;
    });
    btn.addEventListener("click", () => {
    const target = btn.dataset.page;
    if (!target) return;

    pages.forEach(p => p.classList.remove("active"));

    const page = document.getElementById(target);
    if (page) page.classList.add("active");
  });
});
