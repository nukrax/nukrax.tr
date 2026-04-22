// charts.js - Chart.js integration for Win Rate Evolution and Equity Curve visualization

// Importing the Chart.js library
import Chart from 'chart.js/auto';

// Function to create and update the Win Rate Evolution chart
function createWinRateChart(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    const winRateChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Win Rate',
                data: data.winRates,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
            }],
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    enabled: true,
                },
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time',
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: 'Win Rate (%)',
                    },
                    beginAtZero: true,
                },
            },
        },
    });
    return winRateChart;
}

// Function to create and update the Equity Curve chart
function createEquityCurveChart(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    const equityCurveChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Equity Curve',
                data: data.equityCurve,
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                tension: 0.4,
            }],
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    enabled: true,
                },
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time',
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: 'Equity',
                    },
                    beginAtZero: true,
                },
            },
        },
    });
    return equityCurveChart;
}

// Real-time update function (you can implement the logic to fetch new data)
function updateCharts(winRateChart, equityCurveChart, newData) {
    // Update Win Rate Chart
    winRateChart.data.labels.push(newData.label);
    winRateChart.data.datasets[0].data.push(newData.winRate);
    winRateChart.update();

    // Update Equity Curve Chart
    equityCurveChart.data.labels.push(newData.label);
    equityCurveChart.data.datasets[0].data.push(newData.equity);
    equityCurveChart.update();
}

export { createWinRateChart, createEquityCurveChart, updateCharts };