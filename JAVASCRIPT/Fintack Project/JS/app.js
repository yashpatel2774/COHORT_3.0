/* ==========================================
        APP.JS
        Main Application Controller
========================================== */

document.addEventListener("DOMContentLoaded", initApp);

/* ==========================================
        INIT APPLICATION
========================================== */

function initApp() {

    console.log("🚀 FinTrack Pro Started");

    initializeApplication();

}

/* ==========================================
        INITIALIZE
========================================== */

function initializeApplication() {

    checkProfile();

    loadSavedSettings();

    refreshDashboard();

    renderChart();

    updateWelcome();

    attachGlobalEvents();

}

/* ==========================================
        PROFILE CHECK
========================================== */

function checkProfile() {

    const profile = StorageManager.getProfile();

    if (!profile.name) {

        profile.name = "User";

        StorageManager.saveProfile(profile);

    }

}

/* ==========================================
        LOAD SETTINGS
========================================== */

function loadSavedSettings() {

    const profile = StorageManager.getProfile();

    nameInput.value = profile.name;

    currencySelect.value = profile.currency;

    welcomeText.textContent =
        `Welcome, ${profile.name}`;

    darkToggle.checked =
        StorageManager.getDarkMode();

    applyDarkMode(

        darkToggle.checked

    );

}

/* ==========================================
        UPDATE WELCOME
========================================== */

function updateWelcome() {

    const profile = StorageManager.getProfile();

    welcomeText.innerHTML =

        `Welcome, <b>${profile.name}</b>`;

}

/* ==========================================
        GLOBAL EVENTS
========================================== */

function attachGlobalEvents() {

    window.addEventListener("storage", () => {

        refreshDashboard();

        renderChart();

    });

}

/* ==========================================
        REFRESH
========================================== */

function refreshApplication() {

    refreshDashboard();

    renderChart();

    updateWelcome();

}

/* ==========================================
        LOADER
========================================== */

function showLoader() {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.display = "flex";

    }

}

function hideLoader() {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.display = "none";

    }

}

/* ==========================================
        TOAST
========================================== */

function showToast(message, type = "success") {

    const toast = document.createElement("div");

    toast.className = "toast";

    if (type === "error") {

        toast.classList.add("error");

    }

    toast.innerHTML = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 2500);

}

/* ==========================================
        SHORTCUTS
========================================== */

document.addEventListener("keydown", (e) => {

    // Ctrl + N
    if (e.ctrlKey && e.key === "n") {

        e.preventDefault();

        ModalManager.openModal();

    }

    // Ctrl + D
    if (e.ctrlKey && e.key === "d") {

        e.preventDefault();

        showDashboard();

    }

    // Ctrl + S
    if (e.ctrlKey && e.key === "s") {

        e.preventDefault();

        showSettings();

    }

});

/* ==========================================
        PAGE VISIBILITY
========================================== */

document.addEventListener(

    "visibilitychange",

    () => {

        if (!document.hidden) {

            refreshApplication();

        }

    }

);

/* ==========================================
        AUTO SAVE
========================================== */

setInterval(() => {

    refreshDashboard();

}, 30000);

/* ==========================================
        WINDOW LOAD
========================================== */

window.onload = () => {

    initializeApplication();

};

/* ==========================================
        WINDOW RESIZE
========================================== */

window.onresize = () => {

    if (typeof renderChart === "function") {

        renderChart();

    }

};

/* ==========================================
        ONLINE
========================================== */

window.addEventListener("online", () => {

    showToast("Back Online");

});

/* ==========================================
        OFFLINE
========================================== */

window.addEventListener("offline", () => {

    showToast("Offline Mode", "error");

});

/* ==========================================
        FINAL EXPORT
========================================== */

const App = {

    initApp,

    refreshApplication,

    showLoader,

    hideLoader,

    showToast

};

console.log("✅ FinTrack Pro Loaded Successfully");