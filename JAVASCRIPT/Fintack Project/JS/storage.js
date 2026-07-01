/* ==========================================
        STORAGE.JS
        LocalStorage Manager
========================================== */

const STORAGE_KEYS = {
    transactions: "fintrack_transactions",
    profile: "fintrack_profile",
    settings: "fintrack_settings",
    darkMode: "fintrack_darkmode"
};

/* ==========================================
        DEFAULT PROFILE
========================================== */

const defaultProfile = {
    name: "Yash",
    currency: "₹"
};

const defaultSettings = {
    darkMode: true
};

/* ==========================================
        GET TRANSACTIONS
========================================== */

function getTransactions() {

    const data = localStorage.getItem(STORAGE_KEYS.transactions);

    if (!data) {
        return [];
    }

    try {
        return JSON.parse(data);
    }
    catch (err) {
        console.error("Transaction Parse Error", err);
        return [];
    }

}

/* ==========================================
        SAVE TRANSACTIONS
========================================== */

function saveTransactions(list) {

    localStorage.setItem(
        STORAGE_KEYS.transactions,
        JSON.stringify(list)
    );

}

/* ==========================================
        ADD TRANSACTION
========================================== */

function addTransaction(transaction) {

    const transactions = getTransactions();

    transactions.unshift(transaction);

    saveTransactions(transactions);

}

/* ==========================================
        DELETE TRANSACTION
========================================== */

function deleteTransaction(id) {

    const transactions = getTransactions();

    const updated = transactions.filter(item => item.id !== id);

    saveTransactions(updated);

}

/* ==========================================
        UPDATE TRANSACTION
========================================== */

function updateTransaction(updatedTransaction) {

    const transactions = getTransactions();

    const updatedList = transactions.map(item => {

        if (item.id === updatedTransaction.id) {
            return updatedTransaction;
        }

        return item;

    });

    saveTransactions(updatedList);

}

/* ==========================================
        CLEAR TRANSACTIONS
========================================== */

function clearTransactions() {

    localStorage.removeItem(STORAGE_KEYS.transactions);

}

/* ==========================================
        PROFILE
========================================== */

function getProfile() {

    const profile = localStorage.getItem(STORAGE_KEYS.profile);

    if (!profile) {

        saveProfile(defaultProfile);

        return defaultProfile;

    }

    return JSON.parse(profile);

}

function saveProfile(profile) {

    localStorage.setItem(
        STORAGE_KEYS.profile,
        JSON.stringify(profile)
    );

}

/* ==========================================
        SETTINGS
========================================== */

function getSettings() {

    const settings = localStorage.getItem(STORAGE_KEYS.settings);

    if (!settings) {

        saveSettings(defaultSettings);

        return defaultSettings;

    }

    return JSON.parse(settings);

}

function saveSettings(settings) {

    localStorage.setItem(
        STORAGE_KEYS.settings,
        JSON.stringify(settings)
    );

}

/* ==========================================
        DARK MODE
========================================== */

function saveDarkMode(value) {

    localStorage.setItem(
        STORAGE_KEYS.darkMode,
        JSON.stringify(value)
    );

}

function getDarkMode() {

    const value = localStorage.getItem(STORAGE_KEYS.darkMode);

    if (value === null) {

        saveDarkMode(true);

        return true;

    }

    return JSON.parse(value);

}

/* ==========================================
        CURRENCY
========================================== */

function getCurrency() {

    return getProfile().currency;

}

function setCurrency(symbol) {

    const profile = getProfile();

    profile.currency = symbol;

    saveProfile(profile);

}

/* ==========================================
        FORMAT CURRENCY
========================================== */

function formatCurrency(amount) {

    const symbol = getCurrency();

    return `${symbol}${Number(amount).toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;

}

/* ==========================================
        GENERATE ID
========================================== */

function generateID() {

    return Date.now() + Math.floor(Math.random() * 99999);

}

/* ==========================================
        RESET APPLICATION
========================================== */

function resetApplication() {

    localStorage.removeItem(STORAGE_KEYS.transactions);
    localStorage.removeItem(STORAGE_KEYS.profile);
    localStorage.removeItem(STORAGE_KEYS.settings);
    localStorage.removeItem(STORAGE_KEYS.darkMode);

}

/* ==========================================
        SESSION
========================================== */

function login(name = "User") {

    sessionStorage.setItem("loggedIn", true);
    sessionStorage.setItem("username", name);

}

function logout() {

    sessionStorage.removeItem("loggedIn");
    sessionStorage.removeItem("username");

    location.reload();

}

function isLoggedIn() {

    return sessionStorage.getItem("loggedIn") === "true";

}

function getLoggedUser() {

    return sessionStorage.getItem("username") || "User";

}

/* ==========================================
        EXPORT HELPERS
========================================== */

const StorageManager = {

    getTransactions,
    saveTransactions,
    addTransaction,
    deleteTransaction,
    updateTransaction,

    getProfile,
    saveProfile,

    getSettings,
    saveSettings,

    getDarkMode,
    saveDarkMode,

    getCurrency,
    setCurrency,

    formatCurrency,

    generateID,

    clearTransactions,
    resetApplication,

    login,
    logout,
    isLoggedIn,
    getLoggedUser

};