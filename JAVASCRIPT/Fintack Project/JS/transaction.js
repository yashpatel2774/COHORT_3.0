/* ==========================================
        TRANSACTION.JS
========================================== */

const transactionBody = document.getElementById("transactionBody");

const searchInput = document.getElementById("search");

const filterSelect = document.getElementById("filter");

const balanceCard = document.getElementById("balance");

const incomeCard = document.getElementById("income");

const expenseCard = document.getElementById("expense");

const totalTransactionCard = document.getElementById("totalTransaction");

let currentFilter = "all";

let currentSearch = "";

/* ==========================================
        GET FILTERED DATA
========================================== */

function getFilteredTransactions() {

    let transactions = StorageManager.getTransactions();

    if (currentFilter !== "all") {

        transactions = transactions.filter(item => item.type === currentFilter);

    }

    if (currentSearch !== "") {

        const keyword = currentSearch.toLowerCase();

        transactions = transactions.filter(item =>

            item.description.toLowerCase().includes(keyword) ||

            item.category.toLowerCase().includes(keyword)

        );

    }

    return transactions;

}

/* ==========================================
        CALCULATE TOTALS
========================================== */

function calculateTotals() {

    const transactions = StorageManager.getTransactions();

    let income = 0;

    let expense = 0;

    transactions.forEach(item => {

        if (item.type === "income") {

            income += Number(item.amount);

        } else {

            expense += Number(item.amount);

        }

    });

    return {

        income,

        expense,

        balance: income - expense,

        total: transactions.length

    };

}

/* ==========================================
        UPDATE CARDS
========================================== */

function updateCards() {

    const totals = calculateTotals();

    balanceCard.textContent =
        StorageManager.formatCurrency(totals.balance);

    incomeCard.textContent =
        StorageManager.formatCurrency(totals.income);

    expenseCard.textContent =
        StorageManager.formatCurrency(totals.expense);

    totalTransactionCard.textContent =
        totals.total;

}

/* ==========================================
        CREATE ROW
========================================== */

function createRow(transaction) {

    const tr = document.createElement("tr");

    tr.innerHTML = `

        <td>${transaction.date}</td>

        <td>${transaction.description}</td>

        <td>

            <span class="category">

                ${transaction.category}

            </span>

        </td>

        <td class="${transaction.type === "income"
            ? "incomeAmount"
            : "expenseAmount"}">

            ${transaction.type === "income" ? "+" : "-"}

            ${StorageManager.formatCurrency(transaction.amount)}

        </td>

        <td>

            <button
                class="actionBtn editBtn"
                onclick="editTransaction(${transaction.id})">

                <i class="fa-solid fa-pen"></i>

            </button>

            <button
                class="actionBtn deleteBtn"
                onclick="removeTransaction(${transaction.id})">

                <i class="fa-solid fa-trash"></i>

            </button>

        </td>

    `;

    return tr;

}

/* ==========================================
        RENDER TABLE
========================================== */

function renderTransactions() {

    transactionBody.innerHTML = "";

    const transactions = getFilteredTransactions();

    if (transactions.length === 0) {

        transactionBody.innerHTML = `

            <tr>

                <td colspan="5">

                    <div class="noData">

                        <i class="fa-solid fa-wallet"></i>

                        <h3>No Transactions Found</h3>

                        <p>

                            Add your first transaction.

                        </p>

                    </div>

                </td>

            </tr>

        `;

        return;

    }

    transactions.forEach(item => {

        transactionBody.appendChild(

            createRow(item)

        );

    });

}