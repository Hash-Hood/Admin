

// SIDE NAVIGATION
const navToggle = document.getElementById("navToggle");
const sideNav = document.getElementById("sideNav");

navToggle.addEventListener("click", (event) => {
    sideNav.classList.toggle("active");
    document.body.classList.toggle("nav-open");
    event.stopPropagation();

    adjustChatbotPosition();
});

document.addEventListener("click", (event) => {
    if (document.body.classList.contains("nav-open") && !sideNav.contains(event.target) && !navToggle.contains(event.target)) {
        sideNav.classList.remove("active");
        document.body.classList.remove("nav-open");
    }
});