const projectButtons = document.querySelectorAll(".project-item");
const projectPreviews = document.querySelectorAll(".project-preview");

projectButtons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        // hide all previews
        projectPreviews.forEach(img => img.classList.remove("active"));

        // show the linked preview
        const target = btn.dataset.preview;
        const preview = document.getElementById(target);
        if (preview) preview.classList.add("active");
    });

    btn.addEventListener("mouseleave", () => {
        // optional: hide preview again when not hovered
        projectPreviews.forEach(img => img.classList.remove("active"));
    });
});