/* ==========================================
        CHART.JS
========================================== */

let cashFlowChart = null;

/* ==========================================
        GET CHART DATA
========================================== */

function getChartData() {

    const transactions = StorageManager.getTransactions();

    const labels = [];
    const income = [];
    const expense = [];

    transactions.forEach(item => {

        labels.push(formatDate(item.date));

        if (item.type === "income") {

            income.push(item.amount);
            expense.push(0);

        } else {

            income.push(0);
            expense.push(item.amount);

        }

    });

    return {
        labels,
        income,
        expense
    };

}

/* ==========================================
        FORMAT DATE
========================================== */

function formatDate(date) {

    const options = {
        day: "2-digit",
        month: "short"
    };

    return new Date(date).toLocaleDateString(
        "en-IN",
        options
    );

}

/* ==========================================
        DESTROY OLD CHART
========================================== */

function destroyChart() {

    if (cashFlowChart) {

        cashFlowChart.destroy();

        cashFlowChart = null;

    }

}

/* ==========================================
        CREATE CHART
========================================== */

function renderChart() {

    destroyChart();

    const ctx =
        document
        .getElementById("cashChart")
        .getContext("2d");

    const chartData = getChartData();

    cashFlowChart = new Chart(ctx, {

        type: "bar",

        data: {

            labels: chartData.labels,

            datasets: [

                {

                    label: "Income",

                    data: chartData.income,

                    backgroundColor:
                        "rgba(34,197,94,.85)",

                    borderRadius: 8,

                    maxBarThickness: 30

                },

                {

                    label: "Expense",

                    data: chartData.expense,

                    backgroundColor:
                        "rgba(239,68,68,.85)",

                    borderRadius: 8,

                    maxBarThickness: 30

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    labels: {

                        color: "#ffffff",

                        font: {

                            size: 14,

                            family: "Inter"

                        }

                    }

                },

                tooltip: {

                    backgroundColor: "#1e293b",

                    titleColor: "#fff",

                    bodyColor: "#fff",

                    borderColor: "#334155",

                    borderWidth: 1

                }

            },

            scales: {

                x: {

                    ticks: {

                        color: "#94a3b8"

                    },

                    grid: {

                        display: false

                    }

                },

                y: {

                    beginAtZero: true,

                    ticks: {

                        color: "#94a3b8",

                        callback: function(value) {

                            return StorageManager
                                .formatCurrency(value);

                        }

                    },

                    grid: {

                        color: "rgba(148,163,184,.15)"

                    }

                }

            },

            animation: {

                duration: 1200,

                easing: "easeOutQuart"

            }

        }

    });

}

/* ==========================================
        REFRESH
========================================== */

function refreshChart() {

    renderChart();

}

/* ==========================================
        RESIZE
========================================== */

window.addEventListener("resize", () => {

    if (cashFlowChart) {

        cashFlowChart.resize();

    }

});

/* ==========================================
        LOAD
========================================== */

window.addEventListener("load", () => {

    renderChart();

});

/* ==========================================
        EXPORT
========================================== */

const ChartManager = {

    renderChart,

    refreshChart,

    destroyChart

};