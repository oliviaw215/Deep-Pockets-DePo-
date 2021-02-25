var colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];

/* large line chart */
var chLine = document.getElementById("myLineChart");
var chartData = {
    labels: ["2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029"],
    datasets: [{
            data: [10000, 12700, 13700, 15000, 14500, 13900, 14600, 14000, 15000],
            backgroundColor: 'transparent',
            borderColor: colors[0],
            borderWidth: 4,
            pointBackgroundColor: colors[0]
        }
    ]
};
if (chLine) {
    new Chart(chLine, {
        type: 'line',
        data: chartData,
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            },
            legend: {
                display: false
            },
            responsive: true
        }
    });
}
