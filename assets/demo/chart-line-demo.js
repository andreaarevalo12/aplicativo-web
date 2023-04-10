

var ctx = document.getElementById('line-chart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'AVEO',
            data:[29000000,32000000,24900000,25000000,20500000,27000000,24500000,26000000,26000000,24900000,19500000,21000000,21900000,11111111],
            borderColor: '#2c3e50',
            fill: false,
        }, {
            label: 'SPARK GT',
            data:[37300000,29900000,38000000,39900000,34000000,35000000,34000000,36500000,29800000,31000000,27000000,44000000,33800000,27000000,28900000,34000000,31500000,38000000,40500000,38800000,33900000,34500000,31400000,36000000,35500000,41500000,33500000,38000000,36300000,36000000 
],
            borderColor: '#3498db',
            fill: false,
        }]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Balance de precios entre los Modelos Aveo o Spark GT ',
            fontSize: 24,
            fontColor: '#2c3e50',
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
});