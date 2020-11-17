/********
 * Traffic section line charts
 ********/

let labelsHourly = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
let dataHourly = [2000, 1500, 750, 250, 250, 750, 1000, 1000, 1750, 2000, 1500];

let labelsDaily = ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
let dataDaily = [1500, 2000, 1500, 1250, 1750, 1000, 1250, 1500, 1750, 2000, 1750];

let labelsWeekly = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'];
let dataWeekly = [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 2000, 1500, 2000];
  
let labelsMonthly = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let dataMonthly = [1500, 2000, 1750, 1750, 1750, 1500, 1000, 1250, 1700, 2000, 1750];

//create a line chart with the traffic data sets
function createChart(chartName, labelsArray, dataArray, element) {
    var chartName = new Chart(element, {
        type: 'line',
        data: {
            labels: labelsArray,
            datasets: [{
                data: dataArray,
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
            animation: {
                duration: 500
            },
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
}

//create default chart and place in html
let trafficChartHourly, trafficChartDaily, trafficChartWeekly, trafficChartMonthly;
var chart1 = document.getElementById('traffic-chart').getContext('2d');
createChart(trafficChartWeekly, labelsWeekly, dataWeekly, chart1);

//change menu and chart displayed on click
let trafficMenu = document.querySelector('.traffic-menu');
trafficMenu.addEventListener('click', (e) => {
    //update active menu item
    let li = e.target;
    let liGroup = e.target.parentElement.querySelectorAll('li');
    for (let i=0; i<4; i++) {
        liGroup[i].removeAttribute('class');
    }
    li.setAttribute('class', 'active');
    //display chart with correlating labels and data;
    let chartType = li.textContent;
    if (chartType === 'Hourly') {
        createChart(trafficChartHourly, labelsHourly, dataHourly, chart1);
    } else if (chartType === 'Daily') {
        createChart(trafficChartDaily, labelsDaily, dataDaily, chart1);
    } else if (chartType === 'Monthly') {
        createChart(trafficChartMonthly, labelsMonthly, dataMonthly, chart1);
    }else {
        createChart(trafficChartWeekly, labelsWeekly, dataWeekly, chart1); //default display is weekly
    }
});

/********
 * Daily Traffic section bar chart
 ********/

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
        animation: {
            duration: 500
        },
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

/********
 * Mobile Users section doughnut charts
 ********/

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
        animation: {
            duration: 500
        },
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