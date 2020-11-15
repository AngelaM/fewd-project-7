var chart1 = document.getElementById('traffic-chart').getContext('2d');
var trafficChart = new Chart(chart1, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 2000, 1500, 2000],
            borderWidth: 1,
            lineTension: 0,
            pointBorderWidth: 2,
            pointBackgroundColor: 'white',
            pointBorderColor: '#7477bf',
            pointRadius: 5,
            backgroundColor: 'rgba(226,227,246,0.75)',
            borderColor: '#7477bf'
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: 'rgba(101,101,101,.8)',
            displayColors: false,
            xPadding: 16,
            yPadding: 8,
            bodyFontColor: '#e2e3f6'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 500,
                    suggestedMax: 2500,
                    fontColor: '#b2b2b2'
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: '#b2b2b2'
                }
            }]
        }
    }
});


var chart2 = document.getElementById('daily-traffic-chart').getContext('2d');
var dailyTrafficChart = new Chart(chart2, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [50, 75, 150, 100, 200, 175, 75],
            backgroundColor: '#7477bf',
            hoverBackgroundColor: 'rgba(64, 76, 114, .85)',
            barPercentage: .6,
            borderColor: 'rgba(220, 220, 220, .9)',
            borderWidth: {
                top: 2,
                right: 3.5,
            },
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: 'rgba(226, 227, 246, .95)',
            displayColors: false,
            xPadding: 16,
            yPadding: 8,
            bodyFontColor: '#7477bf',
            titleFontColor: '#656565'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 50,
                    suggestedMax: 250,
                    fontColor: '#b2b2b2'
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: '#b2b2b2'
                }
            }]
        }
    }
});

var chart3 = document.getElementById('mobile-users-chart').getContext('2d');
var mobileUsersChart = new Chart(chart3, {
    type: 'doughnut',
    data: {
        labels: ['Desktop', 'Tablets', 'Phones'],
        datasets: [{
            data: [70, 16, 14],
            backgroundColor: ['#7477bf', '#81c98f', '#74b1b2'],
            hoverBackgroundColor: ['rgba(116, 119, 191, .4)', 'rgba(129, 201, 143, .4)', 'rgba(116, 177, 178, .4)'],
            borderWidth: 2,
            borderColor: 'rgba(220, 220, 220, .9)'
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            labels: {
                boxWidth: 20,
                fontSize: 20,
                fontColor: '#b2b2b2',
                padding: 20
            },
            position: 'right',
            reverse: true
        },
        cutoutPercentage: 55,
        rotation: 6.25,
        tooltips: {
            backgroundColor: 'rgba(101,101,101,.8)',
            displayColors: false,
            xPadding: 16,
            yPadding: 8,
            bodyFontColor: 'white'
        },
    }
});