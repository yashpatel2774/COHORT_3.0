/* ==========================================
        MODAL.JS
========================================== */

const modal = document.getElementById("transactionModal");

const openModalBtn = document.getElementById("openModal");

const closeModalBtn = document.getElementById("closeModal");

const cancelBtn = document.getElementById("cancelTransaction");

const saveBtn = document.getElementById("saveTransaction");

/* ==========================================
        FORM FIELDS
========================================== */

const typeInput = document.getElementById("type");

const descriptionInput = document.getElementById("description");

const amountInput = document.getElementById("amount");

const dateInput = document.getElementById("date");

const categoryInput = document.getElementById("category");

/* ==========================================
        EDIT MODE
========================================== */

let editMode = false;

let editID = null;

/* ==========================================
        OPEN MODAL
========================================== */

function openModal(){

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

    descriptionInput.focus();

}

/* ==========================================
        CLOSE MODAL
========================================== */

function closeModal(){

    modal.classList.remove("show");

    document.body.style.overflow = "auto";

    clearForm();

}

/* ==========================================
        CLEAR FORM
========================================== */

function clearForm(){

    editMode = false;

    editID = null;

    typeInput.value = "income";

    descriptionInput.value = "";

    amountInput.value = "";

    dateInput.value = "";

    categoryInput.value = "Salary";

}

/* ==========================================
        VALIDATION
========================================== */

function validateForm(){

    if(descriptionInput.value.trim()===""){

        alert("Please enter description");

        descriptionInput.focus();

        return false;

    }

    if(amountInput.value==="" || Number(amountInput.value)<=0){

        alert("Please enter valid amount");

        amountInput.focus();

        return false;

    }

    if(dateInput.value===""){

        alert("Please select date");

        return false;

    }

    return true;

}

/* ==========================================
        SAVE
========================================== */

function saveTransactionHandler(){

    if(!validateForm()){

        return;

    }

    const transaction = {

        id : editMode ? editID : StorageManager.generateID(),

        type : typeInput.value,

        description : descriptionInput.value.trim(),

        amount : Number(amountInput.value),

        date : dateInput.value,

        category : categoryInput.value

    };

    if(editMode){

        StorageManager.updateTransaction(transaction);

    }else{

        StorageManager.addTransaction(transaction);

    }

    closeModal();

    if(typeof refreshDashboard==="function"){

        refreshDashboard();

    }

}

/* ==========================================
        LOAD EDIT DATA
========================================== */

function loadTransaction(transaction){

    editMode = true;

    editID = transaction.id;

    typeInput.value = transaction.type;

    descriptionInput.value = transaction.description;

    amountInput.value = transaction.amount;

    dateInput.value = transaction.date;

    categoryInput.value = transaction.category;

    openModal();

}

/* ==========================================
        EVENTS
========================================== */

openModalBtn.addEventListener("click",openModal);

closeModalBtn.addEventListener("click",closeModal);

cancelBtn.addEventListener("click",closeModal);

saveBtn.addEventListener("click",saveTransactionHandler);

/* ==========================================
        CLICK OUTSIDE
========================================== */

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        closeModal();

    }

});

/* ==========================================
        ESC KEY
========================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape" && modal.classList.contains("show")){

        closeModal();

    }

});

/* ==========================================
        ENTER KEY
========================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter" && modal.classList.contains("show")){

        saveTransactionHandler();

    }

});

/* ==========================================
        AUTO TODAY DATE
========================================== */

window.addEventListener("load",()=>{

    const today = new Date();

    dateInput.value = today.toISOString().split("T")[0];

});

/* ==========================================
        EXPORT
========================================== */

const ModalManager = {

    openModal,

    closeModal,

    loadTransaction,

    clearForm

};