const sheet_style = document.getElementById("sheet-style");
const sheet_nav = document.getElementById("sheet-nav");
const sheet_home = document.getElementById("sheet-home");
const sheet_projects = document.getElementById("sheet-projects");
const sheet_acedemics= document.getElementById("sheet-acedemics");
const sheet_serivice = document.getElementById("sheet-service");

const toggleBtn = document.getElementById("theme-toggle");

// Default to theme1 if nothing stored yet
let currentTheme = localStorage.getItem("theme") || "style";

// Apply stored theme on page load
setTheme(currentTheme);

function setTheme(themeName) {
    const href1 = sheet_style.getAttribute("href");
    const href2 = sheet_nav.getAttribute("href");
    const href3 = sheet_projects.getAttribute("href");
    const href4 = sheet_acedemics.getAttribute("href");
    const href5 = sheet_serivice.getAttribute("href");
    const href6 = sheet_home.getAttribute("href");

    const fileName1 = href1.split("/").pop();
    const fileName2 = href2.split("/").pop();
    const fileName3 = href3.split("/").pop();
    const fileName4 = href4.split("/").pop();
    const fileName5 = href5.split("/").pop();
    const fileName6 = href6.split("/").pop();

    sheet_style.setAttribute("href", `${themeName}/${fileName1}`);
    sheet_nav.setAttribute("href", `${themeName}/${fileName2}`);
    sheet_projects.setAttribute("href", `${themeName}/${fileName3}`);
    sheet_acedemics.setAttribute("href", `${themeName}/${fileName4}`);
    sheet_serivice.setAttribute("href", `${themeName}/${fileName5}`);
    sheet_home.setAttribute("href", `${themeName}/${fileName6}`);

    localStorage.setItem("theme", themeName);
    currentTheme = themeName;
}

// Toggle between themes
toggleBtn.addEventListener("click", () => {
    const newTheme = currentTheme === "style" ? "style_second" : "style";
    setTheme(newTheme);
});