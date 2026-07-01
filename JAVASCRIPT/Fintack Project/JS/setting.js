/* ==========================================
        SETTINGS.JS
========================================== */

const dashboardBtn = document.getElementById("dashboardBtn");
const settingsBtn = document.getElementById("settingsBtn");

const dashboardPage = document.getElementById("dashboardPage");
const settingsPage = document.getElementById("settingsPage");

const nameInput = document.getElementById("name");
const currencySelect = document.getElementById("currency");

const saveProfileBtn = document.getElementById("saveProfile");

const darkToggle = document.getElementById("darkToggle");

const resetBtn = document.getElementById("resetBtn");

const logoutBtn = document.getElementById("logoutBtn");

const welcomeText = document.getElementById("welcomeText");

/* ==========================================
        LOAD PROFILE
========================================== */

function loadProfile() {

    const profile = StorageManager.getProfile();

    nameInput.value = profile.name;

    currencySelect.value = profile.currency;

    welcomeText.textContent = `Welcome, ${profile.name}`;

}

/* ==========================================
        SAVE PROFILE
========================================== */

function saveProfileData() {

    const profile = {

        name: nameInput.value.trim(),

        currency: currencySelect.value

    };

    if (profile.name === "") {

        alert("Please enter your name");

        nameInput.focus();

        return;

    }

    StorageManager.saveProfile(profile);

    welcomeText.textContent = `Welcome, ${profile.name}`;

    refreshDashboard();

    alert("Profile Updated Successfully");

}

/* ==========================================
        PAGE NAVIGATION
========================================== */

function showDashboard() {

    dashboardPage.classList.remove("hidden");

    settingsPage.classList.add("hidden");

    dashboardBtn.classList.add("active");

    settingsBtn.classList.remove("active");

}

function showSettings() {

    settingsPage.classList.remove("hidden");

    dashboardPage.classList.add("hidden");

    settingsBtn.classList.add("active");

    dashboardBtn.classList.remove("active");

}

/* ==========================================
        DARK MODE
========================================== */

function applyDarkMode(enable) {

    if (enable) {

        document.body.classList.add("dark");

    } else {

        document.body.classList.remove("dark");

    }

    StorageManager.saveDarkMode(enable);

}

function loadDarkMode() {

    const value = StorageManager.getDarkMode();

    darkToggle.checked = value;

    applyDarkMode(value);

}

/* ==========================================
        RESET APP
========================================== */

function resetData() {

    const confirmReset = confirm(
        "This will delete all transactions.\nContinue?"
    );

    if (!confirmReset) return;

    StorageManager.resetApplication();

    location.reload();

}

/* ==========================================
        LOGOUT
========================================== */

function logoutUser() {

    StorageManager.logout();

}

/* ==========================================
        EVENTS
========================================== */

dashboardBtn.addEventListener(

    "click",

    showDashboard

);

settingsBtn.addEventListener(

    "click",

    showSettings

);

saveProfileBtn.addEventListener(

    "click",

    saveProfileData

);

currencySelect.addEventListener(

    "change",

    ()=>{

        refreshDashboard();

    }

);

darkToggle.addEventListener(

    "change",

    ()=>{

        applyDarkMode(

            darkToggle.checked

        );

    }

);

resetBtn.addEventListener(

    "click",

    resetData

);

logoutBtn.addEventListener(

    "click",

    logoutUser

);

/* ==========================================
        LOAD
========================================== */

window.addEventListener(

    "load",

    ()=>{

        loadProfile();

        loadDarkMode();

    }

);

/* ==========================================
        EXPORT
========================================== */

const SettingsManager = {

    loadProfile,

    saveProfileData,

    showDashboard,

    showSettings,

    applyDarkMode,

    loadDarkMode,

    resetData

};