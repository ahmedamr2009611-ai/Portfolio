// ================= WOW INIT =================
if (typeof WOW !== "undefined") {
    new WOW().init();
}

// ================= NAVBAR SCROLL EFFECT =================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("shadow", "bg-black");
    } else {
        navbar.classList.remove("shadow", "bg-black");
    }
});

// ================= BACK TO TOP BUTTON =================
const backToTop = document.createElement("button");
backToTop.innerHTML = "↑";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "30px";
backToTop.style.right = "30px";
backToTop.style.display = "none";
backToTop.style.padding = "10px 15px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "8px";
backToTop.style.background = "#3b82f6";
backToTop.style.color = "#fff";
backToTop.style.cursor = "pointer";
backToTop.style.zIndex = "999";

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ================= SMOOTH SCROLL =================
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ================= DARK / LIGHT MODE =================
const toggleBtn = document.createElement("button");
toggleBtn.innerHTML = "🌙";
toggleBtn.id = "themeToggle";

document.body.appendChild(toggleBtn);

toggleBtn.style.position = "fixed";
toggleBtn.style.top = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.border = "none";
toggleBtn.style.padding = "8px 12px";
toggleBtn.style.borderRadius = "8px";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.background = "#1e293b";
toggleBtn.style.color = "#fff";
toggleBtn.style.zIndex = "999";

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggleBtn.innerHTML = "☀️";
        document.body.style.background = "#f8fafc";
        document.body.style.color = "#000";
    } else {
        toggleBtn.innerHTML = "🌙";
        document.body.style.background = "#0f172a";
        document.body.style.color = "#f1f5f9";
    }
});

// ================= CARD HOVER EFFECT =================
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", function () {
        card.style.transform = "translateY(-8px)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", function () {
        card.style.transform = "translateY(0)";
    });
});